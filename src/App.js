import React from "react";
import "./App.css";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    const style = {
      backgroundColor: "#ebebeb"
    };
    return (
      <div className="container-fluid pt-5 " style={style}>
        {" "}
        <Form />{" "}
      </div>
    );
  }
}
export default App;
