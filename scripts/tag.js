import Utils from "./utils";

export default class Tag {
    constructor(tagName = "div", obj = {}, content = "") {
        this._name = tagName;
        this._obj = obj;
        this._content = content;
    }

    setTagName (name) {
        this._name = name;
        return this;
    }

    setTagAttr (obj) {
        this._obj = obj;
        return this;
    }

    setTagContent (content) {
        this._content = content;
        return this;
    }

    get render() {
        return this._exec();
    }

    _validateTagName() {
        let tagPattern = /[0-9-_ ]+/;
        if (tagPattern.test(this._name)) {
            throw new Error("Not valid: " + this._name);
        }
    }

    _validateAttributes() {
        let objPattern = /^[a-z][a-z_\-\d]+[^_\-]$/;
        for (let key in this._obj) {
            if (!objPattern.test(key)) {
                throw new Error("Not valid: " + key);
            }

        }
    }

    _exec() {
        let singleTagPattern = /area|base|basefont|bgsound|br|col|command|embed|hr|img|isindex|input|keygen|link|meta|param|source|track|wbr/;
        let result = "<" + this._name;

        this._validateTagName();
        this._validateAttributes();

        let i = 0;
        for (let key in this._obj) {
            result += Utils.formatted(" {" + i + "}" + "=" + "\"" + "{" + i + 1 + "}" + "\"", key, this._obj[key]);
            i++;
        }
        singleTagPattern.test(this._name) ? result += "/>" : result += ">" + this._content + "</" + this._name + ">";

        return result;
    }

}




