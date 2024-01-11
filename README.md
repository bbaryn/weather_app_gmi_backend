## Project description

The application was written using the NestJS framework, which allows you to quickly put up a backend application. The application is protected against unauthenticated use. There is only one module in the project to communicate with OpenWeatherMapAPI. The communication consists of sending a request to the API, regarding the location or weather for the coordinate data, which communicates with the OpenWeatherMap API using the Axios library.

The application has the standard structure suggested by the NestJS documentation, which in my opinion was sufficient. Axios for communication was chosen because it is a popular and lightweight library. 

## How to start

Steps needed to run apliaction (replace your-tag with your own tag):

1. Install NestJS client using command `npm i -g @nestjs/cli`
2. Run `pnpm install`
3. Create an `.env` file with the given fields:
   1. OPENWEATHERMAP_API_KEY=
   2. API_KEY=
and fill them in with your data.
4. Run `docker build --tag 'default_tag' .` (replace it with your name)
5. Check if docker image name in `docker-compose.yml` is the same as 'default-tag' you have chosen
6. Run `docker-compose up`

## Project structure

- `guards` have a single responsibility. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time.
- `types` well .. types for entities etc.
- `utils` contains multiple helper functions
- `weather` includes module called weather and controller and service
  - `dto` validators for requests

## Core libraries

_This project uses pnpm!_

- [`nestjs`](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [`class-validator`](https://github.com/typestack/class-validator) - Allows use of decorator and non-decorator based validation
- [`lodash`](https://github.com/lodash/lodash) - Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

## Planned improvements

- [ ] Error handler should be able to handle more complicated scenarios
- [ ] Eslint/Prettier/TS have default settings provided by the NestJS framework. They should be reviewed and brought up to the latest standards
- [ ] Implement documentation using swagger
- [ ] Implement caching
- [ ] Write e2e tests
- [ ] Implement basic authentication
