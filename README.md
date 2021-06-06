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
###http://localhost:3333/user
```

{
	"fullName":"teste",
	"email":"junior@teste",
	"cpf":"kakakk",
	"password":"1234"
}
```

####Create Property /Post
### http://localhost:3333/property
```


{
	"cep": "5656560",
	"countRoom":1221,
	"complement":"testan3223do",
	"rentValue":21321,
	"isAvailable": true,
	"numberProperty":12

}
```
#### authenticate 

### http://localhost:3333/sessions
```
{
	"email":"junior@teste",
	"password":"1234"
}
```
#### GET  list all property
### http://localhost:3333/property
##PUT 
### http://localhost:3333/property/:id
```
{
	
	"cep": "5656560",
	"countRoom":1221,
	"complement":"agoraaaa1",
	"rentValue":21321,
	"isAvailable": true,
	"numberProperty":12

}
```
##DELETE
### http://localhost:3333/property/:id
