import { createSlice } from "@reduxjs/toolkit";

export const defaultSlice = createSlice({
  name: "tilesState",
  initialState: {
    tiles: [
      {
        text: "Tile 1",
        cols: 2,
        rows: 1,
        img: "",
      },
      { text: "Tile 2", cols: 3, rows: 1, img: "" },
      { text: "Tile 3", cols: 1, rows: 3, img: "" },
      { text: "Tile 4", cols: 2, rows: 3, img: "" },
      { text: "Tile 5", cols: 2, rows: 1, img: "" },
      { text: "Tile 6", cols: 2, rows: 2, img: "" },
    ],
    size: {
      width: 200,
      height: 125,
    },
  },
  reducers: {
    setTiles(state, action) {
      state.tiles = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
  },
});

export const { setTiles, setSize } = defaultSlice.actions;
export const selectTiles = (state: { tiles: { tiles: any } }) =>
  state.tiles.tiles;
