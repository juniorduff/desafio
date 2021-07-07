#Rodando  API
## Docker


``` shell
$ docker compose up.
```


``` shell
version: "3.7"

services:
  database:
    image: postgres
    container_name: desafioDB
    restart: always
    ports:
      - 5432:5432
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=desafio
    volumes:
      - pgdata:/data/postgres
  app:
    build: .
    container_name: nodejs
    ports:
      - 3333:3333
    volumes:
      - .:/usr/app
    links:
      - database
    depends_on:
      - database

volumes:
  pgdata:
    driver: local
         -Dapi.check-home-dirs=true
```
#ROTAS 

####Create User /Post
###http://localhost:3333/game
```

{
"name":"teste",
"description":"teste"	
}
```

```
#### GET  list all Game
### http://localhost:3333/property


```

##PUT 
### http://localhost:3333/game/:id
```

{
"name":"teste",
"description":"teste"	
}

```
##DELETE
### http://localhost:3333/game/:id
