module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2dbf0eaf8afb1af075b1ee16de845374'),
  },
});
