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
var AbstractClassFactoryFunction;
(function (AbstractClassFactoryFunction) {
    var Student = /** @class */ (function () {
        function Student(id, name) {
            this.id = id;
            this.name = name;
        }
        // Concrete method provides common functionality across all subclasses
        Student.prototype.displayInfo = function () {
            console.log("Name: ".concat(this.name, ", Id: ").concat(this.id));
        };
        // Default fine behavior, subclasses can override if needed
        Student.prototype.applyFine = function () {
            console.log("No fine applied.");
        };
        return Student;
    }());
    var FulltimeStudent = /** @class */ (function (_super) {
        __extends(FulltimeStudent, _super);
        function FulltimeStudent(id, name) {
            return _super.call(this, id, name) || this;
        }
        FulltimeStudent.prototype.calculateFee = function () {
            return 5000; // Fee logic specific to full-time students
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
            return this.creditHours * 300; // Fee logic specific to part-time students
        };
        ParttimeStudent.prototype.applyFine = function () {
            if (this.creditHours < 21) {
                console.log("Fine applied: credit hours are less than 21.");
            }
            else {
                console.log("No fine applied: sufficient credit hours.");
            }
        };
        return ParttimeStudent;
    }(Student));
    // Factory function to demonstrate abstraction
    function createStudent(type, id, name, creditHours) {
        if (type === "Fulltime") {
            return new FulltimeStudent(id, name);
        }
        else if (type === "Parttime" && creditHours !== undefined) {
            return new ParttimeStudent(id, name, creditHours);
        }
        throw new Error("Invalid student type or missing credit hours.");
    }
    // Usage
    var fulltimeStudent = createStudent("Fulltime", 20018, "Malik");
    var parttimeStudent = createStudent("Parttime", 2000, "AG", 20);
    fulltimeStudent.displayInfo();
    console.log("Total Fee: ".concat(fulltimeStudent.calculateFee()));
    fulltimeStudent.applyFine();
    parttimeStudent.displayInfo();
    console.log("Total Fee: ".concat(parttimeStudent.calculateFee()));
    parttimeStudent.applyFine();
})(AbstractClassFactoryFunction || (AbstractClassFactoryFunction = {}));
