import { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import ResultadosFor from './Components/ResultadosFor';


const App = () => {
    const [state, setState] = useState({
        Name: "",
        LastName: "",
        Email: "",
        Password: "",
        confirmPassword: "",
        validaction: true,
    });


    return (
        <div className='App'>
            <h1>Hello Dojo!</h1>
            <Formulario entrada={state} setEntrada={setState}></Formulario>
            <ResultadosFor datitos={state} ></ResultadosFor>
        </div>
    );
}

export default App;
