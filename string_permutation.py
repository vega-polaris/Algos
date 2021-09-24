def string_permutations(string):
    if len(string) == 1:
        return 1
    return len(string) * string_permutations(string[:-1])
print(string_permutations("abcsfse"))