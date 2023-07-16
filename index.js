//for tasks from LeetCode and CodeWars
function evenLast(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0) {
            sum += numbers[i] * numbers[numbers.length - 1];
        }
    }
    return sum;
}
console.log(evenLast([2, 3, 4, 5]));
