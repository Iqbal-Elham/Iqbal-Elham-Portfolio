const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {

  plugins: [
    
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      // Define caching strategies for different types of assets.
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
          },
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
      ],
    }),
  ],
};
