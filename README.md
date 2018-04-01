# Un site Next.js avec graphCMS comme back office

Objectif : créer rapidement un site en React, rendu côté serveur, avec un back office pour gérer les contenus.

## installation

```sh
# pm2 est utilisé pour la gestion des process node
npm install pm2 -g
npm i
```

## pour le développement

```sh
npm run dev
```

### pour déployer en production

```sh
# compiler le code
npm run build
# démarrer les process node
npm run start
```

## bonus : configurer nginx pour lier un nom de domaine au process node

```
# se connecter au serveur node
upstream example.site.fr {
    server localhost:3000;
}

server {
  gzip on;
	listen 80;
	listen [::]:80;
	server_name example.site.fr;
	location / {
		proxy_pass example.site.fr;
	}
}
```

## Explications
