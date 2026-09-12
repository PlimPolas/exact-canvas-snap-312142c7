# Seção Smile Transformations com comparador Before/After

Substituir a atual seção de antes/depois (que usa uma única foto genérica) por um carrossel premium com os 4 casos reais enviados.

## Casos

Pares reconhecidos pelos nomes dos arquivos:

- Case 01 — cl1_an / cl1_dp
- Case 02 — cl2_an / cl2_dp
- Case 03 — cl3_an / cl3_dp
- Case 04 — cl4_an / cl4_dp

As 8 fotos entram como arquivos do projeto servidos pela CDN. Nenhuma imagem sem par é usada.

## Como vai funcionar

- Um caso por vez em destaque, ocupando a mesma área para antes e depois.
- Linha vertical fina e arrastável, começando em 50%, com um pequeno handle central indicando arraste horizontal.
- Etiquetas discretas BEFORE e AFTER nos cantos superiores.
- Setas elegantes à esquerda e à direita para trocar de caso, com microanimação no hover e área de toque confortável no celular.
- Indicador discreto no formato `01 / 04`.
- Transição suave (fade/slide) entre os casos.
- No celular: o comparador ocupa quase toda a largura, swipe horizontal troca de caso, e arrastar sobre a linha/handle controla o comparador — sem conflito entre os dois gestos.
- Teclado: setas navegáveis por Tab com rótulos acessíveis, e o comparador ajustável por setas do teclado; textos alternativos neutros ("Before dental result — Case 01").

## Copy

- Eyebrow: REAL PATIENT RESULTS
- Título: Smile Transformations
- Subtítulo: Explore real before-and-after results and see how personalized cosmetic dentistry can transform a smile while preserving a natural, balanced appearance.

Sem nomes de pacientes, tratamentos, datas ou histórias clínicas.

## Detalhes técnicos

- Upload das 8 imagens via `lovable-assets`, com ponteiros `.asset.json` em `src/assets/`; nova lista `smileCases` em `src/config/clinic.ts` (caseNumber, beforeImage, afterImage) substituindo `beforeAfter`.
- `src/components/landing/BeforeAfter.tsx` reescrito mantendo `id="transformations"`, `SectionHeader` e os tokens do Design System existentes; dividido em `BeforeAfterCarousel`, `BeforeAfterCase` e `BeforeAfterSlider` dentro da pasta `landing/`.
- Proporção preservada com `object-cover` em contêiner de aspecto fixo (4:3 no mobile, 16:9 acima), sem crop agressivo; `loading="lazy"` fora do primeiro caso.
- Nenhuma outra seção, rota ou token é alterada.

## Verificação

Revisão com navegador em desktop, tablet e mobile: arraste do comparador, setas, swipe, alinhamento, transições e ausência de rolagem horizontal.
