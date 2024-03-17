# SAE Starter

## Lancer l'application
S'assurer que Docker Desktop est lancé, puis démarrez l'environnement Docker:
```
docker-compose up -d
```

Exécuter ces commandes pour installer les dependances nécessaires et la base de données:
```
# Ouvre un terminal dans le conteneur PHP
docker exec -it sae-php bash

# Installe les dépendances
composer install

# Crée la base de données et lance les migrations
php bin/console doctrine:database:create
php bin/console doctrine:database:migrate
```
