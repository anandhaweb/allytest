const PROXY_CONFIG = {
  
  "/account/*": {
      "target": "https://okrcentral.github.io/",
      "secure": true,
      "pathRewrite": {
          "^/account": ""
      },
      "changeOrigin": true,
      "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG;