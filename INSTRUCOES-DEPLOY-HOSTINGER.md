# Instruções de Deploy para Hostinger

## 📦 Arquivos Prontos para Upload

Todos os arquivos estão na pasta: `C:\Users\StorTech\estetica-site\frontend\dist\`

## 🚀 Passo a Passo para Deploy

### 1. Acessar o Painel da Hostinger

1. Faça login no painel da Hostinger
2. Vá em **Hospedagem** > Seu domínio
3. Clique em **Gerenciador de Arquivos** ou use FTP

### 2. Localizar a Pasta Correta

- A pasta de destino geralmente é: `public_html`
- Se você tem subdomínio, pode ser: `public_html/nomedosubdominio`

### 3. Upload dos Arquivos

**IMPORTANTE:** Envie TODOS os arquivos e pastas de `dist\`:

```
dist/
├── .htaccess              ✅ MUITO IMPORTANTE!
├── index.html             ✅ Página principal
├── favicon.jpg            ✅ Ícone do site
├── favicon.png            ✅ Ícone do site
├── hero-image.jpg         ✅ Imagem principal
├── hero-video.mp4         ✅ Vídeo de fundo
├── vite.svg               ✅ Ícone Vite
└── assets/
    ├── imgs/              ✅ Todas as imagens
    ├── index-DIJ5V6VL.css ✅ Estilos
    └── index-nQtmpHaK.js  ✅ JavaScript
```

### 4. Métodos de Upload

#### Opção A: Gerenciador de Arquivos (Mais Fácil)
1. Abra o Gerenciador de Arquivos
2. Navegue até `public_html`
3. **Delete TODOS os arquivos antigos** (se houver)
4. Clique em **Upload**
5. Selecione TODOS os arquivos da pasta `dist\`
6. Aguarde o upload completar

#### Opção B: FTP (FileZilla)
1. Baixe e instale o FileZilla
2. Configure a conexão:
   - **Host:** ftp.seudominio.com
   - **Usuário:** seu_usuario_ftp
   - **Senha:** sua_senha_ftp
   - **Porta:** 21
3. Conecte-se
4. Navegue até `public_html` (lado direito)
5. Arraste TODOS os arquivos de `dist\` (lado esquerdo)

### 5. Verificações Importantes

Após o upload, verifique:

✅ O arquivo `.htaccess` está na raiz (junto com index.html)
✅ A pasta `assets` está completa
✅ Todos os arquivos foram enviados
✅ Permissões dos arquivos:
   - Arquivos: 644
   - Pastas: 755

### 6. Testar o Site

1. Acesse seu domínio no navegador
2. Limpe o cache do navegador (Ctrl + Shift + Delete)
3. Teste a navegação
4. Teste no celular/iPhone

**No iPhone:**
- Abra Safari
- Vá em Ajustes > Safari > Limpar Histórico e Dados
- Acesse seu site

## 🔧 Configurações do Apache (.htaccess)

O arquivo `.htaccess` já está configurado com:
- ✅ Redirecionamento para SPA (React Router)
- ✅ Cache de arquivos estáticos
- ✅ Compressão GZIP
- ✅ Segurança básica

## ⚠️ Problemas Comuns

### Site mostra página em branco
- Verifique se o arquivo `.htaccess` está presente
- Verifique se o módulo `mod_rewrite` está habilitado no Apache

### Imagens não aparecem
- Verifique se a pasta `assets/imgs` foi enviada completa
- Limpe o cache do navegador

### Rotas não funcionam (erro 404)
- Certifique-se de que o `.htaccess` está na raiz
- Verifique se o `mod_rewrite` está ativo

### Vídeo não carrega
- O arquivo `hero-video.mp4` tem 15MB, verifique se foi enviado completamente
- Alguns servidores limitam upload, pode precisar enviar via FTP

## 📱 Mobile (iPhone)

O site está otimizado para iPhone com:
- ✅ Menu mobile responsivo
- ✅ Imagem hero acima do texto
- ✅ Botão WhatsApp em destaque
- ✅ Fundo colorido na barra de status
- ✅ Layout compacto e organizado

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs de erro no painel da Hostinger
2. Entre em contato com o suporte da Hostinger
3. Verifique se todos os arquivos foram enviados corretamente

## ✅ Checklist Final

- [ ] Todos os arquivos da pasta `dist\` foram enviados
- [ ] Arquivo `.htaccess` está na raiz
- [ ] Pasta `assets` está completa
- [ ] Site abre corretamente no desktop
- [ ] Site abre corretamente no mobile/iPhone
- [ ] Navegação entre páginas funciona
- [ ] Imagens carregam corretamente
- [ ] Vídeo de fundo aparece
- [ ] Botão WhatsApp funciona
- [ ] Menu mobile abre e fecha

---

## 🎉 Pronto!

Seu site está pronto para ser publicado na Hostinger!

**Caminho dos arquivos:** `C:\Users\StorTech\estetica-site\frontend\dist\`
