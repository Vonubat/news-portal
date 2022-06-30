import { TOptions, TEndpoint, TGetResp, TMethod, IGetArticles } from '../../types/index';

class Loader {
    baseLink: string;
    options: TOptions;

    constructor(baseLink: string, options: TOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: TGetResp,
        callback: (data: IGetArticles) => void = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: TOptions, endpoint: TEndpoint): string {
        const urlOptions: TOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key as keyof TOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: TMethod, endpoint: TEndpoint, callback: (data: IGetArticles) => void, options: TOptions = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<IGetArticles> => res.json())
            .then((data: IGetArticles): void => callback(data))
            .catch((err: Error): void => console.error(err));
    }
}

export default Loader;
