import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

let shouldRename = false;

export default function createIntegration(): AstroIntegration {
  return {
    name: "astro-index-pages",
    hooks: {
      "astro:config:done": ({ config }) => {
        // build.format: 'file'の時のみリネームする
        if (config.build.format === "file") {
          shouldRename = true;
        }
      },
      "astro:build:done": async ({ dir, routes }) => {
        if (!shouldRename) {
          return;
        }

        const outDirPath = fileURLToPath(dir);

        await Promise.all(
          routes
            .filter((route) => {
              return (
                route.type === "page" &&
                route.pathname &&
                route.pathname !== "/" &&
                path.parse(route.component).name === "index"
              );
            })
            .map(async ({ pathname }) => {
              if (!pathname) return;
              // リネーム先のディレクトリパス
              const targetDirPath = path.join(outDirPath, pathname);
              // リネーム前のファイルパス
              const beforeFilePath = path.join(outDirPath, `${pathname}.html`);
              // リネーム先のファイルパス
              const afterFilePath = path.join(
                outDirPath,
                pathname,
                "index.html",
              );
              await fs.mkdir(targetDirPath, { recursive: true });
              await fs.rename(beforeFilePath, afterFilePath);
            }),
        );
      },
    },
  };
}
