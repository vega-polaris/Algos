from linkedList import Node, DoubleLinkedList
def sum_lists(list1, list2):
    """
    You have 2 numbers represented by a linked list, where each node contains a single digit. 
    The digits are stored in reverse order, i.e. 7 -> 1 -> 6 represents 617.
    Write a function that adds the two numbers and returns the sum as a linked list. 
    """
    # get each of the numbers first
    num1 = convert_list_to_num(list1, "forward")
    num2 = convert_list_to_num(list2, "forward")
    return num1 + num2

def convert_list_to_num(list, order):
    linked_to_list = []
    if order == "forward":
        cur_node = getattr(list, "head", None)
        next_node = "next"
    else:
        cur_node = getattr(list, "tail", None)
        next_node = "previous"
    while cur_node:
        # add the num to the list list
        linked_to_list.append(str(cur_node.value))
        # reassign cur node
        cur_node = getattr(cur_node, next_node, None)
    return int("".join(linked_to_list))



list_1 = DoubleLinkedList()
list_1.add_node(7)
list_1.add_node(1)
list_1.add_node(6)
list_1.print_list()
list_2 = DoubleLinkedList()
list_2.add_node(5)
list_2.add_node(9)
list_2.add_node(2)
print(sum_lists(list_1, list_2))
