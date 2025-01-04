class Solution {
public:
    bool isFreqSame(int freq1[26], int freq2[26]) {
        for (int i = 0; i < 26; i++) {
            if (freq1[i] != freq2[i]) {
                return false;
            }
        }
        return true;
    }
    bool checkInclusion(string s1, string s2) {

        int freq[26] = {0};

        for (int i = 0; i < s1.length(); i++) {
            freq[s1[i] - 'a']++;
        }

        int windowSize = s1.length();

        for (int i = 0; i < s2.length(); i++) {
            int windowInd = 0, ind = i;
            int windowFreq[26] = {0};
            while (windowInd < windowSize && ind < s2.length()) {
                windowFreq[s2[ind] - 'a']++;
                windowInd++;
                ind++;
            }
            if (isFreqSame(freq, windowFreq)) {
                return true;
            }
        }
        return false;
    }
};