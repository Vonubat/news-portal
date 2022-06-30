/* https://newsapi.org/docs/endpoints info about API*/

// common interfaces
export interface IArticles {
    source: {
        id: string;
        name: string;
    };
    author: string;
    content: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IGetArticles {
    status: string;
    totalResults: number;
    articles: IArticles[];
}

export interface IGetSources {
    status: string;
    sources: ISources[];
}

// loader.ts
export type TGetResp = {
    endpoint: TEndpoint;
} & TOptions;

export type TEndpoint = string;

export type TOptions = {
    options?: { [index: string]: string };
};

export type TMethod = 'GET' | 'POST';
