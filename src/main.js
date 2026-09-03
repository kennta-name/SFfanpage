import './style.css'
import { characters } from './characters.js'
import { createBanner } from './banner.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <p class="eyebrow">Street Fighter 6</p>
      <h1>キャラクター特設バナー</h1>
      <p class="lede">
        横長バナーをタッチすると、各ファイターの特設ページへ移動します。
        左に待機モーションの顔写真、中央にローマ字名、右は黒から青へのフェードです。
      </p>
    </header>

    <section class="roster" aria-label="キャラクターバナー一覧">
      ${characters
        .map((character) => createBanner(character, { href: `./character.html?id=${character.id}` }))
        .join('')}
    </section>

    <p class="footnote">
      非公式のファンメイドデモです。Street Fighter および関連する名称は株式会社カプコンの商標です。
    </p>
  </div>
`