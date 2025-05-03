"""
This module provides functions to process text and perform calculations.
"""

def split_text_to_words(text):
    """
    Splits a given text into words, removing any extra spaces.

    Args:
        text (str): The input text to split.

    Returns:
        list: A list of words.
    """
    return [word for word in text.split(" ") if word]


def calculate_average_word_length(text):
    """
    Calculates the average length of words in a given text.

    Args:
        text (str): The input text to analyze.

    Returns:
        float or str: The average word length, or an error message if no words are found.
    """
    words = split_text_to_words(text)
    total_length = sum(len(word) for word in words)
    word_count = len(words)
    if word_count == 0:
        return "Error: no words"
    return total_length / word_count


def print_average_word_length(text):
    """
    Prints the average word length of a given text.

    Args:
        text (str): The input text to analyze.
    """
    average_length = calculate_average_word_length(text)
    if average_length != "Error: no words":
        print(f"Average length is: {average_length}")
    else:
        print(average_length)


def print_multiplication_table():
    """
    Prints a multiplication table for numbers 0-9, with specific conditions.
    """
    for i in range(10):
        for j in range(5):
            if i == j:
                print(i * j)
            elif j % 2 == 0:
                print(j)


def main():
    """
    Main function to execute the script.
    """
    text = "This    is     some random      sentence with weird   spacing."
    print_average_word_length(text)
    print_multiplication_table()


if __name__ == "__main__":
    main()
