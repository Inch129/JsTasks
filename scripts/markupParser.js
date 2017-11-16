export default class MarkupParser {

    parseHtml (str) {
        let patternTag = /^<\w+/g;
        let patternObj = /\w+="\w+"/g;
        let result = "";

        let temp = str.search(/=/g);
        console.log(temp);
    let test = {};
    test.class = "background";
        console.log(test);
    };
}