require('dotenv/config');

const rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "dist"

module.exports = {
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 3306,
    "username": "root",
    "password": "docker",
    "database": "trabalho-adler",
    "entities": [rootDir + "/modules/**/infra/typeorm/entities/*.{js,ts}"],
    "migrations": [rootDir + "/shared/infra/typeorm/migrations/*.{js,ts}"],
    "cli": {
        "migrationsDir": rootDir + "/shared/infra/typeorm/migrations"

    }
}