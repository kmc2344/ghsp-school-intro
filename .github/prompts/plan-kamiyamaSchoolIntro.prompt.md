## Plan: 神山高専紹介ページ

GitHub Pagesで公開する神山まるごと高専の紹介ページを、Astroベースの静的サイトとして1ページ構成で実装する。派手なフォント、大胆な配色、密度の高い装飾、動きのある見せ方で「シンプルからかけ離れた」トーンを作りつつ、情報設計はトップ、学校概要、カリキュラム、学生生活の4区画に整理する。初回公開では日本語のみ、公式素材なし前提で仮文言とダミービジュアルを使い、後から差し替えやすい構成にする。

**Steps**
1. Phase 1: プロジェクト基盤を作る。Astroプロジェクト一式を追加し、GitHub Pages配信用のbase設定、静的出力設定、npm scripts、必要ならTailwind設定を整える。これは全体の前提になるため最優先。
2. Phase 1: 共通レイアウトとグローバルスタイル方針を定義する。色、タイポグラフィ、背景モチーフ、セクション間のリズム、アニメーション方針をCSS変数またはテーマ定義としてまとめ、後続実装の基準にする。これは1に依存。
3. Phase 2: トップページを1ページ構成で実装する。ヒーロー、学校概要、カリキュラム、学生生活の各セクションを縦に配置し、ナビゲーションからスクロール移動できるようにする。これは2に依存。
4. Phase 2: 騒がしいデザイン要素を実装する。複数フォントの使い分け、強い色コントラスト、重なり表現、ステッカー風パーツ、走る見出し、スクロール時の軽いモーションなどを追加する。視認性を壊さない範囲で密度を高める。これは3と並行して一部進められるが、最終調整は3の後。
5. Phase 2: 画像素材未提供に対応する。装飾グラフィックはCSSやSVGで内製し、写真枠はダミー画像または抽象グラフィックで構成する。後から実画像へ差し替えやすいよう、素材参照箇所を分離する。これは3と並行可能。
6. Phase 3: GitHub Pages公開導線を整える。.github/workflows にデプロイワークフローを追加し、mainブランチへの反映でビルドと公開が通る状態にする。Astroの出力先とPages設定の整合を確認する。これは1に依存し、UI実装と並行可能。
7. Phase 3: 最低限のメタ情報を追加する。title、description、OG相当の基本メタ、faviconの仮配置、必要なら404ページを追加する。これは3に依存。
8. Phase 4: 文言と構造の差し替え容易性を確保する。紹介文、見出し、カード情報を1か所に集約するか、セクション単位のデータ定義に分離し、後続更新でHTML構造を触らず差し替えられるようにする。これは3に依存。
9. Phase 4: 最終確認を行う。ローカル表示、レスポンシブ、GitHub Pages配下のパス、セクション遷移、主要文言の視認性、コントラスト、ビルド通過を確認する。これは6と7と8に依存。

**Relevant files**
- /workspaces/ghsp-school-intro/.devcontainer/devcontainer.json — 既存のAstro前提、Node環境、ポート設定の確認元。
- /workspaces/ghsp-school-intro/README.md — セットアップ手順、公開方法、素材差し替え方法の記載先。
- /workspaces/ghsp-school-intro/package.json — Astro関連依存、scripts、Pages向けビルドコマンドの定義。
- /workspaces/ghsp-school-intro/astro.config.mjs — site/base、adapterまたは静的出力設定の中核。
- /workspaces/ghsp-school-intro/src/pages/index.astro — 1ページ構成のメイン実装。
- /workspaces/ghsp-school-intro/src/layouts/Layout.astro — head、メタ、共通背景、フォント読込の整理先。
- /workspaces/ghsp-school-intro/src/components — セクション見出し、カード、ステッカー、ナビゲーションなどの分割候補。
- /workspaces/ghsp-school-intro/src/styles/global.css — デザイントークン、背景、アニメーション、レスポンシブ調整の中心。
- /workspaces/ghsp-school-intro/public — favicon、ダミー画像、装飾SVGの配置先。
- /workspaces/ghsp-school-intro/.github/workflows/deploy.yml — GitHub Pages自動デプロイ設定。

**Verification**
1. npm install 後に npm run dev でローカル起動し、トップ、学校概要、カリキュラム、学生生活の各セクションが1ページ内で表示されることを確認する。
2. npm run build で静的ビルドが通ることを確認する。
3. GitHub Pages想定パスで崩れないか、base設定込みで生成ファイルの参照先を確認する。
4. スマホ幅とデスクトップ幅で、装飾が内容を隠さず、可読性が維持されることを確認する。
5. 強い配色と派手なタイポグラフィを使っても、主要な見出しと本文が読めるかを手動確認する。
6. main 反映後、GitHub ActionsのPagesデプロイが成功することを確認する。

**Decisions**
- 1ページ構成で進める。
- 初回公開は日本語のみ。
- 公式画像、ロゴ、正式文言は未提供のため、仮文言とダミー装飾で実装する。
- デザインは「派手なフォントを使い、シンプルから離れた見た目」を優先する。
- 公開先はGitHub Pages標準URLを前提にする。
- 今回のスコープに、お問い合わせフォーム、CMS、ニュース投稿機能、多言語切替は含めない。

**Further Considerations**
1. 公式ロゴや写真が後から届く場合は、差し替え箇所を components または data 定義に寄せておくと保守が楽になる。
2. 派手さを優先すると可読性が落ちやすいため、本文エリアだけは配色と行間を少し抑える方針が安全。
3. カスタムドメイン予定が後から出るなら、site設定とCNAME運用だけ追加で設計すれば足りる。
