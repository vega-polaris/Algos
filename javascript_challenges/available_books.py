# book class
class Book:
    def __init__(self, title, author, isbn, available_copies=0):
        # title
        self.title = title
        # author
        self.author = author
        # isbn
        self.isbn = isbn
        # availabe copy
        self.available_copies = available_copies

    # get availability () returns "out of stock" if 0 copies, "low stock" if <10 copies, "in stock" otherwise
    def get_availability(self):
        return "out of stock" if self.available_copies == 0 else ("low stock" if self.available_copies < 10 else "in stock")

    # sell(num copies), where num copies defaultes to 1
    def sell(self, copies=1):
        self.available_copies -= copies

    # restock(num copies), num copies default to 5
    def restock(self, copies=5):
        self.available_copies += copies
