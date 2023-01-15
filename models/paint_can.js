const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint;
}

PaintCan.prototype.checkIfEmpty = function() {
    if(this.litresOfPaint > 0) {
        return false
    }
    else {
        return true
    }
    
}

PaintCan.prototype.emptyPaint = function() {
    this.litresOfPaint = 0
}
        

module.exports = PaintCan;