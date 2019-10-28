/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (arguments) {
        return func.apply(context, args.concat(arguments));
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
let result = 0;
function sum (x) {
    if (result === undefined) {
        return result;
    }
    
    else {
        result += x;
    }
    return result;
}

module.exports = {
    customBind,
    sum
};
