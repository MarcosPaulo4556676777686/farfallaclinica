# Guia de Deploy - Hostinger

Este guia explica como fazer o deploy do site de estética no Hostinger.

## Pré-requisitos

- Conta ativa no Hostinger
- Acesso ao painel de controle (hPanel)
- Cliente FTP (FileZilla, WinSCP, ou use o File Manager do Hostinger)

## Arquivos Prontos para Deploy

Os arquivos de produção estão localizados em:
```
C:\Users\StorTech\estetica-site\frontend\dist\
```

## Passo a Passo para Deploy

### 1. Preparação dos Arquivos

Todos os arquivos necessários já estão na pasta `frontend/dist/`:
- `index.html` - Arquivo HTML principal (com SEO otimizado)
- `assets/` - CSS, JavaScript e outros assets
- `.htaccess` - Configuração do servidor (incluso)

### 2. Acesso ao Hostinger

**Opção A: Via File Manager (Recomendado para iniciantes)**

1. Faça login no [Hostinger](https://www.hostinger.com.br/)
2. Vá para o painel hPanel
3. Localize a seção "Arquivos" e clique em "Gerenciador de Arquivos"
4. Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)

**Opção B: Via FTP**

1. No hPanel, vá para "Arquivos" > "Contas FTP"
2. Anote as credenciais FTP:
   - Host: geralmente seu domínio ou ftp.seudominio.com
   - Usuário: fornecido pelo Hostinger
   - Senha: a que você configurou
   - Porta: 21

### 3. Upload dos Arquivos

**Via File Manager:**
1. Limpe todo o conteúdo existente em `public_html` (ou faça backup primeiro)
2. Clique em "Upload" no canto superior direito
3. Selecione TODOS os arquivos da pasta `dist/`:
   - `index.html`
   - `.htaccess`
   - Pasta `assets/` completa
4. Aguarde o upload completar

**Via FTP (FileZilla):**
1. Conecte-se usando as credenciais FTP
2. No painel esquerdo, navegue até a pasta `dist/` local
3. No painel direito, navegue até `public_html/`
4. Arraste todos os arquivos e pastas de `dist/` para `public_html/`

### 4. Verificação Importante

Após o upload, verifique se a estrutura está assim:
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-CHXO0j1y.css
    └── index-B5QPlEuB.js
```

**IMPORTANTE:** Os arquivos devem estar DIRETAMENTE em `public_html/`, não em uma subpasta `dist/`.

### 5. Configurações Adicionais do Hostinger

#### A. Verificar PHP (se necessário)
1. No hPanel, vá para "Avançado" > "Configuração PHP"
2. Recomendado: PHP 8.0 ou superior (embora este seja um site React puro)

#### B. SSL/HTTPS (Recomendado)
1. No hPanel, vá para "Segurança" > "SSL"
2. Ative o SSL gratuito (Let's Encrypt)
3. Aguarde 15-30 minutos para ativação
4. Após ativo, descomente as linhas de HTTPS no `.htaccess`:
   ```apache
   # Remova o # das linhas abaixo:
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

#### C. Cache e Performance
O arquivo `.htaccess` já inclui:
- Compressão Gzip
- Cache de navegador
- Headers de segurança

### 6. Teste do Site

1. Acesse seu domínio: `https://seudominio.com`
2. Verifique:
   - [ ] Site carrega corretamente
   - [ ] Navegação funciona (React Router)
   - [ ] CSS e imagens aparecem
   - [ ] Botão WhatsApp funciona
   - [ ] Site responsivo no mobile

### 7. Configuração de Domínio (se novo)

Se você acabou de registrar o domínio:
1. No hPanel, vá para "Domínios"
2. Aponte o domínio para a pasta `public_html`
3. Aguarde propagação DNS (pode levar até 24h, geralmente 2-4h)

## Atualizações Futuras

Para atualizar o site:

1. Faça modificações no código fonte
2. Execute o build:
   ```bash
   cd C:\Users\StorTech\estetica-site\frontend
   npm run build
   ```
3. Faça upload dos novos arquivos da pasta `dist/` para `public_html/`
4. Substitua os arquivos existentes

## Solução de Problemas

### Erro 404 ao navegar
- Verifique se o arquivo `.htaccess` está presente
- Confirme que o mod_rewrite está ativo (geralmente já está no Hostinger)

### CSS/JS não carregam
- Verifique se a pasta `assets/` foi enviada corretamente
- Limpe o cache do navegador (Ctrl + Shift + Delete)

### Site não aparece
- Verifique se os arquivos estão em `public_html/` e não em uma subpasta
- Confirme que o domínio está apontando corretamente

### Página em branco
- Abra o console do navegador (F12) para ver erros
- Verifique se o JavaScript está carregando

## Contato e Suporte

- Suporte Hostinger: https://www.hostinger.com.br/contato
- Documentação Hostinger: https://support.hostinger.com/

## Checklist Final

Antes de considerar o deploy concluído:

- [ ] Todos os arquivos da pasta `dist/` foram enviados
- [ ] Arquivo `.htaccess` está presente
- [ ] Site abre no navegador
- [ ] Navegação funciona (não dá erro 404)
- [ ] SSL/HTTPS está ativo
- [ ] Site funciona em dispositivos móveis
- [ ] Botão WhatsApp funciona
- [ ] Todos os links e funcionalidades testados

## Informações Técnicas

**Tecnologias:**
- React 19.2.0
- Vite 7.2.4
- React Router DOM 7.9.6
- Framer Motion 12.23.24

**Otimizações Incluídas:**
- Build minificado e otimizado
- Gzip compression
- Browser caching
- Security headers
- SEO meta tags
- Open Graph tags

**Tamanho do Build:**
- HTML: 1.64 kB (gzip: 0.64 kB)
- CSS: 27.53 kB (gzip: 5.83 kB)
- JS: 364.11 kB (gzip: 118.59 kB)

---

**Data de criação:** 2025-11-20
**Status:** Pronto para produção
