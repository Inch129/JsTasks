function tag(tagName, attrs) {
    let name = tagName.toLowerCase();
    let jsonObj = attrs;
    let tagPatternValidate = /[0-9-_ ]+/;
    let attrPatternValidate = /^[a-z][a-z_\-\d]+[^_\-]$/;
    let singleTag = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
    let result = "<" + name;
    validateName(tagPatternValidate);
    validateJson(attrPatternValidate, jsonObj);

    let i = 0;
    for (name in jsonObj) {
        let temp = Utils.formatted(" {"+ i +"}" + "=" +"\""+ "{"+i + 1+"}"+"\"", name, jsonObj[name]);
        result += temp;
        //console.log(temp, "temp");
        i++;
    }

    switch (singleTag.test(tagName)) {
        case true:
            result += "/>";
            break;
        case false:
            result += "></"+tagName+">";
    }

    return result;
}

let obj = {
    name: "Evgeniy",
    lastname: "Borzunov",
    age: 23,
    developer: true
};

console.log(tag("div", obj));
console.log(tag("br", obj));

function validateName(validateTag) {

    if (validateTag.exec(name)) {
        throw Error("Tag name cannot accept numbers, spaces and etc.", tagName);
    }
}

function validateJson(pattern, object) {

    for (let key in object) {
        if(!pattern.test(key)) {
            alert("Не валидное имя атрибута: "+ key);
        }
    }
}