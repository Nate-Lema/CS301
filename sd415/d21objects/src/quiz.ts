export type StudentQuiz = {
  studentId: number;
  quizAnswers: number[];
};

export function gradeStudent(
  studentAnswers: number[],
  correct: number[]
): number {
  let result = 0;
  for (let i = 0; i < studentAnswers.length; i++) {
    if (studentAnswers[i] === correct[i]) {
      result++;
    }
  }
  return result;
}

export function gradeQuiz(
  studentAnswers: number[][],
  correct: number[]
): number[] {
  let stuQuizResult: number[] = [];
  for (let i = 0; i < studentAnswers.length; i++) {
    let result = 0;
    for (let j = 0; j < studentAnswers[i].length; j++) {
      if (studentAnswers[i][j] === correct[j]) {
        result++;
      }
    }
    stuQuizResult.push(result);
  }
  return stuQuizResult;
}

export function gradeQuizLabeled(
  studentAnswers: number[][],
  correct: number[]
): number[][] {
  let stuQuizResult: number[][] = [];
  for (let i = 0; i < studentAnswers.length; i++) {
    let result: number[] = [];
    let count = 0;
    for (let j = 0; j < studentAnswers[i].length; j++) {
      if (studentAnswers[i][j] === correct[j]) {
        count++;
      }
    }
    result.push(count);
    stuQuizResult.push(result);
  }
  return stuQuizResult;
}

// [
//     { id: 101, score: 3 },
//     { id: 102, score: 2 },
//     { id: 103, score: 3 }]
