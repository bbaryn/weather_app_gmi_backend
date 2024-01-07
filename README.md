# weather_app_gmi_backend

Steps needed to run apliaction (replace your-tag with your own tag):

1. Install NestJS client using command `npm i -g @nestjs/cli`
2. Run `pnpm install` 
3. Run `docker build --tag 'default_tag' .` (replace it with your name)
4. Check if docker image name in `docker-compose.yml` is the same as 'default-tag' (replace it with your name)
5. Run `docker-compose up`
