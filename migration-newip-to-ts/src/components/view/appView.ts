import News from './news/news';
import Sources from './sources/sources';
import { IArticles, ISources, IGetArticles, IGetSources } from '../../types/index';

export class AppView {
    news: { draw(data: IArticles[]): void };
    sources: { draw(data: ISources[]): void };

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IGetArticles): void {
        const values: IArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IGetSources): void {
        const values: ISources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
