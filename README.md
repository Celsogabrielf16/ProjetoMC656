# ProjetoMC656
O software a ser desenvolvido é um site para empréstimo temporário de bicicletas entre universitários. O objetivo principal do aplicativo é conectar pessoas que possuem bicicletas disponíveis e desejam alugá-las temporariamente com universitários que necessitam de uma bicicleta para uso dentro do campus da Unicamp e arredores.

## Membros
- Celso Gabriel Ferreira Marçal Prado 235393
- Vinicius Forato Coracin 231528
- Vitor Ferreira dos Santos de Lacerda 231524
- Artur Dias de Oliveira 252635
- Luiz Antônio Corrêa de Oliveira 240429

## Diagrama C4
https://drive.google.com/file/d/1qbmodngLRIT6sF1X89ndOgvij0h4v5uQ/view?usp=sharing

## Arquitetura em Camadas - Sistema de Aluguel de Bicicletas

O sistema segue uma arquitetura em camadas, promovendo separação de responsabilidades e facilitando a manutenção e escalabilidade da aplicação.

### 1. Camada de Apresentação (Frontend)

* **Tecnologia:** JavaScript com React.js
* **Responsabilidade:** Interação com o usuário final via navegador, envio de requisições para a API e exibição de dados.

### 2. Camada de Aplicação (Backend - API)

* **Tecnologia:** Estrutura MVC com Controllers e Services
* **Responsabilidade:** Processamento da lógica de negócio, validação de dados, coordenação entre frontend, serviços e banco de dados.

  * **Controllers:** Recebem e tratam requisições da interface.
  * **Services:** Executam a lógica de negócio específica de cada funcionalidade.

### 3. Camada de Persistência (Banco de Dados)

* **Tecnologia:** PostgreSQL com Prisma
* **Responsabilidade:** Armazenamento e recuperação de dados relacionados a usuários, bicicletas, aluguéis e avaliações.

### 4. Sistema Externo (Gateway de Pagamento)

* **Responsabilidade:** Processar os pagamentos realizados pelos usuários através da integração com o backend.


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


## Evidencias Atividade 5
https://drive.google.com/drive/folders/1tRsrPyFI7bjKKtb987MNKlqvJvDZfgCo?usp=sharing
