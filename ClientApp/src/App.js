import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { AnotherPage } from "./components/AnotherPage";
import { Counter } from "./components/Counter";

import "./assets/main.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/AnotherPage" component={AnotherPage} />
      </Layout>
    );
  }
}
