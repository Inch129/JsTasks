function formatted(sourceString) {
    //количество скобок со значениями
    let counter = 0;
    let result;
    //поскольку псевдо-массив аргументов на самом деле является объектом, и не имеет соо-вующих методов
    //то приводим его к массиву
    let values = [];
    for (let i = 0; i < arguments.length; i++) {
        values[i] = arguments[i + 1];
    }
    //регулярное выражение ищет паттерн типа "{n}" - где n, любое число.
    result = sourceString.replace(/\{\d+\}/g, function () {
        let result = values[counter];
        counter++;
        return result;

    });


    return result;
}




















// function formatted(sourceString) {
//     console.log(sourceString, "- изначальная строка");
//     let braceArray = [];
//     let resultArray = [];
//
//     for (var j = 0; j < sourceString.length; j++) {
//         if (sourceString.charAt(j) == "{") {
//             braceArray.push(j);
//         }
//     }
//     ;
//
//
//     for (var i = 0; i < braceArray.length; i++) {
//         if (i !== 0) {
//             resultArray.push(sourceString.slice(braceArray[i] + 3, braceArray[i + 1]));
//             resultArray.push(arguments[i + 1])
//         } else {
//             resultArray.push(sourceString.slice(0, braceArray[0]));
//             resultArray.push(arguments[i + 1]);
//         }
//
//     }
//     ;
//
//     let result = resultArray.join(" ");
//
//     return result;
// }
//
//
// console.log(formatted("строчка , еще строчка, fff {0} df {1} тыртыр {2}", "это_идет_вместо_0", "просто тест", "тестище", "для тыртыр"));