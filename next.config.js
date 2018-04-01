const config = require("./env.config");
// afficher dans le terminal la configuration en cours
console.log("config = ", JSON.stringify(config, null, 2));
module.exports = {
  // le contenu de cette variable est disponible aussi bien côté
  // node que côté navigateur. En effet, le code  de Next.js
  // s'éxecute d'abord du côté serveur node, au premier chargement
  // de la page. Puis c'est le navigateur qui prend le relai
  // pour exécuter le code JavaScript. Il faut donc que l'on soit
  // en mesure d'accéder à nos variable dans les deux cas.
  publicRuntimeConfig: {
    ...config
  }
};
