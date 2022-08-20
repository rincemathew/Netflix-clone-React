import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {animation, action_movies, Romance, western, fantasy, horror, comedy} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={animation} title='Animation' vhSize/>
      <RowPost url={action_movies} title='Action Movies'/>
      <RowPost url={Romance} title='Romance'/>
      <RowPost url={western} title='Western'/>
      <RowPost url={fantasy} title='Fantasy'/>
      <RowPost url={horror} title='Horror'/>
      <RowPost url={comedy} title='Comedy'/>
      <Footer/>
    </div>
  );
}

export default App;
