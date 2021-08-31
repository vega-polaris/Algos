"""An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, D, or a downhill, D, step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
"""


def countingValleys(steps, path):
    location = 0
    valleys = 0
    for step in path:
        if step == "D":
            location -= 1
            if location == -1:
                valleys += 1
        elif step == "U":
            location += 1
    return valleys
