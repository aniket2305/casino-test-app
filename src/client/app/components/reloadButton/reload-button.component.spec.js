import ReloadButtonComponent from './reload-button.component';

describe('ReloadButtonComponent ->', () => {
	let component;

	beforeEach(() => {
		component = new ReloadButtonComponent();
	});

	it('should exists component', () => {
		expect(component).to.exist;
	});

	it('should be created with HTML element', () => {
        expect(component.element).to.exist;
    });
    
	it('should have proper type and class', () => {
		let reloadButton = component.element;
		expect(reloadButton).to.exist;
		expect(reloadButton.type).to.be.equal('button');
		expect(reloadButton.className).to.be.equal('reload-button');
	});

});
