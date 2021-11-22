def are_there_duplicates(*args):
    memo = {}
    for arg in args:
        if memo.get(arg):
            return True
        memo[arg] = True
    return False

print(are_there_duplicates(1, 2, 3)) # False
print(are_there_duplicates(1, 2, 2)) # True
print(are_there_duplicates("a", "b", "c", "a")) # True