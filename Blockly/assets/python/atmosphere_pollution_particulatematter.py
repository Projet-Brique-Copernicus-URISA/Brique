import cdsapi

c = cdsapi.Client()

c.retrieve(
    'cams-europe-air-quality-forecasts',
    {
        'variable': 'particulate_matter_2.5um',
        'model': [
            'ensemble',
        ],
        'level': '0',
        'date': '2020-06-09/2020-06-11',
        'type': 'forecast',
        'time': '00:00',
        'leadtime_hour': '4',
        'format': 'netcdf',
    },
    'download.nc')