import Tag from "./tag";
import Parser from "./markupParser";

let parser = new Parser();
console.log('<header class=\"required\" id=\"name\"><input type=\"email\" placeholder=\"email\"></div> ');

parser.parseHtml('<header class=\"required\" id=\"name\"><input type=\"email\" placeholder=\"email\"></div> ');

let someTag = new Tag();
someTag.setTagAttr({data: "someData"}).setTagName("header").setTagContent("рабочий");
console.log(someTag.render);
let anotherTag = new Tag("div", {class:"test", some: "pspsps"}, "content");
console.log(anotherTag.render);
let anotherTag2 = new Tag("textarea", {some: "pspsps", pfpf: "ftftft"}, "content");
console.log(anotherTag2.render);