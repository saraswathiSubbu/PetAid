import { ThemeProvider } from '@emotion/react'
import './App.css'
import { colorFontTheme } from './resources/ColorFont'
import Login from './screens/login'

function App() {
  return (
    <ThemeProvider theme={colorFontTheme}>
      <Login />
    </ThemeProvider>
  )
}

export default App
