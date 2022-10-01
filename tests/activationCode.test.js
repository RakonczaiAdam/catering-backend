const {generate} = require("../src/helpers/activationCode")

test('Generate coupon code.', () => {
    const code = generate();
    expect(code).toMatch(/[\w\d][\w\d][\w\d] [\w\d][\w\d][\w\d] [\w\d][\w\d][\w\d]/);
})