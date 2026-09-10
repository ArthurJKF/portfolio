import { useState } from 'react'
import { 
  FileText, 
  Image as ImageIcon, 
  LinkedinLogo, 
  WhatsappLogo, 
  EnvelopeSimple, 
  GithubLogo,
  InstagramLogo,
  CheckCircle,
  X,
  ArrowUpRight
} from '@phosphor-icons/react'

// Link compartilhado do PDF oficial do Exame de Cambridge (utilizado no card de gabarito e na seção de certificados)
const CAMBRIDGE_PDF_URL = '#contato'

// Link do post sobre a aprovação no LinkedIn
const LINKEDIN_APROVACAO_POST_URL = 'https://www.linkedin.com/in/arthur-jacomel/'

const CERTS_DATA = [
  {
    id: 'cambridge',
    category: 'Proficiência Internacional',
    year: '2021',
    title: 'Exame Oficial de Cambridge (PES English)',
    institution: 'Cambridge Assessment English & Positivo',
    cargaHoraria: 'Formação Extensiva Anual',
    categoria: 'Idiomas & Comunicação Global',
    competencias: '100% de pontuação máxima em Speaking, Writing e Listening. Primeiro aluno de todas as salas a finalizar cada etapa.',
    pdfUrl: CAMBRIDGE_PDF_URL,
  },
  {
    id: 'python',
    category: 'Programação',
    year: '2024',
    title: 'Programação em Python',
    institution: 'SENAI Paraná',
    cargaHoraria: '40 horas',
    categoria: 'Desenvolvimento de Software',
    competencias: 'Sintaxe fundamental da linguagem, estruturas de decisão, laços de repetição, funções e automação de scripts.',
  },
  {
    id: 'logica',
    category: 'Fundamentos',
    year: '2024',
    title: 'Introdução à Lógica de Programação',
    institution: 'SENAI Paraná',
    cargaHoraria: '40 horas',
    categoria: 'Lógica Computacional',
    competencias: 'Algoritmos em Portugol, testes de mesa, variáveis, operadores relacionais/lógicos e resolução metódica de problemas.',
  },
  {
    id: 'web',
    category: 'Web',
    year: '2024',
    title: 'Desenvolvimento Web Front-End',
    institution: 'SENAI Paraná',
    cargaHoraria: '60 horas',
    categoria: 'Desenvolvimento Web',
    competencias: 'Estruturação semântica em HTML5, estilização básica em CSS3, noções de JavaScript e introdução a frameworks responsivos.',
  },
  {
    id: 'excel',
    category: 'Gestão & Dados',
    year: '2024',
    title: 'Excel Básico ao Intermediário',
    institution: 'SENAI Paraná',
    cargaHoraria: '40 horas',
    categoria: 'Análise e Produtividade',
    competencias: 'Fórmulas lógicas (SE, PROCV), tabelas dinâmicas, tratamento de bases de dados e elaboração de relatórios corporativos.',
  },
]

function OracleTerminal() {
  const [range, setRange] = useState({ min: 1, max: 1000 })
  const [guess, setGuess] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const [status, setStatus] = useState('idle')
  const [isResetting, setIsResetting] = useState(false)
  const [message, setMessage] = useState('O oráculo está dormindo. Pense em um número secreto.')

  const resetGame = () => {
    setIsResetting(true)
    setStatus('loading')
    setMessage('Recalibrando os cristais de busca...')
    setRange({ min: 1, max: 1000 })
    setGuess(null)
    setAttempts(0)

    window.setTimeout(() => {
      setIsResetting(false)
      setStatus('idle')
      setMessage('O oráculo está dormindo. Pense em um número secreto.')
    }, 650)
  }

  const startGame = () => {
    setRange({ min: 1, max: 1000 })
    setGuess(500)
    setAttempts(1)
    setStatus('playing')
    setMessage('Sinal recebido. Responda com maior, menor ou igual para guiar o oráculo.')
  }

  const answerGuess = (answer) => {
    if (status !== 'playing') return

    if (answer === 'igual') {
      setStatus('won')
      setMessage(`O véu se abriu: o oráculo encontrou ${guess} em ${attempts} tentativa${attempts === 1 ? '' : 's'}. A máquina ouviu sua mente.`)
      return
    }

    const nextRange = answer === 'maior'
      ? { min: guess + 1, max: range.max }
      : { min: range.min, max: guess - 1 }
    const nextAttempt = attempts + 1

    if (nextRange.min > nextRange.max || nextAttempt > 10) {
      setStatus('error')
      setMessage('Você tentou enganar o Oráculo... mas nenhum mistério sobrevive a respostas impossíveis.')
      return
    }

    const nextGuess = Math.floor((nextRange.min + nextRange.max) / 2)
    setRange(nextRange)
    setGuess(nextGuess)
    setAttempts(nextAttempt)
    setMessage(answer === 'maior'
      ? 'O sinal diz: o número está acima. O intervalo foi reduzido pela metade.'
      : 'O sinal diz: o número está abaixo. O intervalo foi reduzido pela metade.')
  }

  return (
    <div className="oracle-terminal" aria-label="Jogo de busca binária">
      <div className="oracle-terminal-header">
        <span className="mock-dot red"></span>
        <span className="mock-dot yellow"></span>
        <span className="mock-dot green"></span>
        <span className="mock-title">mathemagical-oracle.js</span>
        <button type="button" className="oracle-reset-button" onClick={resetGame} disabled={isResetting}>
          {isResetting ? 'recalibrando...' : '↻ reiniciar oráculo'}
        </button>
      </div>

      <div className="oracle-terminal-body">
        <div className="oracle-output" aria-live="polite">
          <p><span className="oracle-prompt">$</span> oracle --scan 1..1000</p>
          <p className="oracle-intro">[TRANSMISSÃO] uma mente pensa. uma máquina pergunta.</p>
          <p className="oracle-muted">{message}</p>

          {status === 'loading' && (
            <div className="oracle-loading" role="status">
              <span className="oracle-loading-bar"></span>
              <span>limpando o intervalo...</span>
            </div>
          )}

          {status === 'idle' && (
            <div className="oracle-start-form">
              <p className="oracle-start-instruction">Um número entre 1 e 1000. Não conte para ninguém.</p>
              <button type="button" className="oracle-command-button oracle-start-button" onClick={startGame}>iniciar o oráculo</button>
            </div>
          )}

          {status !== 'idle' && status !== 'loading' && (
            <>
              <p className="oracle-range">intervalo conhecido: [{range.min}..{range.max}]</p>
              <p className="oracle-guess-line">
                tentativa {attempts}/10 <span className="oracle-arrow">→</span> <span className="oracle-guess-label">meu palpite:</span> <strong>{guess}</strong>
              </p>
              {status === 'playing' && (
                <div className="oracle-response-grid" role="group" aria-label="Resposta ao palpite">
                  <button type="button" onClick={() => answerGuess('menor')} className="oracle-command-button">menor</button>
                  <button type="button" onClick={() => answerGuess('igual')} className="oracle-command-button oracle-command-primary">igual</button>
                  <button type="button" onClick={() => answerGuess('maior')} className="oracle-command-button">maior</button>
                </div>
              )}
              {status === 'won' && <p className="oracle-success">processo finalizado com sucesso.</p>}
              {status === 'error' && <p className="oracle-error">processo interrompido. Reinicie para tentar novamente.</p>}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeCert, setActiveCert] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arthurjac.kf@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const openModal = (cert) => setActiveCert(cert)
  const closeModal = () => setActiveCert(null)

  return (
    <main className="page-container">
      <header className="page-header">
        <h1 className="page-title">PORTFÓLIO</h1>
        <p className="page-subtitle">Engenharia de Software, Estratégia Comercial & Liderança</p>
      </header>

      {/* ====================================================================
          01 // SOBRE MIM
          ==================================================================== */}
      <section id="sobre-mim" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">01 // Perfil & Visão</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">SOBRE MIM</h2>
            <p className="section-lead-phrase">
              A intersecção entre raciocínio analítico de engenharia de software e liderança executiva em negócios de tecnologia.
            </p>
          </div>
        </div>
        
        <div className="about-editorial-canvas">
          <div className="about-main-column">
            <div className="about-lead-quote">
              "Construo sistemas para resolver desafios complexos de negócio. Minha atuação combina rigor de engenharia de software, raciocínio analítico e visão comercial estratégica."
            </div>

            <div className="about-narrative">
              <p>
                Sou estudante de <strong>Sistemas de Informação na UTFPR</strong> (3º período) e <strong>Gerente de Negócios na Hï Tech</strong> (Empresa Júnior de Tecnologia). Meu perfil une o que o mercado costuma separar: a capacidade técnica de arquitetar aplicações com a sensibilidade de entender o cliente, negociar contratos e liderar equipes multidisciplinares.
              </p>
              <p>
                Liderei a negociação e atuo na execução técnica do maior projeto comercial da história da empresa (R$ 22.000 para o setor Agro), lidando com regras de negócio densas como rateio dinâmico de insumos e máquinas de estado finitos para cotações.
              </p>
              <p>
                Representei o Brasil na <strong>Universidade de Oxford (Inglaterra)</strong> em simulações diplomáticas perante mais de 200 delegados integralmente em inglês, gabaritei 100% o exame oficial de Cambridge e trago a formação técnica em cooperativismo para aplicar empatia e agilidade na resolução de problemas reais.
              </p>
            </div>
          </div>

          <div className="about-pillars-stack">
            <div className="pillar-block">
              <div className="pillar-title">
                <span className="pillar-dot"></span>
                Engenharia & Front-End
              </div>
              <div className="pillar-desc">
                Desenvolvimento com React, Vite, TanStack Query e arquitetura limpa. Foco em interfaces reativas, confiabilidade de estado e tratamento rigoroso de exceções.
              </div>
            </div>

            <div className="pillar-block">
              <div className="pillar-title">
                <span className="pillar-dot"></span>
                Estratégia Comercial & Gestão
              </div>
              <div className="pillar-desc">
                Gestão de equipe na EJ, condução de reuniões diagnósticas, formulação de propostas de alto valor e coordenação no Curitiba Júnior (700 congressistas).
              </div>
            </div>

            <div className="pillar-block">
              <div className="pillar-title">
                <span className="pillar-dot"></span>
                Comunicação & Liderança
              </div>
              <div className="pillar-desc">
                Oratória internacional na Universidade de Oxford, gabarito pleno em Cambridge e habilidade de traduzir termos técnicos complexos para clientes e stakeholders.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          02 // APLICAÇÕES E SOFTWARES
          ==================================================================== */}
      <section id="projetos" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">02 // Engenharia de Software</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">APLICAÇÕES & SOFTWARES</h2>
            <p className="section-lead-phrase">
              Sistemas em produção corporativa, algoritmos de otimização de hardware e soluções móveis orientadas à utilidade real.
            </p>
          </div>
        </div>
        
        {/* PROJETO 1: DESTAQUE MASTER (NDA) */}
        <div className="project-spotlight-dossier">
          <div className="project-dossier-meta-bar">
            <div className="meta-title-group">
              <h3>Sistema Web Front-End Agro</h3>
              <span className="meta-client-tag">Hï Tech — Projeto Comercial Corporativo</span>
            </div>
            <div>
              <span className="card-status status-active">Projeto Comercial Confidencial (NDA)</span>
            </div>
          </div>

          <div className="project-content-split">
            <div>
              <p className="project-lead-text">
                Sistema corporativo de intermediação comercial e operacional entre produtores rurais, cooperativas e fornecedores de insumos agrícolas.
              </p>

              <ul className="project-bullets-list">
                <li><strong>Maior contrato da EJ:</strong> Negociação e fechamento de R$ 22.000 liderados pela área de negócios com atuação direta no front-end.</li>
                <li><strong>Complexidade de negócio:</strong> Modelagem de rateio dinâmico fracionado de grandes cargas de insumos entre produtores consorciados.</li>
                <li><strong>Máquina de Estados Finitos (FSM):</strong> Fluxo estrito de aprovações com tratamento da exceção 409 para proteger demandas ativas.</li>
                <li><strong>Performance & Cache:</strong> Invalidação seletiva e sincronização de dados assíncronos via TanStack Query.</li>
              </ul>
              
              <ul className="tech-stack-inline">
                <li>JavaScript (ES6+)</li>
                <li>React + Vite</li>
                <li>React Router</li>
                <li>TanStack Query</li>
                <li>Material UI (MUI)</li>
                <li>FSM (State Machine)</li>
              </ul>
            </div>

            <div className="project-architecture-mock">
              <div className="mock-header">
                <span className="mock-dot red"></span>
                <span className="mock-dot yellow"></span>
                <span className="mock-dot green"></span>
                <span className="mock-title">Regras de Negócio • Core Engine</span>
              </div>
              <ul className="architecture-rules">
                <li><span className="rule-key">MÓDULO:</span> Catálogo & Rateio Dinâmico</li>
                <li><span className="rule-key">LÓGICA:</span> Particionamento fracionário por produtor</li>
                <li>
                  <span className="rule-key">WORKFLOW:</span>
                  <code className="workflow-state">ABERTA &rarr; EM_COTACAO &rarr; FECHADA</code>
                </li>
                <li className="rule-error">
                  <span className="rule-key">SAFETY:</span> Erro 409: Imutabilidade de cotação em curso
                </li>
                <li><span className="rule-key">CACHE:</span> Invalidação granular via TanStack Query</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJETOS 2 E 3: GRID DUPLO */}
        <div className="projects-grid-half">
          
          {/* PROJETO 2: RECIPIE */}
          <div className="project-half-card recipe-project-card">
            <div>
              <div className="project-half-header">
                <h3>App Mobile "Recipie"</h3>
                <span className="card-subtitle-plain">UTFPR — Análise e Projeto de Algoritmos (APS)</span>
                <div className="card-status-row">
                  <span className="card-status status-active">Em Estruturação</span>
                </div>
              </div>
              
              <p className="project-lead-text">
                Solução móvel desenhada para combater o desperdício doméstico cruzando itens disponíveis com viabilidade imediata de receitas.
              </p>

              <ul className="project-bullets-list">
                <li><strong>Motor de filtragem:</strong> Algoritmo que calcula a taxa de preparo com base em ingredientes em estoque vs. ingredientes faltantes.</li>
                <li><strong>Persistência local:</strong> Estruturação com Room DB para funcionamento offline da despensa virtual.</li>
                <li><strong>Liderança acadêmica:</strong> Coordenação de equipe com alinhamentos semanais e especificação de requisitos via UML.</li>
              </ul>
              
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
              <p className="placeholder-caption">Prototipagem de Interface & UX Mobile</p>
            </div>
          </div>

          {/* PROJETO 3: O ORÁCULO */}
          <div className="project-half-card oracle-project-card">
            <div>
              <div className="project-half-header">
                <h3>O Oráculo em Assembly</h3>
                <span className="card-subtitle-plain">UTFPR — Arquitetura de Computadores</span>
                <div className="card-status-row">
                  <span className="card-status status-active">Em Estruturação</span>
                </div>
              </div>
              
              <p className="project-lead-text">
                Implementação de Busca Binária em Assembly x86 com controle de registradores para demonstração didática no MUTEC.
              </p>

              <ul className="project-bullets-list">
                <li><strong>Otimização O(log n):</strong> Adivinhação de números de 0 a 1000 em no máximo 10 iterações com hardware real.</li>
                <li><strong>I/O de baixo nível:</strong> Manipulação direta de registradores de CPU sem dependência de bibliotecas de alto nível.</li>
                <li><strong>Destinação didática:</strong> Instalação programada em terminais de computador antigo no Museu da Tecnologia da UTFPR.</li>
              </ul>
              
              <ul className="tech-stack-inline">
                <li>Assembly x86</li>
                <li>Busca Binária (O(log n))</li>
                <li>Registradores CPU</li>
                <li>Terminal I/O</li>
              </ul>
            </div>

            <div className="oracle-visual-grid">
              <div className="oracle-photo-slot" aria-label="Espaço reservado para foto do Oráculo"></div>
              <div className="oracle-terminal-wrap">
                <span className="oracle-example-label">Exemplo raso em JavaScript</span>
                <OracleTerminal />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          03 // CONQUISTAS E MARCOS
          ==================================================================== */}
      <section id="conquistas" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">03 // Destaque & Reconhecimento</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">CONQUISTAS E MARCOS</h2>
            <p className="section-lead-phrase">
              Resultados comprovados de disciplina acadêmica, autonomia nos estudos e proficiência internacional.
            </p>
          </div>
        </div>

        <div className="milestones-showcase-grid">
          <div className="milestone-item">
            <div className="milestone-badge-top">
              <span className="card-tag">Aprovação & Resiliência</span>
              <span className="formation-status-pill">Vestibular & ENEM</span>
            </div>
            <h3>1º Lugar PUCPR & Ingresso na UTFPR</h3>
            <span className="card-subtitle">Superação de Limites Financeiros & Foco Autodidata</span>
            
            <ul className="project-bullets-list">
              <li><strong>1º Lugar Geral na PUCPR:</strong> Aprovado direto do terceirão em Engenharia de Software.</li>
              <li><strong>Estratégia prática:</strong> Sem condições de arcar com mensalidade e sem bolsa, buscou qualificações gratuitas no SENAI e estudou com disciplina própria.</li>
              <li><strong>Aprovação Federal (+ENEM):</strong> Único aluno do terceirão do SESI a ingressar em curso de alta concorrência em universidade federal sem cursinho pago prévio.</li>
            </ul>

            <div className="milestone-actions">
              <a 
                href={LINKEDIN_APROVACAO_POST_URL} 
                target="_blank" 
                rel="noreferrer"
                className="btn-milestone-action btn-milestone-primary"
                title="Acessar publicação da aprovação no LinkedIn"
              >
                <LinkedinLogo size={16} weight="bold" />
                <span>Ver post</span>
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          </div>

          <div className="milestone-item">
            <div className="milestone-badge-top">
              <span className="card-tag">Proficiência Internacional</span>
              <span className="formation-status-pill">100% Gabarito</span>
            </div>
            <h3>Gabarito Completo — Exame Cambridge</h3>
            <span className="card-subtitle">PES English & Cambridge Assessment English</span>
            
            <ul className="project-bullets-list">
              <li><strong>Pontuação máxima absoluta:</strong> 100% de aproveitamento em todas as competências: <em>Speaking</em>, <em>Writing</em> e <em>Listening</em>.</li>
              <li><strong>Agilidade & Destaque:</strong> Primeiro aluno de todas as salas a concluir integralmente cada etapa das avaliações oficiais.</li>
              <li><strong>Aplicação prática:</strong> Base que permitiu liderar debates diplomáticos em Oxford e conduzir apresentações fluidas em inglês.</li>
            </ul>

            <div className="milestone-actions">
              <a 
                href={CAMBRIDGE_PDF_URL} 
                target={CAMBRIDGE_PDF_URL.startsWith('http') || CAMBRIDGE_PDF_URL.endsWith('.pdf') ? '_blank' : '_self'}
                rel="noreferrer"
                className="btn-milestone-action"
                title="Visualizar documento do exame de Cambridge"
              >
                <FileText size={16} weight="bold" />
                <span>Ver PDF</span>
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          04 // TRAJETÓRIA: NEGÓCIOS & LIDERANÇA
          ==================================================================== */}
      <section id="trajetoria" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">04 // Linha do Tempo</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">TRAJETÓRIA & LIDERANÇA</h2>
            <p className="section-lead-phrase">
              Da diplomacia internacional na Universidade de Oxford à gestão comercial e liderança de projetos de tecnologia.
            </p>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {/* ITEM 1: OXFORD (Card na Esquerda, Foto na Direita) */}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2022 — 2023</span>
              <h3>Delegações Sesi MUN & OxfordMUN</h3>
              <span className="timeline-location">Universidade de Oxford — Oxford, Inglaterra</span>
              <ul className="project-bullets-list">
                <li>Representação oficial da Suécia no comitê DISEC (+200 delegados de múltiplos países).</li>
                <li>Condução de discurso de abertura de 1,5 min inteiramente em inglês perante a assembleia geral.</li>
                <li>Articulação de blocos diplomáticos e redação conjunta de resoluções internacionais.</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Delegação OxfordMUN — Universidade de Oxford ]</span>
            </div>
          </div>

          {/* ITEM 2: MUN INTERNA (Foto na Esquerda, Card na Direita) */}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto / Documento: Simulação e Rules of Procedure ]</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2024</span>
              <h3>Criação e Execução de MUN Interna</h3>
              <span className="timeline-location">SESI Centro — Curitiba, PR</span>
              <ul className="project-bullets-list">
                <li>Iniciativa autônoma para transformar debates políticos desinteressados em simulação diplomática ativa.</li>
                <li>Redação completa do documento de <em>Rules of Procedure</em> adaptado para a realidade da turma do técnico.</li>
                <li>Mediação e facilitação dos debates e votações com engajamento total dos alunos.</li>
              </ul>
            </div>
          </div>

          {/* ITEM 3: TRAINEE HI TECH (Card na Esquerda, Foto na Direita) */}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Ago/2025 — Dez/2025</span>
              <h3>Ingresso e Programa Trainee</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior UTFPR</span>
              <ul className="project-bullets-list">
                <li>Aprovação no processo seletivo no primeiro período da graduação em Sistemas de Informação.</li>
                <li>Rotação pelas diretorias de Gente & Gestão, Presidência, Vice-Presidência e Negócios.</li>
                <li>Escolha estratégica pela área Comercial e de Vendas Consultivas de Software.</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Time e Imersão na Empresa Júnior ]</span>
            </div>
          </div>

          {/* ITEM 4: ASSESSOR DE NEGÓCIOS (Foto na Esquerda, Card na Direita) */}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Reuniões Diagnósticas e Fechamentos ]</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Jan/2026 — Jul/2026</span>
              <h3>Assessor de Negócios</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior UTFPR</span>
              <ul className="project-bullets-list">
                <li>Prospecção ativa B2B, reuniões diagnósticas e levantamento de necessidades técnicas com clientes.</li>
                <li>Estruturação e precificação de propostas comerciais de desenvolvimento web e mobile.</li>
                <li>Realização de benchmarks estaduais com outras empresas juniores de tecnologia.</li>
              </ul>
            </div>
          </div>

          {/* ITEM 5: CURITIBA JÚNIOR (Card na Esquerda, Foto na Direita) */}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Mar/2026 — Mai/2026</span>
              <h3>Organização do Curitiba Júnior 26.1</h3>
              <span className="timeline-location">Comissão Organizadora Regional do MEJ</span>
              <ul className="project-bullets-list">
                <li>Atuação no time de negócios na estruturação do maior encontro de empresários juniores do Paraná.</li>
                <li>Gestão de relacionamento com patrocinadores e captação de recursos corporativos em 3 meses.</li>
                <li>Acompanhamento de palestrantes, suporte aos 700 congressistas e resolução de imprevistos ao vivo.</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Curitiba Júnior 26.1 — 700 Congressistas ]</span>
            </div>
          </div>

          {/* ITEM 6: GERÊNCIA DE NEGÓCIOS (Foto na Esquerda, Card na Direita) */}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Liderança Comercial e Squad Agro ]</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Ago/2026 — Presente</span>
              <h3>Gerente de Negócios</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior UTFPR</span>
              <ul className="project-bullets-list">
                <li>Aprovado em edital de liderança para ser o elo estratégico entre a diretoria e os assessores.</li>
                <li>Liderança no fechamento do maior contrato da história da EJ (R$ 22.000 para o Agronegócio).</li>
                <li>Atuação com dupla responsabilidade: gestão comercial do cliente e desenvolvimento no front-end.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          05 // FORMAÇÃO ACADÊMICA (GRID 3 CARDS)
          ==================================================================== */}
      <section id="formacao" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">05 // Base Acadêmica</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">FORMAÇÃO ACADÊMICA</h2>
            <p className="section-lead-phrase">
              Fundamentos sólidos de ciência da computação combinados com vivência prática em cooperativismo e metodologias ativas.
            </p>
          </div>
        </div>
        
        <div className="formation-cards-grid">
          {/* CARD 1: UTFPR */}
          <div className="formation-item-card">
            <div className="formation-card-header">
              <span className="institution-badge-box">UTFPR</span>
              <span className="formation-status-tag">Cursando: 3º Período · 2025-2029</span>
            </div>
            <div>
              <h3>Sistemas de Informação</h3>
              <span className="formation-inst-label">Universidade Tecnológica Federal do Paraná</span>
            </div>
            <div className="formation-photo-slot">
              <ImageIcon size={28} />
              <span>[ Foto: Campus UTFPR Curitiba ]</span>
            </div>
            <ul className="formation-bullets">
              <li><strong>Estruturas de Dados 1 e 2:</strong> Algoritmos de busca, árvores, ordenação e arquivos invertidos em C.</li>
              <li><strong>Técnicas de Programação:</strong> POO avançada, concorrência com Threads e exceptions em Java.</li>
              <li><strong>Sistemas & Hardware:</strong> Arquitetura de computadores (Assembly) e Análise de Algoritmos.</li>
            </ul>
          </div>

          {/* CARD 2: SESI / SENAI */}
          <div className="formation-item-card">
            <div className="formation-card-header">
              <span className="institution-badge-box">SENAI</span>
              <span className="formation-status-tag">Concluído · 2022–2024</span>
            </div>
            <div>
              <h3>Técnico em Cooperativismo</h3>
              <span className="formation-inst-label">SESI Centro / SENAI Paraná</span>
            </div>
            <div className="formation-photo-slot">
              <ImageIcon size={28} />
              <span>[ Foto: Formatura Técnica SESI/SENAI ]</span>
            </div>
            <ul className="formation-bullets">
              <li><strong>Gestão & Agilidade:</strong> Prática intensiva com Scrum, Kanban e liderança colaborativa.</li>
              <li><strong>Contabilidade Gerencial:</strong> Balanço patrimonial, balancete e conciliação financeira.</li>
              <li><strong>Dinâmicas Corporativas:</strong> Gestão de recursos humanos e projetos orientados à cooperação.</li>
            </ul>
          </div>

          {/* CARD 3: SESI CENTRO */}
          <div className="formation-item-card">
            <div className="formation-card-header">
              <span className="institution-badge-box">SESI</span>
              <span className="formation-status-tag">Concluído · 2022–2024</span>
            </div>
            <div>
              <h3>Ensino Médio com PBL</h3>
              <span className="formation-inst-label">SESI Centro Curitiba</span>
            </div>
            <div className="formation-photo-slot">
              <ImageIcon size={28} />
              <span>[ Foto: Mostra Científica / Formatura ]</span>
            </div>
            <ul className="formation-bullets">
              <li><strong>Metodologias Ativas:</strong> Aprendizagem Baseada em Problemas e condução de projetos práticos em equipe.</li>
              <li><strong>Oratória & Mostras:</strong> Apresentação de dezenas de seminários e projetos em feiras científicas.</li>
              <li><strong>Clubes Estudantis:</strong> Atuação em clubes de cinema, redação, investimentos e jornal.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================================
          06 // STACK & FERRAMENTAS (GRID 2×2)
          ==================================================================== */}
      <section id="stack" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">06 // Competências Técnicas</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">STACK & FERRAMENTAS</h2>
            <p className="section-lead-phrase">
              Linguagens, ecossistemas de desenvolvimento e ferramentas de gestão organizadas por domínio de aplicação.
            </p>
          </div>
        </div>

        <div className="stack-grid-duo">
          {/* CARD 1: FRONT-END */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Front-End & Web</h4>
              <p>Aplicações reativas, componentização e consumo eficiente de APIs.</p>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">JavaScript (ES6+)</span>
              <span className="stack-badge-pro">React</span>
              <span className="stack-badge-pro">Vite</span>
              <span className="stack-badge-pro">TanStack Query</span>
              <span className="stack-badge-pro">Material UI (MUI)</span>
              <span className="stack-badge-pro">HTML5 / CSS3</span>
              <span className="stack-badge-pro">React Router</span>
            </div>
          </div>

          {/* CARD 2: MOBILE & BAIXO NÍVEL */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Mobile & Baixo Nível</h4>
              <p>Desenvolvimento nativo, estruturas de dados algorítmicas e arquitetura de hardware.</p>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">Kotlin</span>
              <span className="stack-badge-pro">Jetpack Compose</span>
              <span className="stack-badge-pro">Room DB</span>
              <span className="stack-badge-pro">Retrofit</span>
              <span className="stack-badge-pro">C (Algoritmos)</span>
              <span className="stack-badge-pro">Java (POO)</span>
              <span className="stack-badge-pro">Assembly x86</span>
            </div>
          </div>

          {/* CARD 3: GESTÃO & NEGÓCIOS */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Negócios & Gestão</h4>
              <p>Práticas ágeis, levantamento de requisitos e condução de negociações B2B.</p>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">Vendas Consultivas B2B</span>
              <span className="stack-badge-pro">Metodologias Ágeis</span>
              <span className="stack-badge-pro">Scrum / Kanban</span>
              <span className="stack-badge-pro">Análise de Requisitos</span>
              <span className="stack-badge-pro">Modelagem UML</span>
              <span className="stack-badge-pro">Gestão de Equipes</span>
            </div>
          </div>

          {/* CARD 4: FERRAMENTAS & DESIGN */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Ferramentas & Design</h4>
              <p>Controle de versão, prototipagem de interfaces e edição multimídia.</p>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">Git & GitHub</span>
              <span className="stack-badge-pro">Figma (Prototipagem)</span>
              <span className="stack-badge-pro">VS Code</span>
              <span className="stack-badge-pro">Terminal Bash/Linux</span>
              <span className="stack-badge-pro">Edição de Vídeo</span>
              <span className="stack-badge-pro">FL Studio (Áudio)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          07 // CERTIFICAÇÕES E CURSOS (GRID 3×N + POPUP)
          ==================================================================== */}
      <section id="certificados" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">07 // Qualificações Formais</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">CERTIFICAÇÕES & CURSOS</h2>
            <p className="section-lead-phrase">
              Comprovações oficiais de proficiência em idiomas, desenvolvimento de software, lógica e ferramentas corporativas.
            </p>
          </div>
        </div>

        <div className="cert-grid-trio">
          {CERTS_DATA.map((cert) => (
            <div key={cert.id} className="cert-card-trio">
              <div>
                <div className="cert-card-top">
                  <span className="cert-tag-pill">{cert.category}</span>
                  <span className="cert-year-badge">{cert.year}</span>
                </div>
                <div className="cert-card-info">
                  <h3>{cert.title}</h3>
                  <span className="cert-inst-name">{cert.institution}</span>
                </div>
              </div>

              <div className="cert-card-actions">
                <button 
                  onClick={() => openModal(cert)} 
                  className="btn-cert-details"
                >
                  <span>Detalhes</span>
                </button>
                <a 
                  href={cert.pdfUrl || '#contato'} 
                  target={(cert.pdfUrl || '#contato').startsWith('http') || (cert.pdfUrl || '#contato').endsWith('.pdf') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="btn-cert-pdf"
                >
                  <FileText size={14} />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          08 // CONTATO
          ==================================================================== */}
      <section id="contato" className="section-block" style={{ marginBottom: '40px' }}>
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">08 // Conexão Direta</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">VAMOS CONVERSAR</h2>
            <p className="section-lead-phrase">
              Aberto a novos desafios de engenharia, negócios de tecnologia e conexões acadêmicas.
            </p>
          </div>
        </div>

        <div className="contact-hero-card">
          <h3>Vamos construir algo com propósito</h3>
          <p className="contact-lead-sub">
            Conectando arquitetura técnica, viabilidade de mercado e liderança ágil.
          </p>

          <div className="contact-channel-section">
            <span className="contact-group-label">Entre em contato:</span>
            <div className="contact-primary-actions">
              <button onClick={handleCopyEmail} className="btn-editorial primary">
                {copiedEmail ? <CheckCircle size={20} /> : <EnvelopeSimple size={20} />}
                <span>{copiedEmail ? 'E-mail Copiado!' : 'Copiar E-mail'}</span>
              </button>

              <a href="https://wa.me/41999114699" target="_blank" rel="noreferrer" className="btn-editorial secondary contact-btn-whatsapp">
                <WhatsappLogo size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="contact-divider">
            <div className="contact-divider-line"></div>
            <span className="contact-divider-text">minhas redes</span>
            <div className="contact-divider-line"></div>
          </div>

          <div className="contact-social-actions">
            <a href="https://linkedin.com/in/arthur-jacomel" target="_blank" rel="noreferrer" className="btn-editorial secondary social-btn" title="LinkedIn">
              <LinkedinLogo size={18} />
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/ArthurJKF" target="_blank" rel="noreferrer" className="btn-editorial secondary social-btn" title="GitHub">
              <GithubLogo size={18} />
              <span>GitHub</span>
            </a>

            <a href="https://instagram.com/arthur.jkf" target="_blank" rel="noreferrer" className="btn-editorial secondary social-btn" title="Instagram">
              <InstagramLogo size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MODAL DE DETALHES DO CERTIFICADO
          ==================================================================== */}
      {activeCert && (
        <div 
          className="cert-modal-backdrop" 
          onClick={closeModal}
          role="dialog" 
          aria-modal="true"
          aria-label={`Detalhes: ${activeCert.title}`}
        >
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button 
              className="cert-modal-close" 
              onClick={closeModal}
              aria-label="Fechar"
            >
              <X size={18} weight="bold" />
            </button>

            <span className="cert-modal-category">{activeCert.category}</span>
            <h3>{activeCert.title}</h3>
            <span className="cert-modal-sub">{activeCert.institution}</span>

            <div className="cert-modal-grid">
              <div className="cert-modal-field">
                <span>Ano</span>
                <strong>{activeCert.year}</strong>
              </div>
              <div className="cert-modal-field">
                <span>Carga Horária</span>
                <strong>{activeCert.cargaHoraria}</strong>
              </div>
              <div className="cert-modal-field" style={{ gridColumn: '1 / -1' }}>
                <span>Categoria</span>
                <strong>{activeCert.categoria}</strong>
              </div>
            </div>

            <div className="cert-modal-desc">
              <span>Competências Desenvolvidas</span>
              <p>{activeCert.competencias}</p>
            </div>

            <a 
              href={activeCert.pdfUrl || '#'} 
              target={(activeCert.pdfUrl || '#').startsWith('http') || (activeCert.pdfUrl || '#').endsWith('.pdf') ? '_blank' : '_self'}
              rel="noreferrer"
              className="btn-editorial primary" 
              style={{ display: 'inline-flex', gap: '10px' }}
            >
              <FileText size={18} />
              <span>Abrir PDF do Certificado</span>
            </a>
          </div>
        </div>
      )}
    </main>
  )
}