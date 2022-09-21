module.exports = {
  apps : [
      {
        name: "social-media-api",
        script: "./src/server.js",
        watch: true,
        env: {
          "PORT": 7000,
          "NODE_ENV": "development",
        }
      }
  ]
}

