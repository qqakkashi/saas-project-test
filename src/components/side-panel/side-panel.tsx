import { PureComponent } from "react";
import { SidePanelContainer, SidePannelPlusTile } from "./side-panel.styled";
import { connect } from "react-redux";
import { setTiles, setSize } from "../../store/slice";

const mapStateToProps = (state: { tilesState: { tiles: any; size: any } }) => ({
  tiles: state.tilesState.tiles,
  size: state.tilesState.size,
});

class SidePanel extends PureComponent<
  { tiles: any; setTiles: any; size: any; setSize: any },
  { id: number }
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
      <SidePanelContainer>
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
    );
  }
}

export default connect(mapStateToProps, { setTiles, setSize })(SidePanel);
