import { CSSProperties } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <Link to="./">
          <h1>Home</h1>
        </Link>
        <Link to="favourites">Favourites</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

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

export default App;
