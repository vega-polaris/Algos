# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys

phonebook_lenth = int(sys.stdin.readline())

listings = []
for line in range(0, phonebook_lenth):
    listings.append(sys.stdin.readline().rstrip())

lookups = sys.stdin.read().split()


def create_phonebook(listings):
    phonebook = {}
    for line in listings:
        name, number = line.split()
        phonebook[name] = number

    return phonebook


def lookup_names(lookups, listings):
    phonebook = create_phonebook(listings)
    for name in lookups:
        if name in phonebook:
            print(f"{name}={phonebook[name]}")
        else:
            print("Not found")


lookup_names(lookups, listings)
