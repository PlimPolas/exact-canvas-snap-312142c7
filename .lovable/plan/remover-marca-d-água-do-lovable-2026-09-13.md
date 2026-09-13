# Remover marca d'água do Lovable

## O que será feito
1. Esconder o badge "Edit with Lovable" que aparece no site publicado via configuração de publicação.
2. Remover as referências visíveis a "Lovable" no `<head>` da página (`author` e `twitter:site` no `src/routes/__root.tsx`).

## Detalhes técnicos
- A configuração de publicação (`publish_settings--set_badge_visibility`) controla o badge no canto inferior direito do site publicado.
- Esconder o badge requer um plano Pro ou superior. O projeto atual está no plano Lite, então a ação pode ser bloqueada por limitação de plano.
- As referências em metadados (`<meta name="author" content="Lovable">` e `<meta name="twitter:site" content="@Lovable">`) serão removidas do `src/routes/__root.tsx` para não exibir a marca no código-fonte da página.

## Fora do escopo
- Não alterar estrutura, layout, Design System, responsividade ou outras seções do site.
- Não remover arquivos internos de telemetria/erros da Lovable (`src/lib/lovable-error-reporting.ts`, `vite.config.ts`), pois não são visíveis ao visitante.

## Resultado esperado
- O site publicado não exibe mais o badge "Edit with Lovable" (se o plano permitir).
- Os metadados da página não mencionam mais "Lovable".
