import './App.css';
import logo from './assets/logo.png';
import search from './assets/search.svg';
import prev from './assets/prev.svg';
import next from './assets/next.svg';
import rick from './assets/rick.jpeg';

function App() {
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
        <div className="content">
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
          <div className="item">
            <img src={rick} />
            <div className="backdrop">
              <h3>Rick Sanchez</h3>
            </div>
          </div>
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
