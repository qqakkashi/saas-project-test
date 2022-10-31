import { Component } from "react";
import { connect } from "react-redux";
import { setSizeModal, setTiles, setSize } from "../../store/slice";
import {
  TileSizeContainer,
  TileSizeBackground,
  TilePresentation,
  TileSizeBox,
  TileSizeRange,
  TileSizeInput,
  TileSizeLabel,
  TileSizeRangeBox,
  TileSizeHeader,
  TileSizeRangeName,
  TilePresentationBox,
  TileAddButton,
} from "./tiles-size-select.styled";

interface Size {
  width: number;
  height: number;
}
const mapStateToProps = (state: {
  tilesState: {
    modalState: boolean;
    size: any;
    tiles: Array<any>;
    setSize: any;
    setTiles: any;
  };
}) => ({
  size: state.tilesState.size,
  modalState: state.tilesState.modalState,
  tiles: state.tilesState.tiles,
});

class TilesSizeSelect extends Component<
  {
    modalState: boolean;
    setSizeModal: any;
    size: Size;
    setSize: any;
    setTiles: any;
    tiles: Array<any>;
  },
  { tileWidth: number; tileHeigth: number; id: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      tileWidth: 1,
      tileHeigth: 1,
      id: Math.max.apply(
        null,
        this.props?.tiles?.map((tile: any) => {
          return tile.id;
        })
      ),
    };
  }
  sidePanelClick(
    id: number,
    text: string,
    cols: number,
    row: number,
    img: string,
    width: number,
    height: number
  ) {
    this.props.setTiles([
      ...this.props.tiles,
      {
        id: id,
        text: text,
        cols: cols,
        rows: row,
        img: img,
      },
    ]);
    this.props.setSize({
      width: width,
      height: height,
    });
    this.setState({
      id: id,
    });
  }
  render() {
    return (
      <>
        <TileSizeContainer
          containerWidth={`${
            Math.round(1000 / this.props.size.width) * this.props.size.width +
            450
          }`}
        >
          <TileSizeHeader>Select size</TileSizeHeader>

          <TileSizeBox boxHeigth={`${5 * this.props.size.height}`}>
            <TileSizeRange>
              <TileSizeRangeBox>
                <TileSizeRangeName>Width</TileSizeRangeName>

                <TileSizeInput
                  name="range-width"
                  type="range"
                  min={1}
                  max={Math.round(1000 / this.props.size.width)}
                  step={1}
                  value={this.state.tileWidth}
                  onChange={(e) =>
                    this.setState({ tileWidth: Number(e.target.value) })
                  }
                />
                <TileSizeLabel htmlFor="range-width">
                  {this.state.tileWidth}
                </TileSizeLabel>
              </TileSizeRangeBox>
              <TileSizeRangeBox>
                <TileSizeRangeName>Height</TileSizeRangeName>

                <TileSizeInput
                  name="range-heigth"
                  type="range"
                  min={1}
                  max={this.props.size.height < 150 ? 5 : 4}
                  step={1}
                  value={this.state.tileHeigth}
                  onChange={(e) =>
                    this.setState({ tileHeigth: Number(e.target.value) })
                  }
                />
                <TileSizeLabel htmlFor="range-heigth">
                  {this.state.tileHeigth}
                </TileSizeLabel>
                <TileAddButton
                  onClick={() => {
                    this.sidePanelClick(
                      this.state.id + 1,
                      "",
                      this.state.tileWidth,
                      this.state.tileHeigth,
                      "",
                      this.props.size.width,
                      this.props.size.height
                    );
                    this.props.setSizeModal(!this.props.modalState);
                  }}
                >
                  Add tile
                </TileAddButton>
              </TileSizeRangeBox>
            </TileSizeRange>
            <TilePresentationBox>
              <TilePresentation
                tileWidht={`${this.state.tileWidth * this.props?.size.width}`}
                tileHeigth={`${
                  this.state.tileHeigth * this.props?.size.height
                }`}
              >
                {this.state.tileWidth}x{this.state.tileHeigth}
              </TilePresentation>
            </TilePresentationBox>
          </TileSizeBox>
        </TileSizeContainer>

        <TileSizeBackground
          onClick={() => this.props.setSizeModal(!this.props.modalState)}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, { setSizeModal, setTiles, setSize })(
  TilesSizeSelect
);
