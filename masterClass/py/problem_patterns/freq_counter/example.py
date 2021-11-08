import collections
print(collections.__path__)

"""
This function accepts two arrays. 
It should return true if every value in 1st array has a corresponding value squared in the other array. 
The frequency of values must be the same.
"""
def same(list_1, list_2):   
    squared_1 = map(lambda x: x**2, list_1)
    return collections.Counter(squared_1) == collections.Counter(list_2)

print(same([1, 2, 7, 3], [1, 4, 9]))
print(same([2, 3], [4, 9]))