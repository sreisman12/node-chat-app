var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        //assert from matches value
        //assert text matches up
        //assert createdAt is a number
        var message = generateMessage('Steven', 'Hi there.');

        expect(message.from).toBe('Steven');
        expect(message.text).toBe('Hi there.');
        expect(message.createdAt).toBeA('number');
    });
});