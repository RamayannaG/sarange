
import Botao from '../components/Botao';

function Login({
  email,
  setEmail,
  senha,
  setSenha,
  onEntrar,
  onIrCadastro
}) {
  return (
    <section className="login-card">

      <h2>Bem-vinda!</h2>

      <p className="subtitle">
        Entre no seu cantinho de histórias.
      </p>

      <form onSubmit={onEntrar}>

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
          placeholder="Digite sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <Botao type="submit">
          Entrar
        </Botao>

      </form>

      <p className="register">
        Ainda não tem uma conta?

        <button
          type="button"
          className="text-button"
          onClick={onIrCadastro}
        >
          Cadastre-se
        </button>
      </p>

      <div className="demo-access">
        <strong>Acesso demonstrativo</strong>
        <span>E-mail: admin@sarange.com</span>
        <span>Senha: 1234</span>
      </div>

    </section>
  );
}

export default Login;
