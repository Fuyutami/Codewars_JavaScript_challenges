# ***********************************************************************************************************************************
#***********************************************************************************************************************************

# MY SOLUTIONS TO CHALLENGES FROM CODEWARS.COM
# LATEST at the TOP

# ***********************************************************************************************************************************
# ***********************************************************************************************************************************

# The Hashtag Generator
# difficulty: 5kyu

# The marketing team is spending way too much time typing in hashtags.
# Let's help them with our own Hashtag Generator!

# Here's the deal:

# It must start with a hashtag (#).
# All words must have their first letter capitalized.
# If the final result is longer than 140 chars it must return false.
# If the input or the result is an empty string it must return false.

def generate_hashtag(s):
    return f"#{''.join([w.title() for w in s.strip().split(' ')])}" if len(''.join(s)) < 140 and s!= '' else False

print(generate_hashtag(""))


# ***********************************************************************************************************************************

# Replace With Alphabet Position
# difficulty: 6kyu

# In this kata you are required to, given a string,
# replace every letter with its position in the alphabet.
# If anything in the text isn't a letter, ignore it and don't return it.


def alphabet_position(text):
    output = ''
    for ch in text.lower():
        if ch.isalpha():
            output += f"{str(ord(ch)-96)} "
    return output.rstrip()   


# ***********************************************************************************************************************************

# Are they the "same"?
# difficulty: 6kyu

# Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
# that checks whether the two arrays have the "same" elements,
# with the same multiplicities (the multiplicity of a member is the number of times it appears).
# "Same" means, here, that the elements in b are the elements in a squared,
# regardless of the order.

def comp(array1, array2):
    try:
        return sorted(list(map(lambda n: n ** 2, array1))) == sorted(array2)
    except:
        return False
    
# ***********************************************************************************************************************************

# Sum of Digits / Digital Root
# difficulty: 6kyu

# Digital root is the recursive sum of all the digits in a number.

# Given n, take the sum of the digits of n.
# If that value has more than one digit,
# continue reducing in this way until a single-digit number is produced.
# The input will be a non-negative integer.

def digital_root(n):
    sum = 0
    while n > 0:
        sum += n%10
        n //= 10
    if sum > 9:
        return digital_root(sum) 
    else:
        return sum

# ***********************************************************************************************************************************


# String ends with?
# difficulty: 7kyu

# Complete the solution so that it returns true if the first
# argument(string) passed in ends with the 2nd argument (also a string).

def solution(string, ending):
    return string.endswith(ending)


