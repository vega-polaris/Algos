import math 

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
            while cur_node:
                visited = getattr(cur_node, "visited", None)
                print(cur_node.value, visited)
                cur_node = getattr(cur_node, "next", None)

    def remove_dupes_linear_time(self):
        # memoise values
        memo = {}
        if not self.head:
            raise Exception("List is empty!")
        cur_node = self.head
        while cur_node:
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
                # but if the slow arrow is currently the penultimate node, no need to increment more
                # if we are in the middle of the list...
                if fast_arrow.next is not None:
                    next_fast = fast_arrow.next
                    # we are in middle of list and the arrow point at identical values
                    if fast_arrow.value == slow_arrow.value:
                        self.remove_node(fast_arrow)
                    # middle of list, different values - do nothing
                    # either way keep looping
                    fast_arrow = next_fast
                else:
                    # fast arrow reached the end
                    # reassign slow arrow
                    slow_arrow = slow_arrow.next
                    fast_arrow = slow_arrow.next
            # we broke out of the loop before checking the last two elements
            if slow_arrow.value == fast_arrow.value:
                self.remove_node(fast_arrow)
        else:
            return
    
    def move_node_to_end(self, node):
        next_node = getattr(node, "next", None)
        prev_node = getattr(node, "previous", None)
        if prev_node:
            prev_node.next = next_node
        if next_node:
            next_node.previous = prev_node
        self.tail.next = node
        node.next = None
        self.tail = node

    def partition(self, partition):
        # iterate through the list
        cur_node = self.head
        while cur_node:
            visited = getattr(cur_node, "visited", False)
            if visited:
                break
            # mark every element you visited
            setattr(cur_node, "visited", True)
            # everytime the value is >= partition, move that value to the end of the list
            next_node = getattr(cur_node, "next", None)
            if cur_node.value >= partition:
                self.move_node_to_end(cur_node)
            cur_node = next_node
        self.print_list()
    
    def is_palindrome(self):
        if self.head is None:
            return False
        # count how many nodes from head to tail
        node_count = 0
        cur_node = self.head
        while cur_node:
            node_count += 1
            cur_node = getattr(cur_node, "next", None)
        # find the middle
        left_idx = math.floor(node_count/2) - 1
        right_idx = left_idx + 1 if node_count % 2 == 0 else left_idx + 2
        cur_node = self.head
        # travel to the middle
        while cur_node:
            if left_idx == 0:
                left_node = cur_node
            if right_idx == 0:
                right_node = cur_node
                break
            left_idx -= 1
            right_idx -= 1
            cur_node = getattr(cur_node, "next", None)
        # compare two pointers - one going towards the beginning, one towards the end

        while left_node is not None and right_node is not None:
            if left_node.value != right_node.value:
                return False
            left_node = getattr(left_node, "previous", None)
            right_node = getattr(right_node, "next", None)
        
        return True
    
    def clean_visited(self):
        if not self.head:
            print("list is empty")
        else:
            cur_node = self.head
            while cur_node:
                visited = getattr(cur_node, "visited", None)
                if visited:
                    delattr(cur_node, "visited")
                    cur_node = getattr(cur_node, "next", None)
                else:
                    break
                
    def intersection(self, other_head):
        """
        Checks if a given linked list intersects with the current one.
        Input: the head of the other list
        Output: intersecting node or None
        """
        # mark this whole list as visited
        if not self.head:
            print("list is empty")
            return
        else:
            cur_node = self.head
            while cur_node:
                setattr(cur_node, "visited", True)
                cur_node = getattr(cur_node, "next", None)
        
        cur_node = other_head
        while cur_node:
            visited = getattr(cur_node, "visited", None)
            if visited:
                self.clean_visited()
                return cur_node
            cur_node = getattr(cur_node, "next", None)



new_list = DoubleLinkedList()
new_list.add_node(3)
new_list.add_node(5)
new_list.add_node(8)
new_list.add_node(5)
new_list.add_node(8)
new_list.add_node(5)
new_list.add_node(3)
