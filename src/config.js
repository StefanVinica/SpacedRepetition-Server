module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://aymhcbvnjrwdjb:0edb0f23a9ee2992c63c3c3549b3fc40a17617767de4b8a30018fbb785e75cf1@ec2-54-146-91-153.compute-1.amazonaws.com:5432/d5a5epjlvg1ol6",
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || "change-this-secret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "3h",
};
