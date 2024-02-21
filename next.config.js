module.exports = {
    images: {
      domains: ['aceternity.com', 'res.cloudinary.com', 'anotherdomain.com', 'images.unsplash.com', 'images.remotePatterns', 'pbs.twimg.com', 'distort-blob.vercel.app'],
    },
    webpack: (config, { isServer }) => {
      // Add GLSL shader file support
      config.module.rules.push({
        test: /\.glsl$/,
        use: 'raw-loader',
      });
  
      return config;
    },
  };
  