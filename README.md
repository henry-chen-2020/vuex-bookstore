# unit-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Run from Docker
```
docker network create --driver bridge book-net
docker network inspect book-net
docker run -dit --name mongodb --network book-net mongo:latest
docker run -dit --name restapi --network book-net --env DB=mongodb -p 5001:5000 hechen2/pybook
docker run -dit --name vuebook --network book-net --env VUE_APP_REST_API_URL=restapi:5001 -p 8080:80 hechen2/vuebook
```
then check browser at `localhost:5001`
