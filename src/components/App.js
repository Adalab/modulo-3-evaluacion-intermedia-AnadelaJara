import '../styles/App.css';
//import adalabersList from '../data/adalabers.json';
import { useEffect, useState } from 'react';

function App() {
  //const [data, setData] = useState(adalabersList);
  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json')
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.results);
      });
  }, []);

  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value);
  }
  const handleChangeCounselor = (ev) => {
    setCounselor(ev.currentTarget.value);
  }
  const handleChangeSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value);
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: name,
      counselor: counselor,
      speciality: speciality,
    }
    setData([...data, newAdalaber]);
    setName('');
    setCounselor('');
    setSpeciality('');
  }

  const htmlList = data.map((adalaber) => (<tr key={adalaber.id}>
    <td>{adalaber.name}</td>
    <td>{adalaber.counselor}</td>
    <td>{adalaber.speciality}</td>
  </tr>
  ));

  return (
    <div>
      <header >
        <h1>Adalabers</h1>
      </header>
      <main>
        <table>
          <thead><tr>
            <th>Nombre</th>
            <th>Tutora  </th>
            <th>Especialidad</th>
          </tr></thead>
          <tbody>
            {htmlList}
          </tbody>
        </table>
        <form>
          <h2>Añade una Adalaber</h2>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChangeName}
            value={name}
          />
          <label htmlFor="counselor">Tutora:</label>
          <input
            type="text"
            name="counselor"
            id="counselor"
            onChange={handleChangeCounselor}
            value={counselor}
          />
          <label htmlFor="speciality">Especialidad:</label>
          <input
            type="text"
            name="speciality"
            id="speciality"
            onChange={handleChangeSpeciality}
            value={speciality}
          />
          <input
            type="submit"
            value="Añadir una nueva Adalaber"
            onClick={handleClick}
          />

        </form>
      </main>
    </div >
  );
}

export default App;
