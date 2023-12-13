import React from "react";

const Buscador = ({ valueBuscador, setValueBuscador }) => {
  return (
    <div>
      <input
        onChange={(e) => setValueBuscador(e.target.value)}
        type="text"
        className="form-control pokemon-buscador"
        value={valueBuscador}
      ></input>
    </div>
  );
};

export default Buscador;
