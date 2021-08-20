from available_books import Book


class TechnicalBook(Book):
    def __init__(self, edition, title, author, isbn, available_copies=0):
        super().__init__(title, author, isbn, available_copies)
        self.edition = edition

    def get_edition(self):
        return f"The current edition of this book is {self.edition}."


coding_interview = TechnicalBook(
    3, "Cracking the Coding Interview", "Gayle Laakman McDowell", 12345, 4)

print(coding_interview.get_availability())
print(coding_interview.get_edition())
