import collections

def same_frequency(num1, num2):
    """
    Given two positive integers, find out if the two numbers have the same frequency of digits.
    input:
        num1: positive int
        num2: positive int
    output:
        bool
    """
    num1_str = str(num1)
    num2_str = str(num2)
    return collections.Counter(num1_str) == collections.Counter(num2_str)


print(same_frequency(182, 281)) # true
print(same_frequency(34, 14)) # false
print(same_frequency(3589578, 5879385)) # true 
print(same_frequency(22, 222)) # false

def same_frequency_from_scratch(num1, num2):
    num1_str = str(num1)
    num2_str = str(num2)
    memo = {}
    for digit in num1_str:
        dig_count = memo.get(digit)
        if dig_count is None:
            memo[digit] = 1
        else:
            memo[digit] += 1
    
    for digit in num2_str:
        dig_count = memo.get(digit)
        if dig_count is None:
            return False
        memo[digit] -= 1
    
    for value in memo.values():
        if value is not 0:
            return False
    
    return True

print(same_frequency_from_scratch(182, 281)) # true
print(same_frequency_from_scratch(34, 14)) # false
print(same_frequency_from_scratch(3589578, 5879385)) # true 
print(same_frequency_from_scratch(22, 222)) # false