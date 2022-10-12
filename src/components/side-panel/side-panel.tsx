import { PureComponent } from "react";
import { SidePanelContainer, SidePannelPlusTile } from "./side-panel.styled";
import { connect } from "react-redux";
import { setTiles, setSize } from "../../store/slice";

const mapStateToProps = (state: { tilesState: { tiles: any; size: any } }) => ({
  tiles: state.tilesState.tiles,
  size: state.tilesState.size,
});

interface Props {
  width: any;
  height: any;
}

class SidePanel extends PureComponent<
  { tiles: any; setTiles: any; size: any; setSize: any },
  {}
> {
  render() {
    return (
      <SidePanelContainer>
        <SidePannelPlusTile
          onClick={() => {
            this.props.setTiles([
              ...this.props.tiles,
              {
                text: "",
                cols: 1,
                rows: 1,
                img: "",
              },
            ]);
            this.props.setSize({
              width: this.props.size.width,
              height: this.props.size.height,
            });
          }}
        >
          1x1
        </SidePannelPlusTile>
        <SidePannelPlusTile
          onClick={() => {
            this.props.setTiles([
              ...this.props.tiles,
              {
                text: "",
                cols: 1,
                rows: 2,
                img: "",
              },
            ]);
            this.props.setSize({
              width: this.props.size.width,
              height: this.props.size.height,
            });
          }}
        >
          1x2
        </SidePannelPlusTile>
        <SidePannelPlusTile
          onClick={() => {
            this.props.setTiles([
              ...this.props.tiles,
              {
                text: "",
                cols: 2,
                rows: 1,
                img: "",
              },
            ]);
            this.props.setSize({
              width: this.props.size.width,
              height: this.props.size.height,
            });
          }}
        >
          2x1
        </SidePannelPlusTile>
        <SidePannelPlusTile
          onClick={() => {
            this.props.setTiles([
              ...this.props.tiles,
              {
                text: "",
                cols: 2,
                rows: 2,
                img: "",
              },
            ]);
            this.props.setSize({
              width: this.props.size.width,
              height: this.props.size.height,
            });
          }}
        >
          2x2
        </SidePannelPlusTile>
      </SidePanelContainer>
    );
  }
}

export default connect(mapStateToProps, { setTiles, setSize })(SidePanel);
