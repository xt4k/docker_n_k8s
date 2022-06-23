FROM node:18-alpine as builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as prod

COPY --from=builder --chown=node:node /app/package.json ./package.json 
COPY --from=builder --chown=node:node /app/package-lock.json ./package-lock.json 
COPY --from=builder --chown=node:node /app/node_modules ./node_modules 
COPY --from=builder --chown=node:node /app/dist ./dist 
COPY --from=builder --chown=node:node /app/tsconfig.build.json ./tsconfig.build.json
COPY --from=builder --chown=node:node /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=node:node /app/nest-cli.json ./nest-cli.json

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

