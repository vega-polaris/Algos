import math

def max_subarray_sum(arr, n):
    """
    Accepts an array of ints and a number n.
    Calculate the max sum of n consecutive elements in the array.
    Return the sum.
    """
    if len(arr) < n:
        return None
    
    def recurse(left_pointer, right_pointer, max_sum):
        if right_pointer > len(arr) - 1:
            return max_sum
        cur_sum = sum(arr[left_pointer:right_pointer + 1])
        return recurse(left_pointer + 1, right_pointer + 1, max(max_sum, cur_sum))
    
    return recurse(0, n - 1, -math.inf)


print(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 2)) # 10
print(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 4)) # 17
print(max_subarray_sum([4, 2, 1, 6], 1)) # 6
print(max_subarray_sum([4, 2, 1, 6, 2], 4)) # 13
print(max_subarray_sum([], 4)) # None