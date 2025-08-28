import { blockConfigs } from "@/lib/uiconfigs";
import { BlockDataType } from "@/types";
import { arrayMove } from "@dnd-kit/sortable";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface emailtemplateState {
  dropableData: BlockDataType[];
  activeBlock: BlockDataType | null;
  currentElementType?: string;
  currentElementKey?: string;
  prevCanvasState: Array<BlockDataType[]>;
  nextCanvaState: Array<BlockDataType[]>;
}

const initialState: emailtemplateState = {
  dropableData: [],
  activeBlock: null,
  currentElementType: "",
  currentElementKey: "",
  prevCanvasState: [],
  nextCanvaState: [],
};

export const emailtemplateSlice = createSlice({
  name: "emailtemplate",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<BlockDataType>) => {
      const data: BlockDataType = action.payload;
      if (data.name in blockConfigs) {
        data.configs = blockConfigs[data.name];
      }
      //   update state for redo action.
      if (state.dropableData.length !== 0) {
        state.prevCanvasState.push(state.dropableData);
      }
      state.dropableData.push(data);
    },
    updateSortedBlocks: (state, action: PayloadAction<BlockDataType[]>) => {
      const data: BlockDataType[] = action.payload;
      //   update state for redo action.
      state.prevCanvasState.push(state.dropableData);
      state.dropableData = data;
    },
    updateInlineSortedBlocks: (
      state,
      action: PayloadAction<{
        parent_id: string;
        over_id: string;
        active_id: string;
      }>
    ) => {
      const payload = action.payload;
      function swapNodes(data?: BlockDataType[]): BlockDataType[] | undefined {
        if (!data) return;
        return data.map((item) => {
          if (item.id === payload.parent_id && item.blocks) {
            const oldIndex = item.blocks.findIndex(
              (val) => val.id === payload.active_id
            );
            const newIndex = item.blocks.findIndex(
              (val) => val.id === payload.over_id
            );
            item.blocks = arrayMove(item.blocks, oldIndex, newIndex);
            return item;
          }
          return {
            ...item,
            blocks: swapNodes(item.blocks),
          };
        });
      }
      //   update state for redo action.
      state.prevCanvasState.push(state.dropableData);
      swapNodes(state.dropableData);
    },
    addInlineBlock: (
      state,
      action: PayloadAction<{ parent_id: string; data: BlockDataType }>
    ) => {
      const data = action.payload;
      const recisiveUpdate = (blocks?: BlockDataType[]) => {
        if (!blocks) return;
        for (const item of blocks) {
          if (item.id === data.parent_id) {
            const ph = { ...data.data, configs: blockConfigs[data.data.name] };
            if (item.blocks) {
              item.blocks.push(ph);
            } else {
              item["blocks"] = [ph];
            }
            return true;
          } else {
            recisiveUpdate(item.blocks);
          }
        }
      };
      //   update state for redo action.
      state.prevCanvasState.push(state.dropableData);
      recisiveUpdate(state.dropableData);
    },

    removeBlock: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const recusiveRemove = (data?: BlockDataType[]): BlockDataType[] => {
        if (!data) return [];
        return data
          .map((item) => {
            return { ...item, blocks: recusiveRemove(item.blocks) };
          })
          .filter((block) => block.id !== id);
      };
      //   update state for redo action.
      state.prevCanvasState.push(state.dropableData);
      state.dropableData = recusiveRemove(state.dropableData);
      if (state.dropableData.length === 0) {
        state.activeBlock = null;
        state.currentElementKey = "";
        state.currentElementType = "";
      }
    },

    setActiveBlock: (state, action: PayloadAction<string>) => {
      const recusiveSet = (
        data?: BlockDataType[]
      ): BlockDataType | undefined => {
        if (!data) return undefined;
        for (const item of data) {
          if (item.id === action.payload) {
            return item;
          }
          const resp = recusiveSet(item.blocks);
          if (resp) {
            return resp;
          }
        }
      };
      const others = recusiveSet(state.dropableData);

      state.activeBlock = others || null;
    },
    setcurrentElementType: (state, action: PayloadAction<string>) => {
      state.currentElementType = action.payload;
    },
    setcurrentElementKey: (state, action: PayloadAction<string>) => {
      state.currentElementKey = action.payload;
    },

    updateStyle: (
      state,
      action: PayloadAction<{
        key: string;
        styleKey: string;
        styleValue: string;
        block_id: string;
      }>
    ) => {
      const payload = action.payload;
      const recusiveUpdate = (data?: BlockDataType[]) => {
        if (!data) return;
        for (const item of data) {
          if (item.id === payload.block_id) {
            const temp = item.configs?.styles;
            if (temp) {
              // update width of the column parent component -unique to column
              const parent = item.configs?.styles?.parent;

              if (
                parent &&
                payload.styleKey === "width" &&
                payload.key !== "section"
              ) {
                parent["maxWidth"] = payload.styleValue;

                return;
              }
              // other styles updating
              temp[payload.key] = {
                ...temp[payload.key],
                [payload.styleKey]: payload.styleValue,
              };

              return;
            }
          }
          if (item.blocks) {
            recusiveUpdate(item.blocks);
          }
        }
      };
      //   update state for redo action.
      state.prevCanvasState.push(state.dropableData);

      recusiveUpdate(state.dropableData);
    },

    updateContent: (
      state,
      action: PayloadAction<{
        content: string;
        block_id: string;
        type: "text" | "link";
      }>
    ) => {
      const payload = action.payload;
      const recusiveUpdate = (data?: BlockDataType[]) => {
        if (!data || data.length === 0) return;
        for (const item of data) {
          if (item.id === payload.block_id) {
            if (item.configs && item.configs.content) {
              const type = payload.type;
              item.configs.content[type] = payload.content;

              return;
            }
          }
          if (item.blocks) {
            recusiveUpdate(item.blocks);
          }
        }
      };
      //   update state for redo action.
      state.prevCanvasState.push(state.dropableData);
      recusiveUpdate(state.dropableData);
    },

    undoAction: (state) => {
      if (state.prevCanvasState.length === 0) return;
      let temp = state.prevCanvasState.pop();
      if (temp) {
        // store data for redo
        state.nextCanvaState.push(state.dropableData);
        state.dropableData = temp;
      }
    },

    redoAction: (state) => {
      if (state.nextCanvaState.length === 0) return;
      let temp = state.nextCanvaState.pop();
      if (temp) {
        // store data for redo
        state.prevCanvasState.push(state.dropableData);
        state.dropableData = temp;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBlock,
  removeBlock,
  addInlineBlock,
  updateSortedBlocks,
  updateInlineSortedBlocks,
  setActiveBlock,
  setcurrentElementType,
  setcurrentElementKey,
  updateStyle,
  updateContent,
  redoAction,
  undoAction,
} = emailtemplateSlice.actions;

export default emailtemplateSlice.reducer;
