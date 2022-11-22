# Final-Project-BE-28-Restfull-API

# API Specification

- ## User Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | username      | String        | Contains the user's username       |
  | password      | String        | Contains the user's password       |
  | role          | Id of role    | Contains the user's role           |
  | country       | Id of country | Contains the user's country        |
  | email         | String        | Contains the user's email          |
  | createdAt     | Date          | contains the account creation date |


- ## Gender Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | gender        | String        | Contains the gender's name         |
  | createdAt     | Date          | contains the gender creation date  |


- ## Role Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | role          | String        | Contains the role's name           |
  | createdAt     | Date          | contains the role creation date    |


- ## Country Model

  | Atrributes    | Data Type     | Description                        |
  | ------------- | ---------     | ----------------------------       |
  | Country       | String        | Contains the country's name        |
  | createdAt     | Date          | contains the country creation date |
   
# Welcome Endpoint
- ## Welcome
  - ### Start API
   - Method : GET
   - Endpoint : /
   - Header :
    - Accept : application/json
    
   - Response :

    ```javascript
       {
            "status" : "200 OK",
            "message" : "Welcome to Asean Youth Forum News, Our API Specification : https://github.com/km-2228/BE-28---Restfull-API-AYF"
        }
    ```
    
 # Authentication & Autorization Endpoint
- ## Authentication & Autorization

  - ### Register
  
   - Method : POST
   - Endpoint : /auth-users/register
   - Header :
    - Content-Type : application/json
    - Accept : application/json
   - Body :

    ```javascript
      {
          "username" : "String - mininum length 8 - required - unique",
          "password" : "String - mininum length 8 - required",
          "role" : "Id of role - required",
          "country" : "Id of country - required",
          "email" : "String - required - unique",
      }
    ```

   - Response :

    ```javascript
        {
            "status":"201 Created",
            "message":"Your Account was registered"
        }
    ```
  
  - ### Login
  
   - Method : POST
   - Endpoint : /auth-users/login
   - Header :
    - Content-Type : application/json
    - Accept : application/json
   - Body :

    ```javascript
      {
          "email" : "String - required - unique",
          "password" : "String - mininum length 8 - required"
      }
    ```

   - Response :

    ```javascript
        {
            "status":"200 Ok",
            "data":"String",
            "message":"Your Account was login"
        }
    ```
