const Room = function (areaInSquareMeters) {
    this.areaInSquareMeters = areaInSquareMeters;
    this.isPainted = false;
}


Room.prototype.canGetPainted = function () {
    return this.isPainted = true
}

module.exports = Room;
