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