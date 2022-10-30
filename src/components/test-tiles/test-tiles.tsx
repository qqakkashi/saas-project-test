import "../../../node_modules/react-tiles-dnd/esm/index.css";
import { TilesContainer, RenderTileFunction } from "react-tiles-dnd";
import {
  TilesWrapper,
  Wrapper,
  TileContent,
  TileDelete,
  TileConfirm,
  ConfirmButton,
  TileConfirmWrapper,
} from "./test-tiles.styled";
import { Component } from "react";
import { setTiles, setSize } from "../../store/slice";
import { connect } from "react-redux";
import { FcCancel } from "react-icons/fc";
import { IconContext } from "react-icons";

interface displayDetails {
  display: boolean;
  id: any;
}
interface Size {
  width: number;
  height: number;
}

const mapStateToProps = (state: { tilesState: { tiles: any; size: any } }) => ({
  tiles: state.tilesState.tiles,
  size: state.tilesState.size,
});

class TestTiles extends Component<
  { tiles: Array<any>; size: Size; setTiles: any; setSize: any },
  {
    pageTiles: any;
    size: any;
    displayDetails: displayDetails;
    displayModal: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageTiles: [],
      size: {},
      displayDetails: { display: false, id: null },
      displayModal: false,
    };
  }
  componentDidMount(): void {
    console.log(this.props.tiles);
    this.setState({ pageTiles: this.props?.tiles });
    this.setState({ size: this.props?.size });
  }

  deleteTile(id: number) {
    const readyTiles = [...this.state.pageTiles];

    readyTiles.map((tile, index) => {
      return tile.id === id ? readyTiles.splice(index, 1) : null;
    });
    this.props.setTiles(readyTiles);
    this.props.setSize({
      width: this.props.size.width,
      height: this.props.size.height,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<{
      tiles: Array<any>;
      size: Object;
      setTiles: any;
      setSize: any;
    }>
  ): void {
    if (prevProps.tiles !== this.props.tiles) {
      this.setState({ pageTiles: this.props.tiles });
    }
  }

  tileSize = (tile: typeof this.state.pageTiles[0]) => ({
    colSpan: tile.cols,
    rowSpan: tile.rows,
  });

  render() {
    const displayObject = this.state.displayDetails;
    const render: RenderTileFunction<typeof this.state.pageTiles[0]> = ({
      data,
      isDragging,
    }) => (
      <TilesWrapper>
        <TileContent
          isDragging={isDragging}
          onMouseEnter={() => {
            this.setState({
              displayDetails: {
                display: true,
                id: data.id,
              },
            });
          }}
          onMouseLeave={() =>
            this.setState({
              displayDetails: {
                display: false,
                id: data.id,
              },
            })
          }
          value={data.id}
        >
          {!isDragging &&
          displayObject.display &&
          displayObject.id === data.id ? (
            <TileDelete
              onClick={() => {
                this.setState({
                  displayModal: !this.state.displayModal,
                });
              }}
            >
              <FcCancel style={{ width: 25, height: 25 }} />
            </TileDelete>
          ) : null}
          {data.id ? <p>{data.id}</p> : null}
          {data.text ? <p>{data.text}</p> : null}{" "}
          <p>{isDragging ? "DRAGGING" : null}</p>
          {data.img !== "" ? <img src={data.img} alt={data.img}></img> : null}
        </TileContent>
      </TilesWrapper>
    );
    return (
      <Wrapper>
        {this.state.displayModal ? (
          <>
            <TileConfirmWrapper
              onClick={() => {
                this.setState({
                  displayModal: !this.state.displayModal,
                });
              }}
            ></TileConfirmWrapper>
            <TileConfirm>
              Вы действительно хотите удалить?
              <ConfirmButton
                onClick={() => {
                  this.deleteTile(displayObject.id);
                  this.setState({
                    displayModal: !this.state.displayModal,
                  });
                }}
              >
                Да
              </ConfirmButton>
            </TileConfirm>
          </>
        ) : null}

        <TilesContainer
          data={this.state.pageTiles}
          renderTile={render}
          tileSize={this.tileSize}
          forceTileWidth={this.props.size?.width}
          forceTileHeight={this.props.size?.height}
        ></TilesContainer>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, { setTiles, setSize })(TestTiles);
