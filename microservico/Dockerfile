
FROM node:16 as builder

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /app

COPY . .

RUN pnpm fetch
RUN pnpm build

FROM node:16

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder app/dist /app/dist
COPY --from=builder app/package.json /app/
COPY --from=builder app/pnpm-lock.yaml /app/
COPY --from=builder app/.npmrc /app/

RUN pnpm fetch --prod

EXPOSE 3000

CMD [ "pnpm", "start" ]
