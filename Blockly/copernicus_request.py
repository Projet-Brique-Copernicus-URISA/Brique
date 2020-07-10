import cdsapi
c = cdsapi.Client(url='https://ads.atmosphere.copernicus.eu/api/v2', key='1825:3bfdb1b4-8a37-4009-b6e5-e5c69d96ea68')
c.retrieve(
	'cams-global-reanalysis-eac4',
	{
		'variable': '2m_temperature',
		'time': '00:00',
		'date': '2018-07-09/2018-07-09',
		'format': 'netcdf',
	},
	'download.nc')

import netCDF4 
import numpy as np
import matplotlib.pylab as plt
from matplotlib import cm
from mpl_toolkits.basemap import Basemap,shiftgrid
import sys, os

# set up the figure
plt.figure()
#Get value from nc file
url='download.nc'
file = netCDF4.Dataset(url)
lat  = file.variables['latitude'][:]
lon  = file.variables['longitude'][:]
data = file.variables['t2m'][0,:,:]

#Setup figure and map
fig=plt.figure(figsize=(12, 8))
m=Basemap(projection='mill',lat_ts=10,llcrnrlon=lon.min(),  urcrnrlon=lon.max(),llcrnrlat=lat.min(),urcrnrlat=lat.max(),  resolution='c')

# convert the lat/lon values to x/y projections.
x, y = m(*np.meshgrid(lon,lat))

# plot the field using the fast pcolormesh routine set the colormap to jet.
m.pcolormesh(x,y,data,shading='flat',cmap=plt.cm.jet)
m.colorbar(location='right')

# Add a coastline and axis values.
m.drawcoastlines()
#m.fillcontinents()
m.drawmapboundary()
m.drawparallels(np.arange(-90.,90.,30.),labels=[1,0,0,0])
m.drawmeridians(np.arange(-180.,180.,60.),labels=[0,0,0,1])

# Add a colorbar and title, and then show the plot.
plt.title('thematic_atmosphere_temperature');
plt.savefig('./tmp/09-07-2018.png', bbox_inches=0)

import os
import shutil 
dirOrigin = './tmp/'
dirDest = './mesImages/Copernicus/thematic_atmosphere_temperature/world/'
if not os.path.isdir(dirDest):
	 os.makedirs(dirDest)
	 print('Creation reussie du repertoire', dirDest)
files = os.listdir(dirOrigin)
for f in files:
	 shutil.move( os.path.join(dirOrigin, f), os.path.join(dirDest, f) )