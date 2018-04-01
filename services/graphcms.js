import { GraphQLClient } from "graphql-request";
import config from "./config";
const client = new GraphQLClient(config.env.GRAPHCMS_GRAPHQL_API);
export default client;
