import { PureComponent } from "react";
import TestTiles from "./components/test-tiles/test-tiles";
import "./style/global.css";
import { WrapperApp, Button, WrapperButton, AppContainer } from "./App.styled";
import { connect } from "react-redux";
import { setTiles, setSize } from "./store/slice";
import SidePanel from "./components/side-panel/side-panel";

const mapStateToProps = (state: { tilesState: { tiles: any; size: any } }) => ({
  tiles: state.tilesState.tiles,
  size: state.tilesState.size,
});
class App extends PureComponent<
  { tiles: any; setTiles: any; size: any; setSize: any },
  {
    tiles: {
      text: string;
      cols: number;
      rows: number;
      img: string;
      id: number;
    }[];
    size: { width: number; height: number };
    label: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      tiles: [],
      size: { width: 0, height: 0 },
      label: "",
    };
  }
  componentDidMount() {
    this.setState({
      tiles: this.props?.tiles,
    });
    this.setState({
      size: this.props?.size,
    });
    this.setState({
      label: "Variant 1",
    });
    this.props.setTiles([
      {
        id: 1,
        text: "",
        cols: 2,
        rows: 1,
        img: "",
      },
      { id: 2, text: "", cols: 3, rows: 1, img: "" },
      { id: 3, text: "", cols: 1, rows: 3, img: "" },
      { id: 4, text: "", cols: 2, rows: 3, img: "" },
      { id: 5, text: "", cols: 2, rows: 1, img: "" },
      { id: 6, text: "", cols: 2, rows: 2, img: "" },
    ]);
  }
  render() {
    return (
      <AppContainer>
        <WrapperApp>
          <h1>{this.state.label}</h1>

          <TestTiles />
          <WrapperButton>
            <Button
              onClick={() => {
                this.props.setTiles([
                  { id: 1, text: "", cols: 2, rows: 1, img: "" },
                  { id: 2, text: "", cols: 3, rows: 1, img: "" },
                  { id: 3, text: "", cols: 1, rows: 3, img: "" },
                  { id: 4, text: "", cols: 2, rows: 3, img: "" },
                  { id: 5, text: "", cols: 2, rows: 1, img: "" },
                  { id: 6, text: "", cols: 2, rows: 2, img: "" },
                ]);
                this.props.setSize({
                  width: 200,
                  height: 125,
                });
                this.setState({
                  label: "Variant 1",
                });
              }}
            >
              Variant 1
            </Button>
            <Button
              onClick={() => {
                this.props.setTiles([
                  { id: 1, text: "", cols: 2, rows: 1, img: "" },
                  { id: 2, text: "", cols: 1, rows: 3, img: "" },
                  { id: 3, text: "", cols: 1, rows: 1, img: "" },
                  { id: 4, text: "", cols: 1, rows: 2, img: "" },
                  { id: 5, text: "", cols: 1, rows: 1, img: "" },
                ]);
                this.props.setSize({
                  width: 330,
                  height: 165,
                });
                this.setState({
                  label: "Variant 2",
                });
              }}
            >
              Variant 2
            </Button>
            <Button
              onClick={() => {
                this.props.setTiles([
                  { id: 1, text: "", cols: 1, rows: 1, img: "" },
                  { id: 2, text: "", cols: 2, rows: 1, img: "" },
                  { id: 3, text: "", cols: 1, rows: 4, img: "" },
                  { id: 4, text: "", cols: 1, rows: 2, img: "" },
                  { id: 5, text: "", cols: 2, rows: 2, img: "" },
                  { id: 6, text: "", cols: 3, rows: 1, img: "" },
                ]);
                this.props.setSize({
                  width: 250,
                  height: 125,
                });
                this.setState({
                  label: "Variant 3",
                });
              }}
            >
              Variant 3
            </Button>
            <Button
              onClick={() => {
                this.props.setTiles([
                  { id: 1, text: "", cols: 1, rows: 3, img: "" },
                  { id: 2, text: "", cols: 1, rows: 3, img: "" },
                  { id: 3, text: "", cols: 3, rows: 1, img: "" },
                  { id: 4, text: "", cols: 2, rows: 3, img: "" },
                  { id: 5, text: "", cols: 2, rows: 1, img: "" },
                  { id: 6, text: "", cols: 1, rows: 4, img: "" },
                  { id: 7, text: "", cols: 4, rows: 1, img: "" },
                ]);
                this.props.setSize({
                  width: 200,
                  height: 100,
                });
                this.setState({
                  label: "Variant 4",
                });
              }}
            >
              Variant 4
            </Button>
          </WrapperButton>
        </WrapperApp>
        <SidePanel />
      </AppContainer>
    );
  }
}

export default connect(mapStateToProps, { setTiles, setSize })(App);
