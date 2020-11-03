# TESTE E2E

PROJETO FEITO UTILIZANDO AS TECNOLOGIAS NODEJS E REACT. BANCO DE DADOS SQLITE3

Proposta do Projeto:
- Fazer uma aplicação que cria, e lista empresas e fornecedores.

## Utilização

Foi-se utilizado NodeJS para o backend da aplicação (em modo API RESTful) e React para o Frontend. Usou-se também o banco de dados SQLITE pela facilidade de implementação junto com o NodeJS

### RODANDO O PROJETO

##### Rodando o Frontend
``` yarn start ```

E então será aberto no seu navegador o caminho [http://localhost:3000](http://localhost:3000).

Infelizmente o Frontend não foi finalizado a tempo.

##### Rodando o Backend

``` yarn dev ```

O servidor NodeJS será iniciado no caminho [http://localhost:3333](http://localhost:3333).

As rotas implementadas são:

* '/enterprise' (GET) - Lista Empresas:
* '/enterprise' (POST) - Cadastra nova empresa seguindo os campos:

| Field         | Description    |
| ------------- |:-------------:|
| fantasy_name  | Nome fantasia da empresa |
| uf            | UF da empresa            |
| cnpj          | CNPJ da Empresa          |

* '/providers' (GET) - Lista fornecedores:
* '/providers' (POST) - Cadastra novo fornecedor com os campos:

| Field         | Description    |
| ------------- |:-------------:|
| name  | Nome do fornecedor |
| cpf_cnpj            | CPF/CNPJ do Fornecedor            |
| email          | Email do Fornecedor          |