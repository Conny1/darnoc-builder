import { BlockDataType, BlockType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface emailtemplateState {
  dropableData: BlockDataType[];
}

const initialState: emailtemplateState = {
  dropableData: [],
};

export const emailtemplateSlice = createSlice({
  name: "emailtemplate",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<BlockDataType>) => {
      let data: BlockDataType = action.payload;
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
          let ph = data.data;
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
} = emailtemplateSlice.actions;

export default emailtemplateSlice.reducer;
