let Utils = {

    formatted: function (sourceString) {

        let source = sourceString;
        //количество скобок со значениями
        let counter = 0;
        let result;
        //поскольку псевдо-массив аргументов на самом деле является объектом, и не имеет соо-вующих методов
        //то приводим его к массиву
        let values = [];
        for (let i = 0; i < arguments.length; i++) {
            values[i] = arguments[i + 1];
        }
        //регулярное выражение ищет паттерн вида "{n}" - где n, любое число.
        result = source.replace(/\{\d+\}/g, function () {
            let result = values[counter];
            counter++;

            return result;
        });


        return result;
    }
};

export default Utils;

