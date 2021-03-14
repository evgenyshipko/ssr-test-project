import path from 'path';
// @ts-ignore
import { Configuration, Plugin, Entry } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const config: Configuration = {
    entry: ([
        IS_DEV && 'react-hot-loader/patch',
        // IS_DEV && 'webpack-hot-middleware/client',
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'client'),
    ].filter(Boolean) as unknown) as Entry,
    module: {
        rules: [fileLoader.client, cssLoader.client, jsLoader.client],
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@src': path.resolve(__dirname, '../src/'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@images': path.resolve(__dirname, '../static/img'),
        },
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        !IS_DEV && new CompressionPlugin(),
    ].filter(Boolean) as Plugin[],

    devtool: 'source-map',
};

export default config;
