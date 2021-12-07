import unittest
from unittest.case import expectedFailure

def anagram_check(string1, string2):
    str_map1 = string_map(string1)
    str_map2 = string_map(string2)
    return str_map1 == str_map2

def string_map(string):
    str_map = {}
    for char in list(string):
        if char.isalnum():
            in_map = str_map.get(char)
            if in_map is None:
                str_map[char] = 1
            else:
                str_map[char] += 1
    return str_map
    

class AnagramTestCase(unittest.TestCase):
    def test_string_map_dinosaur(self):
        expected_map = {
            "d" : 1,
            "i" : 1,
            "n" : 1,
            "o" : 1,
            "s" : 1,
            "a" : 1,
            "u" : 1,
            "r" : 1
        }
        self.assertEqual(string_map("dinosaur"), expected_map)

    def test_string_map_middle_earth(self):
        expected_map = {
            "m": 1,
            "i" : 1,
            "d" : 2,
            "l" : 1,
            "e" : 2,
            "a" : 1,
            "r" : 1,
            "t" : 1,
            "h" : 1
        }
        self.assertEqual(string_map("middle earth"), expected_map)

    def test_anagram_check_1(self):
        self.assertEqual(anagram_check("go go go", "gggooo"), True)

    def test_anagram_check_2(self):
        self.assertEqual(anagram_check("abc", "cba"), True)

    def test_anagram_check_3(self):
        self.assertEqual(anagram_check("hi man", "hi      man"), True)

    def test_anagram_check_4(self):
        self.assertEqual(anagram_check("aabbcc", "aabbc"), False)
        
    def test_anagram_check_5(self):
        self.assertEqual(anagram_check("123", "1 2"), False)



unittest.main()