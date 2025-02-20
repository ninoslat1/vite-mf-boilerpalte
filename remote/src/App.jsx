import viteLogo from '/vite.svg'
import './App.css'

function App({title, uri}) {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">
        <button>
          <a href={uri} target='_blank'>
            Pergi ke {uri}
          </a>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
