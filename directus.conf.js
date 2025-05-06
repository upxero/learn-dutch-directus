// directus.config.js
module.exports = {
    server: {
      cors: {
        origin: ['http://localhost:5173'], // frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
    },
  };
  
