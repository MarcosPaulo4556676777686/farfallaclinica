# Guia de Deploy para Vercel

## Configuração do Projeto

O projeto já está configurado para deploy na Vercel com o arquivo `vercel.json`.

## Passo a Passo para Deploy

### 1. Preparar o Repositório

Se ainda não tiver, crie um repositório no GitHub:

```bash
cd estetica-site
git init
git add .
git commit -m "Deploy inicial para Vercel"
```

Depois, crie um repositório no GitHub e conecte:

```bash
git remote add origin https://github.com/seu-usuario/estetica-site.git
git push -u origin main
```

### 2. Deploy na Vercel

#### Opção A: Através do Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Importe o repositório `estetica-site`
5. Configure as seguintes opções:
   - **Framework Preset**: Vite
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em "Deploy"

#### Opção B: Através da CLI

Instale a Vercel CLI:

```bash
npm install -g vercel
```

Faça o deploy:

```bash
cd estetica-site
vercel
```

Siga as instruções no terminal para configurar o projeto.

### 3. Configurar Domínio Customizado

#### Adicionar o Domínio

1. Após o deploy inicial, acesse o projeto na Vercel
2. Vá em "Settings" > "Domains"
3. Clique em "Add Domain"
4. Digite `clinicafarfalla.com.br`
5. Clique em "Add"

#### Configurar DNS

Você precisará configurar os registros DNS no seu registrador de domínio:

**Para o domínio principal:**
- Tipo: `A`
- Nome: `@`
- Valor: `76.76.21.21`

**Para www:**
- Tipo: `CNAME`
- Nome: `www`
- Valor: `cname.vercel-dns.com`

#### Configurar DNS no Registro.br (se for o caso)

Se o domínio estiver registrado no Registro.br:

1. Acesse o painel do Registro.br
2. Vá em "Meus Domínios" > "clinicafarfalla.com.br"
3. Clique em "Editar DNS"
4. Adicione os registros:
   - **Registro A**: 
     - Host: `@`
     - Tipo: `A`
     - Endereço IP: `76.76.21.21`
   - **Registro CNAME**:
     - Host: `www`
     - Tipo: `CNAME`
     - Valor: `cname.vercel-dns.com`

5. Salve as alterações

### 4. Configurar HTTPS

A Vercel configura automaticamente certificados SSL para domínios customizados. Após configurar o DNS, aguarde alguns minutos para que o certificado seja gerado.

### 5. Variáveis de Ambiente (Opcional)

Se precisar configurar variáveis de ambiente:

1. Vá em "Settings" > "Environment Variables"
2. Adicione as variáveis necessárias
3. Re-deploy o projeto

### 6. Atualizações Futuras

Para fazer atualizações:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

A Vercel fará automaticamente o deploy das mudanças.

## Solução de Problemas

### Deploy Falha

- Verifique se o arquivo `vercel.json` está na raiz do projeto
- Confirme que o comando de build está correto
- Verifique os logs de deploy na Vercel

### Domínio Não Funciona

- Verifique se os registros DNS estão configurados corretamente
- Aguarde até 48 horas para propagação DNS
- Confirme que o domínio está apontando para os servidores da Vercel

### Erro 404 em Rotas

O arquivo `vercel.json` já está configurado para lidar com rotas do React Router. Se ainda tiver problemas, verifique se o arquivo existe e está configurado corretamente.

### Imagens Não Carregam

- Verifique se a pasta `services/` está sendo copiada para o build
- Confirme que as imagens estão no caminho correto
- Verifique os caminhos no código

## Benefícios da Vercel

- **Deploy Automático**: Cada push no GitHub dispara um novo deploy
- **HTTPS Gratuito**: Certificados SSL automáticos
- **CDN Global**: Distribuição global de conteúdo
- **Preview Deployments**: Teste mudanças antes de produção
- **Analytics**: Métricas de uso e performance
- **Zero Config**: Configuração mínima necessária

## Suporte

Para problemas específicos da Vercel:
- Documentação: [vercel.com/docs](https://vercel.com/docs)
- Suporte: [vercel.com/support](https://vercel.com/support)

## Status Atual

✅ Projeto configurado para Vercel
✅ Build atualizado com mudanças recentes
✅ Arquivo vercel.json criado
⏳ Aguardando deploy inicial
⏳ Aguardando configuração de domínio customizado
