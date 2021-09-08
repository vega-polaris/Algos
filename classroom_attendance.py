def get_students(classroom):
    has_TA, class_list = classroom.values()
    # if has_TA is true, then the first value of class list is irrelevant
    if has_TA:
        return class_list[2:]
    else:
        return class_list[1:]


print(get_students({"has_TA": True, "class_list": [
    "James", "Daniel", "Igor", "Ondrea", "Becca"]})
)
