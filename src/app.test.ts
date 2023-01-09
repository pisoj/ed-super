import * as _ from "./app";

test("Average calculation 1", () => {
    const numbers = [4, 5, 2, 3, 5, 2, 4, 3, 5, 1, 3, 4];
    const average = "3.42";
    expect(_.Average.format(_.Average.calculate(numbers))).toBe(average);
});

test("Average calculation 2", () => {
    const numbers = [5, 5, 5, 5, 5];
    const average = "5.00";
    expect(_.Average.format(_.Average.calculate(numbers))).toBe(average);
});

test("Average calculation 3", () => {
    const numbers = [3, 4, 5, 5, 3];
    const average = "4.00";
    expect(_.Average.format(_.Average.calculate(numbers))).toBe(average);
});
