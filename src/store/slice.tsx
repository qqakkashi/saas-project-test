import { createSlice } from "@reduxjs/toolkit";

export const defaultSlice = createSlice({
  name: "tilesState",
  initialState: {
    tiles: [
      { id: 1, text: "Tile 1", cols: 1, rows: 1, img: "" },
      { id: 2, text: "Tile 2", cols: 1, rows: 2, img: "" },
      { id: 3, text: "Tile 3", cols: 1, rows: 1, img: "" },
      { id: 4, text: "Tile 4", cols: 3, rows: 1, img: "" },
      { id: 5, text: "Tile 5", cols: 1, rows: 3, img: "" },
      { id: 6, text: "Tile 6", cols: 1, rows: 3, img: "" },
      { id: 7, text: "Tile 7", cols: 2, rows: 3, img: "" },
      { id: 8, text: "Tile 8", cols: 1, rows: 1, img: "" },
      { id: 9, text: "Tile 9", cols: 1, rows: 1, img: "" },
      { id: 10, text: "Tile 10", cols: 1, rows: 2, img: "" },
      { id: 11, text: "Tile 11", cols: 6, rows: 1, img: "" },
      { id: 12, text: "Tile 12", cols: 1, rows: 1, img: "" },
    ],
    size: {
      width: 150,
      height: 150,
    },
    modalState: false,
  },
  reducers: {
    setTiles(state, action) {
      state.tiles = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
    setSizeModal(state, action) {
      state.modalState = action.payload;
    },
  },
});

export const { setTiles, setSize, setSizeModal } = defaultSlice.actions;
export const selectTiles = (state: { tiles: { tiles: Array<any> } }) =>
  state.tiles.tiles;
