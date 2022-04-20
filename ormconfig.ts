export default {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['./build/src/entities/**/*.js'],
  migrations: ['./build/src/migrations/**/*.js'],
  cli: {
    entitiesDir: './build/rc/entities',
    migrationsDir: './build/src/migrations',
  },
  ssl: { rejectUnauthorized: false },
};
