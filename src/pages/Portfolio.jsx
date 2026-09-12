import { useState } from 'react'
import {
  FileText,
  Image as ImageIcon,
  Certificate,
  CalendarBlank,
  Clock,
  Star,
  LinkedinLogo,
  WhatsappLogo,
  EnvelopeSimple,
  GithubLogo,
  CheckCircle,
  Hourglass,
  X,
  ArrowRight,
  ArrowUpRight
} from '@phosphor-icons/react'

const CAMBRIDGE_PDF_URL = '/certificados/cambridge-ket.pdf'

// Link do post sobre a aprovação no LinkedIn
const LINKEDIN_APROVACAO_POST_URL = 'https://www.linkedin.com/posts/arthur-jacomel_enem-vestibular-utfpr-activity-7360908134489411584-wwHj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFGvVEUB8UP02Wqp7Kthx3XJL5Bf_rCxnOs'

const CERTS_DATA = [
  {
    id: 'cambridge',
    category: 'Inglês',
    year: '2021',
    title: 'Key English Test (KET)',
    institution: 'Cambridge Assessment English',
    cargaHoraria: 'Exame oficial',
    categoria: 'Proficiência Internacional',
    competencias: 'Certificação Cambridge English Entry Level Certificate in ESOL International (Entry 3), com Grade A, nível B1 e pontuação 150.',
    destaque: 'Grade A · B1 · Score 150',
    data: '23 de outubro de 2021',
    documentUrl: '/certificados/cambridge-ket.pdf',
  },
  {
    id: 'python',
    category: 'Programação',
    year: '2025',
    title: 'Programação em Python',
    institution: 'SENAI - Dr. Celso Charuri',
    cargaHoraria: '32 horas',
    categoria: 'Desenvolvimento de Software',
    competencias: 'Aplicações com Python, variáveis, reuso de software, execução contínua, strings, dicionários, orientação a objetos e desenvolvimento de projeto aplicado.',
    destaque: 'Projeto aplicado',
    data: '06/03/2025 a 17/03/2025',
    registro: 'Livro 00004 3058 · Página 214 · Nº 18388',
    documentUrl: '/certificados/python.pdf',
  },
  {
    id: 'logica',
    category: 'Fundamentos',
    year: '2025',
    title: 'Introdução à Lógica de Programação',
    institution: 'SENAI - Dr. Celso Charuri',
    cargaHoraria: '40 horas',
    categoria: 'Lógica Computacional',
    competencias: 'Fundamentos de lógica, algoritmos, operadores, estruturas condicionais e de repetição, arrays, funções e projeto prático integrador.',
    destaque: 'Projeto prático integrador',
    data: '10/02/2025 a 21/02/2025',
    registro: 'Livro 00004 3058 · Página 212 · Nº 18353',
    documentUrl: '/certificados/logica-de-programacao.pdf',
  },
  {
    id: 'web',
    category: 'Web',
    year: '2025',
    title: 'Desenvolvendo Web Front-End',
    institution: 'SENAI - Dr. Celso Charuri',
    cargaHoraria: '40 horas',
    categoria: 'Desenvolvimento Web',
    competencias: 'HTML, CSS, JavaScript, DOM, Git e GitHub, APIs, React com Vite, frameworks, deploy com Vercel, analytics, logs e observabilidade.',
    destaque: 'React, Vite e deploy',
    data: '28/04/2025 a 26/05/2025',
    registro: 'Livro 00004 3058 · Página 219 · Nº 18483',
    documentUrl: '/certificados/desenvolvimento-web-front-end.pdf',
  },
  {
    id: 'excel',
    category: 'Gestão & Dados',
    year: '2025',
    title: 'Excel Básico ao Intermediário',
    institution: 'SENAI - Dr. Celso Charuri',
    cargaHoraria: '40 horas',
    categoria: 'Análise e Produtividade',
    competencias: 'Atalhos, painéis, organização de linhas e colunas, fórmulas, funções lógicas e estatísticas, filtros, buscas, tabelas dinâmicas e gráficos.',
    destaque: 'Tabelas dinâmicas e gráficos',
    data: '10/02/2025 a 21/02/2025',
    registro: 'Livro 00004 3058 · Página 213 · Nº 18360',
    documentUrl: '/certificados/excel.pdf',
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
        <p className="page-subtitle">Projetos, Conquistas e Trajetória</p>
      </header>

      {/* ====================================================================
          01 // SOBRE MIM
          ==================================================================== */}
      <section id="sobre-mim" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">01 // Sobre mim</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">QUEM SOU EU?</h2>
          </div>
        </div>
        
        <div className="about-editorial-canvas">
          <div className="about-main-column">
            <div className="about-lead-quote">
              Apaixonado por tecnologias que transformam, movido pelas estratégias que as tornam possíveis. 
            </div>

            <div className="about-narrative">
              <p>
                Estudante de Sistemas de Informação na UTFPR e Gerente de Negócios da Hï Tech.
                Possuo domínio em Java, Kotlin e Python, adquiridos em projetos pessoais e acadêmicos, além de constante prática com React em projetos da Hï Tech.
              </p>
              <p>
                Confiante nas minhas habilidades de comunicação, relacionamento com clientes, planejamento estratégico e gestão de equipes, com experiências na
                empresa júnior, na organização do maior evento de empresários jovens do Paraná (700 congressistas) e em debates de diplomacia internacional.
              </p>
            </div>

            <div className="about-role-grid">
              <div>
                <span className="about-role-label">Formação atual</span>
                <strong>Sistemas de Informação</strong>
                <span>UTFPR · 3º período</span>
              </div>
              <div>
                <span className="about-role-label">Atuação atual</span>
                <strong>Gerente de Negócios</strong>
                <span>Hï Tech · Empresa Júnior</span>
              </div>
            </div>

            <div className="about-action-row">
              <a href="#projetos" className="about-action about-action-primary">
                <ArrowRight size={17} weight="bold" />
                <span>Ver projetos</span>
              </a>
              <a href="#contato" className="about-action about-action-primary about-action-contact">
                <EnvelopeSimple size={17} weight="bold" />
                <span>Entre em contato</span>
              </a>
              <a href="https://linkedin.com/in/arthur-jacomel" target="_blank" rel="noreferrer" className="about-action about-action-secondary" title="LinkedIn">
                <LinkedinLogo size={17} weight="bold" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ArthurJKF" target="_blank" rel="noreferrer" className="about-action about-action-secondary" title="GitHub">
                <GithubLogo size={17} weight="bold" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="about-pillars-stack">
            <div className="pillar-block compact-achievement-card compact-about-achievement">
              <div className="milestone-badge-top">
                <span className="achievement-status-pill">
                  <Star size={13} weight="fill" aria-hidden="true" />
                  <span>Conquista</span>
                </span>
              </div>
              <h3>1º Lugar PUCPR & Ingresso na UTFPR</h3>
              <ul className="project-bullets-list">
                <li><strong>1º Lugar em Engenharia de Software</strong> no vestibular da PUCPR.</li>
                <li><strong>1° aluno da turma</strong> a conquistar vaga em universidade federal concorrida, com a nota do próprio terceirão. <strong>Sem cursinho.</strong></li>
              </ul>
              <div className="milestone-actions">
                <a href={LINKEDIN_APROVACAO_POST_URL} target="_blank" rel="noreferrer" className="btn-milestone-action btn-milestone-primary" title="Acessar publicação no LinkedIn">
                  <LinkedinLogo size={16} weight="bold" />
                  <span>Ver post</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
            </div>

            <div className="pillar-block compact-achievement-card compact-about-achievement">
              <div className="milestone-badge-top">
                <span className="achievement-status-pill">
                  <Star size={13} weight="fill" aria-hidden="true" />
                  <span>Conquista</span>
                </span>
              </div>
              <h3>Exame de Cambridge — Pontuação Máxima</h3>
              <ul className="project-bullets-list">
                <li><strong>100%</strong> em <em>Speaking</em>, <em>Writing</em> e <em>Listening</em> (e 1° a terminar ambas as etapas).</li>
              </ul>
              <div className="milestone-actions">
                <a href={CAMBRIDGE_PDF_URL} target="_self" className="btn-milestone-action" title="Visualizar documento em PDF">
                  <FileText size={16} weight="bold" />
                  <span>Ver PDF</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          02 // FORMAÇÃO ACADÊMICA (GRID DE 3 CARDS)
          ==================================================================== */}
      <section id="formacao" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">02 // Formação</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">FORMAÇÃO ACADÊMICA</h2>
          </div>
        </div>
        
        <div className="formation-cards-grid">
          {/* CARD 1: UTFPR */}
          <div className="formation-item-card formation-item-card-featured">
            <div className="formation-card-header">
              <span className="formation-status-tag" title="Formação em andamento">
                <Hourglass size={13} weight="bold" aria-hidden="true" />
                <span>Ago/2025 — Dez/2029</span>
              </span>
            </div>
            <div>
              <h3>Bacharelado em Sistemas de Informação</h3>
              <span className="formation-inst-label">Universidade Tecnológica Federal do Paraná (UTFPR) — Curitiba</span>
            </div>
            <ul className="formation-bullets">
              <li><strong>Base técnica:</strong> Java, C, Estruturas de Dados, Programação Orientada a Objetos (POO), threads e paralelismo, tratamento de exceções.</li>
              <li><strong>Base matemática:</strong> Álgebra Linear, Matemática Discreta, Cálculo, Estatística e Lógica Computacional.</li>
              <li><strong>Análise e Projeto de Algoritmos:</strong> Levantamento de requisitos, Diagramação UML, prática em desenvolvimento de projeto (Kotlin, Jetpack Compose).</li>
              <li><strong>Sistemas:</strong> Arquitetura de Computadores, Assembly e Arduíno.</li>
              <li><strong>Estratégia e administração:</strong> TI com papel estratégico, empreendedorismo e administração.</li>
            </ul>
          </div>

          {/* CARD 2: SESI / SENAI */}
          <div className="formation-item-card">
            <div className="formation-card-header">
              <span className="formation-status-tag" title="Formação concluída">
                <CheckCircle size={15} weight="bold" aria-hidden="true" />
                <span>Jan/2023 — Dez/2024</span>
              </span>
            </div>
            <div>
              <h3>Técnico em Cooperativismo</h3>
              <span className="formation-inst-label">SENAI Paraná — Curitiba</span>
            </div>
            <p>
              Técnico em Administração com ênfase em Cooperativismo
            </p>
            <ul className="formation-bullets">
              <li><strong>Metodologias ágeis:</strong> Scrum, Kanban, organização de projetos.</li>
              <li><strong>Gestão:</strong> Contabilidade, recursos humanos e processos organizacionais.</li>
              <li><strong>Projetos e seminários:</strong> Planejamento, comunicação e tomada de decisão.</li>
            </ul>
          </div>

          {/* CARD 3: SESI CENTRO */}
          <div className="formation-item-card">
            <div className="formation-card-header">
              <span className="formation-status-tag" title="Formação concluída">
                <CheckCircle size={15} weight="bold" aria-hidden="true" />
                <span>Jan/2022 — Dez/2024</span>
              </span>
            </div>
            <div>
              <h3>Ensino Médio</h3>
              <span className="formation-inst-label">SESI Centro — Curitiba</span>
            </div>
            <ul className="formation-bullets">
              <li><strong>Trabalho em equipe e comunicação:</strong> Metodologia totalmente baseada em grupos — projetos, feiras, trabalhos, entrevistas e estudos.</li>
              <li><strong>Extracurricular:</strong> Grupo de diplomacia internacional (SesiMUN) e clubes investimentos, jornal, e redação e cinema.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================================
          03 // TRAJETÓRIA: NEGÓCIOS & LIDERANÇA
          ==================================================================== */}
      <section id="trajetoria" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">03 // Linha do Tempo</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">TRAJETÓRIA & LIDERANÇA</h2>
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {/* ITEM 1: SESI MUN*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Jan/2023 — Jun/2024</span>
              <h3>Delegação SesiMUN — Model United Nations</h3>
              <span className="timeline-location">SESI Centro — Curitiba, PR</span>
              <ul className="project-bullets-list">
                <li>Debates, treinamentos, pesquisas e estudos sobre geopolítica e diplomacia internacional em inglês.</li>
                <li>Participação como delegado em comitês de MUNs nacionais e internacionais.</li>
                <li>Discursos, negociações, estratégia, trabalho em equipe e escrita de documentos de proposta, apresentação e resolução.</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Delegação OxfordMUN — Universidade de Oxford ]</span>
            </div>
          </div>

          {/* ITEM 2: OXFORD GLOBAL MUN*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Delegação OxfordMUN — Universidade de Oxford ]</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Out/2023 — Nov/2024</span>
              <h3>Oxford Global MUN</h3>
              <span className="timeline-location">Universidade de Oxford — Oxford, Inglaterra</span>
              <ul className="project-bullets-list">
                <li>Atuação como delegado da Suécia no comitê DISEC (+200 delegados) na Model UN da Universidade de Oxford, na Inglaterra.</li>
                <li>Condução de discursos perante abertura, assembleias gerais e votações.</li>
                <li>Articulação de blocos diplomáticos, resolução de conflitos sob pressão e redação conjunta de resoluções internacionais.</li>
              </ul>
            </div>
          </div>

          {/* ITEM 3: MUN INTERNA*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Out/2024 </span>
              <h3>Criação e Execução de MUN Interna para a sala de aula</h3>
              <span className="timeline-location">SESI Centro — Curitiba, PR</span>
              <ul className="project-bullets-list">
                <li>Iniciativa para ajudar a professora do curso técnico a engajar a turma em debates políticos,
                  criando uma MUN adaptada para a realidade da sala de aula e dos critérios da professora.</li>
                <li>Criação de do documento de <em>Guia do Congressista e Rules of Procedure</em>, descomplicando temas para os alunos e explicando como a sessão funcionaria.</li>
                <li>Mediação e facilitação dos debates e votações dos alunos enquanto delegados. "Chair".</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto / Documento: Simulação e Rules of Procedure ]</span>
            </div>
          </div>

          {/* ITEM 4: TRAINEE HI TECH*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Time e Imersão na Empresa Júnior ]</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Ago/2025 — Dez/2025</span>
              <h3>Ingresso como Trainee</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior de Tecnologia da UTFPR</span>
              <ul className="project-bullets-list">
                <li>Aprovação no processo seletivo no primeiro período da faculdade.</li>
                <li>Rotação pelas áreas de Gente & Gestão, Presidência, Vice-Presidência e Negócios.</li>
              </ul>
            </div>
          </div>

          {/* ITEM 5: ASSESSOR DE NEGÓCIOS*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Jan/2026 — Jul/2026</span>
              <h3>Assessor de Negócios</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior de Tecnologia da UTFPR</span>
              <ul className="project-bullets-list">
                <li>Prospecção ativa, reuniões diagnósticas, levantamento de requisitos com clientes, apresentação de propostas, fechamento de contrato e pós venda.</li>
                <li>Momentos de construção, treinamentos e realização de benchmarks com empresas juniores e sêniores de todo o Brasil.</li>
                <li>Destaque em estruturação de processos internos.</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Reuniões Diagnósticas e Fechamentos ]</span>
            </div>
          </div>

          {/* ITEM 6: CURITIBA JÚNIOR*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Curitiba Júnior 26.1 — 700 Congressistas ]</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Mar/2026 — Mai/2026</span>
              <h3>Organização do maior encontro de empresários juniores do estado</h3>
              <span className="timeline-location">Curitiba Júnior 26.1 — AURORA: 700+ congressistas, 2 dias de evento, 12h cada dia</span>
              <ul className="project-bullets-list">
                <li>Atuação no time de negócios na estruturação do evento. Fomos do zero à uma entrega inesquecível, em 2 meses.</li>
                <li>Prospecção, estruturação e fechamento de contrato, relacionamento com patrocinadores e captação de recursos para o evento.</li>
                <li>Condução de momentos de construção e pautas, acompanhamento de palestrantes e parceiros, suporte e engajamento para os 700 congressistas e resolução de imprevistos ao vivo.</li>
              </ul>
            </div>
          </div>

          {/* ITEM 7: GERÊNCIA DE NEGÓCIOS*/}
          <div className="timeline-row">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Ago/2026 — Presente</span>
              <h3>Gerente de Negócios</h3>
              <span className="timeline-location">Hï Tech — Empresa Júnior de Tecnologia da UTFPR</span>
              <ul className="project-bullets-list">
                <li>Função de ser o elo estratégico entre a diretoria e os assessores da área.</li>
                <li>Planejamento estratégico, gestão de equipe e estruturação de processos internos e materiais para o time.</li>
                <li>Função estratégica, mas ainda atuando no operacional (orçamento e estruturação de propostas, relacionamento com clientes, fechamento de contratos).</li>
              </ul>
            </div>
            <div className="timeline-photo-outer">
              <ImageIcon size={32} />
              <span className="timeline-photo-caption">[ Foto: Liderança Comercial e Squad Agro ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          04 // PROJETOS
          ==================================================================== */}
      <section id="projetos" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">04 // Projetos</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">PRINCIPAIS PROJETOS</h2>
          </div>
        </div>
        
        {/* PROJETO 1: DESTAQUE MASTER (NDA) */}
        <div className="project-spotlight-dossier">
          <div className="project-dossier-meta-bar">
            <div className="meta-title-group">
              <h3>Sistema Web FrontEnd para Agro</h3>
              <span className="meta-client-tag">Hï Tech — Projeto Comercial Corporativo</span>
            </div>
            <div>
              <span className="card-status status-active">*CONFIDENCIAL</span>
              <span className="card-status status-active">EM ANDAMENTO</span>
            </div>
          </div>

          <div className="project-content-split">
            <div style={{ width: '100%' }}>
              <p className="project-lead-text">
                Sistema corporativo de intermediação comercial e operacional entre produtores rurais, cooperativas e fornecedores de insumos agrícolas.
              </p>

              <p className="meta-client-text">
                <strong>Maior projeto já fechado pela EJ.</strong> Envolve Banco de Dados, <strong>Web</strong> e Mobile.
                Estou no time de devs da parte web do projeto, responsável pela <strong>criação das telas</strong> e <strong>conexão com o banco de dados</strong> desenvolvido pelo time de backend.
              </p>
              
              <ul className="tech-stack-inline">
                <li>JavaScript</li>
                <li>React + Vite</li>
                <li>React Router</li>
                <li>TanStack Query</li>
                <li>FSM (State Machine)</li>
              </ul>
            </div>
            <div className="agro-photo-stock">
              <img 
                src="/projetos/dbml projeto.png" 
                class="agro-photo" 
                alt="Diagrama DBML do projeto" 
                style={{ 
                  width: '100%', 
                  maxHeight: '320px', /* <-- É ISSO QUE VAI ENCOLHER O CARD */
                  objectFit: 'cover',
                  objectPosition: 'top', /* Foca na parte de cima do diagrama se ele for cortado */
                  borderRadius: '8px', 
                  display: 'block',
                  marginLeft: 'auto'
                }}
              />
            </div>

          </div>
        </div>

        {/* PROJETOS 2 E 3: GRID DUPLO */}
        <div className="projects-grid-half">
          
          {/* PROJETO 2: RECIPIE */}
          <div className="project-half-card recipe-project-card">
            <div>
              <div className="project-half-header">
                <h3>Recipie</h3>
                <span className="card-subtitle-plain">UTFPR — Análise e Projeto de Algoritmos</span>
                <div className="card-status-row">
                  <span className="card-status status-active">Em Estruturação</span>
                </div>
              </div>
              
              <p className="project-lead-text">
                App mobile pensado para reduzir atritos na hora de se preparar para cozinhar
              </p>

              <ul className="project-bullets-list">
                <li><strong>Motor de filtragem:</strong> Algoritmo que calcula a taxa de preparo com base em ingredientes em estoque vs. ingredientes faltantes,
                mostra as receitas que já podem ser feitas e as que quase podem ser feitas.</li>
                <li><strong>Persistência local:</strong> Estruturação com Room DB para funcionamento offline da despensa virtual.</li>
                <li><strong>Planejamento e análise:</strong> Ciclo de levantamento de requisitos, análise, desenvolvimento e testagem baseado no modelo Processo Unificado.</li>
                <li><strong>Gestão da equipe:</strong> Organização dos encontros de alinhamento semanais.</li>
              </ul>
              
              <ul className="tech-stack-inline">
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Room DB</li>
                <li>Retrofit + Coroutines</li>
              </ul>
            </div>

          </div>

          {/* PROJETO 3: O ORÁCULO */}
          <div className="project-half-card oracle-project-card">
            <div>
              <div className="project-half-header">
                <h3>Mathemagical Oracle — Assembly</h3>
                <span className="card-subtitle-plain">UTFPR — Arquitetura de Computadores</span>
                <div className="card-status-row">
                  <span className="card-status status-active">Em Estruturação</span>
                </div>
              </div>
              
              <p className="project-lead-text">
                Implementação de Busca Binária em Assembly com controle de registradores, para exposição didática no MUTEC.
              </p>

              <ul className="project-bullets-list">
                <li><strong>Otimização O(log n):</strong> Adivinhação de números de 0 a 1000 em no máximo 10 iterações.</li>
                <li><strong>I/O de baixo nível:</strong> Manipulação direta de registradores de CPU sem dependência de bibliotecas de alto nível.</li>
                <li><strong>Destinação didática:</strong> Futura exposição didática em terminal de computador antigo no Museu da Tecnologia (MUTEC) da UTFPR.</li>
              </ul>
              
              <ul className="tech-stack-inline">
                <li>Assembly x86</li>
                <li>Busca Binária (O(log n))</li>
                <li>Registradores CPU</li>
              </ul>
            </div>

            <div className="oracle-visual-grid">
              <div className="oracle-photo-slot">
                <img src="/projetos/oraculo.png" alt="Projeto Mathemagical Oracle" />
              </div>
              <div className="oracle-terminal-wrap">
                <span className="oracle-example-label">Exemplo raso em JavaScript</span>
                <OracleTerminal />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          05 // STACK & FERRAMENTAS
          ==================================================================== */}
      <section id="stack" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">05 // competências</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">STACK E HABILIDADES</h2>
          </div>
        </div>

        <div className="stack-grid-duo">
          {/* CARD 1: LINGUAGENS */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Stack</h4>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">Java</span>
              <span className="stack-badge-pro">Python</span>
              <span className="stack-badge-pro">C</span>
              <span className="stack-badge-pro">Kotlin</span>
              <span className="stack-badge-pro">Assembly</span>
              <span className="stack-badge-pro">React</span>
              <span className="stack-badge-pro">CSS</span>
              <span className="stack-badge-pro">HTML</span>
              <span className="stack-badge-pro">JavaScript</span>
            </div>
          </div>
          
          {/* CARD 2: GESTÃO & NEGÓCIOS */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Gestão</h4>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">Relacionamento com cliente</span>
              <span className="stack-badge-pro">Gestão de Equipes</span>
              <span className="stack-badge-pro">Planejamento Estratégico</span>
              <span className="stack-badge-pro">Metodologias Ágeis</span>
              <span className="stack-badge-pro">Análise de Requisitos</span>
              <span className="stack-badge-pro">Modelagem UML</span>
            </div>
          </div>

          {/* CARD 3: FERRAMENTAS */}
          <div className="stack-card-duo">
            <div className="stack-card-header">
              <h4><span className="pillar-dot"></span>Ferramentas</h4>
            </div>
            <div className="stack-badges-wrap">
              <span className="stack-badge-pro">Git</span>
              <span className="stack-badge-pro">GitHub (Prototipagem)</span>
              <span className="stack-badge-pro">WSL</span>
              <span className="stack-badge-pro">Linux</span>
              <span className="stack-badge-pro">VS Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          06 // CERTIFICADOS
          ==================================================================== */}
      <section id="certificados" className="section-block">
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">06 // Certificados</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">Qualificações formais</h2>
          </div>
        </div>

        <div className="cert-grid-trio">
          {CERTS_DATA.map((cert) => (
            <div key={cert.id} className="cert-card-trio">
              <div className="cert-card-content">
                <div className="cert-card-top">
                  <Certificate className="cert-card-icon" size={30} weight="duotone" />
                  <span className="cert-tag-pill">{cert.category}</span>
                </div>
                <div className="cert-card-info">
                  <h3>{cert.title}</h3>
                  <span className="cert-inst-name">{cert.institution}</span>
                </div>
                <div className="cert-card-facts">
                  <span><CalendarBlank size={15} />{cert.data}</span>
                  {cert.id !== 'cambridge' && (
                    <span><Clock size={15} />{cert.cargaHoraria}</span>
                  )}
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
                  href={cert.documentUrl}
                  target="_blank"
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
          07 // CONTATO
          ==================================================================== */}
      <section id="contato" className="section-block" style={{ marginBottom: '40px' }}>
        <div className="section-header-block">
          <div className="section-header-top">
            <span className="section-eyebrow">07 // Contato</span>
            <div className="section-line-decor"></div>
          </div>
          <div className="section-header-main">
            <h2 className="section-title-large">CONEXÃO DIRETA</h2>
          </div>
        </div>

        <div className="contact-hero-card">
          <h3>Vamos construir algo com propósito</h3>
          <p className="contact-lead-sub">
            Conectando tecnologia e visão de negócios.
          </p>

          <div className="contact-channel-section">
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

          <div className="contact-social-block">
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

            </div>
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

            <h3>{activeCert.title}</h3>
            <span className="cert-modal-sub">{activeCert.institution}</span>

            <div className="cert-modal-grid">
              <div className="cert-modal-field">
                <span>Período</span>
                <strong>{activeCert.data}</strong>
              </div>
              <div className="cert-modal-field">
                <span>{activeCert.id === 'cambridge' ? 'Tipo' : 'Carga Horária'}</span>
                <strong>{activeCert.cargaHoraria}</strong>
              </div>
              <div className="cert-modal-field">
                <span>Categoria</span>
                <strong>{activeCert.categoria}</strong>
              </div>
              <div className="cert-modal-field">
                <span>Destaque</span>
                <strong>{activeCert.destaque}</strong>
              </div>
            </div>

            <div className="cert-modal-desc">
              <span>Competências Desenvolvidas</span>
              <p>{activeCert.competencias}</p>
            </div>

            {activeCert.registro && (
              <p className="cert-modal-record">{activeCert.registro}</p>
            )}

            <div className="cert-modal-actions">
              <a href={activeCert.documentUrl} target="_blank" rel="noreferrer" className="btn-editorial primary">
                <FileText size={18} />
                <span>Abrir PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}