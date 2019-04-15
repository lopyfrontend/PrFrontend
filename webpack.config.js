const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    main: './src/main.js',
    //为了能自动加载assets
    assets: './src/assets.js'
  },
  output: {
    filename: 'js/[name].js',
  },
    watchOptions: {
      poll:true,
        ignored:/node_modules/
    },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.pug$/,
        use: [
            {
                loader: 'html-loader',
                options: {
                }
            },
            {
                loader: 'pug-html-loader',
                options: {
                    self: true, // 這個要加
                    pretty: true,
                }
            },
        ]
      },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
      {
        test: /\.sass/,
        use: [
            MiniCssExtractPlugin.loader,
            // "style-loader", // style nodes from js strings
            "css-loader",
            "sass-loader"
        ]
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit=8192&name=img/[name].[ext]'
      // }
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
              loader: 'file-loader',
              options: {
                  //outputPath:'img',
                  publicPath:'../',
                  useRelativePath: true,
                  name(file){
                      return '[path][name].[ext]';
                  },
              },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.pug",
      filename: "./index.html",

      //how to use in pug
      templateParameters: {
        'foo': 'bar!!!'
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/404.pug",
      filename: "./404.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/about.pug",
      filename: "./about.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/blog-home-1.pug",
      filename: "./blog-home-1.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/blog-home-2.pug",
      filename: "./blog-home-2.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/blog-post.pug",
      filename: "./blog-post.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.pug",
      filename: "./contact.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/faq.pug",
      filename: "./faq.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/full-width.pug",
      filename: "./full-width.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/portfolio-1-col.pug",
      filename: "./portfolio-1-col.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/portfolio-2-col.pug",
      filename: "./portfolio-2-col.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/portfolio-3-col.pug",
      filename: "./portfolio-3-col.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/portfolio-4-col.pug",
      filename: "./portfolio-4-col.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/portfolio-item.pug",
      filename: "./portfolio-item.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/pricing.pug",
      filename: "./pricing.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/services.pug",
      filename: "./services.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/sidebar.pug",
      filename: "./sidebar.html"
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
        //这里路径不对
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    })
  ],
};
