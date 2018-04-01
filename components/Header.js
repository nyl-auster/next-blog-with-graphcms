import React from "react";
import config from "../services/config";

export default class HeaderPorteurAide extends React.Component {
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Mon site bien.</h1>
            <h2 className="subtitle">
              Avec des vrais morceaux de Spinoza dedans !
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
