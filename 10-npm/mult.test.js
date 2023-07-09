const mult = require("./mult");

test("Should return 50", () => {
    expect(mult(5, 10)).toBe(50);
});
test("Should return 20", () => {
    expect(mult(2, 10)).toBe(20);
});
test("Should return 10", () => {
    expect(mult(1, 10)).toBe(10);
});
test("Should return 0", () => {
    expect(mult(0, 10)).toBe(0);
});
test("Should return 500", () => {
    expect(mult(5, 100)).toBe(500);
});
