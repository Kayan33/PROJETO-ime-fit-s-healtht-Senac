import "../styles/Imc-calorias-1.css";
import leve from "../assets/icon-sitting-on-chair.png";
import React, { useState } from "react";

function Calorias01() {
const[idade, setIdade] = useState('')
const[altura, setAltura] = useState('')
const[peso, setPeso] = useState('')
const[sexo, setSexo] = useState('')
const[exercicio, setExercicio] = useState('')
const[tipoEmprego, setTipoEmprego] = useState('')

function TaxaMetabólicaBasal() {
    if (sexo === 'masculino') {
        let CalculoMasculino = (13.75*peso) + (5*altura) - (6.76*idade) + 66.5;
console.log(CalculoMasculino)
    }  else if (sexo === 'feminino'){
        let CalculoFeminino = (9.56*peso) + (1.85* altura) - (4.68*idade) + 665
        console.log(CalculoFeminino)
    }
    

    
}
 
  return (
    <main className="container">
      <article className="calorie-calculator">
        <div className="form-container">
          <h1>Calculadora de Calorias</h1>
          <div className="respostas-imediadta">
            <h3>Respostas Imediadta</h3>
            <form className="form">
              <div>
                <p>Idade:</p>
                <input type="number" 
                value={idade}
                onChange={(e) => setIdade(e.target.value)}/>
              </div>
              <div>
                <p>Altura:</p>
                <input type="number" 
                value={altura}
                onChange={(e) => setAltura(e.target.value)}/>
              </div>
              <div>
                <p>Peso atual:</p>
                <input type="number" 
                value={peso}
                onChange={(e) => setPeso(e.target.value)}/>
              </div>


              
              <div>
                <p>Exercício semanal:</p>
                <input type="text" 
                value={exercicio}
                onChange={(e) => setExercicio(e.target.value)}/>
              </div>
              <div>
                <p>Tipo de emprego:</p>
                <input type="text" 
                value={tipoEmprego}
                onChange={(e) => setTipoEmprego(e.target.value)}/>
              </div>
              <div>
                <p>Sexo:</p>
                <select 
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}>
                  <option value='masculino'>Masculono</option>
                  <option value='feminino'>Feminino</option>
                </select>
              </div>
            </form>
            <h2>Qual é o seu nível de atividade diária?</h2>
        <div className="atividades-flex">
          <div>
            <img src={leve} alt="" />
            <button>Atividade leve</button>          
          </div>

          <div>
            <img src={leve} alt="" />
            <button>Atividade moderada</button>
          </div>

          <div>
            <img src={leve} alt="" />
            <button>Atividade elevada</button>
          </div>

          <div>
            <img src={leve} alt="" />
            <button>Atividade intensa</button>
          </div>
        </div>
            <button className="button-calcule" onClick={TaxaMetabólicaBasal}>Calcule IMC</button>
        </div>
          </div>
      </article>
    </main>
  );
}

export default Calorias01;
