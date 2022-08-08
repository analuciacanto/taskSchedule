# Tasks Schedule
Projeto para o desenvolvimento de uma agenda de tarefas. 
Projeto desenvolvido usando Node JS e React JS 

## Clonando o repositório 

```sh
git clone https://github.com/analuciacanto/taskSchedule.git
cd taskSchedule
```

## Subindo um container com o banco de dados Postgres 

```sh
docker pull postgres
docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres  
```

## Subindo o backend
```sh
cd backend
npm install
npm start
```

## Subindo o frontend
```sh
cd frontend
npm install
npm start
```
