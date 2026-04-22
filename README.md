## 神山高専紹介ページ

Astro ベースの 1 ページ紹介サイトです。GitHub Pages での公開を前提に、派手なトーンのトップ、学校概要、カリキュラム、学生生活を 1 枚に整理しています。

### 開発

```bash
npm install
npm run dev
```

### ビルド

```bash
npm run build
```

### 公開

GitHub Actions による Pages デプロイを使います。現状は main と FirstPages への push で deploy workflow が走る設定です。

