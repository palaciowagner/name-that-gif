import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  watch: false,
  scripts: {
    format: {
      cmd: "deno fmt && deno lint --unstable",
    },
    "start:local": {
      cmd: "denon format && deno run --allow-net index.ts",
      desc: "run my index.ts file",
      watch: true,
      "lock": "lock.json",
    },
    "start:ci": {
      cmd: "deno run --allow-net index.ts",
      desc: "run my index.ts file",
      "lock": "lock.json",
    },
    "test:unit": {
      cmd: "deno test -A",
      desc: "run all tests",
    },
  },
};

export default config;
