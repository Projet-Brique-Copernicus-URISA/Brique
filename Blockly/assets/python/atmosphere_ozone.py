import cdsapi

c = cdsapi.Client()

c.retrieve(
    'cams-global-reanalysis-eac4-monthly',
    {
        'format': 'netcdf',
        'variable': 'total_column_ozone',
        'product_type': 'monthly_mean',
        'month': '01',
        'year': '2003',
    },
    'download.nc')