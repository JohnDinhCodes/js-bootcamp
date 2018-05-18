// Students score, total posiible score
// 15/20 -> You got a C (75)!
// A 90-100, B 80-89, C 70-79, D 68-69, F 0-59

let gradeCalculator = function (score, total) {

    let grade = null

    let percentage = (score / total) * 100

    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 68) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percentage}%)!`
    
}

let algebraScore = gradeCalculator(100, 100)
console.log(algebraScore)
