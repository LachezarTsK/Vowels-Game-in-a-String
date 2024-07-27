
using System;

public class Solution
{
    public bool DoesAliceWin(string input)
    {
        foreach (char letter in input)
        {
            if (isVowel(letter))
            {
                return true;
            }
        }
        return false;
    }

    private bool isVowel(char letter)
    {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
