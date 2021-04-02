const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { IS_PROD } = require('../env');

export default {
    client: {
        test: /\.css$/,
        use: [
            !IS_PROD && 'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
        ].filter(Boolean),
    },
    server: {
        test: /\.css$/,
        loader: 'null-loader',
    },
};
