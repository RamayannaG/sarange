
function Botao({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="botao-principal"
    >
      {children}
    </button>
  );
}

export default Botao;
