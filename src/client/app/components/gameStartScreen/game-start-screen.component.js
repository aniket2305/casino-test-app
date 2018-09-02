import BonusComponent from '../bonusComp/bonus.component';
import WinOutcomeMsgComponent from '../winOutcomeMsg/win-outcome-msg.component';
import OutcomeGraphicComponent from '../outcomeGraphic/outcome-graphic.component';
import ReloadButtonComponent from '../reloadButton/reload-button.component';

import RandomOutcomeService from '../../service/random-outcome.service';

export default class GameStartScreenComponent {
    constructor() {
        this.element = document.createElement('game-container');

        // instantiate child components
        this.winOutcomeMsgComponent = new WinOutcomeMsgComponent();
        this.outcomeGraphicComponent = new OutcomeGraphicComponent();
        this.reloadButtonComponent = new ReloadButtonComponent();
        this.bonusComponent = new BonusComponent();

        // service instantiate
        this.resultService = new RandomOutcomeService();

        this.reloadButton = this.reloadButtonComponent.element;

        // render
        this.render();
    }

    render() {
        this.appendChildElements();
        this.reloadButton.onclick = this.reloadOutcome.bind(this);
    }

	/**
	 * @description append child elements to game-container
	 * @function appendChildElements
	 */
	appendChildElements() {
		this.element.appendChild(this.winOutcomeMsgComponent.element);
		this.element.appendChild(this.outcomeGraphicComponent.element);
        this.element.appendChild(this.reloadButtonComponent.element);
        this.element.appendChild(this.bonusComponent.element);

    }

	/**
	 * @description fetch data from server and on success shows win msg
     * and graphic
	 * @function reloadOutcome
	 */
    reloadOutcome() {
		this.reloadButton.disabled = true;

		this.resultService.getResult()
			.then(handleSuccess.bind(this));
			
		function handleSuccess(response) {
			const {randomOutcome, bonusFlag} = response;
            this.winOutcomeMsgComponent.message = this.getWinTypeMsg(randomOutcome);
            this.outcomeGraphicComponent.setGraphic(randomOutcome);

			bonusFlag ?
				this.showBonus() :
				this.reloadButton.disabled = false;
		}

		function handleFailure() {
			console.log('something went wrong while loading results')
		}
    }

	/**
	 * @description shows bonus component and reload outcome
	 * @function showBonus
	 */
    showBonus() {
		this.bonusComponent.showBonusMsg()
			.then(this.reloadOutcome.bind(this));
    }
    
	/**
	 * @description returns win type msg based on unique number count
	 * @function getWinTypeMsg
	 */
    getWinTypeMsg(numbers){
        const uniqueValue = new Set(numbers);
        let winTypeMsg;
        
        switch (uniqueValue.size) {
            case 1:
                winTypeMsg = 'Big Win!';
                break;
            case 2:
                winTypeMsg = 'Small Win!';
                break;
            default:
                winTypeMsg = 'No Win!';
        }
        return winTypeMsg;
    }
}