import math
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # go through whole list once to find middle
        if not head:
            return None
        node_count = 0
        cur_node = head
        while cur_node:
            node_count += 1
            prev_node = cur_node
            cur_node = getattr(cur_node, "next", None)
            if cur_node:
                setattr(cur_node, "prev", prev_node)
        # we're iterating back and forth at the same time
        # find the left node
        print("node_count", node_count)
        right_node_idx = math.floor(node_count / 2)
        # the right node will be adjacent if there's an even number of nodes,
        # or skip one if there's an odd number.
        left_node_idx = right_node_idx - 1
        if node_count % 2 != 0:
            right_node_idx += 1
        # pace through the list again till you reach the proper nodes
        left_node = head
        right_node = head
        while right_node_idx > 0:
            if left_node_idx > 0:
                left_node = getattr(left_node, "next", None)
                left_node_idx -= 1
            right_node = getattr(right_node, "next", None)
            right_node_idx -= 1
        # now that we're in both the proper nodes, compare their values as you loop
        while left_node and right_node:
            if left_node.val != right_node.val:
                return False
            left_node = getattr(left_node, "prev", None)
            right_node = getattr(right_node, "next", None)
        return True