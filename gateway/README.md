# Housi Condo - Microservices

## Quick start

1. Copie `.env.example` para `.env` e preencha com os valores das suas variaveis de ambiente.

2. Gerar documentação do swagger:

> Para Instalar `swag`:

```bash
go install github.com/swaggo/swag/cmd/swag@latest && swag init  --output swagger/
```

3. Para utilizar um live reload na aplicação, baixe o pacote `air`.

> Para Instalar `air`:

```bash
go install github.com/cosmtrek/air@latest
```

4. Para executar o live reload:

```bash
air run .
```
