
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';


const dati = {
  title: "ButtonNameExample",
  altImage : "Parmigiana",
  srcImage: 'https://www.melarossa.it/wp-content/uploads/2021/05/melanzane-alla-parmigiana-light-750x375.jpg'
  
}


function App() {
  return (
    <div className="App">
      <p>test</p>
      < ButtonComponent buttonTitle={dati.title} />
      < ImageComponent alt={dati.altImage} src={dati.srcImage} />
    </div>
  );
}

export default App;
