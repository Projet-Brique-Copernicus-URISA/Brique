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
	'tmp/download.nc')