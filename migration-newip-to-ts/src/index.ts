import App from './components/app/app';
import './global.css';
const app: App = new App();
app.start();

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});
