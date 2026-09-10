const integrantes = [
  {
    nome: "Jean Luis Machado",
    iniciais: "JM",
    bio: "Eletricista formado em eletrotécnica, morador de Porto Alegre, hoje migrando para o desenvolvimento de software. O que mais me marcou até aqui foi a metodologia de ensino aplicada nas aulas.",
    frase: "Divertida e unida",
  },
  {
    nome: "Gabriel Dahlem Pereira",
    iniciais: "GP",
    bio: "Estudante de TADS apaixonado pela parte visual da tecnologia. O que mais me marcou foi o ambiente relaxado e amigável entre monitores e turma.",
    frase: "Just keep trying",
  },
  {
    nome: "Luiza Scotti",
    iniciais: "LS",
    bio: "No último ano do ensino médio, luto jiu-jitsu, amo ler e ouvir música. O que mais me marcou foram os aprendizados sobre programação — antes eu não conhecia nada da área.",
    frase: "União",
  },
  {
    nome: "Gustavo Ferranddis",
    iniciais: "GF",
    bio: "Estudante de programação que também curte jogar e praticar esportes. O que mais me marcou foi aprender as linguagens de código.",
    frase: "Uma turma bem agitada",
  },
  {
    nome: "Cauã Graeff Fernandes",
    iniciais: "CF",
    bio: "Estudante de back-end em Java, muito curioso e com vontade de aprender. O que mais me marcou foram as amizades criadas e a forma como o curso ensina as três áreas do fullstack.",
    frase: "A persistência leva ao sucesso",
  },
  {
    nome: "José Blanco",
    iniciais: "JB",
    bio: "Curioso por natureza, gosto de aprender coisas novas e de trabalhar em equipe. O que mais me marcou foi a oportunidade de aprender na prática e ter contato com conhecimentos novos.",
    frase: "Diferentes pessoas, um só time e histórias para desenvolver.",
  },
  {
    nome: "Ronaldo Júnior",
    iniciais: "RJ",
    bio: "Moro em Canoas e curso Engenharia de Software na Universidade La Salle. O que mais me marcou foi a trilha de front-end, onde desenvolvemos nosso portfólio online.",
    frase: "Ninguém ganha de um cara paciente",
  },
  {
    nome: "Alexandre Eduardo Oliveira da Silva",
    iniciais: "AS",
    bio: "Gosto de livros, jogos e de estudar coisas diferentes, como programação e confeitaria. O que mais me marcou foi aprender sobre Java.",
    frase: "Unidos somos mais fortes",
  },
  {
    nome: "Wesley Moura",
    iniciais: "WM",
    bio: "Estudo ADS no IFRS e trabalho na AppMax. Amo tecnologia, fotografia e gatos. A etapa que mais me marcou até aqui foi o backend.",
    frase: "Bom humor",
  },
  {
    nome: "Fábio Rafael Onofre",
    iniciais: "FO",
    bio: "Moro em Estância Velha, sou desenvolvedor full stack e entusiasta em tecnologia. Os challenges foram o momento mais marcante da residência até agora.",
    frase: "Uma turma muito animada!",
  },
  {
    nome: "Wesley Garcia Macedo",
    iniciais: "WG",
    bio: "Também conhecido como Wes, curto programar para front-end, amo cachorros e viajar. O momento que mais me marcou foi o challenge de front-end.",
    frase: "Unida — se um tá com dificuldade, todos ajudam.",
  },
  {
    nome: "Pedro Rafhael Garcia Faustino",
    iniciais: "PF",
    bio: "Amo jogar xadrez e também vendo trufas. O que mais me marcou até agora foi o quanto gostei de trabalhar com front-end.",
    frase: "Vamos nos desesperar com calma",
  },
  {
    nome: "Lara Romero Eifert",
    iniciais: "LE",
    bio: "Desenvolvedora front-end e designer, unindo tecnologia, criatividade e visão estratégica. O que mais me marcou foi descobrir que sou capaz de programar e me desafiar em novas áreas.",
    frase: "Código quebrado, prazo apertado e fé.",
  },
  {
    nome: "Glaudia Almeida",
    iniciais: "GA",
    bio: "Como costumo dizer, sou uma 'dinossaura se atualizando'. O que mais me marcou até aqui foi ser aceita para participar da residência com a minha idade.",
    frase: "Receptiva e inclusiva",
  },
  {
    nome: "Gabriel Molinari",
    iniciais: "GM",
    bio: "Estudante de Engenharia de Software na La Salle, com foco em desenvolvimento full stack e experiência prévia em suporte de TI. O que mais me marcou foram os desafios — eles nos obrigam a superar nossos limites.",
    frase: "Nos desafiar nos obriga a superar nossos limites.",
  },
  {
    nome: "Samuel Peralta de Souza",
    iniciais: "SS",
    bio: "Estou no 5º semestre de Ciência da Computação e participo da Residência Full Stack 5.0. Os challenges foram o que mais me marcou até agora.",
    frase: "Meu deus",
  },
  {
    nome: "Martin Lara",
    iniciais: "ML",
    bio: "Direto ao ponto: o que mais me marcou até aqui foi a aprendizagem real que a residência proporciona.",
    frase: "Conhecimento puro",
  },
  {
    nome: "Claudia Portes Bohn",
    iniciais: "CB",
    bio: "Uno minha formação em Gestão Financeira com a paixão por Banco de Dados, trazendo um olhar analítico e atenção aos detalhes. O que mais me marcou foi a apresentação inicial sobre front-end, back-end e banco de dados.",
    frase:
      "Comunidade colaborativa onde o conhecimento se multiplica na prática.",
  },
  {
    nome: "Bernardo Alves Vigil",
    iniciais: "BV",
    bio: "Aluno de Engenharia de Software na La Salle, atuo com Python, Java, Postgres, Git, HTML e CSS. Os desafios foram o que mais me marcou — me desenvolveram de forma acelerada e motivadora.",
    frase: "Resiliência",
  },
  {
    nome: "Thaina Ribeiro",
    iniciais: "TR",
    bio: "Gosto de enfrentar desafios com bom humor, manter a calma mesmo quando tudo parece difícil e ajudar quem precisa. Pra mim, todos os momentos da residência têm sido marcantes.",
    frase:
      "Transformamos dificuldades em conquistas e histórias para desenvolver.",
  },
  {
    nome: "Helena Pires da Luz",
    iniciais: "HL",
    bio: "Estudante de Ciência da Computação, com experiência em suporte técnico e em trabalho voluntário, que ajudou a desenvolver minha comunicação e liderança. O que mais me marcou foram os desafios propostos ao longo da residência.",
    frase: "Turma unida",
  },
];

function criarCardIntegrante({ nome, iniciais, bio, frase }) {
  const article = document.createElement("article");
  article.className = "card-integrante";

  article.innerHTML = `
        <div class="avatar" role="img" aria-label="Avatar do integrante ${nome}">${iniciais}</div>
        <div class="informacoes">
            <h3>${nome}</h3>
            <p>${bio}</p>
            <p class="frase">&ldquo;${frase}&rdquo;</p>
        </div>
    `;

  return article;
}

function renderIntegrantes() {
  const lista = document.getElementById("integrantes-lista");
  if (!lista) return;

  const fragmento = document.createDocumentFragment();
  integrantes.forEach((pessoa) => {
    fragmento.appendChild(criarCardIntegrante(pessoa));
  });

  lista.appendChild(fragmento);
}

function configurarCarouselIntegrantes() {
  const lista = document.getElementById("integrantes-lista");
  const btnAnterior = document.querySelector(".integrantes-seta-anterior");
  const btnProxima = document.querySelector(".integrantes-seta-proxima");
  if (!lista || !btnAnterior || !btnProxima) return;

  const calcularPasso = () => {
    const primeiroCard = lista.querySelector(".card-integrante");
    if (!primeiroCard) return lista.clientWidth;
    const gap = parseFloat(getComputedStyle(lista).columnGap) || 0;
    return primeiroCard.getBoundingClientRect().width + gap;
  };

  const atualizarSetas = () => {
    const scrollMaximo = lista.scrollWidth - lista.clientWidth - 1;
    btnAnterior.disabled = lista.scrollLeft <= 0;
    btnProxima.disabled = lista.scrollLeft >= scrollMaximo;
  };

  btnAnterior.addEventListener("click", () => {
    lista.scrollBy({ left: -calcularPasso(), behavior: "smooth" });
  });

  btnProxima.addEventListener("click", () => {
    lista.scrollBy({ left: calcularPasso(), behavior: "smooth" });
  });

  lista.addEventListener("scroll", atualizarSetas);
  window.addEventListener("resize", atualizarSetas);
  atualizarSetas();
}

document.addEventListener("DOMContentLoaded", () => {
  renderIntegrantes();
  configurarCarouselIntegrantes();
});
