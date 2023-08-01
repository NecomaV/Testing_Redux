import './App.css';
import Profile from './pages/profile';
import Login from './pages/login';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <Profile />
      <Login /> 

    </div>
  );
}

export default App;