/**
 * Demonstrates how to use the Node.js 'url' module to:
 * - Parse a URL string
 * - Extract URL components
 * - Convert a URL object back to a string
 * - Work with ES module file paths
 * - Manipulate URL search parameters
 */

import url from "url";

// Demo URL string
const urlString = "https://www.google.com/search?q=hello+world";

// ------------------------
// 1. Parse URL String to Object
// ------------------------
const urlObj = new URL(urlString);

console.log("🔍 Parsed URL Object:");
console.log(urlObj);
/**
 * Output:
 * - href: The full URL string
 * - origin: Base URL (scheme + domain)
 * - protocol: URL scheme (e.g., "https:")
 * - host: Full host (domain + port)
 * - hostname: Domain only
 * - pathname: Path of the URL (e.g., '/search')
 * - search: The query string (e.g., '?q=hello+world')
 * - searchParams: URLSearchParams object for handling query params
 * - hash: The fragment identifier (if any)
 */

// ------------------------
// 2. Convert URL Object to String
// ------------------------
console.log("🔁 URL as String (formatted):");
console.log(url.format(urlObj)); // Converts object back to full string

// ------------------------
// 3. Working with import.meta.url (ESM only)
// ------------------------
console.log("📁 import.meta.url (this file):");
console.log(import.meta.url); // Returns the full file URL

console.log("🧭 Local file path:");
console.log(url.fileURLToPath(import.meta.url)); // Converts URL to system file path

// ------------------------
// 4. Manipulating URL Search Parameters
// ------------------------

console.log("\n🔧 Manipulating URL Search Params:");

// Initialize URLSearchParams object
const searchParams = new URLSearchParams(urlObj.search);

// Log the current query params
console.log("Original search params:");
console.log(searchParams.toString()); // Output: "q=hello+world"

// Add a new parameter
searchParams.append("lang", "en");
console.log("After appending 'lang':");
console.log(searchParams.toString()); // Output: "q=hello+world&lang=en"

// Update an existing parameter
searchParams.set("q", "nodejs tutorials");
console.log("After updating 'q':");
console.log(searchParams.toString()); // Output: "q=nodejs+tutorials&lang=en"

// Remove a parameter
searchParams.delete("lang");
console.log("After deleting 'lang':");
console.log(searchParams.toString()); // Output: "q=nodejs+tutorials"

// You can also get the value of a specific parameter
const queryValue = searchParams.get("q");
console.log("Value of 'q':", queryValue); // Output: "nodejs tutorials"
