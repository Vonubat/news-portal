import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IGetArticles, IGetSources } from '../../types/index';

class App {
    private controller: AppController;
    private view: AppView;
    private searchInput: HTMLInputElement;

    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.searchInput = document.querySelector('#search') as HTMLInputElement;
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e: MouseEvent): void =>
            this.controller.getNews(e, (data: IGetArticles): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: IGetSources): void => this.view.drawSources(data));
    }

    public search(): void {
        // realization of search engine
        // disable enter action on input form
        this.searchInput.addEventListener('keydown', function (e: KeyboardEvent): false | undefined {
            if (e.key === 'Enter') {
                e.preventDefault();
                return false;
            }
        });
        // hide news accorting to user search
        this.searchInput.addEventListener('keyup', function (/* e: KeyboardEvent */): void {
            // console.log(e);
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
