const ALLOWED_COMPARISON_FUNCTION_TYPES = ['function', 'undefined'];

export const defaultComparisonFunction = (itemA, itemB)  => {
    if (itemA == itemB) {
        return 0;
    }
    if (itemA > itemB) {
        return 1;
    }
    if (itemA < itemB) {
        return -1;
    }
};

export const validateComparisonFunction = comparisonFunction => {
    if (!ALLOWED_COMPARISON_FUNCTION_TYPES.includes(typeof comparisonFunction)) {
        throw new TypeError('The comparison function argument must be either a function or undefined');
    }
};
