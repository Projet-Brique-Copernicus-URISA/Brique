import cdsapi

c = cdsapi.Client()

c.retrieve(
    'cams-global-reanalysis-eac4-monthly',
    {
        'format': 'netcdf',
        'variable': 'black_carbon_aerosol_optical_depth_550nm',
        'year': '2010',
        'month': '05',
        'product_type': 'monthly_mean',
    },
    'download.nc')