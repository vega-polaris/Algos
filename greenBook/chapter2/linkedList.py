class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_node(self, new_val):
        new_node = Node(new_val)
        # if there's no head, this node is now head
        if not self.head:
            self.head = new_node
            self.tail = new_node
        # otherwise, this node is attached to the end
        else:
            self.tail.next = new_node
            temp = self.tail
            self.tail = new_node
            self.tail.previous = temp

    def remove_node(self, node):
        prev_node = node.previous
        next_node = node.next
        node.next = None
        node.previous = None
        if not prev_node and not next_node:
            return
        elif not next_node:
            prev_node.next = None
            self.tail = prev_node
        elif not prev_node:
            next_node.previous = None
            self.head = next_node
        else:
            prev_node.next = next_node
            next_node.previous = prev_node

    # def remove_dupes(self):
    #   # memoize values
    #   memo = {}
    #   #
    def find_node_with_value(self, val):
        cur_node = self.head
        while cur_node.value != val and cur_node.next:
            cur_node = cur_node.next
        if cur_node.value == val:
            return cur_node
        else:
            return None

    def print_list(self):
        if not self.head:
            print("list is empty")
        else:
            cur_node = self.head
            while cur_node.next:
                print(cur_node.value)
                cur_node = cur_node.next
            print(cur_node.value)

    def remove_dupes_linear_time(self):
        # memoise values
        memo = {}
        if not self.head:
            raise Exception("List is empty!")
        cur_node = self.head
        while cur_node:
            print(f"cur node value: {cur_node.value}")
            next_node = cur_node.next
            if cur_node.value not in memo.keys():
                memo[cur_node.value] = True
            else:
                self.remove_node(cur_node)
            cur_node = next_node

    def remove_node_by_idx(self, idx):
        # assuming indexing starts at 0
        # jump idx nodes and remove the last one
        # break out of loop if there's no next - idx was not found
        # if you didn't break out, you've found the index - continue to remove it
        node_to_remove = self.head
        for i in range(idx):
            # if we've reached the end, remove_node doesn't have a next
            if node_to_remove.next is None:
                break
            node_to_remove = node_to_remove.next
        else:
            self.remove_node(node_to_remove)

        return

    def remove_dupes_linear_space(self):
        # make sure the list has more than one element
        if self.head and hasattr(self.head, "next"):
            # slow arrow, fast arrow
            slow_arrow = self.head
            fast_arrow = slow_arrow.next
            while slow_arrow.next != self.tail:
                print(f"slow arrow: {slow_arrow.value}")
                print(f"fast arrow: {fast_arrow.value}")
                # but if the slow arrow is currently the penultimate node, no need to increment more
                # if we are in the middle of the list...
                if fast_arrow.next is not None:
                    print(f"fast arrow has next:{fast_arrow.next}")
                    next_fast = fast_arrow.next
                    # we are in middle of list and the arrow point at identical values
                    if fast_arrow.value == slow_arrow.value:
                        self.remove_node(fast_arrow)
                    # middle of list, different values - do nothing
                    # either way keep looping
                    fast_arrow = next_fast
                else:
                    print("fast arrow at end")
                    # fast arrow reached the end
                    # reassign slow arrow
                    slow_arrow = slow_arrow.next
                    fast_arrow = slow_arrow.next
            # we broke out of the loop before checking the last two elements
            if slow_arrow.value == fast_arrow.value:
                self.remove_node(fast_arrow)
        else:
            return


new_list = DoubleLinkedList()
# new_list.print_list()
new_list.add_node(3)
new_list.add_node(5)
new_list.add_node(3)
new_list.add_node(4)
new_list.add_node(98)
new_list.add_node(63)
new_list.add_node(63)

new_list.print_list()
new_list.remove_dupes_linear_space()
print("after de-duping:")
new_list.print_list()
new_list.remove_node_by_idx(2)
print("list after removing 2nd idx:")
new_list.print_list()

# new_list.remove_node(new_list.head)
# print("list after decapitation:")
# new_list.print_list()
# print(f"head: {new_list.head.value}")
# print(f"tail: {new_list.tail.value}")
# new_list.remove_node(new_list.tail)
# print("list after de-tail-ation:")
# new_list.print_list()
# print(f"head: {new_list.head.value}")
# print(f"tail: {new_list.tail.value}")
# node_to_remove = new_list.find_node_with_value(4)
# if node_to_remove:
#     new_list.remove_node(node_to_remove)
# print("list after removal from middle:")
# new_list.print_list()
