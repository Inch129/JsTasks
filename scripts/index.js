import Tag from "./tag";

let someTag = new Tag();
someTag.setTagAttr({data: "someData"}).setTagName("header").setTagContent("рабочий");
console.log(someTag.render);
