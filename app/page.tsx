"use client";

import { useState } from "react";

// --- COMPONENTE DA LOGO ---
function TechPathLogo({
  size = "normal",
}: {
  size?: "small" | "normal" | "large";
}) {
  const imgSizes = {
    small: "w-32 md:w-36",
    normal: "w-48",
    large: "w-56 md:w-64",
  };

  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="TechPath Logo"
        className={`${imgSizes[size]} h-auto object-contain`}
      />
    </div>
  );
}

// --- TIPAGENS E PERGUNTAS DO QUESTIONÁRIO ---
type Area = "dev" | "ux" | "devops";
type Alternativa = { texto: string; area: Area };
type Pergunta = { categoria: string; pergunta: string; alternativas: Alternativa[] };
const criarAlternativa = (texto: string, area: Area): Alternativa => ({ texto, area });

const perguntas: Pergunta[] = [
  {
    categoria: "Interesses",
    pergunta: "O que mais desperta sua curiosidade em um projeto de software?",
    alternativas: [
      criarAlternativa("Criar e programar novas funcionalidades", "dev"),
      criarAlternativa("Pensar em como o usuário vai utilizar o sistema", "ux"),
      criarAlternativa("Entender como o sistema será executado e disponibilizado", "devops"),
      criarAlternativa("Resolver problemas usando código", "dev"),
      criarAlternativa("Melhorar a experiência de quem utiliza o sistema", "ux"),
    ],
  },
  {
    categoria: "Desenvolvimento",
    pergunta: "Você recebe um sistema com um erro. O que mais gostaria de fazer?",
    alternativas: [
      criarAlternativa("Investigar o código até encontrar o problema", "dev"),
      criarAlternativa("Verificar se a interface está confundindo o usuário", "ux"),
      criarAlternativa("Verificar logs e informações do servidor", "devops"),
      criarAlternativa("Criar uma solução no código", "dev"),
      criarAlternativa("Observar como o usuário está tentando utilizar a funcionalidade", "ux"),
    ],
  },
  {
    categoria: "Tecnologia",
    pergunta: "Qual atividade parece mais interessante para você?",
    alternativas: [
      criarAlternativa("Desenvolver uma aplicação do zero", "dev"),
      criarAlternativa("Criar uma interface bonita e fácil de utilizar", "ux"),
      criarAlternativa("Configurar servidores e ambientes", "devops"),
      criarAlternativa("Criar APIs e regras de negócio", "dev"),
      criarAlternativa("Criar protótipos de telas", "ux"),
    ],
  },
  {
    categoria: "Aprendizado",
    pergunta: "Quando você aprende uma tecnologia nova, qual parte mais chama sua atenção?",
    alternativas: [
      criarAlternativa("Aprender a programar com ela", "dev"),
      criarAlternativa("Descobrir como melhorar a experiência do usuário", "ux"),
      criarAlternativa("Entender como colocar a tecnologia em produção", "devops"),
      criarAlternativa("Testar recursos e criar funcionalidades", "dev"),
      criarAlternativa("Entender como as pessoas interagem com ela", "ux"),
    ],
  },
  {
    categoria: "Projetos",
    pergunta: "Se você pudesse escolher uma atividade em um projeto, qual escolheria?",
    alternativas: [
      criarAlternativa("Programar uma nova funcionalidade", "dev"),
      criarAlternativa("Planejar as telas do sistema", "ux"),
      criarAlternativa("Criar um processo automático de publicação", "devops"),
      criarAlternativa("Corrigir bugs e melhorar o código", "dev"),
      criarAlternativa("Pensar na facilidade de uso do sistema", "ux"),
    ],
  },
  {
    categoria: "Problemas",
    pergunta: "Qual tipo de problema você teria mais interesse em resolver?",
    alternativas: [
      criarAlternativa("Um erro em uma função do programa", "dev"),
      criarAlternativa("Uma tela que os usuários consideram confusa", "ux"),
      criarAlternativa("Um sistema que está caindo constantemente", "devops"),
      criarAlternativa("Um problema de lógica no código", "dev"),
      criarAlternativa("Uma experiência ruim durante a utilização", "ux"),
    ],
  },
  {
    categoria: "Produção",
    pergunta: "Um sistema apresentou problemas depois de ser publicado. O que mais chama sua atenção?",
    alternativas: [
      criarAlternativa("Descobrir qual parte do código causou o problema", "dev"),
      criarAlternativa("Entender como os usuários foram afetados", "ux"),
      criarAlternativa("Analisar os servidores, logs e métricas", "devops"),
      criarAlternativa("Corrigir o código responsável pelo erro", "dev"),
      criarAlternativa("Pensar em como evitar que o usuário tenha dificuldades", "ux"),
    ],
  },
  {
    categoria: "Automação",
    pergunta: "Uma tarefa precisa ser repetida manualmente toda semana. O que você faria?",
    alternativas: [
      criarAlternativa("Criaria um programa para realizar a tarefa", "dev"),
      criarAlternativa("Pensaria se a tarefa poderia ser simplificada para o usuário", "ux"),
      criarAlternativa("Criaria uma automação para executar a tarefa sozinha", "devops"),
      criarAlternativa("Desenvolveria uma ferramenta para facilitar o processo", "dev"),
      criarAlternativa("Analisaria como tornar o processo mais simples", "ux"),
    ],
  },
  {
    categoria: "Interface",
    pergunta: "Ao criar uma nova tela para um sistema, o que você considera mais importante?",
    alternativas: [
      criarAlternativa("Que o código da tela esteja bem estruturado", "dev"),
      criarAlternativa("Que seja fácil e agradável de utilizar", "ux"),
      criarAlternativa("Que seja fácil colocar a tela em produção", "devops"),
      criarAlternativa("Que todas as funcionalidades funcionem corretamente", "dev"),
      criarAlternativa("Que o usuário entenda rapidamente o que precisa fazer", "ux"),
    ],
  },
  {
    categoria: "Usuário",
    pergunta: "Um usuário está tendo dificuldade para realizar uma tarefa. O que você faria primeiro?",
    alternativas: [
      criarAlternativa("Verificaria se existe algum erro no código", "dev"),
      criarAlternativa("Observaria como o usuário está tentando realizar a tarefa", "ux"),
      criarAlternativa("Verificaria se existe algum problema no ambiente", "devops"),
      criarAlternativa("Testaria a funcionalidade para encontrar possíveis bugs", "dev"),
      criarAlternativa("Pensaria em uma forma de deixar a tarefa mais intuitiva", "ux"),
    ],
  },
  {
    categoria: "Desempenho",
    pergunta: "Um sistema está muito lento. Qual investigação mais desperta seu interesse?",
    alternativas: [
      criarAlternativa("Otimizar o código responsável pelo processamento", "dev"),
      criarAlternativa("Verificar se a interface está dificultando a navegação", "ux"),
      criarAlternativa("Analisar servidores, infraestrutura e consumo de recursos", "devops"),
      criarAlternativa("Encontrar partes do código que podem ser melhoradas", "dev"),
      criarAlternativa("Simplificar o caminho que o usuário precisa seguir", "ux"),
    ],
  },
  {
    categoria: "Ferramentas",
    pergunta: "Qual dessas ferramentas ou atividades parece mais interessante?",
    alternativas: [
      criarAlternativa("IDE e linguagens de programação", "dev"),
      criarAlternativa("Figma e prototipação de interfaces", "ux"),
      criarAlternativa("Docker e ferramentas de infraestrutura", "devops"),
      criarAlternativa("Frameworks para desenvolvimento", "dev"),
      criarAlternativa("Testes de usabilidade e protótipos", "ux"),
    ],
  },
  {
    categoria: "Arquitetura",
    pergunta: "Quando um sistema começa a crescer, qual preocupação mais chama sua atenção?",
    alternativas: [
      criarAlternativa("Organizar melhor o código", "dev"),
      criarAlternativa("Manter uma experiência simples para o usuário", "ux"),
      criarAlternativa("Garantir que o sistema suporte muitos usuários", "devops"),
      criarAlternativa("Criar uma arquitetura de software bem estruturada", "dev"),
      criarAlternativa("Evitar que novas funcionalidades deixem a interface confusa", "ux"),
    ],
  },
  {
    categoria: "Trabalho em equipe",
    pergunta: "Em um trabalho em equipe, qual atividade você escolheria?",
    alternativas: [
      criarAlternativa("Desenvolver as funcionalidades", "dev"),
      criarAlternativa("Pensar nas telas e na experiência", "ux"),
      criarAlternativa("Organizar o ambiente e o processo de entrega", "devops"),
      criarAlternativa("Resolver problemas técnicos", "dev"),
      criarAlternativa("Entender as necessidades dos usuários", "ux"),
    ],
  },
  {
    categoria: "Debugging",
    pergunta: "Qual situação parece mais interessante para você?",
    alternativas: [
      criarAlternativa("Encontrar um bug difícil no código", "dev"),
      criarAlternativa("Descobrir por que os usuários não entendem uma tela", "ux"),
      criarAlternativa("Descobrir por que um serviço está fora do ar", "devops"),
      criarAlternativa("Melhorar uma função que está apresentando problemas", "dev"),
      criarAlternativa("Redesenhar uma funcionalidade que gera confusão", "ux"),
    ],
  },
  {
    categoria: "Carreira",
    pergunta: "Qual projeto você gostaria mais de colocar no seu portfólio?",
    alternativas: [
      criarAlternativa("Uma aplicação completa desenvolvida por você", "dev"),
      criarAlternativa("Um projeto de interface e experiência do usuário", "ux"),
      criarAlternativa("Uma infraestrutura automatizada com CI/CD", "devops"),
      criarAlternativa("Uma API ou sistema desenvolvido do zero", "dev"),
      criarAlternativa("Um protótipo completo de aplicativo", "ux"),
    ],
  },
  {
    categoria: "Feedback",
    pergunta: "Qual tipo de feedback seria mais interessante para você receber?",
    alternativas: [
      criarAlternativa("Uma avaliação sobre a qualidade do meu código", "dev"),
      criarAlternativa("Uma avaliação sobre a facilidade de uso da interface", "ux"),
      criarAlternativa("Uma avaliação sobre a estabilidade do sistema", "devops"),
      criarAlternativa("Sugestões para melhorar minha implementação", "dev"),
      criarAlternativa("Sugestões para melhorar a experiência do usuário", "ux"),
    ],
  },
  {
    categoria: "Pressão",
    pergunta: "Você precisa entregar um sistema rapidamente. O que faria primeiro?",
    alternativas: [
      criarAlternativa("Implementaria as funcionalidades principais", "dev"),
      criarAlternativa("Simplificaria a experiência para o usuário", "ux"),
      criarAlternativa("Automatizaria o processo de entrega", "devops"),
      criarAlternativa("Priorizaría as partes mais importantes do código", "dev"),
      criarAlternativa("Deixaria o fluxo da aplicação o mais simples possível", "ux"),
    ],
  },
  {
    categoria: "Futuro",
    pergunta: "Qual assunto você teria mais vontade de estudar nos próximos meses?",
    alternativas: [
      criarAlternativa("Novas linguagens e frameworks", "dev"),
      criarAlternativa("Design de interfaces e experiência do usuário", "ux"),
      criarAlternativa("Cloud, containers e infraestrutura", "devops"),
      criarAlternativa("Arquitetura e desenvolvimento de sistemas", "dev"),
      criarAlternativa("Acessibilidade e pesquisa com usuários", "ux"),
    ],
  },
  {
    categoria: "Perfil",
    pergunta: "Qual dessas atividades você faria por mais tempo sem se incomodar?",
    alternativas: [
      criarAlternativa("Programar e resolver problemas usando código", "dev"),
      criarAlternativa("Criar e melhorar interfaces", "ux"),
      criarAlternativa("Configurar e automatizar ambientes", "devops"),
      criarAlternativa("Desenvolver e testar funcionalidades", "dev"),
      criarAlternativa("Pensar em como tornar um produto mais fácil de usar", "ux"),
    ],
  },
];

export default function App() {
  const [telaAtual, setTelaAtual] = useState<
    "login" | "cadastro" | "redefinirSenha" | "questionario" | "resultado"
  >("login");

  // Estados de erro para os formulários
  const [erroForm, setErroForm] = useState("");

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<(number | null)[]>(Array(perguntas.length).fill(null));

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const pergunta = perguntas[perguntaAtual];
  const respostaSelecionada = respostas[perguntaAtual];

  const mudarTela = (novaTela: "login" | "cadastro" | "redefinirSenha" | "questionario" | "resultado") => {
    setErroForm(""); // Limpa o erro ao trocar de tela
    setTelaAtual(novaTela);
  };

  // --- VALIDAÇÕES DE FORMULÁRIO ---
  const handleLogin = () => {
    if (!email || !senha) {
      setErroForm("Preencha todos os campos para continuar.");
      return;
    }
    setErroForm("");
    mudarTela("questionario");
  };

  const handleCadastro = () => {
    if (!email || !senha || !confirmarSenha) {
      setErroForm("Preencha todos os campos.");
      return;
    }
    if (senha !== confirmarSenha) {
      setErroForm("As senhas não coincidem. Tente novamente.");
      return;
    }
    setErroForm("");
    mudarTela("questionario");
  };

  const handleRedefinirSenha = () => {
    if (!email || !novaSenha || !confirmarSenha) {
      setErroForm("Preencha todos os campos.");
      return;
    }
    if (novaSenha !== confirmarSenha) {
      setErroForm("A nova senha e a confirmação não coincidem.");
      return;
    }
    setErroForm("");
    alert("Senha redefinida com sucesso!");
    mudarTela("login");
  };

  const selecionarResposta = (indice: number) => {
    const novasRespostas = [...respostas];
    novasRespostas[perguntaAtual] = indice;
    setRespostas(novasRespostas);
  };

  const proximaPergunta = () => {
    if (respostaSelecionada === null) return;
    if (perguntaAtual === perguntas.length - 1) {
      mudarTela("resultado");
      return;
    }
    setPerguntaAtual(perguntaAtual + 1);
  };

  const voltarPergunta = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual(perguntaAtual - 1);
    }
  };

  const calcularResultado = () => {
    const pontuacoes = { dev: 0, ux: 0, devops: 0 };
    respostas.forEach((resposta, indicePergunta) => {
      if (resposta === null) return;
      const alternativa = perguntas[indicePergunta].alternativas[resposta];
      pontuacoes[alternativa.area] += 1;
    });

    const total = pontuacoes.dev + pontuacoes.ux + pontuacoes.devops;

    if (total === 0) {
      return [
        {
          nome: "Engenharia de Software",
          pct: 92,
          desc: "A Engenharia de Software é uma área focada no desenvolvimento de sistemas, lógica de programação e arquitetura de software.",
        },
        { nome: "UX/UI", pct: 50, desc: "Desenvolvimento de interfaces e experiência do usuário." },
        { nome: "DevOps", pct: 50, desc: "Automação e gestão de servidores em nuvem." },
      ];
    }

    const lista = [
      {
        nome: "Engenharia de Software",
        pct: Math.round((pontuacoes.dev / total) * 100) || 92,
        desc: "A Engenharia de Software é uma área focada no desenvolvimento de sistemas, lógica de programação e arquitetura de software.",
      },
      {
        nome: "UX/UI",
        pct: Math.round((pontuacoes.ux / total) * 100) || 50,
        desc: "Design de interfaces intuitivas, prototipação e experiência do usuário.",
      },
      {
        nome: "DevOps",
        pct: Math.round((pontuacoes.devops / total) * 100) || 50,
        desc: "Infraestrutura em nuvem, configuração de servidores e automação de deploys.",
      },
    ];

    return lista.sort((a, b) => b.pct - a.pct);
  };

  const refazerQuestionario = () => {
    setPerguntaAtual(0);
    setRespostas(Array(perguntas.length).fill(null));
    mudarTela("questionario");
  };

  const progresso = Math.round(((perguntaAtual + 1) / perguntas.length) * 100);
  const ranking = calcularResultado();
  const principal = ranking[0];
  const outrasAreas = ranking.slice(1);

  // ==========================================
  // 1. TELA DE LOGIN
  // ==========================================
  if (telaAtual === "login") {
    return (
      <div className="min-h-screen bg-[#F3EFFC] flex flex-col items-center justify-center p-4 font-sans text-gray-900">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <TechPathLogo size="large" />
          </div>

          <h1 className="text-xl font-bold text-[#5816B7] mb-6">Seja bem vindo(a)!</h1>

          <div className="w-full bg-white rounded-3xl p-8 shadow-sm border border-purple-50 flex flex-col gap-5">
            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Email</label>
              <input
                type="email"
                placeholder="email@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Senha</label>
              <input
                type="password"
                placeholder="***"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            {erroForm && (
              <p className="text-red-500 text-xs font-semibold text-center">{erroForm}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full mt-2 py-3 bg-[#5816B7] text-white font-bold rounded-xl hover:bg-[#470f99] transition shadow-xs text-sm"
            >
              Continuar
            </button>

            <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mt-2">
              <button onClick={() => mudarTela("redefinirSenha")} className="hover:text-[#5816B7]">
                Esqueceu a senha?
              </button>

              <div>
                <span>Ainda não possui cadastro? </span>
                <button
                  onClick={() => mudarTela("cadastro")}
                  className="text-[#5816B7] font-bold hover:underline"
                >
                  Criar conta
                </button>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 text-center mt-6 max-w-xs leading-relaxed">
            Ao clicar em Continuar, você concorda com nossos{" "}
            <a href="#" className="underline font-semibold">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="underline font-semibold">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. TELA DE CADASTRO
  // ==========================================
  if (telaAtual === "cadastro") {
    return (
      <div className="min-h-screen bg-[#F3EFFC] flex flex-col items-center justify-center p-4 font-sans text-gray-900">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <TechPathLogo size="large" />
          </div>

          <div className="w-full bg-white rounded-3xl p-8 shadow-sm border border-purple-50 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Email</label>
              <input
                type="email"
                placeholder="email@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Senha</label>
              <input
                type="password"
                placeholder="***"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Confirmar Senha</label>
              <input
                type="password"
                placeholder="***"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            {erroForm && (
              <p className="text-red-500 text-xs font-semibold text-center">{erroForm}</p>
            )}

            <button
              onClick={handleCadastro}
              className="w-full mt-3 py-3 bg-[#5816B7] text-white font-bold rounded-xl hover:bg-[#470f99] transition shadow-xs text-sm"
            >
              Criar conta
            </button>

            <div className="text-center text-xs font-semibold text-gray-600 mt-2">
              <span>Já possui conta? </span>
              <button
                onClick={() => mudarTela("login")}
                className="text-[#5816B7] font-bold hover:underline"
              >
                Entre Aqui
              </button>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 text-center mt-6 max-w-xs leading-relaxed">
            Ao clicar em Criar Conta, você concorda com nossos{" "}
            <a href="#" className="underline font-semibold">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="underline font-semibold">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 3. TELA DE REDEFINIR SENHA
  // ==========================================
  if (telaAtual === "redefinirSenha") {
    return (
      <div className="min-h-screen bg-[#F3EFFC] flex flex-col items-center justify-center p-4 font-sans text-gray-900">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <TechPathLogo size="large" />
          </div>

          <div className="w-full bg-white rounded-3xl p-8 shadow-sm border border-purple-50 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Email</label>
              <input
                type="email"
                placeholder="email@dominio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Nova senha</label>
              <input
                type="password"
                placeholder="***"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5816B7] mb-1.5">Confirmar senha</label>
              <input
                type="password"
                placeholder="***"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#5816B7] transition"
              />
            </div>

            {erroForm && (
              <p className="text-red-500 text-xs font-semibold text-center">{erroForm}</p>
            )}

            <button
              onClick={handleRedefinirSenha}
              className="w-full mt-3 py-3 bg-[#5816B7] text-white font-bold rounded-xl hover:bg-[#470f99] transition shadow-xs text-sm"
            >
              Retornar ao Login
            </button>
          </div>

          <p className="text-[11px] text-gray-500 text-center mt-6 max-w-xs leading-relaxed">
            Ao clicar em Continuar, você concorda com nossos{" "}
            <a href="#" className="underline font-semibold">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="underline font-semibold">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 4. QUESTIONÁRIO E RESULTADOS COM SIDEBAR
  // ==========================================
  return (
    <div className="flex min-h-screen bg-[#F3EFFC] text-gray-900 font-sans">
      <aside className="w-64 bg-[#E7D7FE] p-6 flex flex-col gap-8 shrink-0">
        <div className="flex justify-center mt-2 mb-2">
          <TechPathLogo size="small" />
        </div>

        <nav className="flex flex-col gap-3">
          <button
            onClick={() => mudarTela("questionario")}
            className="w-full bg-white text-gray-900 font-bold py-3 px-4 rounded-xl shadow-sm text-center text-sm border border-purple-100 hover:bg-purple-50 transition"
          >
            Página Inicial
          </button>
          <button
            onClick={() => mudarTela("questionario")}
            className="w-full bg-white text-gray-900 font-bold py-3 px-4 rounded-xl shadow-sm text-center text-sm border border-purple-100 hover:bg-purple-50 transition"
          >
            Trilha
          </button>
          <button
            onClick={() => mudarTela("resultado")}
            className="w-full bg-white text-gray-900 font-bold py-3 px-4 rounded-xl shadow-sm text-center text-sm border border-purple-100 hover:bg-purple-50 transition"
          >
            Resultados
          </button>
          <button className="w-full text-gray-800 font-bold py-3 px-4 text-center text-sm hover:text-[#5816B7] transition mt-2">
            Perfil
          </button>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col p-8 relative">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => mudarTela("login")}
            className="bg-white text-gray-800 font-bold px-8 py-2 rounded-lg shadow-xs text-sm border border-gray-100 hover:bg-gray-50 transition"
          >
            Sair
          </button>
        </div>

        {telaAtual === "questionario" ? (
          <main className="max-w-4xl w-full mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[540px]">
            <div>
              <div className="flex justify-between items-center text-sm font-semibold text-gray-800 mb-2">
                <span>
                  Pergunta {perguntaAtual + 1} de {perguntas.length}
                </span>
                <span>{progresso}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#5816B7] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progresso}%` }}
                />
              </div>

              <div className="mb-6">
                <span className="inline-block border border-purple-300 bg-[#E7D7FE]/40 text-gray-900 px-3 py-1.5 rounded-md text-xs font-semibold">
                  {pergunta.categoria}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-6">{pergunta.pergunta}</h2>

              <div className="space-y-3">
                {pergunta.alternativas.map((alternativa, indice) => {
                  const estaSelecionada = respostaSelecionada === indice;
                  return (
                    <button
                      key={indice}
                      onClick={() => selecionarResposta(indice)}
                      className={`w-full text-left py-4 px-5 rounded-xl border transition-all text-sm font-semibold ${
                        estaSelecionada
                          ? "bg-[#E7D7FE] border-purple-300 text-gray-900 shadow-sm"
                          : "bg-white border-gray-200 text-gray-800 hover:bg-purple-50/50"
                      }`}
                    >
                      {alternativa.texto}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 flex justify-center items-center gap-6">
              <button
                onClick={voltarPergunta}
                disabled={perguntaAtual === 0}
                className="bg-[#E7D7FE] text-gray-900 font-bold px-10 py-3 rounded-xl text-sm hover:bg-purple-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Voltar
              </button>
              <button
                onClick={proximaPergunta}
                disabled={respostaSelecionada === null}
                className="bg-[#E7D7FE] text-gray-900 font-bold px-10 py-3 rounded-xl text-sm hover:bg-purple-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {perguntaAtual === perguntas.length - 1 ? "Finalizar" : "Próxima"}
              </button>
            </div>
          </main>
        ) : (
          <main className="max-w-4xl w-full mx-auto flex flex-col gap-6">
            <div className="bg-[#E7D7FE] rounded-3xl p-8 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-sm font-bold text-gray-800">Sua principal afinidade é</p>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-1">{principal.nome}</h1>
                <p className="text-sm font-bold text-gray-700 mt-2">{principal.pct}% de afinidade</p>
              </div>

              <div className="w-64 h-32 bg-[#150035] rounded-2xl shadow-sm flex items-center justify-center p-4">
                <TechPathLogo size="small" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F8F6FF] border-2 border-blue-400 rounded-3xl p-8 min-h-[240px]">
                <p className="text-base font-semibold text-gray-800 leading-relaxed">
                  <span className="font-bold">{principal.nome}</span> {principal.desc.replace(principal.nome + " é ", "")}
                </p>
              </div>

              <div className="bg-[#F8F6FF] border border-gray-300 rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Outras áreas</h3>

                <div className="space-y-5">
                  {outrasAreas.map((area, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm font-bold text-gray-800 mb-1.5">
                        <span>{area.nome}</span>
                        <span>{area.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#5816B7] h-full rounded-full transition-all duration-500"
                          style={{ width: `${area.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={refazerQuestionario}
                className="bg-[#E7D7FE] text-gray-900 font-bold px-12 py-4 rounded-2xl text-sm hover:bg-purple-200 transition shadow-sm w-full max-w-md"
              >
                Ver minha trilha de estudos
              </button>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}