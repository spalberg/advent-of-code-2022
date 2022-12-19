import { A, D, N, O, pipe, S } from 'https://esm.sh/@mobily/ts-belt@3.13.1';

const scores = D.fromPairs(
  pipe(
    '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    S.split(''),
    A.zipWithIndex,
  ),
);

function part1(input: string): number {
  return pipe(
    input,
    S.split('\n'),
    A.map((line) =>
      pipe(line, S.splitAt(line.length / 2), ([a, b]) =>
        A.intersection(S.split(a, ''), S.split(b, '')),
      ),
    ),
    A.flat,
    A.map((c) => scores[c]),
    A.reduce(0, N.add),
  );
}

function part2(input: string): number {
  return pipe(
    input,
    S.split('\n'),
    A.splitEvery(3),
    A.map((g) =>
      pipe(g, A.uncons, O.getExn, ([head, tail]) =>
        pipe(
          tail,
          A.map(S.split('')),
          A.reduce(S.split(head, ''), A.intersection),
          A.map((i) => i as string),
        ),
      ),
    ),
    A.flat,
    A.map((c) => scores[c]),
    A.reduce(0, N.add),
  );
}

if (import.meta.main) {
  const input = await Deno.readTextFile('../input.txt');
  console.log(`Part 1: ${part1(input)}`);
  console.log(`Part 2: ${part2(input)}`);
}
