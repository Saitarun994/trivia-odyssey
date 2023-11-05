
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import {useAuth0} from "@auth0/auth0-react"

function App() {

  const{isLoading, error} = useAuth0();

  return (
    <div className="App">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Header />
          <Body/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
