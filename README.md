# ProjetDocker

Commande pour build API: docker build -t api .

Commande API: docker run --rm -d -p 8080:8080 --name api --link database:database api

Commande pour base de données: docker run --rm --name database -e POSTGRES_PASSWORD=IloveTCOM -d postgres


