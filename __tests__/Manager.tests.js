const Manager = require('../lib/Employee');

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

