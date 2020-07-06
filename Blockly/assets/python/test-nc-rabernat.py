import netCDF4
import numpy as np
import matplotlib.pylab as plt
from matplotlib import cm
from mpl_toolkits.basemap import Basemap,shiftgrid

# set up the figure
plt.figure()

# set up the URL to access the data server.
# See the NWW3 directory on NOMADS 
# for the list of available model run dates.

mydate='20171101'  # this needs to be a recent data since only recent models are available for download
#url='http://nomads.ncep.noaa.gov:9090/dods/wave/nww3/nww3'+ mydate+'/nww3'+mydate+'_00z'
url='download.nc'

# Extract the significant wave height of combined wind waves and swell

file = netCDF4.Dataset(url)
#lat  = file.variables['lat'][:]
lat  = file.variables['latitude'][:]
#lon  = file.variables['lon'][:]
lon  = file.variables['longitude'][:]
#data = file.variables['htsgwsfc'][1,:,:]
data = file.variables['gtco3'][0,:,:]
#data = file.variables['t2m'][0,:,:]
#file.close()

# Since Python is object oriented, you can explore the contents of the NOMADS
# data set by examining the file object, such as file.variables.

# The indexing into the data set used by netCDF4 is standard python indexing.
# In this case we want the first forecast step, but note that the first time 
# step in the RTOFS OpenDAP link is all NaN values.  So we start with the 
# second timestep

# Plot the field using Basemap.  Start with setting the map
# projection using the limits of the lat/lon data itself:
fig=plt.figure(figsize=(12, 8) )

# Miller projection:
m=Basemap(projection='mill',lat_ts=10,llcrnrlon=lon.min(), \
  urcrnrlon=lon.max(),llcrnrlat=lat.min(),urcrnrlat=lat.max(), \
  resolution='c')


# convert the lat/lon values to x/y projections.

x, y = m(*np.meshgrid(lon,lat))

# plot the field using the fast pcolormesh routine 
# set the colormap to jet.

m.pcolormesh(x,y,data,shading='flat',cmap=plt.cm.jet)
m.colorbar(location='right')

# Add a coastline and axis values.

m.drawcoastlines()
#m.fillcontinents()
m.drawmapboundary()
m.drawparallels(np.arange(-90.,90.,30.),labels=[1,0,0,0])
m.drawmeridians(np.arange(-180.,180.,60.),labels=[0,0,0,1])

# Add a colorbar and title, and then show the plot.

plt.title('Example 1: NWW3 Significant Wave Height from NOMADS');

#plt.show();
plt.savefig('image.png', bbox_inches=0)