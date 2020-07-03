#import matplotlib.pyplot as plt
import netCDF4
import numpy as np
import matplotlib.pylab as plt
import numpy as np
from matplotlib import cm
import cartopy.crs as ccrs
from cmocean import cm as cmo

import sys
import os
from cartopy.util import add_cyclic_point

# open a local NetCDF file or remote OPeNDAP URL
#url = '../../tmp/download.nc'
url = 'download.nc'
nc = netCDF4.Dataset(url)

# examine the variables
print(nc.variables.keys())
print(nc.variables['gtco3'])

# sample every 10th point of the 'z' variable
topo = nc.variables['gtco3']

# make image
plt.figure(figsize=(10,10))

#plt.imshow(topo,origin='lower') 
#plt.imshow(topo)
back = plt.imread('testBack.png')
#plt.imshow(back)
#plt.plot(np.squeeze(topo))

#plt.title(nc.title)
plt.title("titre")#titre du graphe sur l'image

ax = plt.subplot(111, projection=ccrs.PlateCarree())

lat = nc.variables['latitude'][:]
lon = nc.variables['longitude'][:]
temp = flf.variables['gtco3'][0,0,:,:]
mm = ax.pcolormesh(lon,\
                   lat,\
                   temp,\
                   vmin=-2,\
                   vmax=30,\
                   transform=ccrs.PlateCarree(),cmap=cmo.thermal )
ax.coastlines();

plt.savefig('image.png', bbox_inches=0)