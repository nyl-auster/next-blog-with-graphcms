// un simple helper pour récupérer plus intuitivement
// les variables de next, qui sont accessible
// aussi bien côté serveur que côté navigateur.
// Ces variables se trouvent dans le fichier next.config.js
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export default publicRuntimeConfig;
