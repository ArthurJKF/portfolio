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
        
        {/* PROJETO 1: DESTAQUE (NDA) */}
        <div className="project-wide-card card-brutal animate-cascade">
          <div className="project-header">
            <div className="title-group">
              <h3>Sistema Web Front-End Agro</h3>
              <span className="card-subtitle">Hï Tech — Projeto Comercial</span>
            </div>
            <div className="project-badges">
              <span className="card-status status-active">Projeto Confidencial (NDA)</span>
            </div>
          </div>

          <div className="project-content">
            <div className="project-description">
              <p>
                Sistema corporativo focado na intermediação entre produtores, cooperativas e demandas do setor agronegócio. 
                O maior projeto já fechado pela empresa. No front-end, o desafio é lidar com a alta complexidade de regras 
                de negócio, como o rateio de insumos e a máquina de estados das cotações.
              </p>
              
              <ul className="tech-stack-inline">
                <li>JavaScript</li>
                <li>Vite + React</li>
                <li>React Router</li>
                <li>TanStack Query</li>
                <li>Material UI (MUI)</li>
              </ul>
            </div>

            {/* Falso Terminal (Mock Visual) */}
            <div className="project-architecture-mock">
              <div className="mock-header">
                <span className="mock-dot red"></span>
                <span className="mock-dot yellow"></span>
                <span className="mock-dot green"></span>
                <span className="mock-title">Regras de Negócio (Core)</span>
              </div>
              <ul className="architecture-rules">
                <li><span className="rule-key">Módulo:</span> Catálogo Dinâmico de Insumos</li>
                <li><span className="rule-key">Lógica:</span> Rateio do pedido final entre produtores</li>
                <li>
                  <span className="rule-key">Workflow:</span> 
                  <code className="workflow-state">ABERTA &rarr; EM_COTACAO &rarr; FINALIZADA</code>
                </li>
                <li className="rule-error">
                  <span className="rule-key">Exception:</span> Erro 409 ao editar demanda já em cotação.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJETOS 2 E 3: LADO A LADO */}
        <div className="projects-grid-half">
          
          {/* PROJETO 2: RECIPIE */}
          <div className="card-brutal project-half-card animate-cascade">
            <div className="project-header-small">
              <h3>App Mobile "Recipie"</h3>
              <span className="card-status status-active">Em Estruturação</span>
            </div>
            
            <div className="project-description-small">
              <span className="card-subtitle">UTFPR — Análise e Projeto de Algoritmos</span>
              <p>
                Aplicativo móvel que cruza ingredientes disponíveis na geladeira do usuário para filtrar e sugerir receitas viáveis.
              </p>
              
              <ul className="tech-stack-inline">
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Room DB</li>
                <li>Retrofit + Coroutines</li>
              </ul>
            </div>

            <div className="project-visual-placeholder">
              <div className="wireframe-mobile">
                <div className="wf-header"></div>
                <div className="wf-image"></div>
                <div className="wf-lines"><span></span><span></span></div>
              </div>
              <p className="placeholder-caption">Prototipagem de Interface</p>
            </div>
          </div>

          {/* PROJETO 3: O ORÁCULO */}
          <div className="card-brutal project-half-card animate-cascade">
            <div className="project-header-small">
              <h3>O Oráculo em Assembly</h3>
              <span className="card-status status-active">Em Estruturação</span>
            </div>
            
            <div className="project-description-small">
              <span className="card-subtitle">UTFPR — Arquitetura de Computadores</span>
              <p>
                Programa interativo via terminal com lógica de Busca Binária para adivinhar números no menor número de tentativas. 
                Futura instalação nos terminais do MUTEC.
              </p>
              
              <ul className="tech-stack-inline">
                <li>Assembly</li>
                <li>Busca Binária</li>
                <li>Terminal I/O</li>
              </ul>
            </div>

            <div className="project-visual-placeholder code-style">
              <code>
                {">"} INICIANDO BUSCA BINÁRIA...<br/>
                {">"} TENTATIVA 1: 500<br/>
                [USUÁRIO]: MAIOR<br/>
                {">"} TENTATIVA 2: 750
              </code>
              <p className="placeholder-caption">I/O no Terminal</p>
            </div>
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