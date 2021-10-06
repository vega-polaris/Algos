import re
# print(bool(re.match("^[A-Za-z0-9]*$", string)))

def urlify(title):
    # remove punctuation
    
    no_special = re.findall("[A-Za-z0-9 ]", title)
    joint = "".join(no_special).lower()
    no_spaces = re.sub(" ", "-", joint)
    print(f"https://www.someblog.com/posts/{no_spaces}")

urlify("Hello! How are you?")