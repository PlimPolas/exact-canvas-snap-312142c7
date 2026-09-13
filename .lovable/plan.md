# Seletor de idioma EN / ES / PT

Adicionar troca de idioma completa no site, mantendo exatamente o visual atual: mesmas cores, fontes, espaçamentos, animações e layout.

## 1. O seletor

Um controle compacto em formato de cápsula com as três opções lado a lado:

```text
[ EN ]  ES   PT
```

- O idioma ativo fica dentro de uma cápsula suave; os outros dois ficam discretos.
- Mesmas cores e cantos arredondados já usados no menu do topo, inclusive a variação entre a barra transparente (topo da página) e a barra clara (depois de rolar).
- Sem bandeiras, sem sombras fortes, sem cores novas.
- Transição suave ao trocar, estado de foco visível e navegação por teclado.

Posição no computador: entre o menu de navegação e o botão "Book Consultation", sem apertar o cabeçalho.
Posição no celular: dentro do menu que abre em tela cheia, logo acima dos botões de agendamento, com área de toque confortável.

## 2. Tradução de todo o site

Todo o texto visível passa a vir de um arquivo de textos por idioma: topo, menu, hero, serviços, transformações, seção da Dra. Green, diferenciais, o estúdio, depoimentos, perguntas frequentes, localização, horários, faixa final de agendamento, rodapé, formulário de consulta (rótulos, dicas de preenchimento, mensagens de erro e confirmação) e os rótulos de acessibilidade.

Inglês continua sendo o padrão. Espanhol e português serão escritos de forma natural e profissional, não tradução literal, com frases adaptadas quando ficarem longas demais para o espaço.

Não são traduzidos: nome da clínica, nome da doutora, nomes dos pacientes nos depoimentos, endereço, telefone, e-mail, perfis do Instagram, links, Invisalign e as credenciais (DDS, Kois Center, Loma Linda University).

## 3. Comportamento

- A troca é imediata, sem recarregar a página e sem perder a posição de rolagem.
- A escolha fica salva no navegador e continua valendo depois de atualizar a página.
- Sem preferência salva, abre em inglês.
- O idioma do documento acompanha a escolha (en, es, pt-BR).

## Detalhes técnicos

- Novo diretório `src/i18n/` com `en.ts`, `es.ts`, `pt.ts` (mesma forma de objeto, tipada a partir do dicionário `en`), `index.ts` e um `LanguageProvider` com `useLanguage()` / `t`.
- O conteúdo hoje em `src/config/clinic.ts` é dividido: dados de marca/contato/imagens continuam lá; todo o texto redigido (hero, treatments, about, differentiators, infra, reviews, faq, specialtiesOptions, contactPreferences, officeHours, navLinks, partners, stats) migra para os dicionários, preservando as mesmas chaves e ordem para não alterar o layout.
- O provider é montado em `src/routes/index.tsx` junto do `BookingProvider`; hidratação segura lendo o localStorage em `useEffect` (evita mismatch no SSR) e aplicando `document.documentElement.lang`.
- Novo componente `src/components/landing/LanguageSwitcher.tsx` (`role="group"`, `aria-label`, `aria-pressed` em cada botão), usado no `Navbar` desktop e no menu mobile, com variante clara/escura via a prop `scrolled` já existente.
- Componentes atualizados para ler do dicionário: `Navbar`, `Hero`, `Marquee`, `Stats`, `Treatments`, `BeforeAfter`, `Team`, `Infra`, `Reviews`, `Faq`, `Location`, `CtaBanner`, `Footer`, `CallFab`, `BookingModal`, `booking-context` (especialidade padrão), `ui-kit` onde houver texto fixo.
- SEO: `head()` de `src/routes/index.tsx` permanece em inglês (a rota é única e pré-renderizada); o JSON-LD também. Sem novas dependências.
- Verificação: build + capturas em 1280, 768 e 390 nos três idiomas, checando estouro de texto no cabeçalho, botões e cards.

Fora do escopo: rotas por idioma (/es, /pt), backend, mudanças de design ou de conteúdo além da tradução.
