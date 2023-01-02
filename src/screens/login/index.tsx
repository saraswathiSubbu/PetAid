import Header from "../../components/header/header"
import { Grid, Card, Typography } from "@mui/material"
import { colorFontTheme } from "../../resources/ColorFont"
import { loginStyle } from "./style"
import { SignUpForm } from "../../components/signUpForm"

export default function Login() {
    return (
        <>
            <Header></Header>
            <Grid spacing={3} style={loginStyle.gridContainer}>
                <Card style={loginStyle.card}>
                    <Typography variant="caption" fontWeight={600}>REGISTERUNG</Typography>
                    <Typography variant="h6" color={colorFontTheme.palette.primary.main} marginTop={'20px'}>Wähle deine Zugangsdaten</Typography>
                    <SignUpForm />
                </Card>
            </Grid>
        </>
    )
}