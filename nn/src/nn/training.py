import nn.data.training
import os

from micrograd.engine import *
from micrograd.nn import *
from micrograd_utils.utils import *

examples_per_digit = 1
iterations = 200


def make_list_from_number(n):
    l = [0] * 10
    l[n] = 1
    return l


def difference(l1, l2):
    # if l1 and l2 are lists
    if type(l1) == list and type(l2) == list:
        return sum([x - y for x, y in zip(l1, l2)])
    else:
        return l1 - l2


def train():
    d = nn.data.training.data
    dataset = []
    desired = []

    for d, v in d.items():
        count = 0
        for x in v:
            if count == examples_per_digit:
                break
            dataset.append(x)
            desired.append(make_list_from_number(d))
            count += 1

    m = MLP(784, [16, 16, 10])

    print("multi-layer perceptron created")

    for k in range(iterations):
        print("iteration", k)
        # forward pass with mean squared error loss
        ypred = [m(x) for x in dataset]
        print("ypred = ", ypred)

        loss = sum([difference(yout, ygt)**2 for ygt,
                   yout in zip(desired, ypred)])
        print("loss = ", loss)

        # zero gradients
        m.zero_grad()

        # backward pass
        loss.backward()

        # update weights
        for p in m.parameters():
            p.data -= p.grad * 0.001

        print("new weights = ", m.parameters())

        print(k, loss)

    # get file path of current file
    path = os.path.dirname(os.path.abspath(__file__))
    dump(m, path + "/" + "params.py")
