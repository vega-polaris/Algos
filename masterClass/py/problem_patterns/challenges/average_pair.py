import statistics

def average_pair(nums_list, target_av):
    """
    Given a sorted array of ints and a target average,
    determine if there is a pair of values in the array where the 
    average of the pair equals the target average.
    There may be more than one pair.
    """
    # the array is sorted - so start with the biggest average
    small_i = 0
    big_i = len(nums_list) - 1
    while small_i < big_i:
        cur_av = statistics.mean([nums_list[small_i], nums_list[big_i]])
        # if it's too big, move the big pointer left
        if cur_av > target_av:
            big_i -= 1
        # if it's too small, move the small pointer right
        elif cur_av < target_av:
            small_i += 1
        else:
            return True
    # when the pointers meet or cross, return False
    return False    

print(average_pair([1, 2, 3], 2.5)) # True
print(average_pair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) # True
print(average_pair([-1, 0, 3, 4, 5, 6], 4.1)) # False