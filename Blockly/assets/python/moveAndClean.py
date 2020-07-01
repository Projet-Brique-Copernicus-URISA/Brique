import shutil, os, sys

#move download.nc to /tmp
shutil.move(sys.argv[1], sys.argv[2])

#clean copernicus_request.py
os.remove(sys.argv[3])
