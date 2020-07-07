import cdsapi
c = cdsapi.Client()
c.retrieve(
	cams-europe-air-quality-forecasts,
	{
'variable': 'particulate_matter_2.5um',
'model': [
'ensemble',
],
'level': '0',
'type': 'forecast',
'time': '00:00',
'leadtime_hour': '4',
'date': '2003-7-1/2003-7-1',
		'area': [
			0, 0, 0, 0,
		],
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
data = file.variables['gtco3'][0,:,:]

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
plt.title('thematic_atmosphere_pollution_particulate');
plt.savefig('1-7-2003.png', bbox_inches=0)
