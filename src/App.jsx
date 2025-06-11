import { useState } from 'react'
import { AvatarGrid } from './components/AvatarGrid'
import Hearts from './components/Hearts'
import './styles/App.css'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="app">
      {/* Декоративные элементы */}
      <Hearts />
      
      {/* Главный контент */}
      <div className="content-wrapper">
        <h1 className="rainbow-text">Succinct Community</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Find your avatar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <div className="search-icon"></div>
        </div>

        <AvatarGrid search={search} />
      </div>

      {/* Подвал */}
      <footer className="footer">
        <p>Made with ❤️ for Succinct Community</p>
      </footer>
    </div>
  )
}

export default App