import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
// import cats from "./mockCats.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

componentDidMount(){
  this.catIndex()
}

  catIndex = () => {
    fetch("http://localhost:3000/cats")
    .then(response => {
      return response.json()
    })
    .then(catsArray => {
      this.setState({ cats: catsArray })
    })
    .catch(errors => {
      console.log("index errors", errors);
    })
  }

  createNewCat = (newcat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then (response => {
      response.status === 422 ? alert("something is wrong with your submission") : response.json()
    })
    .then(payload => {
      this.catIndex()
    })
    .catch(errors => {
      console.log("create errors", errors);
    })
  }

  updateCat = (cat, id) => {
    console.log("cat: ", cat);
    console.log("id: ", id)
  }

  render () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />

        <Route path="/catindex"
        render = { () => <CatIndex cats = {this.state.cats} />}
        />

        <Route path="/catshow/:id" render = {(props) => {
          const id = +props.match.params.id;
          const foundKitty = this.state.cats.find(cat => cat.id === id);
          return <CatShow cat = { foundKitty } /> }} />

        <Route path="/catnew" render={(props) => {
          return <CatNew createNewCat = { this.createNewCat } />
        }} />

        <Route path="/catedit/:id" render= { (props) => {
          let id = props.match.params.id;
          let cat = this.state.cats.find(cat => cat.id === +id);
          return (
            <CatEdit
              updateCat = { this.updateCat }
              cat = { cat } />
          )
        }} />

        <Route component={ NotFound } />
      </Switch>
      <Footer />
    </Router>
  );
  }
}

export default App;
