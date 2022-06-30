import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IArticles } from '../../types/index';

class App {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data: IArticle) => this.view.drawSources(data));
    }
}

export default App;
