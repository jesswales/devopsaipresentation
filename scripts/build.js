const _ = require("lodash");

// risk-gate test: no_go app-logic change
const start = Date.now();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Build started...");
  await wait(1200);
  console.log(`Compiling ${_.range(1, 4).length} module groups...`);
  await wait(1200);
  console.log("Packaging artifacts...");
  await wait(1200);
  console.log(`Build complete in ${Date.now() - start}ms`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
