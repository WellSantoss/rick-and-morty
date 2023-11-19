import { useState, useEffect } from 'react';
import { api } from './services';
import Character from './components/character';
import './App.css';
import logo from './assets/logo.png';
import search from './assets/search.svg';
import prev from './assets/prev.svg';
import next from './assets/next.svg';

function App() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    (async () => {
      await api.get('/character').then((response) => {
        setLoading(false);

        if (response.status == 200) {
          setInfo(response.data.info);
          setCharacters(response.data.results);
        } else {
          setInfo(null);
          setCharacters(null);
        }

        console.log(characters);
      });
    })();
  }, []);

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
            <div className="pagination">
              <button>
                <img src={prev} alt="prev" />
              </button>
              <button>1</button>
              <button className="current">2</button>
              <button>3</button>
              <button>
                <img src={next} alt="next" />
              </button>
            </div>
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
