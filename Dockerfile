FROM hayd/alpine-deno:1.5.2

WORKDIR .

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache index.ts

EXPOSE 8000
CMD ["run", "--allow-net", "--allow-env", "index.ts"]