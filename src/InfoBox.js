import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css'

function InfoBox({ title, cases, casesType, active, total, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && 'infoBox--selected'} ${'infoBox--' + casesType}`}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className={`infoBox__count ${'infoBox__count--' + casesType}`}>{cases}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
