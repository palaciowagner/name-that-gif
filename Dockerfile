FROM hayd/alpine-deno:1.5.2

EXPOSE 8000

WORKDIR .

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache index.ts

CMD ["run", "--allow-net", "index.ts"]