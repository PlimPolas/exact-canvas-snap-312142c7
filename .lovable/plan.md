# Personalizar o site com a logo e as fotos reais da Dra. Daniele Green

Sem redesenhar nada: mesmas seções, mesmo layout, mesmas animações. Apenas troco imagens genéricas pelos materiais originais da clínica.

## 1. Logo Coastal Smiles

- Topo do site: a logo (onda + gaivotas + "COASTAL SMILES / NEWPORT BEACH") substitui o ícone de dente e o nome em texto, com altura contida para não dominar a barra.
- Como a logo é branca, uso a versão branca sobre o topo transparente/escuro e uma versão escura quando a barra fica clara ao rolar.
- Rodapé: logo branca no lugar do nome em texto.
- Favicon do site atualizado com a marca.
- Proporções originais preservadas, sem esticar, sem efeitos.

## 2. Fotos da doutora

- **Seção "Meet Dr. Daniele Green"**: retrato de jaleco branco (ft2) no lugar da imagem atual — melhor enquadramento, olhar para a câmera e fundo claro que combina com a seção.
- **Topo do site (hero)**: foto de terno preto (ft5), alinhada à direita para o texto continuar legível à esquerda; no celular, enquadramento ajustado no rosto. A imagem costeira atual sai.
- **Seção "The Studio"**: a foto no scanner digital (ft4) entra na galeria, substituindo uma das fotos genéricas de consultório — ilustra de verdade o planejamento digital do sorriso.
- **Faixa de chamada para agendar**: foto no consultório com vista (ft3) como fundo discreto atrás do texto, mantendo o contraste do botão.
- A página da revista (ft1) tem texto impresso embutido, então não entra como foto de fundo. Se quiser, posso usá-la como um selo de imprensa na seção da doutora — me diga.

## 3. Qualidade e enquadramento

- Todas as fotos entram pelo CDN de assets (sem pesar o projeto), com carregamento adiantado só na do topo.
- Enquadramento definido por foto para não cortar o rosto em celular nem em desktop.
- Nenhum texto novo inventado: nomes, credenciais e serviços continuam como estão.

## Detalhes técnicos

- `lovable-assets create` para logo e ft2/ft3/ft4/ft5, gerando `src/assets/*.asset.json`; favicon copiado como arquivo real em `public/`.
- Variante escura da logo gerada por edição de imagem (marca preta sobre fundo transparente) para o header em estado `scrolled`.
- Arquivos tocados: `Navbar.tsx` (ToothMark → `<img>` da logo), `Footer.tsx`, `Team.tsx`, `Hero.tsx`, `Infra.tsx`, `CtaBanner.tsx`, `config/clinic.ts` (`heroContent.poster`, `about.portrait`, `infraGallery`), `__root.tsx` (favicon).
- Verificação: build limpo + captura de tela em 1280 e 390 px.

Fora do escopo: mudanças de estrutura, tokens do Design System, textos das seções e qualquer backend.
