// Tracking parameter patterns bundled at build time. Nothing is fetched at runtime.
// Shared by web and (later) CLI. No UI here.
export const TRACKING_PARAMS = [
  /^utm_/,
  /^fbclid$/,
  /^gclid$/,
  /^s$/,
  /^a$/,
];

export function isTrackingParam(name) {
  return TRACKING_PARAMS.some((pattern) => pattern.test(name));
}

export function cleanUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const keep = [];
  for (const [name, value] of parsed.searchParams.entries()) {
    if (!isTrackingParam(name)) {
      keep.push([name, value]);
    }
  }

  parsed.search = "";
  for (const [name, value] of keep) {
    parsed.searchParams.append(name, value);
  }

  return parsed.toString();
}
