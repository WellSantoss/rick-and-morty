import { useState, useEffect } from 'react';
import { api } from './services';
import Character from './components/character';
import Pagination from './components/pagination';
import './App.css';
import logo from './assets/logo.png';
import search from './assets/search.svg';

function App() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      await api.get(`/character?page=${currentPage}`).then((response) => {
        setLoading(false);

        if (response.status == 200) {
          setInfo(response.data.info);
          setCharacters(response.data.results);
        } else {
          setInfo(null);
          setCharacters(null);
        }
      });
    })();
  }, [currentPage]);

  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo" />
      </header>
      <main>
        <div className="title">
          <h1>Characters</h1>
          <div className="search">
            <input type="text" name="search" id="search" />
            <button>
              <img src={search} alt="search" />
            </button>
          </div>
        </div>
        {loading ? (
          <div className="loading"></div>
        ) : characters ? (
          <>
            <div className="content">
              {characters.map((character) => (
                <Character key={character.id} data={character} />
              ))}
            </div>
            <Pagination info={{ currentPage, setCurrentPage, ...info }} />
          </>
        ) : (
          <div>No characters found.</div>
        )}
      </main>
      <footer className="footer">
        Developed by{' '}
        <a
          href="https://github.com/WellSantoss"
          target="_blank"
          rel="noreferrer"
        >
          @wellsantoss
        </a>{' '}
        using{' '}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          The Rick and Morty API
        </a>
      </footer>
    </>
  );
}

export default App;
