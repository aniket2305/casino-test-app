import WinOutcomeMsgComponent from './win-outcome-msg.component';

describe('WinOutcomeMsgComponent ->', () => {
	let component;

	beforeEach(() => {
		component = new WinOutcomeMsgComponent();
	});

	it('should exists component', () => {
		expect(component).to.exist;
	});

	it('should be created with HTML element', () => {
        expect(component.element).to.exist;
	});

	describe('message setter() ->', () => {
		it('should set inner HTML on set of property value', () => {
			component.message = 'Small Win!';
			expect(component.element.textContent).to.be.equal('Small Win!');
		});
	});
});
