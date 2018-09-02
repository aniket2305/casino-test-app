# Casino Test App

## Table of contents
- [INSTALLATION](#installation)
- [DEVELOPEMENT](#development)
- [DEPLOYMENT](#deployment)


# INSTALLATION:

1. Install XCode (For MAC users)
    - You can get this through the Apple Store or Self Service

2. Install NodeJS 8.6.0 (recomended version)

4. Disable ssl validation: `npm config set strict-ssl false`

5. `git clone https://github.com/aniket2305/casino-test-app.git` - clone project

6. `cd casino-test-app` - go to project folder

7. `npm install` - this will install all the dependencies mentioned in package.json

***

# DEVELOPMENT:

## RUNNING THE APPLICATION

- `npm run start` builds the application and serves it with webpack
- Open your browser and go to `http://localhost:3000/`. You should be good to go to play :)

```
npm run start

http://localhost:3000/
```

## TESTS

To run test suite, run `npm run test`. As a result it will display result(success/failure) for all test cases on terminal.

```
npm run test
```

***

# DEPLOYMENT:

To create a build, run `npm run build`. Then deploy build folder on server.

```
npm run build
```