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
  
  
  - ## Thread Model

  | Atrributes    | Data Type      | Description                       |
  | ------------- | ---------      | ----------------------------      |
  | author        | Id of user     | Contains the thread's author      |      
  | title         | String         | Contains the thread's title       |
  | content       | String         | Contains the thread's content     |
  | category      | Id of category | Contains the thread's category    |
  | createdAt     | Date           | Contains the thread creation date |
  
  
- ## Category Model

  | Atrributes    | Data Type     | Description                         |
  | ------------- | ---------     | ----------------------------        |
  | category      | String        | Contains the category's name        |
  | createdAt     | Date          | contains the category creation date |
  
  
- ## Like Model

  | Atrributes    | Data Type     | Description                                  |
  | ------------- | ---------     | ----------------------------                 |
  | user          | Id of user    | Contains the user who like in the article    |
  | thread        | Id of thread | Contains the thread liked by user           |
  | createdAt     | Date          | contains the like creation date              |
  

- ## Comment Model

  | Atrributes    | Data Type     | Description                                  |
  | ------------- | ---------     | ----------------------------                 |
  | comment       | String        | Contains the comment of user                 |
  | user          | Id of user    | Contains the user who comment in the article |
  | thread        | Id of thread | Contains the thread commented by user         |
  | createdAt     | Date          | contains the comment creation date           |
  
   
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

  - ### Register (admin & all users)
  
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
  
  - ### Login (admin & all users)
  
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

# User Endpoint

  - ### Get user profile (all users)

     - Method : GET
     - Endpoint : /users
     - Header :
      - Accept : application/json
      - authorization : JSON Web Token

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "data" : {
                            "_id":"String",
                            "username":"String",
                            "password":"String",
                            "role":"id of role",
                            "country":"id of country",
                            "email":"String",
                            "createdAt":"Date"
                       },
              "message" : "Your data was checked"
          }
      ```

  - ### Edit & update user profile (all users)

     - Method : PUT
     - Endpoint : /users
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Body :

      ```javascript
          {
              "username":"String - mininum length 8 - required",
              "password":"String - mininum length 8 - required",
              "country":"id of country - required",
              "email":"String - required",
          }
      ```

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "message" : "Your profile was changed"
          }
      ```

  - ### Edit & update user image (all users)

       - Method : PUT
       - Endpoint : /update-image
       - Header :
        - Content-Type : application/json
        - Accept : application/json
        - authorization : JSON Web Token

       - Body :

        ```javascript
            {
                "image":"String"
            }
        ```

       - Response :

        ```javascript
           {
                "status" : "200 OK",
                "message" : "Your image was changed"
            }
        ```

  - ### Get threads by user id (all users)

     - Method : GET
     - Endpoint : /users/get-thread-user
     - Header :
      - Accept : application/json
      - authorization : JSON Web Token

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "data" : {[
                            "_id":"String",
                            "createdAt":"Date"
                       ]},
              "message" : "Your Threads"
          }
      ```

# Thread Endpoint

  - ### Get all thread (admin & all users)

     - Method : GET
     - Endpoint : /threads
     - Header :
      - Accept : application/json

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "data" : [{
                            "_id":"String",
                            "author":"Id of user",
                            "title":"String",
                            "category":"Id of category",
                            "content":"String",
                            "createdAt":"Date"
                       }],
              "message" : "Get all data threads"
          }
      ```

  - ### Searching of threads (admin & all users)

     - Method : GET
     - Endpoint : /threads/search
     - Header :
      - Accept : application/json


     - Query
     
     ```js
      /threads/search?title=xxx
     ```

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "data" : [{
                            "_id":"String",
                            "author":"Id of user",
                            "title":"String",
                            "category":"Id of category",
                            "content":"String",
                            "createdAt":"Date"
                       }],
              "message" : "Get all data threads"
          }
      ```

  - ### Post thread by author (admin & all users)

     - Method : POST
     - Endpoint : /threads
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Body :

      ```javascript
          {
              "_id":"String",
              "author":"Id of user",
              "title":"String",
              "category":"Id of category",
              "content":"String"
          }
      ```

     - Response :

      ```javascript
         {
              "status" : "201 Created",
              "message" : "You was posted a thread"
          }
      ```

  - ### Edit & update thread by author (admin & all users)

     - Method : PUT
     - Endpoint : /threads/:id
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Paremeter :

      `/threads/id_of_thread"

     - Body :

      ```javascript
          {
              "author":"Id of user",
              "title":"String",
              "category":"Id of category",
              "content":"String"
          }
      ```

     - Response :

      ```javascript
         {
              "status" : "201 Created",
              "message" : "You was change a thread by id"
          }
      ```

  - ### Delete thread by author (admin & all users)

     - Method : DELETE
     - Endpoint : /threads/:id
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Paremeter :

      `/threads/id_of_thread"

     - Response :

      ```javascript
         {
              "status" : "201 Created",
              "message" : "You was deleted a thread"
          }
      ```

# Role Endpoint

  - ### Get all role (admin & all users)

       - Method : GET
       - Endpoint : /roles
       - Header :
        - Accept : application/json

       - Response :

        ```javascript
           {
                "status" : "200 OK",
                "data" : [{
                              "_id":"String",
                              "role":"String",
                              "createdAt":"Date"
                         }],
                "message" : "Get all data Roles"
            }
        ```

  - ### Post role (admin)

     - Method : POST
     - Endpoint : /roles
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Body :

      ```javascript
          {
              "role" : "String - rquired"
          }
      ```

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "message" : "You was listed a role"
          }
      ```

# Like Endpoint

  - ### Get all data liked from user on each articles (admin & all users)

       - Method : GET
       - Endpoint : /likes/:id
       - Header :
        - Accept : application/json

      - Paremeter :

      `/likes/id_of_thread"

       - Response :

        ```javascript
           {
                "status" : "200 OK",
                
                "message" : "Get all data Countries"
            }
        ```

  - ### Like and unlike threads (admin)

       - Method : POST
       - Endpoint : /likes/:id
       - Header :
        - Accept : application/json

      - Paremeter :

      `/likes/id_of_thread"
      
       - Response :

        ```javascript
           {
                "status" : "200 OK",
                
                "message" : "Get all data Countries"
            }
        ```

# Country Endpoint
  
  - ### Get all country (admin & all users)

       - Method : GET
       - Endpoint : /countries
       - Header :
        - Accept : application/json

       - Response :

        ```javascript
           {
                "status" : "200 OK",
                "data" : [{
                              "_id":"String",
                              "country":"String",
                              "createdAt":"Date"
                         }],
                "message" : "Get all data Countries"
            }
        ```

  - ### Post country (admin)

     - Method : POST
     - Endpoint : /countries
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Body :

      ```javascript
          {
              "country" : "String - rquired"
          }
      ```

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "message" : "You was listed a country"
          }
      ```

# Comment Endpoint
  - ### Get all data commented from user on each articles (admin & all users)

      - Method : GET
      - Endpoint : /likes/:id
      - Header :
       - Accept : application/json

      - Paremeter :

       `/likes/id_of_thread"

       - Response :

        ```javascript
           {
                "status" : "200 OK",

                "message" : "Get all data Countries"
            }
        ```

  - ### Comment threads (admin)

      - Method : POST
      - Endpoint : /comments/:id
      - Header :
       - Accept : application/json

      - Paremeter :

      `/likes/id_of_thread"
      
      - Bodt :

        ```javascript
          "comment":"String - mininum length 1"
        ```
      
       - Response :

        ```javascript
           {
                "status" : "200 OK",
                
                "message" : "Get all data Countries"
            }
        ```

# Category Endpoint

  - ### Get all country (admin & all users)

       - Method : GET
       - Endpoint : /categories
       - Header :
        - Accept : application/json

       - Response :

        ```javascript
           {
                "status" : "200 OK",
                "data" : [{
                              "_id":"String",
                              "category":"String",
                              "createdAt":"Date"
                         }],
                "message" : "Get all data Categories"
            }
        ```
        
  - ### Post country (admin)

     - Method : POST
     - Endpoint : /countries
     - Header :
      - Content-Type : application/json
      - Accept : application/json
      - authorization : JSON Web Token

     - Body :

      ```javascript
          {
              "country" : "String - rquired"
          }
      ```

     - Response :

      ```javascript
         {
              "status" : "200 OK",
              "message" : "You was listed a country"
          }
      ```
