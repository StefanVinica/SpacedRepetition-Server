module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://btdfnrrcsswtgz:1f1afff9b225b38fdff612db815861bcefed7bce5daf53f851d984237cbbd88c@ec2-3-215-76-208.compute-1.amazonaws.com:5432/dd0no8fgd1vo4c",
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || "change-this-secret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "3h",
};
