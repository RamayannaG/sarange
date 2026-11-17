
import { useState } from 'react';

import Brand from './components/Brand';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Painel from './pages/Painel';

import './App.css';

function App() {
  const [tela, setTela] = useState('login');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [usuarioCadastrado, setUsuarioCadastrado] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState('');

  // Função para realizar o cadastro
  function cadastrar(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
      alert('Preencha todos os campos!');
      return;
    }

    if (!email.includes('@')) {
      alert('Digite um e-mail válido!');
      return;
    }

    if (senha.length < 4) {
      alert('A senha deve ter pelo menos 4 caracteres!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    setUsuarioCadastrado({
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      senha: senha
    });

    alert('Cadastro realizado com sucesso!');

    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');

    setTela('login');
  }

  // Função para realizar o login
  function entrar(event) {
    event.preventDefault();

    const emailDigitado = email.trim().toLowerCase();

    const acessoDemonstracao =
      emailDigitado === 'admin@sarange.com' && senha === '1234';

    const acessoCadastrado =
      usuarioCadastrado &&
      emailDigitado === usuarioCadastrado.email &&
      senha === usuarioCadastrado.senha;

    if (!acessoDemonstracao && !acessoCadastrado) {
      alert('E-mail ou senha incorretos!');
      return;
    }

    setUsuarioLogado(
      acessoDemonstracao ? 'Administrador' : usuarioCadastrado.nome
    );

    setEmail('');
    setSenha('');

    setTela('painel');
  }

  // Função para sair do sistema
  function sair() {
    setUsuarioLogado('');
    setEmail('');
    setSenha('');
    setTela('login');
  }

  return (
    <div className="app">

      <main className="login-container">

        <Brand />

        {tela === 'login' && (
          <Login
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
            onEntrar={entrar}
            onIrCadastro={() => {
              setEmail('');
              setSenha('');
              setTela('cadastro');
            }}
          />
        )}

        {tela === 'cadastro' && (
          <Cadastro
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
            confirmarSenha={confirmarSenha}
            setConfirmarSenha={setConfirmarSenha}
            onCadastrar={cadastrar}
            onVoltar={() => {
              setNome('');
              setEmail('');
              setSenha('');
              setConfirmarSenha('');
              setTela('login');
            }}
          />
        )}

        {tela === 'painel' && (
          <Painel
            usuario={usuarioLogado}
            onSair={sair}
          />
        )}

        <footer>
          Feito com amor para quem ama doramas ♥
        </footer>

      </main>

    </div>
  );
}

export default App;
