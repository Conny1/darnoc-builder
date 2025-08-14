import { blockConfigs } from "@/lib/uiconfigs";
import { BlockDataType, BlockType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface emailtemplateState {
  dropableData: BlockDataType[];
  activeBlock: BlockDataType | null;
  currentElementType?: string;
  currentElementKey?: string;
}

const initialState: emailtemplateState = {
  dropableData: [],
  activeBlock: null,
  currentElementType: "",
  currentElementKey: "",
};

export const emailtemplateSlice = createSlice({
  name: "emailtemplate",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<BlockDataType>) => {
      let data: BlockDataType = action.payload;
      if (data.name in blockConfigs) {
        data.configs = blockConfigs[data.name];
      }

      state.dropableData.push(data);
    },
    updateSortedBlocks: (state, action: PayloadAction<BlockDataType[]>) => {
      let data: BlockDataType[] = action.payload;
      state.dropableData = data;
    },
    updateInlineSortedBlocks: (
      state,
      action: PayloadAction<{ data: BlockDataType[]; parent_id: string }>
    ) => {
      let data: BlockDataType[] = action.payload.data;
      let parent_id = action.payload.parent_id;
      state.dropableData.map((item) => {
        if (item.id === parent_id) {
          item.blocks = data;
        }
      });
    },
    addInlineBlock: (
      state,
      action: PayloadAction<{ parent_id: string; data: BlockDataType }>
    ) => {
      let data = action.payload;
      const recisiveUpdate = (blocks?: BlockDataType[]) => {
        if (!blocks) return;
        console.log("recusive running, inline block");
        for (let item of blocks) {
          console.log("running");
          if (item.id === data.parent_id) {
            let ph = { ...data.data, configs: blockConfigs[data.data.name] };
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
      state.dropableData = recusiveRemove(state.dropableData);
    },

    setActiveBlock: (state, action: PayloadAction<string>) => {
      const recusiveSet = (
        data?: BlockDataType[]
      ): BlockDataType | undefined => {
        if (!data) return undefined;
        for (let item of data) {
          if (item.id === action.payload) {
            return item;
          }
          let resp = recusiveSet(item.blocks);
          if (resp) {
            return resp;
          }
        }
      };
      let others = recusiveSet(state.dropableData);

      state.activeBlock = others || null;
    },
    setcurrentElementType: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

      state.currentElementType = action.payload;
    },
    setcurrentElementKey: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

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
      let payload = action.payload;
      const recusiveUpdate = (data?: BlockDataType[]) => {
        if (!data) return;
        for (let item of data) {
          if (item.id === payload.block_id) {
            let temp = item.configs?.styles;
            if (temp) {
              temp[payload.key] = {
                ...temp[payload.key],
                [payload.styleKey]: payload.styleValue,
              };
              console.log("temp changed", {
                [payload.styleKey]: payload.styleValue,
              });
              return;
            }
          }
          if (item.blocks) {
            recusiveUpdate(item.blocks);
          }
        }
      };

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
      let payload = action.payload;
      const recusiveUpdate = (data?: BlockDataType[]) => {
        if (!data || data.length === 0) return;
        for (let item of data) {
          if (item.id === payload.block_id) {
            if (item.configs && item.configs.content) {
              let type = payload.type;
              item.configs.content[type] = payload.content;

              return;
            }
          }
          if (item.blocks) {
            recusiveUpdate(item.blocks);
          }
        }
      };

      recusiveUpdate(state.dropableData);
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
} = emailtemplateSlice.actions;

export default emailtemplateSlice.reducer;
