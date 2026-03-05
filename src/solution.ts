import * as fs from "fs";

type Direction = -1 | 0 | 1;

function isSafe(levels: number[]): boolean {
  let direction: Direction = 0;

  for (let i = 1; i < levels.length; i++) {
    const diff: number = levels[i] - levels[i - 1];
    const absDiff: number = Math.abs(diff);

    if (absDiff < 1 || absDiff > 3) {
      return false;
    }

    if (direction === 0) {
      direction = diff > 0 ? 1 : -1;
    } else {
      if (direction === 1 && diff < 0) return false;
      if (direction === -1 && diff > 0) return false;
    }
  }

  return true;
}

function countSafeReports(input: string): number {
  const lines: string[] = input.trim().split("\n");

  let safeCount: number = 0;

  for (const line of lines) {
    const levels: number[] = line.split(" ").map(Number);

    if (isSafe(levels)) {
      safeCount++;
    }
  }

  return safeCount;
}

function main(): void {
  const input: string = fs.readFileSync("input.txt", "utf8");
  const result: number = countSafeReports(input);

  console.log("Safe reports:", result);
}

main();
