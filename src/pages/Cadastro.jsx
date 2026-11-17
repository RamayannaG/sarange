
import Botao from '../components/Botao';

function Cadastro({
  nome,
  setNome,
  email,
  setEmail,
  senha,
  setSenha,
  confirmarSenha,
  setConfirmarSenha,
  onCadastrar,
  onVoltar
}) {
  return (
    <section className="login-card">

      <h2>Crie sua conta!</h2>

      <p className="subtitle">
        Faça parte do universo Sarangê.
      </p>

      <form onSubmit={onCadastrar}>

        <label>Nome completo</label>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label>E-mail</label>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Senha</label>

        <input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <label>Confirmar senha</label>

        <input
          type="password"
          placeholder="Digite a senha novamente"
          value={confirmarSenha}
          onChange={(event) => setConfirmarSenha(event.target.value)}
        />

        <Botao type="submit">
          Cadastrar
        </Botao>

      </form>

      <p className="register">
        Já possui uma conta?

        <button
          type="button"
          className="text-button"
          onClick={onVoltar}
        >
          Voltar ao login
        </button>
      </p>

    </section>
  );
}

export default Cadastro;
