import { ThemeProvider, Flex, NavLink } from 'theme-ui'
import { tosh } from '@theme-ui/presets'
import './App.css'
import Main from './content/Main.mdx'
import { Needle } from './Needle'

function App() {
  return (
    <div className="app">
      <div className="hero">
        <Needle path="sceneRoot.glb"/>
        <div className="hero-fade"/>
      </div>
      <ThemeProvider theme={tosh}>
        
        <div className="ContentWrapper">
          {/* <Flex as="nav">
            <NavLink href="#!" p={2}>
              Nav 1
            </NavLink>
            <NavLink href="#!" p={2}>
              Nav 2
            </NavLink>
            <NavLink href="#!" p={2}>
              Nav 3
            </NavLink>
          </Flex> */}
          <Main/>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
