"""
    Copyright 2020 Noa Ammirati Maxime Dumonteil Mathis Lecoeuvre URISA

    This file is part of Brique Copernicus.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
"""
#https://ads.atmosphere.copernicus.eu/cdsapp#!/dataset/cams-solar-radiation-timeseries?tab=form
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
        'time_step': '1month', #time step 
        'time_reference': 'true_solar_time',
        'format': 'csv',
    },
    'download.csv')