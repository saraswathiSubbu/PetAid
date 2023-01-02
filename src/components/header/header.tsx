import { ArrowBackIosNewOutlined, Close, LanguageOutlined } from '@mui/icons-material'
import { Card, Typography } from '@mui/material'
import { useEffect } from 'react'
import { apiStore } from '../../api/store'
import { colorFontTheme } from '../../resources/ColorFont'
import { HeaderStyle } from './headerStyle'

export default function Header() {

    const { fetch, apiSucess } = apiStore()

    useEffect(() => {
        fetch()
    }, [])
    
    return (
        <>
            <Card variant="outlined" style={HeaderStyle.headerMainContainer}>
                <div style={HeaderStyle.spacing}>
                    <Typography color={colorFontTheme.palette.primary.main} variant="body1">Dr.PetAid</Typography>
                </div>
                <Typography color={colorFontTheme.palette.primary.main} variant="body1" style={HeaderStyle.textCenter}>{apiSucess}</Typography>
                <div style={HeaderStyle.spacing}>
                    <LanguageOutlined></LanguageOutlined>
                    <Typography variant='subtitle1'>DE</Typography>
                </div>
            </Card>
            <div style={HeaderStyle.container}>
                <div style={HeaderStyle.spacing}>
                    <ArrowBackIosNewOutlined></ArrowBackIosNewOutlined>
                    <Typography variant='subtitle1'>Zurück</Typography>
                </div>
                <div style={HeaderStyle.spacing}>
                    <Typography variant='subtitle1'>Abbrechen</Typography>
                    <Close></Close>
                </div>
            </div>
        </>
    )
}