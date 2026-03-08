#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourceDirs = ["components", "app"];

const ignoreGlobs = [
  ".next",
  "node_modules",
  "public",
];

const extensions = new Set([".ts", ".tsx", ".js", ".jsx"]);

const violations = [];

const fileHasText = (content) => {
  const stripped = content
    .replace(/<\s*script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.length > 0;
};

const hasAttr = (nodeAttrs, attrName) =>
  new RegExp(`\\b${attrName}(?:\\s*=\\s*(\"[^\"]*\"|'[^']*'|\\{[^}]*\\}|[^\\s>]+))?`, "i").test(
    nodeAttrs
  );

const extractTagBlocks = (content, tagName) => {
  const re = new RegExp(
    `<${tagName}\\b([^>]*)>([\\s\\S]*?)<\\/${tagName}>`,
    "gi"
  );
  const results = [];
  let match;
  while ((match = re.exec(content)) !== null) {
    results.push({
      attrs: match[1] || "",
      inner: match[2] || "",
      full: match[0],
    });
  }
  return results;
};

const collectFiles = (dir, out = []) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (ignoreGlobs.includes(entry.name)) continue;
      collectFiles(path.join(dir, entry.name), out);
      continue;
    }

    if (extensions.has(path.extname(entry.name))) {
      out.push(path.join(dir, entry.name));
    }
  }

  return out;
};

const checkForAccessibleElements = (file, content) => {
  const buttons = extractTagBlocks(content, "button");
  buttons.forEach((button) => {
    const hasNonText =
      hasAttr(button.attrs, "aria-label") ||
      hasAttr(button.attrs, "aria-labelledby") ||
      hasAttr(button.attrs, "title");

    if (!fileHasText(button.inner) && !hasNonText) {
      violations.push({
        file: path.relative(projectRoot, file),
        message: "Icon-only button must include aria-label or aria-labelledby.",
      });
    }
  });

  const links = extractTagBlocks(content, "a");
  links.forEach((link) => {
    const hasNonText =
      hasAttr(link.attrs, "aria-label") ||
      hasAttr(link.attrs, "aria-labelledby") ||
      hasAttr(link.attrs, "title");

    if (!fileHasText(link.inner) && !hasNonText) {
      violations.push({
        file: path.relative(projectRoot, file),
        message:
          "Icon-only link must include aria-label or aria-labelledby.",
      });
    }
  });

  const imageSelfClosing = content.match(/<Image\b[^>]*\/>/g) || [];
  imageSelfClosing.forEach((match) => {
    if (!/\balt\s*=/.test(match)) {
      violations.push({
        file: path.relative(projectRoot, file),
        message: "Next Image requires an alt attribute for screen readers.",
      });
    }
  });

  const imageNormalOpen = extractTagBlocks(content, "img");
  imageNormalOpen.forEach((img) => {
    if (!hasAttr(img.attrs, "alt") && !hasAttr(img.attrs, "aria-hidden")) {
      violations.push({
        file: path.relative(projectRoot, file),
        message: "Image requires alt text unless intentionally hidden from screen readers.",
      });
    }
  });
};

const checkCriticalStructure = (content, file) => {
  if (path.basename(file) !== "home-view.tsx") return;

  if (!/skip-link/.test(content) || !/href=\"#main-content\"/.test(content)) {
    violations.push({
      file: path.relative(projectRoot, file),
      message: "Main page should include a skip-to-content anchor (`skip-link` -> #main-content).",
    });
  }
};

const allFiles = [];
for (const dir of sourceDirs) {
  const abs = path.join(projectRoot, dir);
  if (fs.existsSync(abs)) {
    collectFiles(abs, allFiles);
  }
}

for (const file of allFiles) {
  const content = fs.readFileSync(file, "utf8");
  checkForAccessibleElements(file, content);
  checkCriticalStructure(content, file);
}

if (violations.length === 0) {
  console.log("Accessibility guard passed. No issues found.");
  process.exit(0);
}

console.error("Accessibility guard found issues:");
for (const violation of violations) {
  console.error(`- ${violation.file}: ${violation.message}`);
}
process.exit(1);
