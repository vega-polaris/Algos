# given an array of italian dishes, create an unordered list of vegeterian dinner options.
# example of one dish:
# {name: "Eggplant", vegetarian: True}


def just_vegetarian_dishes(menu):
    filtered = filter(lambda x: x["vegetarian"] == True, menu)
    return list(filtered)


menu = [{"name": "no meat here", "vegetarian": True}, {"name": "no animals here", "vegetarian": True}, {
    "name": "this has meat", "vegetarian": False}, {"name": "some meat here too", "vegetarian": False}]

veg_menu = just_vegetarian_dishes(menu)
print(veg_menu)
