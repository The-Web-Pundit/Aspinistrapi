module.exports = ({ env }) => ({
  connection:{
       client: 'postgres',
       connection:{
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'aspinodb'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Vajintha@1511'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
});


// npm install pg --save //command used to run the postgres