import "../../../node_modules/react-tiles-dnd/esm/index.css";
import { TilesContainer, RenderTileFunction } from "react-tiles-dnd";
import { TilesWrapper, Wrapper, TileContent } from "./test-tiles.styled";
import { useEffect, useState } from "react";

export const TestTiles = (props: any) => {
  const [tiles, setTiles] = useState<any[]>([]);
  const [size, setSize] = useState<any>({});

  useEffect(() => {
    setTiles(props.tiles);
    setSize(props.size);
  }, [props]);

  console.log(props);

  const render: RenderTileFunction<typeof tiles[0]> = ({
    data,
    isDragging,
  }) => (
    <TilesWrapper>
      <TileContent isDragging={isDragging}>
        {data.text ? <p>{data.text}</p> : null}{" "}
        <p>{isDragging ? "DRAGGING" : null}</p>
        {data.img !== "" ? <img src={data.img}></img> : null}
      </TileContent>
    </TilesWrapper>
  );

  const tileSize = (tile: typeof tiles[0]) => ({
    colSpan: tile.cols,
    rowSpan: tile.rows,
  });

  return (
    <Wrapper>
      <TilesContainer
        data={tiles}
        renderTile={render}
        tileSize={tileSize}
        forceTileWidth={size?.width}
        forceTileHeight={size?.height}
      ></TilesContainer>
    </Wrapper>
  );
};

export default TestTiles;
