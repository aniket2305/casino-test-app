import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();

chai.should();
chai.use(sinonChai);

// testing globals defined
global.expect = chai.expect;
global.sinon = sinon;
global.document = mock.getDocument();
