/**
 * Ce fichier est utilisé par pm2, chargé de gérer nos process node.
 * Il contient toute la configuration pour les différents environnement.
 * pm2 start ecosystem.config.js --env production"
 *
 */
module.exports = {
  apps: [
    {
      name: "server-graphcms-blog",
      script: "./server.js",
      instances: 0,
      exec_mode: "cluster",
      env_development: {
        PORT: 3000,
        NODE_ENV: "development",
        GRAPHCMS_GRAPHQL_API:
          "https://api.graphcms.com/simple/v1/cjfgpbd8s1bj101427u4eu2b0"
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
        GRAPHCMS_GRAPHQL_API:
          "https://api.graphcms.com/simple/v1/cjfgpbd8s1bj101427u4eu2b0"
      }
    }
  ]
};
