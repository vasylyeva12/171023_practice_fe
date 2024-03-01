// пишем функцию `capitalize`. Она должна принять строку. Функция должна удалить с начала и конца строки пробелы (если есть), и вернуть строку, приведенную к нижнему регистру, но первая буква должна быть заглавной. Пример:
// ```
// capitalize('timon'); // Timon
// capitalize('   puMBA  '); // Pumba
// capitalize(' sIMbA'); // Simba
// ```
//               --- РЕШЕНИЕ 1 -----------
// function capitalize(str) {
//     let trimmed = str.trim()
//     console.log(trimed[0].toUpperCase()+ trimmed.slice(1).toLowerCase())
    
// }

// capitalize('timon'); // Timon
// capitalize('   puMBA  '); // Pumba
// capitalize(' sIMbA'); // Simba

//              --- РЕШЕНИЕ 2 -----------

const capitalize = (str) => str.trim()[0].toUpperCase()+str.trim().slice(1).toLowerCase();


//              --- РЕШЕНИЕ 3 -----------
console.log(capitalize('timon'));
console.log(capitalize('   puMBA  '));
console.log(capitalize(' sIMbA'));

function capitalize(string){
    let result = ''
    let start = 1
    for (let i = 0; i < string.length; i++){
        if (string[i] !== ' '){
            if (i === start){
                result += string[i].toUpperCase()
            } else {
                result += string[i].toLowerCase()
            }
        } else {
            start = i + 1
        }
    }
    return result
}