class Bin_heap:
    def __init__(self) -> None:
        self.values = []

    # add value to end, then compare with parent
    # if parent is bigger, swap
    # keep doing that until parent isn't bigger
    def insert(self, val):
        # first add to end
        self.values.append(val)
        # store idx
        new_idx = len(self.values) - 1
        # find parent idx
        parent_idx = self.find_parent_idx(new_idx)

        while self.values[new_idx] < self.values[parent_idx]:  # 3 > 1
            new_idx = self.swap_values(new_idx, parent_idx)
            parent_idx = self.find_parent_idx(new_idx)
        print(f"{val} inserted at index {new_idx}")

    # find the parent of the given idx
    def find_parent_idx(self, idx):
        parent_idx = (idx - 1) // 2  # 3-1 // 2 = 2 // 2 = 1
        return parent_idx if parent_idx > -1 else 0

    def swap_values(self, idx1, idx2):
        temp = self.values[idx1]
        self.values[idx1] = self.values[idx2]
        self.values[idx2] = temp
        return idx2

    def find_child_idx(self, parentIdx, direction):
        shift = 1 if direction == "l" else 2
        child_idx = 2 * parentIdx + shift
        if child_idx > len(self.values):
            return None
        else:
            return child_idx

    def sink_down(self, sink_idx=0):
        sink_value = self.values[sink_idx]
        left_child_idx = self.find_child_idx(sink_idx, "l")
        right_child_idx = self.find_child_idx(sink_idx, "r")
        # if there's isn't a left child, there won't be a right because left is populated first
        if not left_child_idx:
            return
        left_child = self.values[left_child_idx]
        # if there's no right child, check the left
        if not right_child_idx:
            # every child should be bigger than its parent;
            # if the left child is smaller, swap it with its parent.
            if left_child < sink_value:
                self.swap_values(sink_idx, left_child_idx)
                # now the value we were originally sinking is at the left child
                # let's make sure all its children are still bigger
                self.sink_down(left_child_idx)
        elif right_child_idx:
            right_child = self.values[right_child_idx]
            if right_child < sink_value:
                swap_to_idx = right_child_idx if right_child < left_child else left_child
                self.swap_values(sink_idx, swap_to_idx)
                self.sink_down(swap_to_idx)

        return

    def extract_min(self):
        if not len(self.values):
            return None
        min = self.values[0]
        self.values[0] = self.values.pop()
        self.sink_down()
        return min


my_heap = Bin_heap()
my_heap.insert(1)  # idx 0
my_heap.insert(3)  # idx 1
my_heap.insert(8)  # idx 2
my_heap.insert(4)
my_heap.insert(14)
my_heap.insert(18)
my_heap.insert(11)
my_heap.insert(2)
my_heap.insert(5)

# print(my_heap.values)
# print("left child of 1")
# print(my_heap.values[my_heap.find_child_idx(1, "l")])  # 3
# print("right child of 1")
# print(my_heap.values[my_heap.find_child_idx(1, "r")])  # 14
print(my_heap.values)
my_heap.sink_down()
print(my_heap.values)
print(my_heap.extract_min())
