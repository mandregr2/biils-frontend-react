import Container from '@material-ui/core/Container';

import Routes from './components/Routes';
import VaccinationForm from './components/Vaccination';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Login from './components/Login';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Routes/>
      </Container>
  );
}

export default App;
