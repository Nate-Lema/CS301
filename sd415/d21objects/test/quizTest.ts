/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"

import { StudentQuiz, gradeStudent, gradeQuiz, gradeQuizLabeled } from "../src/quiz.js";  //import all of the app.js functions used in the Mocha tests


describe("quiz tests", function () {

    const student1:StudentQuiz = {
        studentId:101,
        quizAnswers:[1, 1, 2,4],
    }
    const student2:StudentQuiz = {
        studentId:102,
        quizAnswers:[2, 1, 2,2]
    }
    const student3:StudentQuiz = {
        studentId:103,
        quizAnswers:[3, 1, 3,4]
    }
    const CORRECT_ANSWERS = [3, 1, 2, 4];
    let oneStuQuizAnswer = student1.quizAnswers;
    const eachStuQuizAnswer = [student1.quizAnswers,student2.quizAnswers,student3.quizAnswers];

    it("gradeStudent -- grade for 1 student", function () {
        assert.deepEqual(gradeStudent(oneStuQuizAnswer, CORRECT_ANSWERS), 3);
    });

    it("gradeQuiz -- grade for all students", function () {
        assert.deepEqual(gradeQuiz( eachStuQuizAnswer, CORRECT_ANSWERS), [3, 2, 3]);
    });

    it("gradeQuizLabeled -- labeled objects grades for all students", function () {
        assert.deepEqual(gradeQuizLabeled(eachStuQuizAnswer, CORRECT_ANSWERS), [[3], [2], [3]]);
    });


});