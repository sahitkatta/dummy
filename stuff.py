def doStuff(s):
    words = []
    for i in s.split(" "):
        if i != "":
            words.append(i)
    total = 0
    count = 0
    index = 0
    while index < len(words):
        total = total + len(words[index])
        count = count + 1
        index = index + 1
    if count == 0:
        return None
    else:
        avg = total / count
        return avg

# Example usage
result = doStuff("This    is a     test sentence with   weird spacing.")
print("average word length is:", result)
