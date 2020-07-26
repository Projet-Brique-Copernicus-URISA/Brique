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
#https://ads.atmosphere.copernicus.eu/cdsapp#!/dataset/cams-global-reanalysis-eac4?tab=form
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