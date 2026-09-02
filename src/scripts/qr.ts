import qrcode from "qrcode-generator";

/**
 * Renders a QR code for `url` as an SVG string.
 *
 * Always black-on-white regardless of theme - a QR code is a scan target,
 * not a themed surface, and low-contrast or inverted (light-on-dark) codes
 * fail to scan on a real phone camera under real light. The surrounding
 * modal chrome carries the brand instead; the code itself stays a plain
 * white card in both themes, matching how a printed QR code would look.
 */
export function renderQr(url: string): string {
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  return qr.createSvgTag({ cellSize: 6, margin: 12, scalable: true });
}
