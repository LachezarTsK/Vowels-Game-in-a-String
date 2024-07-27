
public class Solution {

    public boolean doesAliceWin(String input) {
        for (char letter : input.toCharArray()) {
            if (isVowel(letter)) {
                return true;
            }
        }
        return false;
    }

    private boolean isVowel(char letter) {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
