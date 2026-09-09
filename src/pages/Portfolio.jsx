export default function Portfolio() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1 className="page-title">PORTFÓLIO</h1>
        <p className="page-subtitle">Projetos e Trajetória</p>
      </header>

      {/* SEÇÃO 1: CONQUISTAS PESSOAIS */}
      <section className="section-block">
        <h2 className="section-title">CONQUISTAS PESSOAIS</h2>
        <div className="content-grid">
          <div className="card-brutal">
            <span className="card-tag">Aprovação & Resiliência</span>
            <h3>1º Lugar PUCPR & Ingresso na UTFPR</h3>
            <p>
              Aprovado em 1º lugar em Engenharia de Software na PUCPR diretamente do ensino médio. Diante de limites financeiros, recalculei a rota, busquei qualificações práticas no SENAI (Python, Lógica, Front-End, Excel) e mantive o ritmo de estudos. Com a nota do ENEM, conquistei a vaga no bacharelado de Sistemas de Informação na UTFPR, sendo o único da turma a ingressar de primeira em uma universidade federal em um curso de alta concorrência.
            </p>
          </div>

          <div className="card-brutal">
            <span className="card-tag">Proficiência Internacional</span>
            <h3>Gabarito Completo — Exame Cambridge</h3>
            <p>
              Conclusão do curso PES English com destaque de primeiro lugar da turma a finalizar as avaliações. Conquista de pontuação máxima no teste de proficiência de Cambridge, gabaritando todas as competências avaliadas: <em>Speaking</em>, <em>Writing</em> e <em>Listening</em>.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: FORMAÇÃO ACADÊMICA */}
      <section className="section-block">
        <h2 className="section-title">FORMAÇÃO ACADÊMICA</h2>
        <div className="content-list">
          <div className="list-item-brutal">
            <div className="item-header">
              <h3>Bacharelado em Sistemas de Informação</h3>
              <span className="item-institution">UTFPR — Cursando 3º Período</span>
            </div>
            <p>
              Desenvolvimento de base sólida em lógica, modelagem de sistemas e resolução de problemas complexos. Destaque para a aplicação prática em disciplinas de Estrutura de Dados (algoritmos de busca, ordenação e árvores em C), Programação Orientada a Objetos (Java, Threads), Análise e Projeto de Algoritmos (levantamento de requisitos, diagramas UML) e Arquitetura de Computadores (linguagem Assembly e binários).
            </p>
          </div>

          <div className="list-item-brutal">
            <div className="item-header">
              <h3>Técnico em Cooperativismo</h3>
              <span className="item-institution">SESI / SENAI</span>
            </div>
            <p>
              Formação integrada voltada para ambiente industrial, gestão e trabalho colaborativo. Base prática em Gestão de Projetos, Metodologias Ágeis, Recursos Humanos e Contabilidade (balancete, balanço patrimonial, débito e crédito).
            </p>
          </div>

          <div className="list-item-brutal">
            <div className="item-header">
              <h3>Ensino Médio com Metodologias Ativas</h3>
              <span className="item-institution">SESI Centro</span>
            </div>
            <p>
              Ambiente de aprendizagem baseado em dinâmicas de grupo e projetos de resolução de problemas. Condução de seminários, trabalhos em equipe e apresentações públicas em feiras e mostras culturais, consolidando oratória e comunicação clara.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: APLICAÇÕES E SOFTWARES */}
      <section className="section-block">
        <h2 className="section-title">APLICAÇÕES E SOFTWARES</h2>
        <div className="content-grid">
          <div className="card-brutal border-highlight">
            <span className="card-status status-active">Em Andamento</span>
            <h3>Sistema Web Front-End Agro</h3>
            <span className="card-subtitle">Hï Tech — Projeto Comercial</span>
            <p>Sistema corporativo focado na intermediação entre produtores, cooperativas e demandas do setor agronegócio. Maior projeto já fechado.</p>
            <ul className="tech-stack">
              <li>Atuação: Dev Front-End</li>
              <li>Fase: Alinhamento arquitetural & handoff de UI/UX</li>
            </ul>
          </div>

          <div className="card-brutal">
            <span className="card-status status-active">Em Estruturação</span>
            <h3>App Mobile "Recipie"</h3>
            <span className="card-subtitle">UTFPR — Análise e Projeto de Algoritmos</span>
            <p>Aplicativo móvel que cruza ingredientes disponíveis na geladeira do usuário para filtrar e sugerir receitas viáveis.</p>
            <ul className="tech-stack">
              <li>Kotlin</li>
              <li>Jetpack Compose</li>
              <li>Room Database</li>
              <li>Retrofit + Coroutines</li>
              <li>API MealDB</li>
            </ul>
          </div>

          <div className="card-brutal">
            <span className="card-status status-active">Em Planejamento</span>
            <h3>O Oráculo em Assembly</h3>
            <span className="card-subtitle">UTFPR — Arquitetura de Computadores</span>
            <p>Programa interativo via terminal com lógica de Busca Binária para adivinhar números de 0 a 1000 no menor número de tentativas. Futura instalação interativa nos terminais do MUTEC (Museu da Tecnologia da UTFPR).</p>
            <ul className="tech-stack">
              <li>Assembly</li>
              <li>Busca Binária</li>
              <li>Terminal I/O</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: TRAJETÓRIA E LINHA DO TEMPO */}
      <section className="section-block">
        <h2 className="section-title">TRAJETÓRIA: NEGÓCIOS, LIDERANÇA E GESTÃO</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2022 — 2023</span>
              <h3>Delegações Sesi MUN & OxfordMUN</h3>
              <span className="timeline-location">Oxford, Inglaterra</span>
              <p>Imersão em diplomacia internacional, técnicas de debate, persuasão e oratória. Na Universidade de Oxford, atuei como delegado da Suécia no comitê DISEC (maior do evento, com +200 pessoas). Conduzi o opening speech de 1,5 min inteiramente em inglês perante a assembleia, gerando alto engajamento e conexões internacionais.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024</span>
              <h3>Criação e Execução de MUN Interna</h3>
              <span className="timeline-location">SESI Centro</span>
              <p>Iniciativa proativa para elevar o engajamento da turma em debates políticos. Criação completa do documento de Rules of Procedure adaptado e coordenação prática de toda a simulação da ONU em sala de aula.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Ago/2025 — Dez/2025</span>
              <h3>Ingresso e Trainee</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior UTFPR</span>
              <p>Aprovação no processo seletivo da EJ. Imersão e rotação pelas áreas de Gente & Gestão, Presidência, Vice-Presidência e Negócios para entender o funcionamento completo da empresa. Direcionamento estratégico final para a área Comercial.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Jan/2026 — Jul/2026</span>
              <h3>Assessor de Negócios</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior UTFPR</span>
              <p>Atuação direta na prospecção ativa de mercado, condução de reuniões diagnósticas com clientes, formulação de propostas comerciais e negociações. Realização de benchmarks com outras EJs e imersões no ecossistema de empresários juniores.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Mar/2026 — Mai/2026</span>
              <h3>Organização do Curitiba Júnior 26.1</h3>
              <span className="timeline-location">Comissão Organizadora</span>
              <p>Atuação no time de negócios da comissão organizadora do maior encontro de empresários juniores do Paraná. Estruturação em 3 meses de um evento para 700 congressistas, abrangendo captação de patrocínio, gestão de fornecedores e logística do dia do evento.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Ago/2026 — Presente</span>
              <h3>Gerente de Negócios</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior UTFPR</span>
              <p>Aprovação em edital interno para liderar a equipe de assessores. Liderança no fechamento da maior proposta comercial da história da EJ (sistema Agro de R$ 22k), acumulando a responsabilidade de gestão comercial e a execução no front-end.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}