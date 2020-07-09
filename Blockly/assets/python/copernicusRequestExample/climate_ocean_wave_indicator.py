import cdsapi

c = cdsapi.Client(url='https://cds.climate.copernicus.eu/api/v2', key='49162:5ee6baf1-bb6c-4b49-bceb-829ec042ff47')

c.retrieve(
    'sis-ocean-wave-indicators',
    {
        'variable': 'significant_wave_height',
        'experiment': 'historical',
        'period': '1976_2005',
        'statistics': '90th_percentile',
        'format': 'zip', #it download a nc in a zip
    },
    'download.zip')