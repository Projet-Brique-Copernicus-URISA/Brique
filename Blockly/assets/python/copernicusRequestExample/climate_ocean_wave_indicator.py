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