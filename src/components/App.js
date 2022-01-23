import '../styles/App.css';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('all');

  useEffect(() => {
    callToApi()
      .then(responseData => {
        setData(responseData.results);
      });
  }, []);

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value)
  }

  const handleChangeSelect = (ev) => {
    setSelect(ev.currentTarget.value);
  }

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
      id: data.length,
      social_networks: [{}],
    }
    setData([...data, newAdalaber]);
    setName('');
    setCounselor('');
    setSpeciality('');

  }

  const htmlList = data
    .filter((adalaber) => {
      if (select === 'all') {
        return adalaber;
      } else if (select === 'yanelis') {
        return adalaber.counselor === 'Yanelis';
      } else if (select === 'dayana') {
        return adalaber.counselor === 'Dayana';
      } else if (select === 'ivan') {
        return adalaber.counselor === 'Iván';
      }
    })
    .filter((adalaber) => adalaber.name.toLowerCase().includes(search.toLowerCase()))

    .map((adalaber) => (<tr className="list" key={adalaber.id}>
      <td>{adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
      <td>{<ul>
        {adalaber.social_networks.map((social, index) => {
          return (
            <li key={index}>
              <a href={social.url}>{social.name}</a>
            </li>
          );
        })}
      </ul>}</td>
    </tr>)
    );

  return (
    <div>
      <header className="header">
        <h1>Adalabers</h1>
      </header>
      <main className="main">
        <form action="" className="form">
          <label className="label" htmlFor="search">Nombre:</label>
          <input className="input"
            type="text"
            name="search"
            id="search"
            placeholder="Ej. MariCarmen"
            onChange={handleChangeSearch}
            value={search}
          />
          <label htmlFor="counselor" className="label">Tutora:</label>
          <select onChange={handleChangeSelect} value={select} className="select" name="counselor" id="counselor">
            <option value="all">Todas</option>
            <option value="yanelis">Yanelis</option>
            <option value="dayana">Dayana</option>
            <option value="ivan">Iván</option>
          </select>
        </form>
        <table className="table">
          <thead>
            <tr className="thread">
              <th>Nombre</th>
              <th>Tutora  </th>
              <th>Especialidad</th>
              <th>Redes Sociales</th>
            </tr></thead>
          <tbody className="main1__table--body">
            {htmlList}
          </tbody>
        </table>
        <form className="form">
          <h2>Añade una Adalaber</h2>
          <label htmlFor="name" className="label">Nombre:</label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            onChange={handleChangeName}
            value={name}
          />
          <label htmlFor="counselor" className="label" >Tutora:</label>
          <input
            className="input"
            type="text"
            name="counselor"
            id="counselor"
            onChange={handleChangeCounselor}
            value={counselor}
          />
          <label htmlFor="speciality"
            className="label">Especialidad:</label>
          <input
            className="input"
            type="text"
            name="speciality"
            id="speciality"
            onChange={handleChangeSpeciality}
            value={speciality}
          />
          <input
            className="btn"
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
