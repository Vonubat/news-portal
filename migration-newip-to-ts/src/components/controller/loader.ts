import { TOptions, TEndpoint, TGetResp, TMethod, IGetArticles, IGetSources, StatusCodes } from '../../types/index';

class Loader {
    private baseLink: string;
    private options: TOptions;

    protected constructor(baseLink: string, options: TOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: TGetResp,
        callback: (data: IGetSources | IGetArticles) => void = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === StatusCodes.Unauthorized || res.status === StatusCodes.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: TOptions, endpoint: TEndpoint): string {
        const urlOptions: TOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key as keyof TOptions]}&`;
        });

        return url.slice(0, -1);
    }

    private load(
        method: TMethod,
        endpoint: TEndpoint,
        callback: (data: IGetSources | IGetArticles) => void,
        options: TOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<IGetSources | IGetArticles> => res.json())
            .then((data: IGetSources | IGetArticles): void => callback(data))
            .catch((err: Error): void => console.error(err));
    }
}

export default Loader;
