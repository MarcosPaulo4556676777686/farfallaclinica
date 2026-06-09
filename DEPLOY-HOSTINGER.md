# Guia de Deploy para Hostinger

## Arquivos para Upload

Todos os arquivos necessários estão na pasta: `frontend/dist/`

## Passo a Passo

### 1. Acesse o Painel da Hostinger
- Entre em hpanel.hostinger.com
- Faça login com suas credenciais

### 2. Acesse o Gerenciador de Arquivos
- No painel, clique em "Gerenciador de Arquivos" (File Manager)
- Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)

### 3. Limpe a Pasta (se necessário)
- Delete todos os arquivos existentes em `public_html`
- Isso garante uma instalação limpa

### 4. Faça Upload dos Arquivos
- Clique em "Upload" no gerenciador de arquivos
- Selecione TODOS os arquivos da pasta `frontend/dist/`:
  - `index.html`
  - Pasta `assets/` (com todas as subpastas e arquivos)
  - Quaisquer outros arquivos gerados

**IMPORTANTE**: Mantenha a estrutura de pastas intacta!

### 5. Estrutura Final no Servidor
```
public_html/
├── index.html
└── assets/
    ├── imgs/
    │   └── (todas as imagens)
    ├── index-[hash].js
    └── index-[hash].css
```

### 6. Configuração de Rotas (Importante para React Router)

Crie um arquivo `.htaccess` na pasta `public_html` com o seguinte conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

Este arquivo garante que todas as rotas (como `/agendamento`, `/servicos`) funcionem corretamente.

### 7. Verificação

- Acesse seu domínio no navegador
- Teste todas as páginas:
  - Home (/)
  - Serviços (/servicos)
  - Agendamento (/agendamento)
  - Sobre (/sobre)
  - Contato (/contato)

## Solução de Problemas

### Imagens não aparecem
- Verifique se a pasta `assets/imgs/` foi enviada corretamente
- Confirme que as permissões estão corretas (644 para arquivos, 755 para pastas)

### Páginas dão erro 404
- Crie/verifique o arquivo `.htaccess` conforme instruções acima
- Certifique-se de que o módulo mod_rewrite está ativo (geralmente já está na Hostinger)

### Site não carrega
- Limpe o cache do navegador (Ctrl + Shift + Delete)
- Verifique se o arquivo `index.html` está na raiz do `public_html`

## Atualizações Futuras

Para atualizar o site:
1. Execute `npm run build` localmente
2. Delete os arquivos antigos em `public_html` (exceto `.htaccess`)
3. Faça upload dos novos arquivos da pasta `dist/`

## Otimizações Adicionais (Opcional)

### Compressão GZIP
A Hostinger geralmente já tem GZIP habilitado. Para verificar, adicione ao `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Cache do Navegador
Adicione ao `.htaccess` para melhorar performance:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Suporte

Se encontrar problemas, entre em contato com o suporte da Hostinger através do chat ao vivo no painel.
