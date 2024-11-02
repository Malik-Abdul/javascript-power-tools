var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var withoutOC;
(function (withoutOC) {
    var Shape = /** @class */ (function () {
        function Shape(type, radius, length, breath) {
            if (type === void 0) { type = ""; }
            if (radius === void 0) { radius = null; }
            if (length === void 0) { length = null; }
            if (breath === void 0) { breath = null; }
            this.type = type;
            this.radius = radius;
            this.length = length;
            this.breath = breath;
        }
        return Shape;
    }());
    withoutOC.Shape = Shape;
    var CalculateArea = /** @class */ (function () {
        function CalculateArea(shape) {
            this.shape = shape;
        }
        CalculateArea.prototype.area = function () {
            var _a, _b;
            var area = 0;
            if (((_a = this.shape.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "circle") {
                area = this.shape.radius
                    ? Math.PI * this.shape.radius * this.shape.radius
                    : 0;
            }
            if (((_b = this.shape.type) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == "rectangle") {
                area =
                    this.shape.length && this.shape.breath
                        ? this.shape.length * this.shape.breath
                        : 0;
            }
            return area;
        };
        return CalculateArea;
    }());
    withoutOC.CalculateArea = CalculateArea;
    console.log("=========Without Open Closed Principal============");
    var circleShape = new withoutOC.Shape("circle", 5);
    var circleArea = new withoutOC.CalculateArea(circleShape).area();
    console.log("Circle Area: ".concat(circleArea));
    var rectangleShape = new withoutOC.Shape("Rectangle", null, 3, 4);
    var rectangleArea = new withoutOC.CalculateArea(rectangleShape).area();
    console.log("Rectangle Area: ".concat(rectangleArea));
})(withoutOC || (withoutOC = {}));
var withOC;
(function (withOC) {
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        return Shape;
    }());
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(radius) {
            var _this = _super.call(this) || this;
            _this.radius = radius;
            return _this;
        }
        Circle.prototype.area = function () {
            return Math.PI * this.radius * this.radius;
        };
        return Circle;
    }(Shape));
    withOC.Circle = Circle;
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(length, breath) {
            var _this = _super.call(this) || this;
            _this.lenght = length;
            _this.breath = breath;
            return _this;
        }
        Rectangle.prototype.area = function () {
            return this.lenght * this.breath;
        };
        return Rectangle;
    }(Shape));
    withOC.Rectangle = Rectangle;
    console.log("=========With Open Closed Principal============");
    console.log("Areac of Circle: ".concat(new Circle(5).area()));
    console.log("Areac of Rectangle: ".concat(new Rectangle(3, 4).area()));
})(withOC || (withOC = {}));
