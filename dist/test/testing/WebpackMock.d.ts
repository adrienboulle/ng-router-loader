import { Loader } from '../../src/Loader';
import { RouterLoaderOptions } from '../../index';
export declare class WebpackMock {
    private options;
    resourcePath: string;
    private resolver;
    constructor(options: RouterLoaderOptions, resourcePath: string, resolver?: string | ((context: string, resourceUri: string) => string));
    readonly query: string;
    resolve(context: string, resourceUri: string, cb: (err, fullPath?) => void): void;
}
export declare class WebpackMockFactory {
    private _meta;
    options(options: RouterLoaderOptions): this;
    setOption(key: string, value: any): this;
    resourcePath(resourcePath: string): this;
    resolver(resolver: string | ((context: string, resourceUri: string) => string)): this;
    toWebpack(): WebpackMock;
    toLoader(): Loader;
}
export declare function wpFactory(): WebpackMockFactory;
