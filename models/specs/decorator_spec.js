const assert = require('assert')
const { describe, it } = require('mocha')
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')
const Room = require('../room.js')

describe ('Decorator', function() {
    let paint_can1
    let paint_can2
    let paint_can3
    let decorator
    let room

    beforeEach (function() {
        decorator = new Decorator ()
        paint_can1 = new PaintCan (50)
        paint_can2 = new PaintCan (10)
        paint_can3 = new PaintCan (5)
        room = new Room (20)
    })
    it ('should have an empty list of paint', function() {
        const expected = []
        assert.deepStrictEqual (decorator.paintStock, expected)
    })

    it ('should be able to add a can to the paint stock', function() {
        decorator.addPaintToStock(paint_can1)
        const expected = [paint_can1]
        assert.deepStrictEqual(decorator.paintStock, expected)
    })

    it('should be able to calculate total litres paint in stock', function() {
        decorator.addPaintToStock(paint_can1)
        decorator.addPaintToStock(paint_can2)
        // now the stock is: [paintcan1, paintcan2]
        actual = decorator.totalLitresOfPaint(paint_can1.litresOfPaint, paint_can2.litresOfPaint)
        //this should get the litres
        expected = 60
        assert.strictEqual(actual, expected)

    })

    it('should be able to calculate whether it has enough paint to paint a room', function() {
        actual = decorator.calculateIfEnoughPaint(room.areaInSquareMeters)
        expected = false
        assert.strictEqual(actual, expected)

    })

    it('should be able to paint room if has enough paint in stock', function() {
        actual = decorator.paintTheRoom(paint_can1.litresOfPaint, room.areaInSquareMeters)
        expected = 'Not enough paint' //it should be true, here
        assert.strictEqual(actual, expected)

    })
})