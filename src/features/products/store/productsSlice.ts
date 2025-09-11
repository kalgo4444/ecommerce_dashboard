import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  categoryEditingItem: any | null;
  categoryModal: boolean;
}

const initialState: IinitialState = {
  categoryEditingItem: null,
  categoryModal: false,
};

export const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEditingItem: (state, action: PayloadAction<string>) => {
      state.categoryEditingItem = action.payload;
    },
    removeEditingItem: (state) => {
      state.categoryEditingItem = null;
    },
    openCategoryModal: (state) => {
      state.categoryModal = true;
    },
    closeCategoryModal: (state) => {
      state.categoryModal = false;
      state.categoryEditingItem = null;
    },
  },
});

export const {
  setEditingItem,
  removeEditingItem,
  openCategoryModal,
  closeCategoryModal,
} = productsSlice.actions;

export default productsSlice.reducer;
