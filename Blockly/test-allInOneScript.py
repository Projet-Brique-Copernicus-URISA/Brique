import cdsapi
c = cdsapi.Client()
c.retrieve(
	'cams-global-reanalysis-eac4-monthly',
	{
		'variable': 'total_column_ozone',
		'product_type': 'monthly_mean',
		'month': '6',
		'year': '2003',
		'day': '1',
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

# first arg is the original netCDF file to convert
# the second arg is the variable's name in the netCDF file
# the third arg is the name of the graph
# the fourth arg is the name of the created png file


# set up the figure
plt.figure()

#Get value from nc file
url='download.nc'
file = netCDF4.Dataset(url)
lat  = file.variables['latitude'][:]
lon  = file.variables['longitude'][:]
data = file.variables['gtco3'][0,:,:]
#data = file.variables[sys.argv[2]][0,:,:]

#Setup figure and map
fig=plt.figure(figsize=(12, 8))

m=Basemap(projection='mill',lat_ts=10,llcrnrlon=lon.min(), \
  urcrnrlon=lon.max(),llcrnrlat=lat.min(),urcrnrlat=lat.max(), \
  resolution='c')


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
plt.title('titre');
#plt.title(sys.argv[3]);

#plt.show();
plt.savefig('image.png', bbox_inches=0)
#plt.savefig(sys.argv[4], bbox_inches=0)