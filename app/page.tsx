"use client";

import { useState } from "react";

type Area = "dev" | "ux" | "devops";

type Alternativa = {
  texto: string;
  area: Area;
};

type Pergunta = {
  categoria: string;
  pergunta: string;
  alternativas: Alternativa[];
};

const criarAlternativa = (texto: string, area: Area): Alternativa => ({
  texto,
  area,
});

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

export default function Home() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<(number | null)[]>(
    Array(perguntas.length).fill(null)
  );
  const [finalizado, setFinalizado] = useState(false);

  const pergunta = perguntas[perguntaAtual];
  const respostaSelecionada = respostas[perguntaAtual];

  const selecionarResposta = (indice: number) => {
    const novasRespostas = [...respostas];
    novasRespostas[perguntaAtual] = indice;
    setRespostas(novasRespostas);
  };

  const proximaPergunta = () => {
    if (respostaSelecionada === null) {
      return;
    }

    if (perguntaAtual === perguntas.length - 1) {
      setFinalizado(true);
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
    const pontuacoes = {
      dev: 0,
      ux: 0,
      devops: 0,
    };

    respostas.forEach((resposta, indicePergunta) => {
      if (resposta === null) {
        return;
      }

      const alternativa =
        perguntas[indicePergunta].alternativas[resposta];

      pontuacoes[alternativa.area] += 3;
    });

    const total =
      pontuacoes.dev +
      pontuacoes.ux +
      pontuacoes.devops;

    if (total === 0) {
      return {
        dev: 0,
        ux: 0,
        devops: 0,
      };
    }

    return {
      dev: Math.round((pontuacoes.dev / total) * 100),
      ux: Math.round((pontuacoes.ux / total) * 100),
      devops: Math.round((pontuacoes.devops / total) * 100),
    };
  };

  const refazerQuestionario = () => {
    setPerguntaAtual(0);
    setRespostas(Array(perguntas.length).fill(null));
    setFinalizado(false);
  };

  if (finalizado) {
    const resultado = calcularResultado();

    const maiorPontuacao = Math.max(
      resultado.dev,
      resultado.ux,
      resultado.devops
    );

    const areasComMaiorPontuacao = [];

    if (resultado.dev === maiorPontuacao) {
      areasComMaiorPontuacao.push("Desenvolvimento");
    }

    if (resultado.ux === maiorPontuacao) {
      areasComMaiorPontuacao.push("UX/UI");
    }

    if (resultado.devops === maiorPontuacao) {
      areasComMaiorPontuacao.push("DevOps");
    }

    return (
      <main className="min-h-screen bg-gray-100">
        <header className="flex items-center justify-between bg-purple-700 px-6 py-4 text-white">
          <h1 className="text-2xl font-bold">TechPath</h1>

          <button className="rounded-lg px-4 py-2 hover:bg-purple-600">
            Sair
          </button>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-10">
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <p className="mb-2 text-center text-sm font-medium text-purple-600">
              Questionário concluído
            </p>

            <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
              Seu perfil TechPath
            </h2>

            <div className="mb-8 rounded-xl bg-purple-50 p-6 text-center">
              <p className="text-sm text-gray-600">
                Maior afinidade
              </p>

              <h3 className="mt-2 text-2xl font-bold text-purple-700">
                {areasComMaiorPontuacao.join(" / ")}
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold text-gray-700">
                    Desenvolvimento
                  </span>

                  <span className="font-bold">
                    {resultado.dev}%
                  </span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${resultado.dev}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold text-gray-700">
                    UX/UI
                  </span>

                  <span className="font-bold">
                    {resultado.ux}%
                  </span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-pink-500"
                    style={{ width: `${resultado.ux}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold text-gray-700">
                    DevOps
                  </span>

                  <span className="font-bold">
                    {resultado.devops}%
                  </span>
                </div>

                <div className="h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${resultado.devops}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={refazerQuestionario}
              className="mt-10 w-full rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800"
            >
              Refazer questionário
            </button>
          </div>
        </section>
      </main>
    );
  }

  const progresso =
    ((perguntaAtual + 1) / perguntas.length) * 100;

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-purple-700 px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">TechPath</h1>

        <button className="rounded-lg px-4 py-2 hover:bg-purple-600">
          Sair
        </button>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm font-medium text-gray-600">
            <span>
              Pergunta {perguntaAtual + 1} de {perguntas.length}
            </span>

            <span>{Math.round(progresso)}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-purple-600 transition-all duration-300"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600">
            {pergunta.categoria}
          </p>

          <h2 className="mb-8 text-2xl font-bold leading-relaxed text-gray-800">
            {pergunta.pergunta}
          </h2>

          <div className="space-y-4">
            {pergunta.alternativas.map((alternativa, indice) => {
              const selecionada = respostaSelecionada === indice;

              return (
                <button
                  key={indice}
                  onClick={() => selecionarResposta(indice)}
                  className={`w-full rounded-xl border-2 p-4 text-left transition ${
                    selecionada
                      ? "border-purple-600 bg-purple-50 text-purple-800"
                      : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                        selecionada
                          ? "border-purple-600 bg-purple-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selecionada && (
                        <div className="h-2.5 w-2.5 rounded-full bg-white" />
                      )}
                    </div>

                    <span className="font-medium">
                      {alternativa.texto}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex justify-between gap-4">
            <button
              onClick={voltarPergunta}
              disabled={perguntaAtual === 0}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Voltar
            </button>

            <button
              onClick={proximaPergunta}
              disabled={respostaSelecionada === null}
              className="rounded-xl bg-purple-700 px-8 py-3 font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {perguntaAtual === perguntas.length - 1
                ? "Finalizar"
                : "Próxima"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}