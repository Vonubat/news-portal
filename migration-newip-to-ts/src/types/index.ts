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
    totalResults?: number;
    articles?: Readonly<IArticles>[];
}

export interface IGetSources {
    status: string;
    sources?: Readonly<ISources>[];
}

// types

export type TGetResp = {
    endpoint: TEndpoint;
    options?: TOptions;
};

export type TEndpoint = string;

export type TOptions = { [index: string]: string };

// enums

export enum StatusCodes {
    Unauthorized = 401,
    NotFound = 404,
}
