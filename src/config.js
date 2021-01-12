module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://xqlgplvuuwjyet:5d1f5c21a6614abd6a0bada034850ca18daeb829abdedf2de0808fbd185817d4@ec2-54-146-4-66.compute-1.amazonaws.com:5432/dabsmrd4pghsli",
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || "change-this-secret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "3h",
};
