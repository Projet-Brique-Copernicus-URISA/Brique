import cdsapi

c = cdsapi.Client(url='https://ads.atmosphere.copernicus.eu/api/v2', key='1825:3bfdb1b4-8a37-4009-b6e5-e5c69d96ea68')

c.retrieve(
    'cams-global-reanalysis-eac4',
    {
        'date': '2003-01-01/2003-01-01',
        'format': 'netcdf',
        'variable': '2m_temperature',
        'time': '00:00',
    },
    'download.nc')