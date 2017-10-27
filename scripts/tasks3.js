let data = {
    name: "Evgeniy",
    lastname: "Borzunov",
    age: 23,
    developer: true
};

function tag(tagName, attributes, content) {
    let name = tagName.toLowerCase();
    let obj = attributes;
    let tagValidatePattern = /[0-9-_ ]+/;
    let objValidatePattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
    let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
    let result = "<" + name;

    validateTagName(name, tagValidatePattern);
    validateAttributes(obj, objValidatePattern);

    let i = 0;
    for (let key in obj) {
        let temp = Utils.formatted(" {"+ i +"}" + "=" +"\""+ "{"+i + 1+"}"+"\"", key, obj[key]);
        result += temp;
        i++;
    }
    singleTagPattern.test(name) ? result += "/>" : result +=">" + content +"</"+name+">";


    return result;
}

function validateTagName(tagName, pattern, error = "Not valid") {
    if (pattern.test(tagName)) {
        throw new Error(error +": "+ tagName);
    }
}

function validateAttributes(attributes, pattern, error = "Not valid") {
    for (let key in attributes) {
        if (!pattern.test(key)) {
            throw new Error(error+": "+key);
        }

    }
}
console.log(tag("div", data, "просто какой то контент"));
console.log(tag("br", data, "он оказался здесь"));
console.log(tag("header", data, "div"));

