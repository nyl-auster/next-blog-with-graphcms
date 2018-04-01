## installation

```sh
# pm2 est utilisé pour la gestion des process node
npm install pm2 -g
npm i
```

## développer

```sh
npm run dev
```

### Créer une version JAMStack

```sh
# s'assurer que le répertoire est clean
git checkout .
# récupérer les dernières modif
git pull --rebase
# re compiler le code et redémarrer les process node
npm run build
npm run export
```

### déployer le code servi par node

sur le serveur cible :

```sh
# s'assurer que le répertoire est clean
git checkout .
# récupérer les dernières modif
git pull --rebase
# re compiler le code et redémarrer les process node
npm run build
npm run start
```

### exemple de configuration nginx

```
# se connecter au serveur node
upstream www.aides-territoires.beta.gouv.fr {
    server localhost:3000;
}

server {
  gzip on;
	listen 80;
	listen [::]:80;
	server_name www.aides-territoires.beta.gouv.fr;
	location / {
		proxy_pass http://www.aides-territoires.beta.gouv.fr;
	}
}
```
# next-blog-with-graphcms
