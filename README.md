# Un site Next.js avec graphCMS comme back office

Objectif : créer rapidement un site en React, rendu côté serveur, avec un back office pour gérer les contenus.

## Getting started

### installation

```sh
npm i
```

### démarrer le serveur de développement

```sh
npm run dev
```

### démarrer le serveur de production

```sh
# compiler le code
npm run build
# démarrer les process node
npm run start
```

## avancé

### configurer nginx pour lier un nom de domaine au serveur node

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
