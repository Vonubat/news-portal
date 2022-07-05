import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IGetArticles, IGetSources } from '../../types/index';

class App {
    private controller: AppController;
    private view: AppView;
    public SEARCH_INPUT: HTMLInputElement;
    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.SEARCH_INPUT = document.querySelector('#search') as HTMLInputElement;
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e: MouseEvent): void =>
            this.controller.getNews(e, (data: IGetArticles): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: IGetSources): void => this.view.drawSources(data));
    }

    public search(): void {
        // realization of search engine
        this.SEARCH_INPUT.addEventListener('keydown', function (e: KeyboardEvent): false | undefined {
            if (e.key === 'Enter') {
                e.preventDefault();
                return false;
            }
        });

        this.SEARCH_INPUT.addEventListener('keyup', function (e: KeyboardEvent): void {
            e.key === 'Enter' ? e.preventDefault() : 42;
            console.log(e);

            // e.preventDefault();
            const SOURCE_ITEMS = document.querySelectorAll('.source__item') as NodeListOf<HTMLDivElement>;

            for (let i = 0; i < SOURCE_ITEMS.length; i++) {
                const searchValue = new RegExp(`${this.value.toLowerCase()}`);
                const itemValue: string = SOURCE_ITEMS[i].innerText.toLowerCase();
                if (!itemValue.match(searchValue)) {
                    SOURCE_ITEMS[i].style.display = 'none';
                } else {
                    SOURCE_ITEMS[i].style.display = 'block';
                }
            }
        });
    }
}

export default App;
