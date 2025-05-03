def split_into_words(text):
    return [word for word in text.split() if word]

def average_word_length(text):
    words = split_into_words(text)
    if not words:
        return "Error: no words"
    return sum(len(word) for word in words) / len(words)

def print_average_word_length(text):
    result = average_word_length(text)
    if result != "Error: no words":
        print(f"Average length is: {result}")
    else:
        print(result)

def remove_spaces(data):
    return "".join(data.split())

def is_sum_three():
    return (1 + 2) == 3

def print_numbers():
    for i in range(10):
        for j in range(5):
            if i == j:
                print(i * j)
            elif j % 2 == 0:
                print(j)

# start
text = "This    is     some random      sentence with weird   spacing."
print_average_word_length(text)
print_numbers()
remove_spaces(text)
is_sum_three()
