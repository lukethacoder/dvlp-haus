const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

require('dotenv').config();

const nextConfig = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
};

module.exports = withPlugins([withSass, withFonts], nextConfig);
