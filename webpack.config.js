const path = require('path');
const webpack = require('webpack');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { version } = require('./package.json');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

module.exports = ({ prod, configEnv } = {}) => {
  const distDir = prod
    ? `/dist/${configEnv === 'dev' ? 'snapshot' : 'release'}/${version}/[hash]/`
    : '/';
  const buildDir = prod ? `build/${configEnv}${distDir}` : 'dist';
  const webserverDir = prod ? `build/${configEnv}` : 'dist';
  const webserverDirAbsolute = path.resolve(webserverDir);
  const indexHtmlName = prod
    ? `${webserverDirAbsolute}/index.html`
    : 'index.html';
  const cssLoaders = [{
    loader: 'css-loader',
    options: {
      camelCase: true,
      importLoaders: 1,
      localIdentName: '[name]--[local]--[hash:base64:8]',
      modules: true,
      sourceMap: !prod,
    },
  },
  'postcss-loader',
  ];

  const envFiles = {
    entry: prod ? ['./src/index'] : ['react-hot-loader/patch', './src/index'],
    output: {
      filename: prod ? '[id].js' : '[name].[hash].js',
      path: path.resolve(__dirname, buildDir),
      publicPath: distDir,
    },
  };

  return {
    bail: prod,
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      hot: true,
      port: DEFAULT_PORT,
      // proxy: envFiles.proxy,
      publicPath: '/',
    },
    devtool: prod ? false : 'eval-source-map',
    entry: envFiles.entry,
    mode: prod ? 'production' : 'development',
    module: {
      rules: [{
        test: /\.jsx|js($|\?)/,
        use: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
        ],
      },
      {
        test: /\.css($|\?)/,
        use: ['style-loader', ...cssLoaders],
      },
      {
        test: /\.svg$/,
        use: 'raw-loader',
        exclude: [path.resolve(__dirname, 'src/renderer/containers/app/fonts')],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|png)$/,
        use: {
          loader: 'file-loader',
        },
        include: [path.resolve(__dirname, 'src/renderer/containers/app/fonts')],
      },
      ],
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true,
    },
    output: envFiles.output,
    plugins: [
      ...(prod ? [
        new CopyPlugin([{
          from: path.resolve(__dirname, 'public', '*'),
          to: path.resolve(__dirname, webserverDir),
        }]),
      ] : [new webpack.HotModuleReplacementPlugin()]),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new HtmlWebpackPlugin({
        filename: indexHtmlName,
        template: './src/index.html',
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
      alias: {
        containers: path.resolve(__dirname, 'src', 'renderer', 'containers'),
        components: path.resolve(__dirname, 'src', 'renderer', 'components'),
        redux: path.resolve(__dirname, 'src', 'renderer', 'redux'),
        'redux-modules': path.resolve(__dirname, 'src', 'renderer', 'redux', 'modules'),
        middleware: path.resolve(__dirname, 'src', 'renderer', 'redux', 'middleware'),
        propTypes: path.resolve(__dirname, 'src', 'propTypes'),
        root: __dirname,
        scenes: path.resolve(__dirname, 'src', 'renderer', 'scenes'),
        src: path.resolve(__dirname, 'src'),
        'style-core': path.resolve(
          __dirname,
          'src',
          'containers',
          'app',
          'style-core',
        ),
        test: path.resolve(__dirname, 'test'),
      },
    },
    target: 'web',
  };
};
