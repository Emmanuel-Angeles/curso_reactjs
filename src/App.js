import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';

function App() {
  // let nombre = "Manu";
  // let auth = true;
  // let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" />
            <h1>{nombre}</h1>
            <p>{auth ? "El usuario esta logueado":"El usuario no esta logueado"}</p>
            <p>{2 + 1}</p> */}
            <p>
              Editar <code>src/App.js</code> and save to reload.
            </p>
            {/* <ul>
              {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
              ))}
            </ul> */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Componente msg="Hola soy un Componente Funcional expresado desde una prop" />
            <hr/>
            <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={19} 
            booleano={true} 
            arreglo={[1,2,3]}
            objeto={{nombre:"Manu",correo:"e@yahoo.com"}}
            funcion={(num) => num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="Soy un  componente pasado como Prop" />}
            />
            <hr/>
            <Estado />
            <hr/>
            <RenderizadoCondicional />
            <hr/>
            <RenderizadoElementos />
            <hr/>
            <Eventos />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
