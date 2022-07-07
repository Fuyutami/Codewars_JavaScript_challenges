# ***********************************************************************************************************************************
#
# MY SOLUTIONS TO CHALLENGES FROM CODEWARS.COM
# LATEST at the TOP
#
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


