var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var latitude = 1;
        var longitude = 1;
        var from = 'Admin';

        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.from).toBe(from);
        expect(message.createdAt).toBeA('number');
        expect(message.url).toBe('http://www.google.com/maps?q=1,1')
    });
});