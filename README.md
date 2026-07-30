<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Documentação do Projeto</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      color: #333;
    }

    h1, h2 {
      color: #222;
    }

    ul {
      margin-left: 20px;
    }

    .image-gallery {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .image-gallery img {
      width: 30%;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }

    .image-gallery img:hover {
      transform: scale(1.05);
    }

    .section {
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <h1>Conceitos do Node</h1>
  <p>CRUD com rotas GET, POST, PUT, DELETE</p>

  <h2>Exercício do DEV CLUB</h2>
  <div class="image-gallery">
    <img src="./img/Captura de tela 2026-07-29 212843.png" alt="Exemplo CRUD 1">
    <img src="./img/Captura de tela 2026-07-29 212911.png" alt="Exemplo CRUD 2">
  </div>

  <div class="section">
    <h1>AGENTS.md</h1>

    <h2>Visão geral</h2>
    <p>
      Este workspace é uma API Node.js com Express e Prisma usando MongoDB. 
      O ponto de entrada principal é <code>server.js</code> e o schema do Prisma fica em 
      <code>prisma/schema.prisma</code>.
    </p>

    <h2>Regras importantes</h2>
    <ul>
      <li>Mantenha o projeto em ESM. O pacote usa <code>"type": "module"</code> em <code>package.json</code>.</li>
      <li>Prefira <code>import</code>/<code>export</code> em vez de <code>require</code>.</li>
      <li>Não edite arquivos gerados em <code>generated/prisma</code> manualmente; eles são produzidos pelo Prisma.</li>
      <li>Se precisar alterar o schema do banco, atualize <code>prisma/schema.prisma</code> e regenere o cliente com o Prisma.</li>
      <li>A aplicação usa <code>DATABASE_URL</code>; mantenha segredos fora do repositório.</li>
    </ul>

    <h2>Comandos úteis</h2>
    <ul>
      <li>Instalar dependências: <code>npm install</code></li>
      <li>Iniciar o servidor em modo watch: <code>npm run dev</code></li>
      <li>O script <code>npm test</code> ainda está como placeholder e não deve ser tratado como cobertura real de testes.</li>
    </ul>

    <h2>Convenções do código</h2>
    <ul>
      <li>A API está organizada em rotas CRUD em <code>server.js</code>.</li>
      <li>As operações com banco devem usar <code>async/await</code> e o cliente Prisma.</li>
      <li>Preserve o comportamento das rotas existentes ao fazer alterações; o projeto é pequeno e as mudanças devem ser compatíveis.</li>
      <li>Para respostas HTTP, mantenha status codes coerentes: <code>200</code> para sucesso, <code>201</code> para criação e <code>404</code>/<code>500</code> apenas quando houver tratamento explícito.</li>
    </ul>

    <h2>Configurações do workspace</h2>
    <ul>
      <li>As configurações do VS Code ficam em <code>.vscode/settings.json</code>.</li>
      <li>Se for editar configurações JSON, mantenha o formato compacto e sem alterações desnecessárias.</li>
      <li>O projeto já usa a configuração <code>prisma.pinToPrisma6</code> para manter compatibilidade com a versão do Prisma.</li>
    </ul>

    <h2>Quando editar</h2>
    <ul>
      <li>Priorize mudanças pequenas e locais.</li>
      <li>Se a tarefa envolver Prisma, verifique primeiro o schema e o uso do cliente no código.</li>
      <li>Ao adicionar novas rotas ou modelos, mantenha nomes em português/consistentes com o contexto atual do projeto.</li>
    </ul>
  </div>
</body>
</html>
