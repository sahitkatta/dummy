"""
This module provides functions to process and analyze text data.
"""

def split_text_into_words(text):
    """
    Splits a given string into words, ignoring extra spaces.

    Args:
        text (str): The input string to split.

    Returns:
        list: A list of words.
    """
    words = []
    for word in text.split(" "):
        if word:
            words.append(word)
    return words

def calculate_average_word_length(text):
    """
    Calculates the average length of words in a given string.

    Args:
        text (str): The input string to analyze.

    Returns:
        float: The average word length, or an error message if no words are found.
    """
    words = split_text_into_words(text)
    total_length = 0
    word_count = 0

    for word in words:
        total_length += len(word)
        word_count += 1

    if word_count == 0:
        return "Error: no words"
    return total_length / word_count

def print_average_word_length(text):
    """
    Prints the average word length of a given string.

    Args:
        text (str): The input string to analyze.
    """
    average_length = calculate_average_word_length(text)
    if average_length != "Error: no words":
        print(f"Average length is: {average_length}")
    else:
        print(average_length)

def remove_spaces(data):
    """
    Removes spaces from the input data.

    Args:
        data (str): The input string to process.

    Returns:
        str: The string with spaces removed.
    """
    return "".join(char for char in data if char != " ")

def is_sum_three():
    """
    Checks if the sum of 1 and 2 equals 3.

    Returns:
        bool: True if the sum is 3, False otherwise.
    """
    return (1 + 2) == 3

def print_multiplication_or_even():
    """
    Prints the product of indices if they are equal, otherwise prints even indices.
    """
    for i in range(10):
        for j in range(5):
            if i == j:
                print(i * j)
            elif j % 2 == 0:
                print(j)

# Start of the script
TEXT = "This    is     some random      sentence with weird   spacing."
print_average_word_length(TEXT)
print_multiplication_or_even()
remove_spaces(TEXT)
is_sum_three()
