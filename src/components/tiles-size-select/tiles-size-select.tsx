import { Component } from "react";
import { connect } from "react-redux";
import { setSizeModal } from "../../store/slice";
import {
  TileSizeContainer,
  TileSizeBackground,
  TilePresentation,
} from "./tiles-size-select.styled";

interface Size {
  width: number;
  height: number;
}
const mapStateToProps = (state: {
  tilesState: { modalState: boolean; size: any };
}) => ({
  size: state.tilesState.size,
  modalState: state.tilesState.modalState,
});

class TilesSizeSelect extends Component<
  { modalState: boolean; setSizeModal: any; size: Size },
  { tileWidth: number; tileHeigth: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      tileWidth: 1,
      tileHeigth: 1,
    };
  }
  render() {
    console.log(this.props?.size);
    return (
      <>
        <TileSizeContainer>
          <div>
            <label htmlFor="range-width">{this.state.tileWidth}</label>
            <input
              name="range-width"
              type="range"
              min={1}
              max={5}
              step={1}
              value={this.state.tileWidth}
              onChange={(e) =>
                this.setState({ tileWidth: Number(e.target.value) })
              }
            />
            <label htmlFor="range-heigth">{this.state.tileHeigth}</label>
            <input
              name="range-heigth"
              type="range"
              min={1}
              max={5}
              step={1}
              value={this.state.tileHeigth}
              onChange={(e) =>
                this.setState({ tileHeigth: Number(e.target.value) })
              }
            />
          </div>
          <TilePresentation
            tileWidht={`${this.state.tileWidth * this.props?.size.width}`}
            tileHeigth={`${this.state.tileHeigth * this.props?.size.height}`}
          >
            {this.state.tileWidth}x{this.state.tileHeigth}
          </TilePresentation>
        </TileSizeContainer>

        <TileSizeBackground
          onClick={() => this.props.setSizeModal(!this.props.modalState)}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, { setSizeModal })(TilesSizeSelect);
