const { strictEqual } = require('assert')
const assert = require('assert')
const { describe } = require('node:test')
const Room = require('../room.js')

describe ('Room', function() {
    let room 

    beforeEach (function () {
        room = new Room(50, false)
    })

    it ('should have an area of square meters', function() {
        const expected = 50
        assert.strictEqual(room.areaInSquareMeters, expected)
    })

    it ('should start not painted', function() {
        const expected = false
        assert.strictEqual(room.isPainted, expected)
    })

    it ('should be able to be painted', function() {
        room.canGetPainted()
        const expected = true
        assert.strictEqual(room.isPainted, expected)
    })
}) 


