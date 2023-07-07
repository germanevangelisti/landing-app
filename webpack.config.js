const path = require("path");

module.exports = {
  entry: "./src/index.js", // Archivo de entrada principal de tu aplicación
  output: {
    path: path.resolve(__dirname, "dist"), // Directorio de salida para los archivos compilados
    filename: "bundle.js", // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Utiliza Babel para todos los archivos JavaScript
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Carga archivos CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              babel: {
                plugins: [
                  [
                    "@babel/plugin-transform-react-jsx",
                    { throwIfNamespace: false },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
};
