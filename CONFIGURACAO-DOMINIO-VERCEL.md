# Configuração de Domínio clinicafarfalla.com.br na Vercel

## Informações do Domínio

- **Domínio Principal**: clinicafarfalla.com.br
- **Domínio com www**: www.clinicafarfalla.com.br
- **Plataforma**: Vercel
- **Projeto**: Farfalla Clínica Estética

## Configuração DNS

### Registros DNS Necessários

#### 1. Registro A (Domínio Principal)
- **Tipo**: A
- **Host**: @
- **Valor**: 216.198.79.1
- **TTL**: 3600 (ou padrão do registrador)

#### 2. Registro CNAME (Subdomínio www)
- **Tipo**: CNAME
- **Host**: www
- **Valor**: cname.vercel-dns.com
- **TTL**: 3600 (ou padrão do registrador)

## Configuração por Registrador

### Registro.br

Se o domínio estiver registrado no Registro.br:

1. Acesse [registro.br](https://registro.br)
2. Faça login com suas credenciais
3. Vá em "Meus Domínios"
4. Encontre "clinicafarfalla.com.br"
5. Clique em "Editar DNS"
6. Adicione os registros:

**Registro A:**
- Host: `@`
- Tipo: `A`
- Endereço IP: `216.198.79.1`

**Registro CNAME:**
- Host: `www`
- Tipo: `CNAME`
- Valor: `cname.vercel-dns.com`

7. Clique em "Salvar"

### GoDaddy

Se o domínio estiver na GoDaddy:

1. Acesse [godaddy.com](https://godaddy.com)
2. Faça login
3. Vá em "Meus Produtos" > "DNS"
4. Selecione "clinicafarfalla.com.br"
5. Adicione os registros conforme acima
6. Salve as alterações

### Outros Registradores

O processo é similar para outros registradores. Procure por:
- "Gerenciar DNS"
- "Editar DNS"
- "DNS Zone File"

## Configuração na Vercel

### 1. Adicionar Domínio

1. Acesse [vercel.com](https://vercel.com)
2. Entre no seu projeto
3. Vá em "Settings" > "Domains"
4. Clique em "Add Domain"
5. Digite: `clinicafarfalla.com.br`
6. Clique em "Add"

### 2. Configurar Redirecionamento (Opcional)

Para redirecionar clinicafarfalla.com.br para www.clinicafarfalla.com.br:

1. Na seção "Domains"
2. Clique no domínio `clinicafarfalla.com.br`
3. Configure o redirecionamento para `www.clinicafarfalla.com.br`

### 3. Verificar Configuração

Após configurar o DNS:

1. Aguarde a propagação DNS (pode levar de 5 minutos a 48 horas)
2. Na Vercel, verifique se o domínio aparece como "Valid Configuration"
3. O certificado SSL será gerado automaticamente

## Verificação

### Verificar Propagação DNS

Use um dos seguintes comandos para verificar se o DNS está propagado:

**Windows:**
```cmd
nslookup clinicafarfalla.com.br
nslookup www.clinicafarfalla.com.br
```

**Mac/Linux:**
```bash
dig clinicafarfalla.com.br
dig www.clinicafarfalla.com.br
```

### Verificar Online

- [DNSChecker](https://dnschecker.org)
- [WhatsMyDNS](https://www.whatsmydns.net)

## Troubleshooting

### Domínio Não Funciona

1. **Verifique os registros DNS**
   - Confirme que os registros estão corretos
   - Verifique se não há registros conflitantes

2. **Aguarde propagação**
   - DNS pode levar até 48 horas para propagar
   - Geralmente leva entre 5-30 minutos

3. **Verifique status na Vercel**
   - O domínio deve aparecer como "Valid Configuration"
   - Se aparecer erro, verifique os registros DNS

### Certificado SSL Não Gerado

1. **Verifique DNS**
   - O certificado só é gerado após validação DNS
   - Aguarde propagação completa

2. **Force regeneração**
   - Na Vercel, vá em "Domains"
   - Clique no domínio
   - Clique em "Regenerate Certificate"

### Erro 404

1. **Verifique vercel.json**
   - O arquivo deve estar na raiz do projeto
   - Confirme as regras de rewrite

2. **Re-deploy**
   - Faça um novo deploy após configurar o domínio

## Segurança

### HTTPS

A Vercel configura automaticamente:
- Certificado SSL gratuito (Let's Encrypt)
- Redirecionamento automático HTTP → HTTPS
- Renovação automática do certificado

### Headers de Segurança

O arquivo vercel.json já inclui configurações básicas. Para headers adicionais, adicione:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Manutenção

### Renovação de Domínio

- Lembre-se de renovar o domínio anualmente
- Configure alertas de renovação
- Mantenha os dados de contato atualizados

### Monitoramento

- Use o analytics da Vercel para monitorar performance
- Configure alertas de uptime
- Monitore o tráfego e erros

## Suporte

### Vercel
- Documentação: [vercel.com/docs](https://vercel.com/docs)
- Suporte: [vercel.com/support](https://vercel.com/support)

### Registro.br
- Suporte: [registro.br/atendimento](https://registro.br/atendimento)
- Telefone: 0800 701 9300

## Checklist de Configuração

- [ ] Domínio adquirido e configurado
- [ ] Registros DNS configurados corretamente
- [ ] Domínio adicionado na Vercel
- [ ] DNS propagado (verificado com nslookup/dig)
- [ ] Certificado SSL gerado
- [ ] Site acessível via clinicafarfalla.com.br
- [ ] Site acessível via www.clinicafarfalla.com.br
- [ ] Redirecionamento HTTPS funcionando
- [ ] Analytics configurado (opcional)
- [ ] Alertas de renovação configurados
