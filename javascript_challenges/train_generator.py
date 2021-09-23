def train_generator(stops):
    """
    build a generator function that returns the next stop in a list of stops along the Metro North Railroad in New York. 
    Each time a button is clicked, the next stop in the journey should be returned until we reach Grand Central Station in New York City. 
    The train stops are Poughkeepsie, Newburgh, Peekskill, Yonkers, Bronx, and Grand Central. You should use a generator function to yield these values. 
    Console log each stop and once we reach the final stop, Grand Central, console log 'We made it!'
    """
    def list_trains(stops):
        for stop in stops:
            yield stop

    stops_list = list_trains(stops)
    for stop in stops_list:
        print(stop)
    print("we're here!")

train_generator(["Poughkeepsie", "Newburgh", "Peekskill", "Yonkers", "Bronx", "Grand Central"])