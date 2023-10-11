from micrograd_utils.utils import *
from micrograd.engine import *
from micrograd.nn import *

import nn.params

default_response = -1

m = nn.params.model()


def vectorize(s: str):
	return list(map(int, s.strip()))


def max_index(l: list):
	max_value = 0
	max_index = 0

	for i in range(len(l)):
		if l[i].data > l[max_index].data:
			max_index = i

	return max_index


def predict(s: str):
	return max_index(m(vectorize(s)))


def repl():
	while (True):
		print(predict(input()))


if __name__ == "__main__":
	repl()
