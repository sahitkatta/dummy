"""
This module provides utility functions for text processing and simple arithmetic checks.
"""

def split_words(input_text):
    """
    Splits a string into words, ignoring extra spaces.

    Args:
        input_text (str): The input string to split.

    Returns:
        list: A list of words.
    """
    return [word for word in input_text.split() if word]


def compute_average_word_length(input_text):
    """
    Computes the average length of words in a string.

    Args:
        input_text (str): The input string.

    Returns:
        float: The average word length.
        str: Error message if no words are found.
    """
    words = split_words(input_text)
    if not words:
        return "Error: no words"
    total_length = sum(len(word) for word in words)
    return total_length / len(words)


def print_average_word_length(input_text):
    """
    Prints the average word length of a string.

    Args:
        input_text (str): The input string.
    """
    result = compute_average_word_length(input_text)
    if isinstance(result, float):
        print(f"Average length is: {result}")
    else:
        print(result)


def remove_spaces(input_data):
    """
    Removes spaces from a string.

    Args:
        input_data (str): The input string.

    Returns:
        str: The string without spaces.
    """
    return "".join(char for char in input_data if char != " ")


def is_sum_three():
    """
    Checks if the sum of 1 and 2 equals 3.

    Returns:
        bool: True if the sum is 3, False otherwise.
    """
    return (1 + 2) == 3


def print_multiples():
    """
    Prints multiples or even numbers based on conditions.
    """
    for i in range(10):
        for j in range(5):
            if i == j:
                print(i * j)
            elif j % 2 == 0:
                print(j)


if __name__ == "__main__":
    # Example usage
    SAMPLE_TEXT = "This    is     some random      sentence with weird   spacing."
    print_average_word_length(SAMPLE_TEXT)
    print_multiples()
    remove_spaces(SAMPLE_TEXT)
    is_sum_three()
