
function doesAliceWin(input: string): boolean {
    for (let letter of input) {
        if (isVowel(letter)) {
            return true;
        }
    }
    return false;
};

function isVowel(letter: string): boolean {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}