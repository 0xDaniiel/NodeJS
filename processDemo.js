/**
 * processBasics.js
 *
 * Demonstrates usage of the Node.js global 'process' object:
 * - Accessing CLI arguments
 * - Reading environment variables
 * - Getting process info like memory, uptime, etc.
 * - Handling process exit
 */

// ------------------------
// 1. Command-Line Arguments
// ------------------------
// Access via process.argv (it's an array)
console.log("🔧 Full Arguments:", process.argv);
console.log("📌 Third Argument (index 2):", process.argv[2]);
// Try running: node processBasics.js -s

// ------------------------
// 2. Environment Variables
// ------------------------
console.log(
  "🏠 User Home Path (HOMEPATH):",
  process.env.HOMEPATH || "Not Available"
);
// Can also check custom variables like process.env.MY_VAR if set before execution

// ------------------------
// 3. Process Information
// ------------------------
console.log("🆔 Process ID (PID):", process.pid);
console.log("📂 Current Working Directory:", process.cwd());
console.log("📛 Process Title:", process.title);
console.log("🧠 Memory Usage:", process.memoryUsage());
console.log("⏱️ Uptime (seconds):", process.uptime());

// ------------------------
// 4. Handle Process Exit
// ------------------------
process.on("exit", (code) => {
  console.log(`👋 Exiting with code: ${code}`);
});

// ------------------------
// 5. Exit Process Manually
// ------------------------
console.log("✅ Exiting process...");
process.exit(0); // Terminates the process (nothing below this line runs)

// This will NOT run:
console.log("[This line will not be printed]");
