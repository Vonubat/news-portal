import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IGetArticles, IGetSources } from '../../types/index';

class App {
    private controller: AppController;
    private view: AppView;
    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e: MouseEvent): void =>
            this.controller.getNews(e, (data: IGetArticles): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: IGetSources): void => this.view.drawSources(data));
    }
}

export default App;
