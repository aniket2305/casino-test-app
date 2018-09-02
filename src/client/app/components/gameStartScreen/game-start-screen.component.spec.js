import GameStartScreenComponent from './game-start-screen.component';

describe('GameStartScreenComponent ->', () => {
	let component, sandbox;

	beforeEach(() => {
        component = new GameStartScreenComponent();
        sandbox = sinon.createSandbox();
    });
    
	afterEach(() => {
		sandbox.restore();
	});

	it('should exists component', () => {
		expect(component).to.exist;
	});

	it('should be created with HTML element', () => {
        expect(component.element).to.exist;
    });

	describe('showBonus() ->', () => {
		it('should call reload outcome again', () => {
            sandbox.spy(component.bonusComponent, 'showBonusMsg');
            sandbox.stub(component, 'reloadOutcome');
            component.showBonus();
            expect(component.bonusComponent.showBonusMsg).to.have.been.calledOnce;
		});
    });
    
	describe('reloadOutcome() ->', () => {
		it('should fetch data from server and show win msg and graphic on reload-button Click', () => {
            it('should trigger `lever(slot machine handle)` when called', () => {
                let reloadButton = component.reloadButtonComponent.element;
                sandbox.stub(component.resultService, 'getResult');
                reloadButton.click();
                expect(component.resultService.getResult).to.have.been.calledOnce;
            });
		});
    });

	describe('getWinTypeMsg() ->', () => {
		it('should return win type Big Win if all values are same', () => {
            expect(component.getWinTypeMsg([1,1,1])).to.equal('Big Win!');
        });

		it('should return win type msg Small Win if two values are same', () => {
            expect(component.getWinTypeMsg([2,1,2])).to.equal('Small Win!');
        });
        
		it('should return win type msg No win', () => {
            expect(component.getWinTypeMsg([1,4,2])).to.equal('No Win!');
		});
	});
});