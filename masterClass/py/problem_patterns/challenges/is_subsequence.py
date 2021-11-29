def is_subsequence(str1, str2):
    """
    Check if the characters in the 1st string form a substring of the second.
    I.e., do the chars from 1st string all appear in 2nd string, without their order changing
    return bool
    """
    ptr1 = 0
    ptr2 = 0
    while ptr1 < len(str1):
        while str2[ptr2] != str1[ptr1]:
            if ptr2 + 1 == len(str2):
                return False
            ptr2 += 1
        ptr1 += 1
    return True

print(is_subsequence("hello", "helloworld")) # true
print(is_subsequence("sing", "sting")) # true
print(is_subsequence("abc", "abracadabra")) # true
print(is_subsequence("abc", "acb")) # false