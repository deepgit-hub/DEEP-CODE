const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// --------------------------------------------------
// Firebase Admin initialization
// --------------------------------------------------

const serviceAccount = require("../firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// --------------------------------------------------
// Load ES module data files
// --------------------------------------------------

function loadConceptFile(filePath) {
  const absolutePath = path.resolve(filePath);

  let code = fs.readFileSync(absolutePath, "utf8");

  // Convert:
  // export default concepts;
  //
  // into:
  // module.exports = concepts;

  code = code.replace(
    /export\s+default\s+concepts\s*;?/,
    "module.exports = concepts;"
  );

  const sandbox = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(code, sandbox);

  return sandbox.module.exports;
}

// --------------------------------------------------
// Deep Learn category files
// --------------------------------------------------

const categories = {
  communication: "../src/data/deepLearn/communication.js",
  interview: "../src/data/deepLearn/interview.js",
  workplace: "../src/data/deepLearn/workplace.js",
  professional: "../src/data/deepLearn/professional.js",
  personal: "../src/data/deepLearn/personal.js",
};

// --------------------------------------------------
// Upload function
// --------------------------------------------------

async function uploadCategory(categoryId, filePath) {
  console.log(`\n📚 Uploading: ${categoryId}`);

  const concepts = loadConceptFile(
    path.join(__dirname, filePath)
  );

  console.log(`Found ${concepts.length} concepts.`);

  const batch = db.batch();

  concepts.forEach((concept) => {
    const conceptRef = db
      .collection("deepLearn")
      .doc(categoryId)
      .collection("concepts")
      .doc(String(concept.conceptId));

    batch.set(conceptRef, concept);
  });

  await batch.commit();

  console.log(`✅ ${categoryId}: ${concepts.length} concepts uploaded`);
}

// --------------------------------------------------
// Main
// --------------------------------------------------

async function uploadAll() {
  console.log("🚀 Starting DEEP LEARN upload...\n");

  for (const [categoryId, filePath] of Object.entries(categories)) {
    await uploadCategory(categoryId, filePath);
  }

  console.log("\n====================================");
  console.log("🎉 DEEP LEARN UPLOAD COMPLETE");
  console.log("====================================");
  console.log("Total concepts uploaded: 100");
  console.log("");
  console.log("Firestore structure:");
  console.log("deepLearn/");
  console.log("  ├── communication/concepts/");
  console.log("  ├── interview/concepts/");
  console.log("  ├── workplace/concepts/");
  console.log("  ├── professional/concepts/");
  console.log("  └── personal/concepts/");
}

uploadAll()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Upload failed:");
    console.error(error);
    process.exit(1);
  });