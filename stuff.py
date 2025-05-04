def split_words(text):
    """
    Splits a string into words based on spaces.

    Args:
        text (str): The input string to split.

    Returns:
        list: A list of words.
    """
    return [word for word in text.split(" ") if word]


def compute_average_word_length(text):
    """
    Computes the average length of words in a string.

    Args:
        text (str): The input string.

    Returns:
        float or str: The average word length or an error message if no words are found.
    """
    words = split_words(text)
    if not words:
        return "Error: no words"
    total_length = sum(len(word) for word in words)
    return total_length / len(words)


def print_average_word_length(text):
    """
    Prints the average word length of a string.

    Args:
        text (str): The input string.
    """
    average_length = compute_average_word_length(text)
    if average_length != "Error: no words":
        print(f"Average length is: {average_length}")
    else:
        print(average_length)


def remove_spaces(data):
    """
    Removes spaces from a string.

    Args:
        data (str): The input string.

    Returns:
        str: The string without spaces.
    """
    return "".join(char for char in data if char != " ")


def is_sum_three():
    """
    Checks if the sum of 1 and 2 equals 3.

    Returns:
        bool: True if the sum is 3, False otherwise.
    """
    return (1 + 2) == 3


def print_multiples():
    """
    Prints the product of indices when they are equal, or the index if it's even.
    """
    for i in range(10):
        for j in range(5):
            if i == j:
                print(i * j)
            elif j % 2 == 0:
                print(j)


if __name__ == "__main__":
    # Example usage
    text = "This    is     some random      sentence with weird   spacing."
    print_average_word_length(text)
    print_multiples()
    remove_spaces(text)
    is_sum_three()
