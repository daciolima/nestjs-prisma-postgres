## Projeto exemplo NestJS com Prisma se comunicando no SGDB Postgres.
- Postgres
- Prisma


**Comandos prisma**
```shell
# Instala o prisma
npm install prisma -D

# pre configura e gera arquivos do prisma
npx prisma init

# Gera os arquivos de migração(migrates) do prisma
npx prisma migrate dev --name init

# Atualiza as configurações do schema.prisma com o database
prisma generate

# Comando necessário para gerar o service do prisma. Se usar docker deve ser dentro do container
nest g service prisma

# Inicia o serviço web prima. Se usar docker deve ser dentro do container
npx prisma studio   # Necessário liberar porta 5555 se estiver no docker
```

