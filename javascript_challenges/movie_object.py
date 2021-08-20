# Create a movie object with the
# properties:
# Title
# Director
# Genre
# Release year
# Rating
# methods:
# get_overview: logs an overview for each film: "{movie}, a {genre} film directed by {director}, was released in {release year}. It received a rating of {rating}."

class Movie():
    def __init__(self, title, director, genre, release_year, rating):
        self.title = title
        self.director = director
        self.genre = genre
        self.release_year = release_year
        self.rating = rating

    def get_overview(self):
        return f"{self.title}, a {self.genre} film directed by {self.director}, was released in {self.release_year}. It received a rating of {self.rating}."
