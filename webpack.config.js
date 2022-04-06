const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

let instaApp = {
  name: 'insta-app',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /node_modules[/\\]@ckeditor[/\\]ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: [ 
          'raw-loader' 
        ]
      },
      {
        test: /node_modules[/\\]@ckeditor[/\\]ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        use: [
            {
                loader: 'style-loader',
                options: {
                    injectType: 'singletonStyleTag',
                    attributes: {
                        'data-cke': true
                    }
                }
            },
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: styles.getPostCssConfig( {
                        themeImporter: {
                            themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                        },
                        minify: true
                    } )
                }
            }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules[/\\]@ckeditor[/\\]ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        use: [
          "style-loader", 
          "css-loader"
        ],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    'insta-app': [path.resolve(__dirname,'./_src/jsApp/insta-app.jsx')]
  },
  output: {
    path: path.resolve(__dirname, "./public/js"),
    publicPath: '/js/',
    filename: '[name].js',
    chunkFilename: 'hris.mod-[name].js'
  },
}

let instaStyle = {
  name: 'insta-styles',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'insta-styles.css'
    })
  ],
  entry: path.resolve(__dirname,'./_src/scss/tailwind.scss'),
  output: {
    path: path.resolve(__dirname, "./public/css"),
    filename: "[name].css"
  }
}

module.exports = [
    instaApp,
    instaStyle,
];
