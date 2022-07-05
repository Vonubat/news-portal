import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '07be9b299d084714980b19ae91e3c516', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
