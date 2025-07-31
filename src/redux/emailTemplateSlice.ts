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
      state.dropableData.forEach((item) => {
        if (item.id === data.parent_id) {
          let ph = { ...data.data, configs: blockConfigs[data.data.name] };
          if (item.blocks) {
            item.blocks.push(ph);
          } else {
            item["blocks"] = [ph];
          }
        }
      });
    },

    removeInlineBlock: (
      state,
      action: PayloadAction<{ parent_id: string; block_id: string }>
    ) => {
      console.log("presed", action.payload);
      let payload = action.payload;
      state.dropableData.map((item) => {
        if (item.id === payload.parent_id) {
          item.blocks = item.blocks?.filter(
            (target) => target.id !== payload.block_id
          );
        }
      });
    },

    removeBlock: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      let others = state.dropableData.filter(
        (item) => item.id !== action.payload
      );
      state.dropableData = others;
    },

    setActiveBlock: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      let others = state.dropableData.find(
        (item) => item.id === action.payload
      );
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
      state.dropableData.map((item) => {
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
          }
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBlock,
  removeBlock,
  addInlineBlock,
  removeInlineBlock,
  updateSortedBlocks,
  updateInlineSortedBlocks,
  setActiveBlock,
  setcurrentElementType,
  setcurrentElementKey,
  updateStyle,
} = emailtemplateSlice.actions;

export default emailtemplateSlice.reducer;
