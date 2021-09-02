from datetime import datetime
from threading import Timer
from time import sleep

# function that updates a clock and prints it


def print_cur_time():
    now = datetime.now()
    now_string = now.strftime("%H:%M:%S")
    print(now_string)


# function that calls the other function every 5 seconds
def start_clock():
    Timer(1.0, print_cur_time).start()


while True:
    start_clock()
    sleep(1)
