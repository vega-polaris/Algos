def count_unique_values(sorted_arr):
    """
    This function accepts a sorted array and counts the unique values in it.
    Use multiple pointers.
    """
    if len(sorted_arr) == 0:
        return 0
    if len(sorted_arr) == 1:
        return 1
    left = 0
    right = 1
    count = 1
    while right < len(sorted_arr):
        if sorted_arr[left] is not sorted_arr[right]:
            count += 1
            left = right
            right += 1
        else:
            right += 1
    
    return count

print(count_unique_values([1, 1, 1, 1, 1, 2])) # 2
print(count_unique_values([1, 2, 3, 4, 4, 7, 7, 12, 12, 13])) # 7
print(count_unique_values([])) # 0
print(count_unique_values([-2, -1, -1, 0, 1])) # 4
print(count_unique_values([1, 2])) # 2
print(count_unique_values([1, 1])) # 1
print(count_unique_values([1, 2, 3, 4, 4, 7, 7,7, 7, 7])) # 5




