import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '722f76bb036b4a1d87f52fa97b08bf79', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

// original API key: 985d9f59ff4a4b03bbf53711973433b4
