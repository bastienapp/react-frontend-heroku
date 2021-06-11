import axios from 'axios';

function App() {
  const handleClick = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        email: 'test@mail.com',
        password: 'soleil1234',
      })
      .then((response) => alert(JSON.stringify(response)));
  };

  return (
    <div className="App">
      <button onClick={handleClick} type="button">
        Click me!
      </button>
    </div>
  );
}

export default App;
