const Engineer = require('../lib/Engineer');

test('Can create new engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
})

test('can set name to engineer object', () => {
    const engineerName = "Frapp";
    const engineer = new Engineer("Frapp");
    expect(engineer.name).toBe(engineerName);
})

test('can set id to engineer object', () => {
    const engineerId = 3;
    const engineer = new Engineer('Frapp', 3);
    expect(engineer.id).toBe(engineerId);
})

test('can get email with getEmail method on engineer object', () => {
    const engineerEmail = "Frapp@gmail.com";
    const engineer = new Engineer("Frapp", 1, engineerEmail);
    expect(engineer.getEmail()).toBe(engineerEmail);
})

test("getRole() should return \"Engineer\"", () => {
    const engineerRole = "Engineer";
    const engineer = new Engineer("Frapp", 1, "Frapp@gmail.com", engineerRole);
    expect(engineer.getRole()).toBe(engineerRole);
})

test('can get github username via gitGithub on engineer object', () => {
    const githubUserName = "githubUser";
    const engineer = new Engineer("Frapp", 1, "Frapp@gmail.com", githubUserName);
    expect(engineer.getGithub()).toBe(githubUserName);
})