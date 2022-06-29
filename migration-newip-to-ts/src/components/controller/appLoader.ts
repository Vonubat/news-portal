import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '985d9f59ff4a4b03bbf53711973433b4', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
