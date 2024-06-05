const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // protocol: 'https',
        // hostname: 'https://source.unsplash.com/8gVv6nxq6gY/1080x800',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};
