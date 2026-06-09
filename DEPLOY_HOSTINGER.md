# Deploy na Hostinger - Clínica Estética Luciene Vieira

## Arquivos Prontos para Upload

Os arquivos de produção estão na pasta: `frontend/dist/`

## Passo a Passo para Deploy na Hostinger

### 1. Acesse o Painel da Hostinger

1. Faça login em: https://www.hostinger.com.br/
2. Vá para o painel de controle (hPanel)
3. Selecione o domínio onde deseja hospedar o site

### 2. Acesse o Gerenciador de Arquivos

1. No painel, clique em **"Gerenciador de Arquivos"** ou **"File Manager"**
2. Navegue até a pasta `public_html` (essa é a pasta raiz do seu site)

### 3. Limpe a Pasta public_html (se necessário)

1. Se houver arquivos antigos na pasta `public_html`, delete-os primeiro
2. Mantenha apenas arquivos importantes como `.htaccess` (se existir)

### 4. Faça Upload dos Arquivos

**Opção A - Via Gerenciador de Arquivos:**
1. Clique em **"Upload"** no gerenciador de arquivos
2. Faça upload de TODOS os arquivos e pastas da pasta `frontend/dist/`:
   - `index.html`
   - `favicon.jpg`
   - `favicon.png`
   - `hero-image.jpg`
   - `hero-video.mp4`
   - `vite.svg`
   - Pasta `assets/` (com todos os arquivos dentro)

**Opção B - Via FTP (Recomendado para arquivos grandes):**
1. Use um cliente FTP como FileZilla
2. Credenciais FTP:
   - Host: `ftp.seudominio.com.br`
   - Usuário: (fornecido pela Hostinger)
   - Senha: (fornecido pela Hostinger)
   - Porta: 21
3. Conecte e faça upload de todos os arquivos para `public_html`

### 5. Estrutura Final na Hostinger

```
public_html/
├── index.html
├── favicon.jpg
├── favicon.png
├── hero-image.jpg
├── hero-video.mp4
├── vite.svg
└── assets/
    ├── index-BsMbsskR.css
    ├── index-Uo1ZeZU3.js
    └── imgs/
        ├── Imagem do WhatsApp de 2025-11-24 à(s) 21.35.32_623c4a81.jpg
        ├── Imagem do WhatsApp de 2025-11-24 à(s) 21.35.32_5e79a01d.jpg
        ├── ... (todas as outras imagens)
```

### 6. Configure o Domínio (se necessário)

Se você tem um domínio próprio:
1. Vá em **"Domínios"** no painel
2. Aponte o domínio para a pasta `public_html`
3. Aguarde a propagação DNS (pode levar até 24h, mas geralmente é rápido)

### 7. Teste o Site

1. Acesse seu domínio no navegador
2. Exemplo: `https://seudominio.com.br`
3. Verifique se:
   - O site carrega corretamente
   - As imagens aparecem
   - O vídeo de fundo funciona
   - O menu funciona
   - Todos os textos estão corretos

### 8. Configuração SSL/HTTPS (Recomendado)

1. No painel da Hostinger, vá em **"SSL"**
2. Ative o SSL gratuito (Let's Encrypt)
3. Aguarde alguns minutos para ativar
4. Force o redirecionamento HTTPS editando ou criando o arquivo `.htaccess`:

```apache
# .htaccess
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Informações Importantes

- **Tamanho do vídeo:** 15.5 MB (hero-video.mp4)
- **Total de arquivos:** Aproximadamente 16 MB
- **Tecnologia:** Site estático HTML/CSS/JavaScript (React compilado)
- **Compatibilidade:** Funciona em qualquer servidor web

## Solução de Problemas

### Problema: Site mostra página em branco
**Solução:** Verifique se o arquivo `index.html` está na raiz da pasta `public_html`

### Problema: Imagens não carregam
**Solução:** Verifique se a pasta `assets/` foi enviada corretamente com todas as subpastas

### Problema: Vídeo não reproduz
**Solução:**
- Verifique se o arquivo `hero-video.mp4` foi enviado completamente
- Alguns navegadores bloqueiam autoplay de vídeos - isso é normal

### Problema: CSS não carrega (site sem estilos)
**Solução:** Certifique-se de que a pasta `assets/` com o arquivo CSS foi enviada

## Contato e Suporte

Se precisar de ajuda:
1. Suporte Hostinger: https://www.hostinger.com.br/suporte
2. Documentação: https://support.hostinger.com/pt-br/

## Atualizações Futuras

Para atualizar o site:
1. Faça as alterações no código local
2. Execute: `npm run build` na pasta `frontend`
3. Substitua os arquivos na pasta `public_html` pelos novos da pasta `dist`

---

**Site pronto para deploy!** 🚀

Informações do site:
- Nome: Clínica Estética Luciene Vieira
- Localização: Vila Velha - ES
- Endereço: Rua Carolina Leal 289, Edifício Dom Bosco, sala 202
- Telefone: (37) 99809-1161
