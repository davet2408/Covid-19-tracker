import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import './colors.css'

const style = getComputedStyle(document.body);

const casesTypeColors = {
    cases: {
        hex: style.getPropertyValue('--color-cases'),
        multiplier: 800,
    },
    recovered: {
        hex: style.getPropertyValue('--color-recovered'),
        multiplier: 1200,
    },
    deaths: {
        hex: style.getPropertyValue('--color-deaths'),
        multiplier: 2000,
    },
};

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;
}

export const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";

// Draw circles on map with tooltip
export const showDataOnMap = (data, caseType = 'cases') => (
    data.map((country) => (
        <Circle
            key={country.country}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[caseType].hex}
            fillColor={casesTypeColors[caseType].hex}
            radius={
                Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier
            }
        >
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    ></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format("0,0")}
                    </div>
                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}
                    </div>
                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}
                    </div>
                </div>
            </Popup>
        </Circle>
    ))
);