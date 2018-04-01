/**
 * Fichier de configuration pour pm2, notre gestionnaire
 * de process node. On s'en sert pour configurer pm2 mais aussi
 * pour créer nos variable d'environnements.
 *
 * On récupère aussi ce fichier dans next.config.js
 * pour rendre les variables disponibles également pour
 * le navigateur et pas seulement pour le serveur.
 */
module.exports = {
  apps: [
    {
      name: "server-graphcms-blog",
      script: "./server.js",
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
