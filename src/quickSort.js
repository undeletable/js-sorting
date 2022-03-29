import {defaultComparisonFunction, validateComparisonFunction} from './utils';

Array.prototype.quickSort = function (comparisonFunction = defaultComparisonFunction) {
    validateComparisonFunction(comparisonFunction);
    const itemsCount = this.length;
    if (itemsCount < 2) {
        return this;
    }
    const pivot = this[0];
    const leftPart = [];
    const rightPart = [];
    const middlePart = [pivot];
    for (let i = 1; i < itemsCount; i++) {
        const currentItem = this[i];
        const comparisonResult = comparisonFunction(pivot, currentItem);
        if (comparisonResult > 0) {
            leftPart.push(currentItem);
        }
        if (comparisonResult < 0) {
            rightPart.push(currentItem);
        }
        if (comparisonResult === 0) {
            middlePart.push(currentItem);
        }
    }
    this.splice(
        0,
        itemsCount,
        ...leftPart.quickSort(comparisonFunction),
        ...middlePart,
        ...rightPart.quickSort(comparisonFunction)
    );
    return this;
};
