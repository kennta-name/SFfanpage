export function createBanner(character, { href, interactive = true } = {}) {
  const tag = href ? 'a' : 'div'
  const extraAttrs = href
    ? `href="${href}"`
    : `role="group"`

  return `
    <${tag}
      class="banner${interactive && href ? ' banner--link' : ''}"
      ${extraAttrs}
      aria-label="${character.name} の特設ページへ"
    >
      <span class="banner__line banner__line--top" aria-hidden="true"></span>
      <span class="banner__face">
        <img
          src="${character.portrait}"
          alt="${character.nameJa}（${character.name}）の待機モーション顔写真"
          style="object-position: ${character.objectPosition}"
        />
      </span>
      <span class="banner__name">${character.name}</span>
      <span class="banner__blank" aria-hidden="true"></span>
      <span class="banner__line banner__line--bottom" aria-hidden="true"></span>
    </${tag}>
  `
}