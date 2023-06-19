
export class LabelTransform {
    public static transformLabel(key: string):string {
        const spaceCase = /^[\w ]$/;
        const camelCase = /^[A-Za-z]+$/;
        const snakeCase = /^[\w\-_]+$/;
        if (key.match(spaceCase)) {
            return LabelTransform.transformSpaceCase(key);
        } else if (key.match(camelCase)) {
            return LabelTransform.transformCamelCase(key);
        } else if (key.match(snakeCase)) {
            return LabelTransform.transformSnakeCase(key);
        }
        return key;
    }
    public static transformCamelCase(key: string):string {
        let keyMatch;
        let position = 0;
        const capsRegex = /([A-Z])/g;
        let returnWord = "";
        while (keyMatch = capsRegex.exec(key)) {
            const substr = key.substring(position, keyMatch.index);
            if (substr.length >= 1) {
                returnWord += (position >= 1? ' ': '') + substr[0].toLocaleUpperCase() + substr.substring(1);
            }
            position = keyMatch.index;
        }
        returnWord += (position >= 1? ' ': '') + key.substring(position)[0].toLocaleUpperCase() + key.substring(position + 1);
        return returnWord;
    }
    public static transformSnakeCase(key: string):string {
        const snakeRegex = /[\-_]+/g;
        const snakeSplit = key.split(snakeRegex).map((a) => { a[0].toLocaleUpperCase() + a.substring(1)})
        return snakeSplit.join(" ");
    }
    public static transformSpaceCase(key: string):string {
        let keyMatch;
        let position = 0;
        const spaceRegex = / +/g;
        const spaceSplit = key.split(spaceRegex).map((a) => { a[0].toLocaleUpperCase() + a.substring(1)})
        return spaceSplit.join(" ");
    }
}