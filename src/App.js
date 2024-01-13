import { useStateValue } from './StateProvider';
import Login from './components/Login';
import HomePage from './pages/HomePage';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <HomePage />
      )}

    </>
  );
}

export default App;
