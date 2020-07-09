import os
import shutil

#theme = getTheme()
theme = "ozone"
#zone = getZone()
zone = "World"
#start = getStart()
start = "01-07-2003"

#dirOrigin = "path/to/origin/"
dirOrigin = "./tmp/"
#dirDest = "path/to/dest/" + theme + "/" + zone + "/" + start + "/"
dirDest = "./mesImages/Copernicus/" + theme + "/" + zone + "/" #+ start + "/"

if not os.path.isdir(dirDest):
    os.makedirs(dirDest)
    print("Création réussie du répertoire", dirDest)

files = os.listdir(dirOrigin)

for f in files:
    #new_f = getDate(f) + ".jpg"
    shutil.move( os.path.join(dirOrigin, f), os.path.join(dirDest, f) )