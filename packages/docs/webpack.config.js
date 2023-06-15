module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      ],
    });
  
    return config;
  };
  