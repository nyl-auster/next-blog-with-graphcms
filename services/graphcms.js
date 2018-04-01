/**
 * Création d'un client graphQL pour graphCMS
 */
import { GraphQLClient } from "graphql-request";
import config from "./config";
// config.env.GRAPHCMS_GRAPHQL_API contient l'adresse absolue
// du endpoint simple graphql de graphCMS (parties "settings > endpoints")
const client = new GraphQLClient(config.GRAPHCMS_GRAPHQL_API);
export default client;
