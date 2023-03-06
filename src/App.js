import './App.css';
import { Switch, Route } from 'react-router-dom';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Note} />
        <Route path='/create-note' component={CreateNote} />
        <Route path='/create-note/:id' component={ViewNote}/>
      </Switch>
    </div>
  );
}

export default App;
