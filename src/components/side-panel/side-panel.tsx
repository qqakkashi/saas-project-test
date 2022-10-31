import { PureComponent } from "react";
import { SidePanelContainer, SidePannelPlusTile } from "./side-panel.styled";
import { connect } from "react-redux";
import { setTiles, setSize, setSizeModal } from "../../store/slice";
import TilesSizeSelect from "../tiles-size-select/tiles-size-select";

const mapStateToProps = (state: {
  tilesState: { tiles: Array<any>; size: any; modalState: boolean };
}) => ({
  tiles: state.tilesState.tiles,
  size: state.tilesState.size,
  modalState: state.tilesState.modalState,
});

class SidePanel extends PureComponent<
  {
    tiles: Array<any>;
    setTiles: any;
    size: any;
    setSize: any;
    modalState: boolean;
    setSizeModal: any;
  },
  { id: number; isSetSize: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: Math.max.apply(
        null,
        this.props?.tiles?.map((tile: any) => {
          return tile.id;
        })
      ),
      isSetSize: false,
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
        <SidePanelContainer>
          <SidePannelPlusTile
            onClick={() => this.props.setSizeModal(!this.props.modalState)}
          >
            +
          </SidePannelPlusTile>

          <SidePannelPlusTile
            onClick={() => {
              this.sidePanelClick(
                this.state.id + 1,
                "",
                1,
                1,
                "",
                this.props.size.width,
                this.props.size.height
              );
            }}
          >
            1x1
          </SidePannelPlusTile>
          <SidePannelPlusTile
            onClick={() => {
              this.sidePanelClick(
                this.state.id + 1,
                "",
                1,
                2,
                "",
                this.props.size.width,
                this.props.size.height
              );
            }}
          >
            1x2
          </SidePannelPlusTile>
          <SidePannelPlusTile
            onClick={() => {
              this.sidePanelClick(
                this.state.id + 1,
                "",
                1,
                2,
                "",
                this.props.size.width,
                this.props.size.height
              );
            }}
          >
            2x1
          </SidePannelPlusTile>
          <SidePannelPlusTile
            onClick={() => {
              this.sidePanelClick(
                this.state.id + 1,
                "",
                2,
                2,
                "",
                this.props.size.width,
                this.props.size.height
              );
            }}
          >
            2x2
          </SidePannelPlusTile>
        </SidePanelContainer>
        {this.props.modalState ? <TilesSizeSelect /> : null}
      </>
    );
  }
}

export default connect(mapStateToProps, { setTiles, setSize, setSizeModal })(
  SidePanel
);
