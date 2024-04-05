import { CSSProperties } from 'react';
import { Link, Outlet } from 'react-router-dom';

// Onödig upprepning av stil
function App() {
  const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.1)', 
    color: 'black',
    fontSize: '1rem',
    width: '100%',
    margin: '0 auto',
  };

  const linkStyle: CSSProperties = {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1rem',
  };
// Förbättring:Ostrukturerad kod som kan förbättras genom att använda en separat komponent i mapp "components" för att återanvända kod.
  return (
    <div>
      {/* onödigt att använda CSSProperties då all stil för css finns i index.css on de inte hade varit ett större projekt då de kan vara skönare och inte ha i en index.css fil och då använda ex använda mui   */}
      <header style={headerStyle}>
        <Link to="./" style={linkStyle}>
          <h1>Home</h1>
        </Link>
        <Link to="favourites" style={linkStyle}>
          <h1>Favourites</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
