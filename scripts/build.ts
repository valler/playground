import manifest from "#src/manifest.json" with { type: "json" };
import { writeFileSync } from "node:fs";
writeFileSync("docs/manifest.webmanifest", JSON.stringify(manifest));
