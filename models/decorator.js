const Room = require("./room");

const Decorator = function () {
    this.paintStock = [];
}

Decorator.prototype.addPaintToStock = function(paint) {
    return this.paintStock.push(paint)
}

Decorator.prototype.totalLitresOfPaint = function(paint1, paint2) {
    total = 0
    this.addPaintToStock(paint1, paint2)
    total += (paint1 + paint2)
    return total
}

Decorator.prototype.calculateIfEnoughPaint = function(area) {
    // if enough paint return true
    if (this.totalLitresOfPaint >= area) {
        return true
    }
    else {
        return false
    }
}

Decorator.prototype.paintTheRoom = function(paint, area) {
    if (this.totalLitresOfPaint(paint) >= area) {
        this.room.isPainted = true
    }
    else {
        return 'Not enough paint'
    }
    
}

// Decorator.prototype.paintTheRoom = function() {
//     if (this.calculateIfEnoughPaint()) {
//         this.room.isPainted = true
//     }
//     else {
//         return 'Not enough paint'
//     }
    
// }


module.exports = Decorator;