const Employee = require('../lib/Employee');

test('Can create new employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test('can set name to employee object', () => {
    const employeeName = "Frapp";
    const employee = new Employee("Frapp");
    expect(employee.name).toBe(employeeName);
})

test('can set id to employee object', () => {
    const employeeId = 1;
    const employee = new Employee('Frapp', 1);
    expect(employee.id).toBe(employeeId);
})

test('can get name with getName method on employee object', () => {
    const employeeName = "Frapp";
    const employee = new Employee("Frapp");
    expect(employee.getName()).toBe(employeeName);
})