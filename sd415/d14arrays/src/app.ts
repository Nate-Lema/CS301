console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));

export function maxOfThree(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}


export function sum(arr: number[]): number {
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }
  return sum;
}


export function multiply(arr: number[]): number {
  let mul = 1;
  for (let ele of arr) {
    mul *= ele;
  }
  return mul;
}


export function findLongestWord(arr: string[]): number {
  let longestLength = 0;
  for (let ele of arr) {
    const currentLength = ele.length;
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }
  return longestLength;
}



export function reverseArray(arr: string[]): string[] {
    // Create a copy of the input array using slice() method
    let copyArray = arr.slice();
    // Reverse the copy of the array
    let reversedString = copyArray.reverse();
    return reversedString;
}

export function reverseArrayInPlace(arr:number[]):number[]{
    let copyArray = arr.slice();
    let reversedNumbers = copyArray.reverse();
    return reversedNumbers;
}

export function scoreExams(studentAnswers: number[][], correctAnswers: number[]): number[] {
    const scores: number[] = [];
  
    for (const student of studentAnswers) {
      let score = 0;
      for (let i = 0; i < student.length; i++) {
        if (student[i] === correctAnswers[i]) {
          score++;
        }
      }
      scores.push(score);
    }
  
    return scores;
  }

export function generateArray(rows: number, cols: number): number[][] {
    const result: number[][] = [];
  
    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        result[i].push(0);
      }
    }
  
    return result;
  }