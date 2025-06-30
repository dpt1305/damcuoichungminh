import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface AppState {
  isShowImagesGallery: boolean;
  galleryStartIndex: number;
}

const initialState: AppState = {
  isShowImagesGallery: false,
  galleryStartIndex: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsShowImagesGallery: (state, action: PayloadAction<boolean>) => {
      state.isShowImagesGallery = action.payload;
    },
    setGalleryStartIndex: (state, action: PayloadAction<number>) => {
      state.galleryStartIndex = action.payload;
    },
  },
});

export const { setIsShowImagesGallery, setGalleryStartIndex } = appSlice.actions;

export const getIsShowImagesGallery = (state: RootState) => state.app.isShowImagesGallery;
export const getGalleryStartIndex = (state: RootState) => state.app.galleryStartIndex;

export default appSlice.reducer;
