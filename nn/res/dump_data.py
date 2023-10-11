import os

def dataset(d: str):
    ds = {}

    for number in os.listdir(d):
        num = int(number)
        ds[num] = []

        for file in os.listdir(d + "/" + number):
            with open(d + "/" + number + "/" + file, "r") as f:
                ds[num].append(list(map(int, f.readlines()[1].split(" "))))
    return ds

def prepare_data():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    training = dataset("training")
    test = dataset("test")

    print("data = ", training, file=open("../src/nn/data/training.py", "w"))
    print("data = ", test, file=open("../src/nn/data/testing.py", "w"))


if __name__ == "__main__":
    prepare_data()