# Untrack URL

Strip tracking elements from any URL, privately.

Links often carry tracking parameters (`utm_*`, `fbclid`, `gclid`, etc.)
that tell sites and advertisers where you came from. untrackurl removes
them so you can share and open clean links.

## Privacy by design

- Runs entirely on your device: nothing is sent anywhere
- No analytics, no logging, no third-party scripts
- Rules are bundled at build time, so there are no runtime fetches
- Open source, so you can verify all of the above

## Usage

### CLI

    untrackurl "https://example.com/page?utm_source=news&id=42"
    # https://example.com/page?id=42

### Web

Paste a link, get a clean link. Cleaning happens in your browser.

## Status

Early development.

## License

TBD# untrackurl