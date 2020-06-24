import sys

def main():
    theFile = sys.argv[1]
    theCode = sys.argv[2]
    write(theFile, theCode)

def write(theFile, theCode):
    with open(theFile, 'w') as file:
        file.write(theCode)

main()