import { copyFile, mkdir, readdir } from "node:fs/promises";

const distUrl = new URL("../dist/", import.meta.url);
const spanish404Url = new URL("es/404/", distUrl);

await mkdir(spanish404Url, { recursive: true });
await copyFile(new URL("index.html", spanish404Url), new URL("../404.html", spanish404Url));

async function findDuplicateArtifacts(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const duplicates = [];

  for (const entry of entries) {
    const entryUrl = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);

    if (/ [23](?:\.|$)/.test(entry.name)) {
      duplicates.push(entryUrl.pathname);
    }

    if (entry.isDirectory()) {
      duplicates.push(...(await findDuplicateArtifacts(entryUrl)));
    }
  }

  return duplicates;
}

const duplicates = await findDuplicateArtifacts(distUrl);

if (duplicates.length > 0) {
  throw new Error(`Duplicate build artifacts found:\n${duplicates.join("\n")}`);
}
