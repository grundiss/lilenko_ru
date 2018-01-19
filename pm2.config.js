module.exports = {
  apps: [
    {
      name: "lilenko_ru",
      script: "./index.js",
      watch: true,
      env: {
        SOCKET: "./lilenko_ru.sock",
        NODE_ENV: "production",
      },
    },
  ],
};
