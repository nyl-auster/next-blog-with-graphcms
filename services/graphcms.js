import getConfig from "next/config";
import { GraphQLClient } from "graphql-request";
const { publicRuntimeConfig } = getConfig();
const client = new GraphQLClient(publicRuntimeConfig.GRAPHCMS_GRAPHQL_API);
export default client;
