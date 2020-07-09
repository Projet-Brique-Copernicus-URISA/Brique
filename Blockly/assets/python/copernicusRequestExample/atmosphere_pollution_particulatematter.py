#https://ads.atmosphere.copernicus.eu/cdsapp#!/dataset/cams-europe-air-quality-forecasts?tab=form
import cdsapi

c = cdsapi.Client(url='https://ads.atmosphere.copernicus.eu/api/v2', key='1825:3bfdb1b4-8a37-4009-b6e5-e5c69d96ea68')

c.retrieve(
    'cams-europe-air-quality-forecasts',
    {
        'variable': 'particulate_matter_2.5um',
        'model': [
            'ensemble',
        ],
        'level': '0',
        'date': '2020-06-09/2020-06-08',
        'type': 'forecast',
        'time': '00:00',
        'leadtime_hour': '4',
        'format': 'netcdf',
    },
    'download.nc')