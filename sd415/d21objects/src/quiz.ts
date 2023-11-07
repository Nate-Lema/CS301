
export interface StudentQuiz {
    studentId: number,
    quizAnswers: number[]
}
let student1:StudentQuiz = {
    studentId:101,
    quizAnswers:[1, 1, 2,4],
}
let student2:StudentQuiz = {
    studentId:102,
    quizAnswers:[2, 1, 2,2]
}
let student3:StudentQuiz = {
    studentId:103,
    quizAnswers:[3, 1, 3,4]
}

//  let eachStuQuizAnswer = student1.quizAnswers;
// stuQuizAnswer.push(student1.quizAnswers)
// stuQuizAnswer.push(student2.quizAnswers)
// stuQuizAnswer.push(student3.quizAnswers)
// let quizAnswer = [3,1,2,4];
// let ans:number[] = [];

export function gradeStudent(studentAnswers: number[], correct: number[]): number {
    let result = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if(studentAnswers[i] === correct[i]){
            result++;
        }
    }
    return result;
}

export function gradeQuiz(studentAnswers: number[][], correct: number[]):number[]{
    let stuQuizResult:number[] = []; 
    for (let i = 0; i < studentAnswers.length; i++) {
        let result = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            for (let k = 0; k < correct.length; k++) {
                if(studentAnswers[i][j] === correct[k]){
                    result++;
                }
            }
        }
        stuQuizResult.push(result);
       
    }
    return stuQuizResult;
}
  



export function gradeQuizLabeled(studentAnswers: number[][], correct: number[]):number[][]{
    let stuQuizResult:number[][] = []; 
    for (let i = 0; i < studentAnswers.length; i++) {
        let result:number[] = [];
        let count = 0
        for (let j = 0; j < studentAnswers[i].length; j++) {
            for (let k = 0; k < correct.length; k++) {
                if(studentAnswers[i][j] === correct[k]){
                    count++;
                }
            }
            result.push(count);
        }
        stuQuizResult.push(result);
       
    }
    return stuQuizResult;
}






