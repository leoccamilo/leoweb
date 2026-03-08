# Claude Code (VSCode) — Git Guardrails

## Como usar

1. Abra o VSCode
2. Abra o terminal integrado (Ctrl+` ou Ctrl+J)
3. Digite: claude
4. Aguarde o Claude Code iniciar
5. Cole TODO o texto abaixo e pressione Enter

---

Preciso que você configure regras globais de Git para que sejam aplicadas
automaticamente em todos os meus projetos no VSCode.

Execute os seguintes passos na ordem:

**PASSO 1 — Verifique se a pasta global do Claude existe:**

No Mac/Linux:
  ls ~/.claude/

No Windows:
  dir %USERPROFILE%\.claude\

Se a pasta não existir, crie-a:
  Mac/Linux: mkdir -p ~/.claude
  Windows:   mkdir %USERPROFILE%\.claude

---

**PASSO 2 — Crie o arquivo de regras globais:**

Crie o arquivo `CLAUDE.md` dentro dessa pasta com o seguinte conteúdo:

---

# Regras Globais — Git & GitHub
# Aplicam-se automaticamente a todos os projetos.

## PERFIL DO USUÁRIO
Sou engenheiro de telecomunicações. Não tenho experiência com Git.
Sempre explique em linguagem simples o que cada comando faz.
Nunca assuma que sei o que um termo técnico de Git significa.

## GIT WORKFLOW — SEQUÊNCIA OBRIGATÓRIA

Quando eu pedir para "salvar", "enviar", "mandar pro GitHub",
"fazer push", "atualizar" ou qualquer variação, execute SEMPRE:

1. git status
   → Diga: "Verificando o estado atual do projeto..."

2. git pull origin $(git branch --show-current)
   → Diga: "Baixando atualizações do GitHub antes de continuar..."

3. (realizar as mudanças solicitadas)

4. git add -A
   → Diga: "Preparando todos os arquivos modificados para envio..."

5. git status
   → Mostre ao usuário o que será enviado.

6. git commit -m "<type>: <descrição>"
   → Diga: "Registrando as mudanças localmente com uma descrição..."

7. git push origin $(git branch --show-current)
   → Diga: "Enviando seu código para o GitHub agora..."

8. git log --oneline -3
   → Mostre e diga: "Pronto! Código salvo no GitHub com sucesso."

## REGRAS INVIOLÁVEIS

- NUNCA faça commit sem fazer push logo em seguida.
  Commit sem push = código só no computador, não no GitHub.

- NUNCA edite arquivos sem fazer git pull antes.

- NUNCA use git push --force sem explicar o risco ao usuário.

- SEMPRE confirme visualmente que o push foi concluído.

## SEGURANÇA — ARQUIVOS PROIBIDOS NO GIT

NUNCA adicione ao staging ou commit:
  .env .env.* *.key *.pem *.p12 *.pfx *.cer
  *secret* *password* *token* *credential*
  config/secrets.* auth.json auth.yaml

Se o usuário pedir para commitar esses arquivos:
1. RECUSE
2. Explique: "Esse arquivo pode conter senhas ou chaves de acesso.
   Se for para o GitHub, robôs encontram em menos de 1 minuto."
3. Adicione ao .gitignore do projeto automaticamente

## FORMATO DE COMMIT — Conventional Commits

Formato: <tipo>: <descrição curta>

  feat     → algo novo foi adicionado
  fix      → um problema foi corrigido
  docs     → documentação foi alterada
  refactor → código reorganizado sem mudar o que faz
  chore    → manutenção e dependências
  test     → testes adicionados ou corrigidos

Exemplos:
  feat: adiciona parser de arquivo XML ENB
  fix: corrige encoding UTF-8 no relatório
  docs: atualiza README com passos de instalação

Proibido: "update", "fix", "ajustes", "changes", "wip"

## SE HOUVER ERRO

1. PARE — não execute o próximo passo
2. Traduza o erro para linguagem simples
3. Explique o que fazer para resolver
4. Aguarde minha confirmação para continuar

Traduções comuns:
  "rejected"       → "O GitHub recusou porque há mudanças lá
                      que você ainda não baixou. Vou resolver."
  "merge conflict" → "Há conflito entre seu PC e o GitHub.
                      Vou te mostrar como resolver."
  "not a git repo" → "Esta pasta ainda não é um projeto Git.
                      Vou configurar agora."

---

**PASSO 3 — Confirme que o arquivo foi criado:**

Mac/Linux:  cat ~/.claude/CLAUDE.md
Windows:    type %USERPROFILE%\.claude\CLAUDE.md

---

**PASSO 4 — Crie também o .gitignore global** para que arquivos sensíveis
sejam ignorados em TODOS os projetos do computador, mesmo que o projeto
não tenha um .gitignore próprio:

Mac/Linux:
  git config --global core.excludesfile ~/.gitignore_global

Windows:
  git config --global core.excludesfile %USERPROFILE%\.gitignore_global

Agora crie o arquivo com este conteúdo:

Mac/Linux: crie ~/.gitignore_global
Windows:   crie %USERPROFILE%\.gitignore_global

Conteúdo do arquivo:

  # Secrets — nunca commitar em nenhum projeto
  .env
  .env.*
  .env.local
  .env.production
  .env.staging
  *.key
  *.pem
  *.p12
  *.pfx
  *.cer
  *secret*
  *password*
  *token*
  *credential*
  config/secrets.*
  auth.json
  auth.yaml

  # Python
  __pycache__/
  *.py[cod]
  *.so
  venv/
  .venv/
  env/
  *.egg-info/
  dist/
  build/

  # IDEs
  .vscode/
  .idea/
  *.swp
  .DS_Store
  Thumbs.db

  # Logs
  *.log
  *.tmp
  logs/
  temp/
  tmp/

---

**PASSO 5 — Verifique se tudo está configurado:**

  git config --global core.excludesfile

Deve retornar o caminho do .gitignore_global que acabou de criar.

---

Confirme quando todos os passos estiverem concluídos e mostre
o resultado de cada verificação.
