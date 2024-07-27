
package main

import "fmt"

func doesAliceWin(input string) bool {
    for _, letter := range input {
        if isVowel(letter) {
            return true
        }
    }
    return false
}

func isVowel(letter rune) bool {
    return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
}
