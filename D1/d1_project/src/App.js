import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Button from "./components/buttons/Button";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Button title="ciao"/>
        <Button title="prova componenti"/>
        <Button title="aooo"/>

        <Footer />
      </>
    )
  }
}
export default App;