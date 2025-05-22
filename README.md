# ProjetoMC656
O software a ser desenvolvido é um site para empréstimo temporário de bicicletas entre universitários. O objetivo principal do aplicativo é conectar pessoas que possuem bicicletas disponíveis e desejam alugá-las temporariamente com universitários que necessitam de uma bicicleta para uso dentro do campus da Unicamp e arredores.

## Membros
- Celso Gabriel Ferreira Marçal Prado 235393
- Vinicius Forato Coracin 231528
- Vitor Ferreira dos Santos de Lacerda 231524
- Artur Dias de Oliveira 252635
- Luiz Antônio Corrêa de Oliveira 240429

# Decisões Arquiteturais

## Diagrama C4
https://drive.google.com/file/d/1SfdFgCYsYLCPyDRoff1DRShqWt_jM4m7/view?usp=sharing

## Componentes Principais e Suas Responsabilidades

### 1. Web Application (JavaScript + React.js)

* Interface usada pelos clientes para acessar as funcionalidades de aluguel de bicicletas.

### 2. Single Page Application

* Responsável por fazer chamadas à API (via JSON/HTTPS).

### 3. API Application

Camada intermediária que trata as requisições da Web Application.

#### Controllers (MVC REST Controllers):

* **UserController**: Recebe requisições de cadastro, autenticação e validação do usuário.
* **BikeManagementController**: Recebe requisições de registro, atualização e status das bicicletas.
* **ReviewController**: Recebe requisições de avaliações mútuas e denúncias de mau comportamento.
* **RentalController**: Recebe requisições de aluguel que acabam por evolver tempo de uso, cálculo de preço, multas e devolução.
* **PaymentController**: Recebe requisições de pagamentos.

#### Services (MVC REST Services):

* **UserService**: Implementa a lógica de negócio para autenticação e cadastro.
* **BikeManagementService**: Implementa a lógica para o gerenciamento das bicicletas.
* **ReviewService**: Gerencia o sistema de avaliações e denúncias.
* **RentalService**: Calcula tempo de uso, estimativas de preço e multas.
* **PaymentService**: Faz a integração com o sistema de pagamento.

### 4. Database (PostgreSQL com Prisma)

* Armazena informações dos usuários e bicicletas.
* Acessada por quase todos os serviços para leitura e escrita de dados.

### 5. Payment System (Gateway bancário)

* Sistema externo que processa os pagamentos realizados pelos usuários.
