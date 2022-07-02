import News from './news/news';
import Sources from './sources/sources';
import { IArticles, ISources, IGetArticles, IGetSources } from '../../types/index';

export class AppView {
    private news: { draw(data: IArticles[]): void };
    private sources: { draw(data: ISources[]): void };

    public constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IGetArticles): void {
        const values: IArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: IGetSources): void {
        const values: ISources[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
