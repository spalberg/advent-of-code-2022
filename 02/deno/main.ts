import { sum } from 'https://deno.land/x/iter@v3.0.0/fp.ts';

enum RPS {
  ROCK,
  PAPER,
  SCISSORS,
}

type Round = [RPS, RPS];

const inputToRPS = {
  A: RPS.ROCK,
  B: RPS.PAPER,
  C: RPS.SCISSORS,
  X: RPS.ROCK,
  Y: RPS.PAPER,
  Z: RPS.SCISSORS,
};

function parse(input: string): Round[] {
  return input
    .trim()
    .split('\n')
    .map(
      (line) =>
        line
          .split(' ')
          .map((char) => inputToRPS[char as keyof typeof inputToRPS]) as [
          RPS,
          RPS,
        ],
    );
}

function shapeScore([, shape]: Round): number {
  switch (shape) {
    case RPS.ROCK:
      return 1;
    case RPS.PAPER:
      return 2;
    case RPS.SCISSORS:
      return 3;
  }
}

function outcomeScore([opponentShape, ownShape]: Round): number {
  if (opponentShape === ownShape) return 3;
  if (
    (opponentShape === RPS.ROCK && ownShape === RPS.SCISSORS) ||
    (opponentShape === RPS.SCISSORS && ownShape === RPS.PAPER) ||
    (opponentShape === RPS.PAPER && ownShape === RPS.ROCK)
  )
    return 0;
  return 6;
}

function roundScore(round: Round) {
  return shapeScore(round) + outcomeScore(round);
}

function part1(input: string): number {
  return sum(parse(input).map(roundScore));
}

if (import.meta.main) {
  const input = await Deno.readTextFile('../input.txt');
  console.log(`Part 1: ${part1(input)}`);
}
