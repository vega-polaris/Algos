import math 

def search(array, n):
    """
    Given a sorted array of ints, return the index at which n is found.
    If it is not found, return -1.
    """
    left = 0
    right = len(array) - 1
    while left <= right:
        middle = math.floor((right + left) / 2)
        if array[middle] > n:
            right = middle - 1
        elif array[middle] < n:
            left = middle + 1
        else:
            return middle
    # if right < len(array) - 1 and array[right] == n:
    #     return right
    return -1

# print("weellllll")
print(search([1, 2, 3, 4, 5, 6], 4)) # 3
print(search([1, 2, 3, 4, 5, 6], 6)) # 5
print(search([1, 2, 3, 4, 5, 6], 2)) # 1
print(search([1, 2, 3, 4, 5, 6], 11)) # -1
print(search([1, 2, 3, 4, 5, 6], 1)) # 0


