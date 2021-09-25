module.exports = {
  apps: [
    {
      name: "seldom-page",
      script: "npm run build && npm start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "worker",
      script: "worker.js",
    },
  ],
}
