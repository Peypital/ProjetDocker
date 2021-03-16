# ProjetDocker

Commande pour build API: docker build -t api .

Commande API: docker run --rm -d -p 8080:8080 --name api --link database:database api

Commande pour base de données: docker run --rm --name database -e POSTGRES_PASSWORD=IloveTCOM -d -v $PWD/save/local:/var/lib/postgresql/data  postgres

Commande pour build front: docker build -t front .

Commande pour front: docker run --rm -d -p 3000:3000 --name front front
