module.exports = {
  apps: [
    {
      name: "seldom-page",
      script:
        "node node_modules/next/dist/bin/next build && node node_modules/next/dist/bin/next start -p 2000",
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
