/* Willow & Gild - /downloads. Static: each access code unlocks an AES-GCM-encrypted
   list of download links. No codes or links are readable in this file or the page. */
const WG_DL = {
  norm: c => (c || '').toUpperCase().replace(/[^A-Z0-9]/g, ''),
  hex: b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''),
  b64: s => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
  async id(code) { return this.hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode('wg-id:' + this.norm(code)))).slice(0, 24); },
  async key(code, salt) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(this.norm(code)), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 150000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  },
  async unlock(code, data) {
    const rec = data[await this.id(code)];
    if (!rec) return null;
    const k = await this.key(code, this.b64(rec.s));
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: this.b64(rec.i) }, k, this.b64(rec.c));
    return JSON.parse(new TextDecoder().decode(pt));
  }
};
if (typeof module !== 'undefined') module.exports = WG_DL;
