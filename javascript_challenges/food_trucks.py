def create_master_menu(menus):
    """
    Given an array of foodtruck menus where each menu is an array of dishes served, 
    return one array which contains all items that will be served at the festival, 
    without duplicates.
    """
    master_menu = []
    def unpack_menu(menu, master_menu):
        for item in menu:
            master_menu.append(item)
    
    for menu in menus:
        unpack_menu(menu, master_menu)
    
    return set(master_menu)

test = create_master_menu([["calzone", "pizza", "pasta"], ["pizza", "caesar salad"], ["caesar salad", "green salad", "greek salad"]])
print(test)