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
    connection: process.env.DATABASE_URL,
  },
  auth: {
    providers: {
      local: {
        driver: 'local',
      },
    },
  },
};
