# Lab 1: Node.js and Express server

## Student Details

- **Name:** P.SHIVA TEJA YADAV
- **Registration Number:** 252U1R9112
- **Section:** 111 GEN AI (2B)
- **Course:** Backend Development Fundamentals
- **Lab Number:** 01

## Live Link

**Deployment URL:** PASTE YOUR RENDER / RAILWAY / CLOUD IDE URL HERE
(If the project cannot be deployed, write the reason here and add Postman screenshots of every endpoint.)

## Objective

To set up a Node.js project, create a basic server with the built-in `http` module, and then rebuild it with Express using several routes and correct HTTP status codes.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Visual Studio Code

## Project Structure

```text
lab-01/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   ├── not-found.png
├── server-http.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How to Run

Prerequisites: Node.js and npm installed. No environment variables are needed for this lab.

```bash
cd lab-01
npm install          # installs express
node server.js       # or: npm start   (Express server)
```

Open `http://localhost:3000` in the browser.

To run the plain server made with the built-in `http` module:

```bash
node server-http.js  # or: npm run http
```

Stop one server with `Ctrl + C` before starting the other, because both use port 3000.

## package.json fields explained

| Field | Meaning |
| --- | --- |
| `name` | Package name (lowercase, no spaces) |
| `version` | Version of the project (major.minor.patch) |
| `description` | Short summary of the project |
| `main` | Entry file of the package |
| `scripts` | Shortcut commands such as `npm start` |
| `keywords` | Words that help people find the package |
| `author`, `license` | Who wrote it and under which licence it is shared |
| `type` | `commonjs` means files use `require()` |
| `dependencies` | Packages needed to run the project (express) |

## Endpoints

| Method | Path | Description | Status |
| --- | --- | --- | --- |
| GET | `/` | Welcome text | 200 |
| GET | `/about` | JSON with `name` and `section` | 200 |
| GET | `/time` | Current date and time from `new Date()` | 200 |
| GET | any other path (e.g. `/anything`) | 404 message | 404 |

## Screenshots

### Plain `http` server

![Plain http server replying Hello](screenshots/http-hello.png)

### 1. Home route

![Home route response](screenshots/home.png)

### 2. About route

![About route response](screenshots/about.png)

### 3. Time route

![Time route response](screenshots/time.png)

### 4. Unknown route (404)

![404 for /anything](screenshots/not-found.png)

![404 for /contact](screenshots/error.png)

### Status code of every route

![Status codes log](screenshots/status-codes.png)

## Viva Questions

**1. What is the difference between `package.json` and `node_modules`?**
`package.json` describes the project and lists its dependencies and scripts. `node_modules` is the folder where `npm install` downloads those packages. It can be rebuilt from `package.json`, so it is not committed.

**2. What does `app.listen` do?**
It starts the server and makes it wait for requests on the given port. The callback runs when the server is ready.

**3. What do request and response represent?**
`request` holds what the client sent (method, URL, headers, body). `response` is what the server uses to send back the status code and data.

## Problems Faced and Solutions

- _Write your own notes here (for example: port 3000 already in use, or the 404 handler placed above the routes)._

## Git and Repository Notes

- `.gitignore` excludes `node_modules/` and `.env`.
- Do not commit `node_modules/`.
- This lab lives in the `lab-01/` folder of the course repository.
