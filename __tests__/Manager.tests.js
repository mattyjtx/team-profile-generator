const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Can create new manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
})

test('can set name to manager object', () => {
    const managerName = "Frapp";
    const manager = new Manager("Frapp");
    expect(manager.name).toBe(managerName);
})

test('can set id to manager object', () => {
    const managerId = 1;
    const manager = new Manager('Frapp', 1);
    expect(manager.id).toBe(managerId);
})

test('can get email with getEmail method on manager object', () => {
    const managerEmail = "Frapp@gmail.com";
    const manager = new Manager("Frapp", 1, managerEmail);
    expect(manager.getEmail()).toBe(managerEmail);
})

test("getRole() should return \"Manager\"", () => {
    const managerRole = "Manager";
    const manager = new Manager("Frapp", 1, managerRole);
    expect(manager.getRole()).toBe(managerRole);
})

test('can get office number with getOfficeNumber on manager object', () => {
    const officeNumber = 2813308004;
    const manager = new Manager("Frapp", 1, "Frapp@gmail.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})