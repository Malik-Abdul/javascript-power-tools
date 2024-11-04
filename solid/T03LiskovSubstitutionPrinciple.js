var LiskovSubstitutionPrinciple;
(function (LiskovSubstitutionPrinciple) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.area = function () {
            return Math.PI * this.radius * this.radius;
        };
        return Circle;
    }());
    var Rectangle = /** @class */ (function () {
        function Rectangle(length, breath) {
            this.length = length;
            this.breath = breath;
        }
        Rectangle.prototype.area = function () {
            return this.length * this.breath;
        };
        return Rectangle;
    }());
    console.log("With Parent Object type");
    var circle = new Circle(5);
    console.log("Area of Circle: ".concat(circle.area()));
    var rectangle = new Rectangle(3, 4);
    console.log("Rectangle of Circle: ".concat(rectangle.area()));
    console.log("With Child Object type");
    var circle1 = new Circle(5);
    console.log("Area of Circle: ".concat(circle1.area()));
    var rectangle1 = new Rectangle(3, 4);
    console.log("Rectangle of Circle: ".concat(rectangle1.area()));
})(LiskovSubstitutionPrinciple || (LiskovSubstitutionPrinciple = {}));
