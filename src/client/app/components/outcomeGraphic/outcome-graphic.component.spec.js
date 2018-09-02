import OutcomeGraphicComponent from './outcome-graphic.component';

describe('OutcomeGraphicComponent ->', () => {
	let component;

	beforeEach(() => {
		component = new OutcomeGraphicComponent();
	});

	it('should exists component', () => {
		expect(component).to.exist;
	});

	it('should be created with HTML element', () => {
        expect(component.element).to.exist;
    });

    describe('createChildElements() ->', () => {
        it('should create three child elemet and add graphic-blank class to each element', () => {
            expect(component.element.childNodes).to.have.lengthOf(3);
            const children = component.element.childNodes;
            expect(children[0].className).to.equal('graphic-blank');
        });
    });

    describe('setGraphic() ->', () => {
        it('should set class based on random number passed to child elements', () => {
            component.setGraphic([1,4,0]);
            const children = component.element.childNodes;
            expect(children[0].className).to.equal('graphic-1');
            expect(children[1].className).to.equal('graphic-4');
            expect(children[2].className).to.equal('graphic-0');
        });
    });
});