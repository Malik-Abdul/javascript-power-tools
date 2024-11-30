// Polymorphism is a concept in object-oriented programming where a single function, method, or class behaves differently depending on the context in which it is used. Here’s an example that demonstrates polymorphism through inheritance:
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
var Employee = /** @class */ (function () {
    function Employee(name, basicSalary) {
        this.name = name;
        this.basicSalary = basicSalary;
    }
    Employee.prototype.calculateSalary = function () {
        return this.basicSalary;
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, basicSalary, bonus) {
        var _this = _super.call(this, name, basicSalary) || this;
        _this.bonus = bonus;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.basicSalary + this.bonus;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(name, hoursWorked, hourlyRate) {
        var _this = _super.call(this, name, hourlyRate * hoursWorked) || this;
        _this.hoursWorked = hoursWorked;
        _this.hourlyRate = hourlyRate;
        return _this;
    }
    PartTimeEmployee.prototype.calculateSalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
function printDetail(employee) {
    console.log("Employee: ".concat(employee.name, " 's total salary is: ").concat(employee.calculateSalary()));
}
var employeeN = new Employee("Awan", 90000);
var fullTimeEmployee = new FullTimeEmployee("Malik", 70000, 30000);
var partTimeEmployee = new PartTimeEmployee("AG", 176, 1000);
printDetail(employeeN);
printDetail(fullTimeEmployee);
printDetail(partTimeEmployee);
