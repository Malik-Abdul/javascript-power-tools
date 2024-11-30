// -----------------------
// -----------------------
// Abstraction
// -----------------------
// Abstraction is about hiding the complexity of code and showing only the essential features of an object or a system. It's commonly implemented using classes and methods.
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
// -----------------------
// Abstract class
// -----------------------
// An abstract class is a class in object-oriented programming that cannot be instantiated on its own. Instead, it serves as a blueprint for other classes. Abstract classes are typically used to define common behavior or characteristics that can be shared among multiple derived classes, while leaving the implementation of some methods up to the subclasses.
var AbstractClass;
(function (AbstractClass) {
    var Student = /** @class */ (function () {
        function Student(id, name) {
            this.id = id;
            this.name = name;
        }
        Student.prototype.displayInfo = function () {
            console.log("Name: ".concat(this.name, ", Id: ").concat(this.id));
        };
        Student.prototype.applyFine = function () {
            console.log("No Fine Applied");
        };
        return Student;
    }());
    var FulltimeStudent = /** @class */ (function (_super) {
        __extends(FulltimeStudent, _super);
        function FulltimeStudent(id, name) {
            return _super.call(this, id, name) || this;
        }
        FulltimeStudent.prototype.calculateFee = function () {
            return 5000;
        };
        return FulltimeStudent;
    }(Student));
    var ParttimeStudent = /** @class */ (function (_super) {
        __extends(ParttimeStudent, _super);
        function ParttimeStudent(id, name, creditHours) {
            var _this = _super.call(this, id, name) || this;
            _this.creditHours = creditHours;
            return _this;
        }
        ParttimeStudent.prototype.calculateFee = function () {
            return this.creditHours * 300;
        };
        ParttimeStudent.prototype.applyFine = function () {
            if (this.creditHours < 21) {
                console.log("Fine Applied as credit hours are less than 21");
            }
        };
        return ParttimeStudent;
    }(Student));
    var fulltimeStudent = new FulltimeStudent(20018, "Malik");
    var parttimeStudent = new ParttimeStudent(2000, "AG", 20);
    fulltimeStudent.displayInfo();
    console.log("Total Fee: ".concat(fulltimeStudent.calculateFee()));
    fulltimeStudent.applyFine();
    parttimeStudent.displayInfo();
    console.log("Total Fee: ".concat(parttimeStudent.calculateFee()));
    parttimeStudent.applyFine();
    var parttimeStudent2 = new ParttimeStudent(2000, "AG", 21);
    parttimeStudent2.displayInfo();
    console.log("Total Fee: ".concat(parttimeStudent2.calculateFee()));
    parttimeStudent2.applyFine();
    // const student = new Student(); // Error: Cannot create an instance of an abstract class.
})(AbstractClass || (AbstractClass = {}));
