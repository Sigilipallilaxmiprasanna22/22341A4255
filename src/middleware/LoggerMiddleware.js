const TEST_SERVER_URL = "https://example-test-server.com/log"; // replace with actual test server URL

/**
 * Custom reusable logging middleware for frontend/backend
 * @param {string} stack - Where the log is coming from (component/hook/page)
 * @param {string} level - Log level (INFO, WARN, DEBUG, ERROR)
 * @param {string} packageName - Package name (component, hook, api, etc.)
 * @param {string} message - Descriptive log message
 */
export async function Log(stack, level, packageName, message) {
  const logPayload = {
    timestamp: new Date().toISOString(),
    stack,
    level,
    package: packageName,
    message,
  };

  try {
    await fetch(TEST_SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logPayload),
    });
  } catch (err) {
    // fail-safe local warning so app doesn't break
    console.warn("[CustomLogger] Could not send log:", err.message, logPayload);
  }
}