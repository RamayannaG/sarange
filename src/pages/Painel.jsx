
import Botao from '../components/Botao';

function Painel({ usuario, onSair }) {
  return (
    <section className="login-card dashboard">

      <h2>Bem-vinda, {usuario}!</h2>

      <p className="subtitle">
        Que bom ter você no universo Sarangê.
      </p>

      <div className="empty-panel">

        <div className="empty-icon">
          ♡
        </div>

        <h3>
          Seu cantinho está esperando por você!
        </h3>

        <p>
          Em breve, suas histórias favoritas estarão reunidas aqui.
        </p>

      </div>

      <Botao onClick={onSair}>
        Sair da conta
      </Botao>

    </section>
  );
}

export default Painel;
