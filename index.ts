import { createClient, defaultPlugins } from "@hey-api/openapi-ts";
import path from "path";
createClient({
  input: "https://get.heyapi.dev/hey-api/backend",
  output: "./src/hey-api.ts",
  plugins: [
    ...defaultPlugins,
    {
      name: "@hey-api/client-fetch",
      runtimeConfigPath: path.resolve(__dirname, "heyapi-config.ts"),
    },
  ],
});
