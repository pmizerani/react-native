module.exports = {
    client: 'postgresql',
    connection: {
        database: 'tasks',
        user: 'root',
        passwoord: 'q1w2e3r4'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}