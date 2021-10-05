# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def hourglassSum(arr):
    # this is always a 6*6 arr, so not optimizing for other sizes
    # start with a center element - the middle of the hourglass
    # calculate the first hourglass total
    # then move the window
    top_row = 0
    bottom_row = 2
    window_left = 0
    window_right = 2
    middle_row = 1
    middle_column = 1
    cur_sum = -math.inf
    largest_sum = cur_sum
    while middle_row < len(arr) - 1:
      cur_sum = sum(arr[top_row][window_left:window_right + 1]) + arr[middle_row][middle_column] + sum(arr[bottom_row][window_left:window_right + 1])
      # check if this is a bigger sum
      if cur_sum > largest_sum:
        largest_sum = cur_sum
      # handle changing all the Windows
      if window_right + 1 > 6:
        # once the window slips out of frame, 
        # reassign middle_row as well
        top_row += 1
        bottom_row += 1
        middle_row += 1
        window_left = 0
        window_right = 2
        middle_column = 1
      else:
        window_right += 1
        window_left += 1
        middle_column += 1
    return largest_sum
