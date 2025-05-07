// directus.config.js
module.exports = {
  server: {
    cors: {
      origin: ['https://dashboard-learn-dutch.netlify.app'], 
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
};
