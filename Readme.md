# Testes com Rest-API no Node

## Packages usados
> Nodemon (global), CORS e Body-Parser

### Implementação
Crie um arquivo package.json no lado do servidor:

```
create file package.json
```

Abra o arquivo criado e insira __{}__ antes de importar as bibliotecas abaixo.

## Instalando nodemon (servidor com atualização automática)
> Lado do servidor
```
npm install -g nodemon

cd ../Rest-api
nodemon index.js
```

Ctrl + C (Derruba o servidor)

## Remover CORS
> Lado do servidor
```
npm install --save cors
```

## Manipulação dos argumentos enviados por POST para o servidor
> Lado do servidor
```
npm install --save body-parser
```