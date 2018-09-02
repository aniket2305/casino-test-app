import BonusComponent from './bonus.component';

describe('BonusComponent ->', () => {

	let component;
	let sandbox;

	beforeEach(() => {
		component = new BonusComponent();
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should be created successfully', () => {
		expect(component).to.exist;
    });

	it('should have element property', () => {
		expect(component.element).to.exist;
	});

	describe('showBonusComp() ->', () => {
		it('should set class show class to element', () => {
			component.showBonusComp();
			expect(component.element.className).to.be.equal('show');
		});
	});

	describe('hideBonusComp() ->', () => {
		it('should set class hide class to element', () => {
			component.hideBonusComp();
			expect(component.element.className).to.be.equal('hide');
		});
    });
    
	describe('showBonusMsg() ->', () => {
		it('should call setTimeout to hide the bonus component', () => {
			sandbox.spy(global, 'setTimeout');
			sandbox.spy(component, 'hideBonusComp');

			return component.showBonusMsg()
				.then(() => {
					expect(setTimeout).to.be.calledOnce;
					expect(component.hideBonusComp).to.be.calledOnce;
				});
		});
	});
});