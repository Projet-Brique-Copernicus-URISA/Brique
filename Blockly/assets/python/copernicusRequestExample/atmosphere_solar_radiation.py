import cdsapi

c = cdsapi.Client(url='https://ads.atmosphere.copernicus.eu/api/v2', key='1825:3bfdb1b4-8a37-4009-b6e5-e5c69d96ea68')

c.retrieve(
    'cams-solar-radiation-timeseries',
    {
        'sky_type': 'observed_cloud',
        'location': { # zone
            'latitude': 0.00002,
            'longitude': -0.00002,
        },
        'altitude': '-999.', #default value
        'date': '2020-06-09/2020-06-09',
        'time_step': '1month', #time step to change
        'time_reference': 'true_solar_time',
        'format': 'csv',
    },
    'download.csv')