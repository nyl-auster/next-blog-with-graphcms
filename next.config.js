/**
 * Fichier de configuration de next.js
 * C'est la variable "publicRuntimeConfig" qui nous intéresse
 * particulièrement : tout ce qu'elle contient sera disponible
 * à la fois depuis le serveur ( au moment ou Next sert l'url
 * pour la première fois) et depuis le navigateur
 * ( celui-ci prend la main entièrement une fois la page chargée la première fois)
 */

// on veut récupérer les variables d'environnement
// de notre ficher de config uniquement pour l'environnement
// actuelle, c'est un chemin de ce genre :
// config.apps[0].env_production ou config.apps[0].env po
const config = require("./ecosystem.config");
const currentEnv = process.env.NODE_ENV;
const currentEnvConfig = config.apps[0][`env_${currentEnv}`];

module.exports = {
  publicRuntimeConfig: {
    ...currentEnvConfig
  }
};
