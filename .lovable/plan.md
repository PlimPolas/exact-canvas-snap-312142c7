# Subir repositório exact-canvas-snap para o projeto

## Objetivo
Traz o código da landing page "Instituto Oral Premium" do repositório GitHub `PlimPolas/exact-canvas-snap` para dentro do projeto Lovable atual, substituindo o template em branco.

## O que foi detectado no repositório fonte
- Aplicativo TanStack Start v1 + Tailwind CSS v4 + shadcn/ui, igual ao projeto destino.
- Uma única página (`/`) com landing page completa de clínica odontológica.
- Componentes em `src/components/landing/*` e configuração central em `src/config/clinic.ts`.
- Assets locais: fotos da equipe, infraestrutura, antes/depois e poster do hero.
- Vídeo do hero referencia um asset hospedado no Lovable (`hero-video.mp4.asset.json`) que não existe no novo projeto.
- Sem banco de dados, sem autenticação, sem variáveis de ambiente e sem APIs backend.
- O formulário de agendamento apenas abre conversa no WhatsApp — não persiste dados.

## Passos de implementação

1. **Copiar arquivos fonte**
   - `src/components/landing/*` → `src/components/landing/`
   - `src/config/clinic.ts` → `src/config/clinic.ts`
   - `src/assets/*` → `src/assets/`
   - `public/favicon.png` → `public/favicon.png`
   - `src/routes/index.tsx` → `src/routes/index.tsx`
   - `src/routes/__root.tsx` → `src/routes/__root.tsx`
   - `src/styles.css` → `src/styles.css`

2. **Sincronizar arquivos de configuração base**
   - Comparar e, se necessário, atualizar `package.json`, `vite.config.ts`, `src/router.tsx`, `src/server.ts`, `src/start.ts` para refletir o repositório fonte.

3. **Resolver o vídeo do hero**
   - O asset original `hero-video.mp4` não estará disponível no novo projeto.
   - Substituir o `<video>` por uma imagem estática usando `hero-poster.jpg` como fundo do hero, mantendo o overlay e os controles de áudio/pausa serão removidos (não fazem sentido sem vídeo).

4. **Ajustar metadados da raiz**
   - Manter título, descrição, JSON-LD e tags OG da clínica no `src/routes/index.tsx`.
   - Manter fonts e favicon configurados em `src/routes/__root.tsx`.

5. **Verificar e ajustar o design system**
   - O `styles.css` do repositório fonte usa tokens hex. Manter como está, pois o build do Tailwind v4 aceita o formato e a identidade visual depende desses valores.

6. **Build e preview**
   - Rodar build para garantir que não há erros de importação ou tipagem.
   - Verificar visualmente a página no preview.

## Fora do escopo / não aplicável
- Não há dados de backend para migrar.
- Não há autenticação ou provedores externos.
- Não há variáveis de ambiente ou secrets.

## Critério de conclusão
O projeto deixa de renderizar o placeholder em branco e passa a exibir a landing page da clínica completa, com imagens, formulário de agendamento via WhatsApp e todas as seções funcionando no preview.
