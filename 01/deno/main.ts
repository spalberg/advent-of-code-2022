function parse(input: string): number[][] {
  return input
    .split('\n\n')
    .map((block) => block.split('\n').map((num) => parseInt(num)));
}

function sumCaloriesPerElf(caloriesListPerElf: number[][]): number[] {
  return caloriesListPerElf.map((caloriesList) =>
    caloriesList.reduce((acc, calories) => acc + calories, 0),
  );
}

function part1(input: string): number {
  return Math.max(...sumCaloriesPerElf(parse(input)));
}

function part2(input: string): number {
  const [first, second, third] = sumCaloriesPerElf(parse(input))
    .sort((a, b) => a - b)
    .reverse();
  return first + second + third;
}

if (import.meta.main) {
  const input = await Deno.readTextFile('../input.txt');
  console.log(`Part 1: ${part1(input)}`);
  console.log(`Part 2: ${part2(input)}`);
}
