
#include <string>
using namespace std;

class Solution {

public:
    bool doesAliceWin(const string& input) const {
        for (const auto& letter : input) {
            if (isVowel(letter)) {
                return true;
            }
        }
        return false;
    }

private:
    bool isVowel(char letter) const {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
};
