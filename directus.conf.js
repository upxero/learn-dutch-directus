module.exports = {
  server: {
    cors: {
      origin: ['https://dashboard-learn-dutch.netlify.app'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
  database: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  },
  auth: {
    providers: {
      local: {
        driver: 'local',
      },
    },
  },
};
