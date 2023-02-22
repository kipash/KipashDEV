import './App.css'
import Test from './content/Test.mdx'

function App() {
  return (
    <div className="app">
      <div className="hero">
        <p className="hero-text">Kryštof Toman</p>
      </div>
      <div className="ContentWrapper">
        <nav><button>A</button><button>B</button><button>C</button></nav>
        <Test/>
      </div>
    </div>
  )
}

export default App
