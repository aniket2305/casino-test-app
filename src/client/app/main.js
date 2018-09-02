import './style/style.scss';
// import start screen component
import GameStartScreenComponent from './components/gameStartScreen/game-start-screen.component';

export class AppComponent {
    constructor() {
        this.element = document.createElement('app-container');
        this.startGame = new GameStartScreenComponent();
    }

    render() {
        this.element.appendChild(this.startGame.element);
        document.body.appendChild(this.element);
    }

}

// initialize app component
const app = new AppComponent();
app.render();