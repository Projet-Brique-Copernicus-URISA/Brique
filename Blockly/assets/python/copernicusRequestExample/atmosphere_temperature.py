import cdsapi

c = cdsapi.Client()

c.retrieve(
    'cams-global-reanalysis-eac4',
    {
        'date': '2003-01-01/2003-01-01',
        'format': 'netcdf',
        'variable': '2m_temperature',
        'time': '00:00',
    },
    'download.nc')