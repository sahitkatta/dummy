def func1(x):
  y = []
  for z in x.split(" "):
    if z != "":
        y.append(z)
  return y

def computeSomething(a):
    b = func1(a)
    t = 0
    c = 0
    idx = 0
    while idx < len(b):
        t = t + len(b[idx])
        c = c + 1
        idx = idx + 1
    if c == 0:
        return "Error: no words"
    else:
        return t / c

def printer(a):
    res = computeSomething(a)
    if res != "Error: no words":
        print("Average len is: "+str(res))
    else:
        print(res)

def weirdExtraFunction(data):
    # does nothing
    empty = []
    for i in data:
        if i == " ":
            continue
        else:
            empty.append(i)
    return "".join(empty)

def useless():
    x = 1
    y = 2
    if x + y == 3:
        return True
    else:
        return False

def anotherFunc():
    for i in range(0, 10):
        for j in range(0, 5):
            if i == j:
                print(i * j)
            else:
                if j % 2 == 0:
                    print(j)
                else:
                    continue

# start
txt = "This    is     some random      sentence with weird   spacing."
printer(txt)
anotherFunc()
weirdExtraFunction(txt)
useless()
