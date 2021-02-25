import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import CaseProceeding from './Components/CaseProceeding';
import Proceeding from './Components/Proceeding';
import CaseRecording from './Components/CaseRecording';
import Judge from './Components/Judge';
import Esummon from './Components/Esummon';
import Admin from './Components/Admin';
import Register from './Components/Register';
import FileCase from './Components/FileCase';
import SendSummon from './Components/sendSummon';
import FilingCase from './Components/filingCase';
import CauseList from './Components/CauseList';
function App() {
  return (

    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} />}
        />
        <Route
          exact
          path="/admin"
          render={(props) => <Admin {...props} />}
        />
        <Route
          exact
          path="/proceeding"
          render={(props) => <Proceeding {...props} />}
        />
        <Route
          exact
          path="/caseProceeding"
          render={(props) => <CaseProceeding {...props} />}
        />
        <Route
          exact
          path="/caseRecording"
          render={(props) => <CaseRecording {...props} />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/sendsummon"
          render={(props) => <SendSummon {...props} />}
        />
        <Route
          exact
          path="/filingCase"
          render={(props) => <FilingCase {...props} />}
        />
        <Route
          exact
          path="/judge"
          render={(props) => <Judge {...props} />}
        />
        <Route
          exact
          path="/causelist"
          render={(props) => <CauseList {...props} />}
        />
        <Route
          exact
          path="/fileCase"
          render={(props) => <FileCase {...props} />}
        />
        <Route
          exact
          path="/esummon"
          render={(props) => <Esummon {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;