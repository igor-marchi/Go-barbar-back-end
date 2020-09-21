# Recuperação de Senha

**RF**
<!-- RF = Requisitos funcionais(descrever cada uma das funcionalidades) -->
- O usuário deve poder recuperar sua senha informando seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF**
<!-- RNF = Requisitos não funcionais (mais voltados para a parte técnica, qual lib vamos usar, qual banco vamos usar, etc...) -->
- Utilizar Mailtrap para testar envios de e-mail em ambiente de dev
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job)

**RN**
<!-- RN = Regras de negócio (0) -->
- O link enviado por email para resetar senha, deve expirar em 2h
- O usuário deve confirmar a nova senha ao resetar sua senha

# Atualização do perfil
**RF**
- O usuário deve poder atualizar seu perfil (nome, email, senha)

**RNF**

**RN**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado
- Para atualizar sua senha o usuário deve informar sua senha antiga
- Para atualizar sua senha o usuário deve confirmar sua senha antiga

# Painel do prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação smp que houver um novo agendamento
- O prestador deve conseguir visualizar as notificações não lidas

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenados no MongoDB
- As notificações do prestador devem ser enviadas em tempo real utilizando o Socket.io

**RN**
- A notificação deve ter um status "lida/não-lida" para que o prestador possa controlar

# Agendamento de serviços
**RF**
- O usuário deve poder listar todos prestadores de serviço cadastrados
- O usuário deve poder listar os dias do mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**
- A listagem de prestadores deve ser armazenada em cache


**RN**
- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro as 8g, último as 17h)
- O usuário não pode agendar um horário já ocupado;
- O usuário não pode agendar um horário que já passou
- O usuário não pode agendar serviços com ele mesmo
