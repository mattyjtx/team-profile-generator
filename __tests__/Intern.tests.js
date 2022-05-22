const Intern = require('../lib/Intern');

test('Can create new intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
})

test('can set name to intern object', () => {
    const internName = "Frapp";
    const intern = new Intern("Frapp");
    expect(intern.name).toBe(internName);
})

test('can set id to intern object', () => {
    const internId = 4;
    const intern = new Intern('Frapp', 4);
    expect(intern.id).toBe(internId);
})

test('can get email with getEmail method on intern object', () => {
    const internEmail = "Frapp@gmail.com";
    const intern = new Intern("Frapp", 4, internEmail);
    expect(intern.getEmail()).toBe(internEmail);
})

test("getRole() should return \"Intern\"", () => {
    const internRole = "Intern";
    const intern = new Intern("Frapp", 4, "Frapp@gmail.com", internRole);
    expect(intern.getRole()).toBe(internRole);
})

test("can get name of school attended with getSchool on intern object", () => {
    const schoolName = "TTU";
    const intern = new Intern("Frapp", 4, "Frapp@gmail.com", schoolName);
    expect(intern.getSchool()).toBe(schoolName);
})