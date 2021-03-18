import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import clientConfig from '../webpack/client.config';

export const getHmrMiddlewares = () => {
    const compiler = webpack({ ...clientConfig, mode: 'development' });

    return [
        hotMiddleware(compiler),
        devMiddleware(compiler, {
            serverSideRender: true,
        }),
    ];
};
