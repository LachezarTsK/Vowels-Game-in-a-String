
/**
 * @param {string} input
 * @return {boolean}
 */
var doesAliceWin = function (input) {
    for (let letter of input) {
        if (isVowel(letter)) {
            return true;
        }
    }
    return false;
};

/**
 * @param {string} letter
 * @return {boolean}
 */
function isVowel(letter) {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
