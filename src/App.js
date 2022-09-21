import React from "react";
import Radio from "./Form/Radio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const perguntas = [
  {
    pergunta: "Qual o maior planeta do sistema solar?",
    options: ["Marte", "Júpiter", "Saturno"],
    resposta: "Júpiter",
    id: "p1",
  },
  {
    pergunta: "Quantos ossos temos no nosso corpo?",
    options: ["156", "206", "302"],
    resposta: "206",
    id: "p2",
  },
  {
    pergunta: "Qual o planeta mais próximo do Sol?",
    options: ["Netuno", "Júpiter", "Mercúrio"],
    resposta: "Mercúrio",
    id: "p3",
  },
  {
    pergunta: "Quantos continentes existem?",
    options: ["6", "8", "4"],
    resposta: "6",
    id: "p4",
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button
          type="button"
          className="btn btn-primary btn-lg btn-dark"
          onClick={handleClick}
          style={{ marginLeft: "1rem" }}
        >
          Próxima
        </button>
      )}
    </form>
  );
};

export default App;
