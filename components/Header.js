import React from "react";
import config from "../services/config";

export default class HeaderPorteurAide extends React.Component {
  render() {
    return (
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Mon site bien.</h1>
            <h2 class="subtitle">
              Avec des vrais morceaux de Spinoza dedans !
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
