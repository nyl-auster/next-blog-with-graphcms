import React from "react";
import DefaultLayout from "../layout/DefaultLayout";

export default class HomePage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="section container">
          Contactez moi à l'adresse suivante : email@email.fr
        </div>
      </DefaultLayout>
    );
  }
}
