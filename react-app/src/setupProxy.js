const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://image-uploader-server-wine.vercel.app",
      changeOrigin: true,
    })
  );
  app.use(
    "/uploaded-images",
    createProxyMiddleware({
      target: "https://image-uploader-server-wine.vercel.app",
      changeOrigin: true,
    })
  );
};
