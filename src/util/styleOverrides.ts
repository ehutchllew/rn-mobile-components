"use strict";

export function mergeStyles(...styles: any[]) {
    return styles.reduce((acc, styleSchema) => {
        acc = zipMerge(styleSchema, acc);
        return acc;
    }, {});
}

function zipMerge(startingObject: any, reducerObject: any = {}) {
    return Object.entries(startingObject).reduce((acc, [key, value]) => {
        let newVal;
        if (typeof value === "object" && value !== null) {
            newVal = zipMerge(value, reducerObject[key]);
        } else {
            newVal = value;
        }
        acc[key] = newVal;
        return acc;
    }, reducerObject);
}
