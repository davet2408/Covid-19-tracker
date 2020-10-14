import React from 'react'
import './Table.css'
import numeral from 'numeral';

function Table({ countries }) {
    return (
        <div className="table">
            <table className="innerTable">
                <tbody className='tableBody'>
                    {countries.map((country) => (
                        <tr key={country.country}>
                            <td>{country.country}</td>
                            <td>
                                <strong>{numeral(country.cases).format('0,0')}</strong>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table
