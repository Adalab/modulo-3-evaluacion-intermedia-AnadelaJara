import '../styles/App.css';
import adalabersList from '../data/adalabers.js'

function App() {
  return (
    <div>
      <header >
        <h1>Adalabers</h1>
      </header>
      <main>
        <table>
          {/* <!-- Fila de cabecera --> */}
          <thead><tr>
            <th>Nombre</th>
            <th>Tutora 2</th>
            <th>Especialidad</th>
          </tr></thead>
          <tbody>
            {/* <!-- Primera fila --> */}
            <tr>
              <td>Columa 1 de la fila 1</td>
              <td>Columa 2 de la fila 1</td>
              <td>Columa 3 de la fila 1</td>
            </tr>
          </tbody>
        </table>
        <form>
          <h2>Añade una Adalaber</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            type="text"
            name="counselor"
            id="counselor"
          />
          <input
            type="text"
            name="speciality"
            id="speciality"
          />
          <input
            type="submit"
            value="Añadir una nueva Adalaber"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
