let student1 = {
    studentId: 101,
    quizAnswers: [1, 1, 2, 4],
};
let student2 = {
    studentId: 102,
    quizAnswers: [2, 1, 2, 2]
};
let student3 = {
    studentId: 103,
    quizAnswers: [3, 1, 3, 4]
};
let stuQuizAnswer = [];
stuQuizAnswer.push(student1.quizAnswers);
stuQuizAnswer.push(student2.quizAnswers);
stuQuizAnswer.push(student3.quizAnswers);
let answer = [3, 1, 2, 4];
let ans = [];
for (let i = 0; i < stuQuizAnswer.length; i++) {
    let count = 0;
    for (let j = 0; j < stuQuizAnswer[i].length; j++) {
        if (stuQuizAnswer[i][j] === answer[i]) {
            count++;
        }
        ans.push(count);
    }
}
export {};
// export function gradeStudent(studentAnswers: number[], correct: number[]): number {
// //IMPLEMENT THIS
// }
// export function gradeQuiz(
// //IMPLEMENT THIS
// export function gradeQuizLabeled(
//IMPLEMENT THIS
