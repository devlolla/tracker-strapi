module.exports = ({ env }) => ({
  host: env("HOST", process.env.HOSTT || "0.0.0.0"),
  port: env.int("PORT", process.env.PORT || 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', process.env.ADMIN_JWT_SECRET),
    },
  },
});
