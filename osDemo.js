/**
 * osBasics.js
 *
 * Demonstrates how to use Node.js 'os' module to retrieve system information.
 */

import os from "os";

// ------------------------
// 1. User Information
// ------------------------
console.log("👤 User Info:", os.userInfo());
// Returns an object with:
// uid, gid, username, homedir, shell

// ------------------------
// 2. Memory Information
// ------------------------
console.log("🧠 Total Memory (bytes):", os.totalmem());
console.log("💾 Free Memory (bytes):", os.freemem());

// ------------------------
// 3. CPU Information
// ------------------------
console.log("🖥️ CPU Info:", os.cpus());
// Returns an array of objects — one per logical CPU core

// ------------------------
// 4. OS Version & Release
// ------------------------
console.log("🪟 OS Version:", os.version());
console.log("🔓 OS Release:", os.release());

// ------------------------
// 5. Network Interfaces
// ------------------------
console.log("🌐 Network Interfaces:", os.networkInterfaces());
// Helpful for identifying IP addresses and adapters

// ------------------------
// 6. Machine Architecture
// ------------------------
console.log("🏗️ Machine Architecture:", os.machine());
// Example: 'x64' or 'arm64'

// ------------------------
// Bonus: Platform and Hostname
// ------------------------
console.log("🧭 Platform:", os.platform());
console.log("📛 Hostname:", os.hostname());
