# Cursor — Git Guardrails (User Rules)

## Como usar

1. Abra o Cursor
2. Pressione Ctrl+Shift+J (Windows) ou Cmd+Shift+J (Mac) → Cursor Settings
3. Clique em "Rules" no menu lateral
4. Cole TODO o texto abaixo no campo "User Rules"
5. Clique em Save

---

# Git & GitHub — Regras Globais Obrigatórias
# Aplicam-se a TODOS os projetos automaticamente.

## PERFIL DO USUÁRIO
O usuário é engenheiro de telecomunicações sem experiência prévia com Git.
Nunca assuma que ele sabe o que um comando Git faz.
Sempre explique em linguagem simples o que está sendo executado e por quê.

## GIT WORKFLOW — SEQUÊNCIA COMPLETA OBRIGATÓRIA

Toda vez que o usuário pedir para "salvar", "enviar", "publicar",
"mandar pro GitHub", "atualizar", "fazer upload" ou qualquer variação,
execute SEMPRE esta sequência completa, sem pular nenhuma etapa:

PASSO 1 — Verificar situação atual:
  git status

PASSO 2 — Baixar atualizações do GitHub antes de qualquer mudança:
  git pull origin <branch-atual>

PASSO 3 — Realizar as mudanças solicitadas pelo usuário

PASSO 4 — Preparar os arquivos para envio:
  git add -A

PASSO 5 — Mostrar ao usuário o que será enviado:
  git status

PASSO 6 — Registrar as mudanças localmente:
  git commit -m "<type>: <descrição clara do que foi feito>"

PASSO 7 — Enviar para o GitHub:
  git push origin <branch-atual>

PASSO 8 — Confirmar que chegou:
  git log --oneline -3

Após o passo 8, informe ao usuário em linguagem simples:
"Pronto! Seu código foi salvo no GitHub com sucesso.
 Últimos envios: [mostrar resultado do git log]"

## REGRAS DE OURO — NUNCA VIOLE

- NUNCA execute apenas git commit sem git push logo em seguida.
  Commit sem push = código só no computador local, não no GitHub.

- NUNCA execute git push --force sem aprovação explícita do usuário
  e sem explicar claramente o que isso faz.

- NUNCA inicie edições sem antes executar git pull.
  Editar sem pull = risco de conflito e perda de trabalho.

- SEMPRE confirme ao usuário que o push foi concluído com sucesso.

## SEGURANÇA — ARQUIVOS QUE JAMAIS PODEM IR AO GITHUB

Se qualquer um dos arquivos abaixo for adicionado ao staging ou
se o usuário pedir para commitá-los, RECUSE imediatamente:

  .env          → contém senhas e configurações secretas
  .env.*        → qualquer variação de .env
  *.key         → chaves de criptografia
  *.pem         → certificados e chaves privadas
  *.p12         → certificados digitais
  *secret*      → qualquer arquivo com "secret" no nome
  *password*    → qualquer arquivo com "password" no nome
  *token*       → qualquer arquivo com "token" no nome
  *credential*  → qualquer arquivo com "credential" no nome

Quando recusar, explique ao usuário:
"Não posso enviar esse arquivo para o GitHub porque ele pode conter
 informações confidenciais como senhas ou chaves de acesso.
 Se essas informações chegarem ao GitHub, robôs as encontram em
 menos de 1 minuto e podem usar para acessar sistemas indevidamente."

Em seguida, verifique se o arquivo está no .gitignore do projeto.
Se não estiver, adicione automaticamente.

## FORMATO DE MENSAGEM DE COMMIT

Use sempre o padrão Conventional Commits:
  <tipo>: <descrição curta do que foi feito>

Tipos obrigatórios:
  feat     → quando adiciona algo novo ao projeto
  fix      → quando corrige um problema
  docs     → quando altera documentação ou README
  refactor → quando reorganiza o código sem mudar o que ele faz
  chore    → quando faz manutenção, atualiza dependências
  test     → quando adiciona ou corrige testes

Exemplos corretos:
  feat: adiciona leitura de arquivo XML de configuração ENB
  fix: corrige erro de encoding ao exportar relatório
  docs: adiciona instruções de instalação no README
  chore: atualiza versão da biblioteca pandas

Exemplos PROIBIDOS — nunca gere mensagens assim:
  "update", "mudanças", "ajustes", "fix", "wip", "alterações",
  "atualizações", "changes", "misc", "stuff", "test"

## EXPLICAÇÕES OBRIGATÓRIAS

Sempre que executar um comando Git, explique ao usuário o que está
acontecendo em linguagem simples. Exemplos:

- "Estou verificando se há atualizações no GitHub..."
- "Estou preparando seus arquivos para envio..."
- "Estou registrando as mudanças com uma descrição..."
- "Estou enviando seu código para o GitHub agora..."
- "Confirmado! Seu código está salvo no GitHub."

Nunca execute um comando Git em silêncio sem explicar o que faz.

## SE ALGO DER ERRADO

Se qualquer comando Git retornar um erro:
1. PARE imediatamente — não tente executar o próximo passo
2. Explique o erro em linguagem simples, sem termos técnicos
3. Diga exatamente o que o usuário deve fazer para resolver
4. Aguarde confirmação antes de continuar

Exemplos de tradução de erros:
- "rejected" → "O GitHub recusou o envio porque há mudanças lá
   que você ainda não baixou. Vou baixar primeiro e tentar novamente."
- "merge conflict" → "Há mudanças conflitantes entre seu computador
   e o GitHub. Vou te mostrar onde estão e como resolver."
- "not a git repository" → "Esta pasta ainda não está configurada
   como um projeto Git. Vou configurar agora."
