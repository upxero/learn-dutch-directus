module.exports = {
  server: {
   host: process.env.HOST || '0.0.0.0',
   port: Number(process.env.PORT) || 8055,
   cors: {
    enabled: true,
    origin: ['https://dashboard-learn-dutch.netlify.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
  public_url: process.env.PUBLIC_URL,
},
  database: {
    client: process.env.DB_CLIENT || 'mysql',
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
      email: {
        driver: 'email',
        settings: {
          allowPublicRegistration: false,
        },
      },
    },
  },
  storage: {
    local: {
      root: './uploads',
    },
  },
  websocket: {
    enabled: true,
  },
};
