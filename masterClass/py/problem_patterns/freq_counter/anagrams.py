import collections

def valid_anagram(orig_str, possible_anag):
    """
    This function returns True if possible_anag is an anagram of orig_str.
    """
    return collections.Counter(orig_str) == collections.Counter(possible_anag)

print(valid_anagram("", "")) # true
print(valid_anagram("aaz", "zaa")) # true
print(valid_anagram("anagram", "nagaram")) # true
print(valid_anagram("rat", "car")) # false
print(valid_anagram("awesome", "awesom")) # false
print(valid_anagram("qwerty", "rwetqy")) # true
print(valid_anagram("texttwisttime", "timetwisttext")) #true