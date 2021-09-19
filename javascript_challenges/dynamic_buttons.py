def choose_color(color):
    def choose():
        print(color)
    return choose

blue = choose_color("blue")
pink = choose_color("pink")
green = choose_color("green")

blue()
pink()
green()
