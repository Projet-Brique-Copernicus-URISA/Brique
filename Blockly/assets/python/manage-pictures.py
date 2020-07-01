import shutil, os, sys

theme = getTheme()
zone = getZone()
start = getStart()

dirOrigin = "path/to/origin/"
dirDest = "path/to/dest/" + theme + "/" + zone + "/" + start + "/"

if not os.path.exists(dirDest):
    os.mkdir(dirDest)
    print("Création réussie du répertoire", dirDest)

files = os.listdir(dirOrigin)

for f in files:
    new_f = getDate(f) + ".jpg"
    shutil.move(dirOrigin + f, dirOrigin + new_f)

#TODO
def getDate(file):
    return "O1-01-2020"

#TODO
def getTheme():
    return "topic"
    #sys.argv[1]

#TODO
def getZone():
    return "france"
    #sys.argv[1]

#TODO
def getStart():
    return "01-01-2020"
