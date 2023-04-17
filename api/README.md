# Mazingira
-----

- This is the API backend for Mazingira donation organization .The Front-End can be found at [Front-End](https://github.com/treva556/mazingira/tree/master/client)<br/>
![love](http://ForTheBadge.com/images/badges/built-with-love.svg)

## Technologies-used
----
   ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)   ![render](https://img.shields.io/badge/Render-430091?style=for-the-badge&logo=render&logoColor=white)     ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)   ![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
   ![Ruby](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)    ![Sqlite](https://img.shields.io/badge/SQLite3-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
   ![mark-down](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
   ![stack](https://aleen42.github.io/badges/src/stackoverflow.svg)
## Description
---
- This backend allows the the react front-end to access the following endpoints in a **RESTful** mode:
  ```
    - Admin Login/Sign-up
    - Organization Login/Sign-up
    - Donor Login/Sign-up
    - Users_checklogin
    - Organization/genres
    ```

- The actions that the user can make are:
    ```

    ```


## Database
---
- Below is a sample diagram of the database tables we used.

- The database below contains the following tables including `books`, `genres`, `book_genres`, `users`, and `reviews`.

<img src="./images/db.png" alt="database tables" />




## Prerequisites
- To start this project one must have the following:
    1. **Sqlite3**
    2. **Text-editor** (**VSCode** is :sunglasses:)
    3. **ruby** >=2.5
    4. **Rails**
    4. **Patience**

## Installation
---
1. Clone this repository
    ```bash
        git clone https://github.com/treva556/mazingira.git
    ```

2. Go into the project directory

    ```bash
        cd mazingira
    ```

3. Install the necessary dependencies by bundling
    ```bash
        bundle install
        bundle update
    ```

4. set-up the database
    ```bash
        rails db:migrate
        rails db:seed
    ```
5. Start up the server
    ```bash
        rails s
    ```


## Endpoints
---
### donors
        resources :donors, only: [:index]

### donations
         resources :donations



### stories


### organization


<!-- ## Contributers -->
 ![](http://ForTheBadge.com/images/badges/built-by-developers.svg)

---

1. [Mark Njogu](https://github.com/treva556)
2. [Hilary Mwendia](https://github.com/Stiflerzak)
3. [Joseph Mwanzia](https://github.com/JoseMwanzia)
4. [Stephen-Nene](https://github.com/Stephen-nene)
5. [Bruno Kiptoo](https://github.com/dev5)
---


## License
- [MIT License](LICENSE.md)

## **Copyright**

   - Mazingira (c) 2023
