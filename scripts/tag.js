import Utils from "./Utils";

//модель
let data = {
    name: "Evgeniy",
    lastname: "Borzunov",
    age: 23,
    developer: true
};
//еще модель
let data2 = {
    language: "Javascript",
    type: "Dynamical",
    oop: "prototypes",
    iscool: true
};

/*
    первым параметром передается имя требуемого тега
    вторым - модель, которые впоследствии будут атрибутами данного тега
    третий параметр является контентом, который будет содержанием в этом теге
 */
class Tag {
    constructor(tagName = "div", obj = {}, content = "") {
        this.name = tagName;
        this.obj = obj;
        this.content = content;
    }

    get render() {
        return this._exec();
    }

    _validateTagName() {
        let tagPattern = /[0-9-_ ]+/;
        if (tagPattern.test(this.name)) {
            throw new Error("Not valid: " + this.name);
        }
    }

    _validateAttributes() {
        let objPattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
        for (let key in this.obj) {
            if (!objPattern.test(key)) {
                throw new Error("Not valid: " + key);
            }

        }
    }

    _exec() {
        let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
        let result = "<" + this.name;

        this._validateTagName();
        this._validateAttributes();

        let i = 0;
        for (let key in this.obj) {
            result += Utils.formatted(" {" + i + "}" + "=" + "\"" + "{" + i + 1 + "}" + "\"", key, this.obj[key]);
            i++;
        }
        singleTagPattern.test(this.name) ? result += "/>" : result += ">" + this.content + "</" + this.name + ">";

        return result;
    }

}

let tag = new Tag("div", data, "Просто какой то текст");
console.log(tag.render);
let tag2 = new Tag("header", data2, "тест");
console.log(tag2.render);


/*
function tag(tagName="div", attributes={}, content="") {
    //для того, чтобы не изменять глобальный объект, переданный в функцию - создаем их копии.
    let name = tagName.toLowerCase();
    let obj = attributes;
    //без регулярных выражений было не обойтись - с их помощью производится валидация.
    let tagValidatePattern = /[0-9-_ ]+/;
    let objValidatePattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
    let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
    //форма для выходной строки, сформированной по заданному имени тега, атрибутам и контенту.
    let result = "<" + name;
    //простенькая валидация, которую в будущем, возможно - нужно будет дописать.
    validateTagName(name, tagValidatePattern);
    validateAttributes(obj, objValidatePattern);
    //присваиваем аттрибуты тегу в валидный хтмл вид.
    let i = 0;
    for (let key in obj) {
        let temp = Utils.formatted(" {"+ i +"}" + "=" +"\""+ "{"+i+1+"}"+"\"", key, obj[key]);
        result += temp;
        i++;
    }
    //поскольку в хтмл есть парные и одиночные теги - здесь происходит их фильтрация
    singleTagPattern.test(name) ? result += "/>" : result +=">" + content +"</"+name+">";


    return result;
}
*/


//вызываем
/*console.log(tag("div", data, tag("div", data2)));
console.log(tag("div", data, "Просто какой то текст"));
console.log(tag(), "тест без параметров");*/


