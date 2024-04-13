import './App.css'
import Tarjeta from './components/tarjeta.jsx';


function App() {
  const datosUsuario = [
    {
     nombre:'Leonid Almanza', 
     empresa:'Idependiente',
     informacion:'Leonid Almanza ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam sunt inventore aliquid velit eveniet dolores minima sapiente quibusdam! Corrupti, incidunt distinctio placeat eius iure mollitia tenetur deleniti rem molestiae!',
     foto:''
    },
    {
      nombre:'Sarah China en Nigeria', 
      empresa:'Ingeniera de Software ChatDesk',
      informacion:'Sarah China ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam sunt inventore aliquid velit eveniet dolores minima sapiente quibusdam! Corrupti, incidunt distinctio placeat eius iure mollitia tenetur deleniti rem molestiae!',
      foto:''
     },
     {
      nombre:'Emma Bostian en Suecia', 
      empresa:'Ingeniera de Software Spotify',
      informacion:'Emma Bostian ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam sunt inventore aliquid velit eveniet dolores minima sapiente quibusdam! Corrupti, incidunt distinctio placeat eius iure mollitia tenetur deleniti rem molestiae!',
      foto:''
     }
  ]; 

  /* Recorrer el Vector para ir llamandolo y motrando la ifnormación en la tarjeta*/
  return (
    <div>
      <h1>Titulo de la Pagina</h1>
      {datosUsuario.map((data, index) => (
        <Tarjeta nombre={data.nombre} empresa={data.empresa} informacion={data.informacion}/>
        ))}   
     
  </div>
  );
}

export default App
