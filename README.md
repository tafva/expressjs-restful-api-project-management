
# Project Management - RESTful API

#### Disclaimer:

The application is only used for learning but you can develop it.


## Installation

1. Clone the repo
```bash
  git clone https://github.com/tafva/expressjs-restful-api-project-management.git
  cd expressjs-restful-api-project-management
```
or
```bash
  git clone https://github.com/tafva/expressjs-restful-api-project-management.git your-project-name
  cd your-project-name
```

2. Install NPM packages
```bash
  npm install
```

3. Database
```
  create new db with name mysql-expressjs
  import file "mysql-expressjs.db" that are in the db folder
```


## Customization

1. DB Configuration

`./src/config/db-connection.js`
```javascript
  const config = {
    multipleStatements  : true,
    host                : 'localhost',
    user                : 'root',
    password            : '',
    database            : 'mysql-expressjs'
  };
```

2. PORT

`./index.js`
```javascript
  const _PORT = 8080
```


## Usage

Start the server

```bash
  npm start
```

Next, You can use [Postman](https://www.postman.com/) app or use [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) extension on [VS Code](https://code.visualstudio.com/) or others to do the testing.
## API Reference

#### List Project

```http
  GET /api/projects
```

Response :

```json 
{
  "success": "boolean",
  "data": [
    {
      "id": "number, unique",
      "name": "string",
      "date": "string",
      "created_at": "string",
      "updated_at": "string"
    },
    {
      "id": "number, unique",
      "name": "string",
      "date": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ]
}
```

#### Get Project

```http
  GET /api/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of project to fetch |

Response :

```json 
{
  "success": "boolean",
  "data":
    {
      "id": "number, unique",
      "name": "string",
      "date": "string",
      "created_at": "string",
      "updated_at": "string"
    }
}
```

#### Create Project

```http
  POST /api/projects
```

Request Body :

```json 
{
  "name": "string",
  "status": "boolean",
}
```

Response :

```json 
{
  "success": "boolean"
}
```

#### Update Project

```http
  PUT /api/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of project to update |

Request Body :

```json 
{
  "name": "string",
  "status": "boolean",
}
```

Response :

```json 
{
  "success": "boolean"
}
```

#### Delete Project

```http
  DELETE /api/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of project to delete |

Response :

```json 
{
  "success": "boolean"
}
```


## License

ISC License

See `LICENSE` for more information.


## Acknowledgements

 - [NodeJS](https://nodejs.org/en/)
 - [body-parser](https://www.npmjs.com/package/body-parser)
 - [express](https://www.npmjs.com/package/express)
 - [moment](https://www.npmjs.com/package/moment)
 - [mysql](https://www.npmjs.com/package/mysql)
 - [nodemon](https://www.npmjs.com/package/nodemon)

<p align="right"><a href="#project-management---restful-api">#back to top</a></p>
