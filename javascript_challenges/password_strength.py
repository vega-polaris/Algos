import re
# "[A-Za-z0-9 ]"
def validate_pw(pw):
    """
    Check if user's PassWord is strong enough.
    Criteria:
        1. Must have at least one lowercase letter
        2. Must have at least one uppercase letter
        3. Must have at least one number
        4. Must have at least one special character
        5. Must be at least 8 characters long
    Must use a regex; must use a ternary.
    Return:
        string "Your password is invalid"
        OR
        string "Your password is valid".
    """
    valid = True
    special_chars = re.escape('!@#$%^&*(),.?":{}|<>')
    if len(pw) < 8:
        valid = False
    if not re.search(f"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[{special_chars}])", pw):
        valid = False
    return "Your password is valid" if valid else "Your password is invalid"

print(validate_pw("DDDDDDDDDDDDD#DDDD3DDDDaaDDDD")) # valid
print(validate_pw("DDDDDDDDDDDDDDD3DDDDaaDDDD")) # invalid