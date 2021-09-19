from functools import reduce

def calculate_check(coffee_amounts, price_per_coffee):
    """
    This function calculates the total price of all the coffees everyone had.
    It takes a list that represents the number of coffee cups each drinker had, 
    and a float that represents the price of a cup.
    It returns a float that represents the total check.
    """
    total_drinks = reduce((lambda x, y: x + y), coffee_amounts)
    return total_drinks * price_per_coffee

test = calculate_check([2, 3, 2, 1, 2], 5) # 50
print(test)