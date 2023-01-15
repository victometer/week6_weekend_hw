const assert = require('assert')
const { describe, it } = require('mocha')
const PaintCan = require('../paint_can.js')


describe ('PaintCan', function() {
    let paint_can

    beforeEach (function() {
        paint_can = new PaintCan (50)
    })

    it ('should have a number of litres of paint', function () {
        const expected = 50
        assert.strictEqual(paint_can.litresOfPaint, expected)
    })

    it('should be able to check if its empty', function() {
        
        const actual = paint_can.checkIfEmpty()
        const expected = false
        assert.strictEqual(actual, expected)
    })

    it('should be able to empty itself of paint', function() {
        paint_can.emptyPaint()
        const actual = paint_can.litresOfPaint
        const expected = 0
        assert.strictEqual(actual, expected)
    })

})
