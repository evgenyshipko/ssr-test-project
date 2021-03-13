import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const config: Configuration = {
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: path.join(SRC_DIR, 'server'),
    module: {
        rules: [fileLoader.server, cssLoader.server, jsLoader.server],
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/static/',
    },
    resolve: {
        alias:{
            '@src': path.resolve(__dirname, '../src/'),
            '@components': path.resolve(__dirname, '../src/components'),
        },
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx']
    },

    devtool: 'source-map',

    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

    optimization: { nodeEnv: false },
};

export default config;
