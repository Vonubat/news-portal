import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '07be9b299d084714980b19ae91e3c516', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

// original API key: 985d9f59ff4a4b03bbf53711973433b4
