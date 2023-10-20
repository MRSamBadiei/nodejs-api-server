# NodeJS API Server (Express)

## Installation

Make sure you have the latest version of nodejs and npm installed.

if you don't have nodejs installed on your computer [download here](https://nodejs.org/en/download).

Then open your terminal and run the following commands one by one

```bash
git clone https://github.com/MRSamBadiei/nodejs-api-server.git
cd nodejs-api-server
npm i
npm run dev
```

## GET

http://localhost:3000/heros

### response

| status code | type                                             |
| ----------- | ------------------------------------------------ |
| 201         | [{"id":1,"name":"sam","age":10,"gender":"male"}] |

```json
// example
[
  { "id": 1, "name": "sam", "age": 10, "gender": "male" },
  { "id": 2, "name": "amir", "age": 12, "gender": "male" }
]
```

## POST

http://localhost:3000/addHero

### request body

| Params | type               |
| ------ | ------------------ |
| name   | string             |
| age    | number             |
| gender | "male" or "female" |

### response

| status code | type                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------ |
| 201         | { msg: "Your hero successfully added to the database." }                                   |
| 400         | {error: "Age has to be a number. Gender has to be male or female. name can not be empty."} |

## DELETE

http://localhost:3000/heros/:id

### request body

| Params | type   |
| ------ | ------ |
| id     | number |

### response

| status code | type                            |
| ----------- | ------------------------------- |
| 201         | { msg: "Successfuly deleted." } |
| 400         | {error: "id does not exists"}   |

## PATCH

http://localhost:3000/heros/:id

### request body

| Params | type                            |
| ------ | ------------------------------- |
| id     | number                          |
| name   | string or undefined             |
| age    | number or undefined             |
| gender | "male" or "female" or undefined |

### response

| status code | type                            |
| ----------- | ------------------------------- |
| 201         | { msg: "Successfuly updated." } |
| 400         | {error: "id does not exists"}   |

## PUT

http://localhost:3000/heros/:id

### request body

| Params | type                            |
| ------ | ------------------------------- |
| id     | number                          |
| name   | string or undefined             |
| age    | number or undefined             |
| gender | "male" or "female" or undefined |

### response

| status code | type                            |
| ----------- | ------------------------------- |
| 201         | { msg: "Successfuly created." } |
| 201         | { msg: "Successfuly updated." } |
| 400         | {error: "id does not exists"}   |
