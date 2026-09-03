import './style.css'
import { characters, getCharacter } from './characters.js'
import { createBanner } from './banner.js'

const app = document.querySelector('#app')
const params = new URLSearchParams(window.location.search)
const character = getCharacter(params.get('id') ?? '')

function renderMissing() {
  document.title = 'STREET FIGHTER 6 | キャラクターが見つかりません'
  app.innerHTML = `
    <div class="page page--narrow">
      <header class="hero">
        <p class="eyebrow">Street Fighter 6</p>
        <h1>キャラクターが見つかりません</h1>
        <p class="lede">指定されたファイターは一覧にありません。バナー一覧から選び直してください。</p>
        <a class="back-link" href="./index.html">バナー一覧へ戻る</a>
      </header>
    </div>
  `
}

function renderCharacter(selected) {
  document.title = `STREET FIGHTER 6 | ${selected.name}`
  const others = characters.filter((entry) => entry.id !== selected.id).slice(0, 3)

  app.innerHTML = `
    <div class="page">
      <a class="back-link back-link--top" href="./index.html">バナー一覧へ戻る</a>

      ${createBanner(selected, { interactive: false })}

      <article class="profile">
        <div class="profile__art">
          <img
            src="${selected.portrait}"
            alt="${selected.nameJa}（${selected.name}）の待機モーション"
            style="object-position: ${selected.objectPosition}"
          />
        </div>
        <div class="profile__body">
          <p class="eyebrow">${selected.nameJa}</p>
          <h1>${selected.name}</h1>
          <p class="tagline">${selected.tagline}</p>
          <p class="bio">${selected.bio}</p>
          <dl class="meta">
            <div>
              <dt>出身</dt>
              <dd>${selected.country}</dd>
            </div>
            <div>
              <dt>格闘スタイル</dt>
              <dd>${selected.style}</dd>
            </div>
            <div>
              <dt>タイプ</dt>
              <dd>${selected.type}</dd>
            </div>
            <div>
              <dt>操作難度</dt>
              <dd>${selected.difficulty}</dd>
            </div>
          </dl>
          <h2>代表技</h2>
          <ul class="moves">
            ${selected.moves.map((move) => `<li>${move}</li>`).join('')}
          </ul>
        </div>
      </article>

      <section class="more" aria-label="他のファイター">
        <h2>他のファイター</h2>
        ${others
          .map((entry) => createBanner(entry, { href: `./character.html?id=${entry.id}` }))
          .join('')}
      </section>

      <p class="footnote">
        非公式のファンメイドデモです。Street Fighter および関連する名称は株式会社カプコンの商標です。
      </p>
    </div>
  `
}

if (!character) {
  renderMissing()
} else {
  renderCharacter(character)
}