# next-nestjs-keycloak-example
## An example to how to use keycloak multi tenancy with next application and nestjs backend

## How to run Keycloak (needs docker and docker-compose)
- open .docker folder and run `docker-compose up`
- After runs, open [localhost:8080/auth]() for configurations (credentials in docker-compose file)
- Create a Realm named Example
- Create two clients: 
  - `nest-api` with Access Type = confidential and ROOT Url = [http://localhost:8082]() and Service Accounts Enabled = true
  - `next-app` with Access Type = public and ROOT Url = [http://localhost:8081]()
  
## How to run the site
- Open app folder and run `yarn install && yarn dev`

## How to run the api
- Open app folder and run `yarn install && yarn start:dev`

# Enjoy!
