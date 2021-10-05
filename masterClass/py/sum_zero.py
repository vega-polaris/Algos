def sum_zero(arr):
    """
    Input: sorted array of integers.
    Output: array with the first pair of integers where the sum is 0, or None.
    """
    if len(arr) < 2:
        return None
    # two pointers - left and right
    left = 0
    right = len(arr) - 1
    while left < right:
        # if they're pointing at complimentary numbers, return them
        cur_sum = arr[left] + arr[right]
        if cur_sum == 0:
            return [arr[left], arr[right]]
        # if not, check if you need to go one left or one right
        elif cur_sum > 0:
            right -= 1
        else:
            left += 1
    # if there's no more right or left to go, return None
    return None

print(sum_zero([-3, -2, -1, 0, 1, 2, 3])) # [-3, 3]
print(sum_zero([-2, 0, 1, 3])) # undefined
print(sum_zero([1, 2, 3])) # undefined

