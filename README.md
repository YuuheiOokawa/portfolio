# Yuuhei Okawa Portfolio

転職活動用のポートフォリオサイト（静的HTML/CSS/JS、ビルド不要）です。
[github.com/YuuheiOokawa](https://github.com/YuuheiOokawa) の公開リポジトリ9件をもとに構成しています。

## ローカルで見る

ビルド不要です。`index.html` をブラウザで直接開くか、簡易サーバーを立てて確認してください。

```bash
# 例: VSCode の Live Server 拡張機能で開く
# もしくは
npx serve .
```

## GitHub Pages で公開する

1. このディレクトリの内容を GitHub リポジトリ（例: `portfolio`）にプッシュする
2. リポジトリの Settings → Pages → Source を `main` ブランチ / `root` に設定
3. `https://YuuheiOokawa.github.io/portfolio/` で公開される

## 埋めるべきプレースホルダー

`index.html` 内に以下の TODO があります。転職活動に合わせて記入してください。

- ヒーローセクションの自己PR・経歴（`.hero-note`）
- Contact セクションの連絡先（メールアドレス等、公開して問題ないもの）

## プロフィールREADME（任意・おすすめ）

参考記事にもある通り、GitHubの自分のユーザー名と同名のリポジトリ（`YuuheiOokawa/YuuheiOokawa`）を
作成し `README.md` を置くと、GitHubプロフィールのトップに自己紹介が表示されます。
テンプレートを `profile-readme-template.md` に用意したので、コピーして新規リポジトリで使ってください。

## 掲載リポジトリ

| リポジトリ | カテゴリ | 技術 |
|---|---|---|
| [talkWithMe](https://github.com/YuuheiOokawa/talkWithMe) | Webアプリ | Next.js, PostgreSQL, Vercel Functions |
| [juniorSoccerSetting](https://github.com/YuuheiOokawa/juniorSoccerSetting) | Webアプリ | Next.js, Prisma, PostgreSQL |
| [NotePilot](https://github.com/YuuheiOokawa/NotePilot) | Webアプリ / PWA | Next.js, PWA, Vercel Cron |
| [exam-schedule](https://github.com/YuuheiOokawa/exam-schedule) | Webアプリ | Next.js, React, Node.js |
| [inakuro-db](https://github.com/YuuheiOokawa/inakuro-db) | Webアプリ | Next.js 16, Tailwind CSS v4 |
| [Rogue-Chronicle](https://github.com/YuuheiOokawa/Rogue-Chronicle) | ゲーム開発 | Next.js, Prisma/Neon, Auth.js |
| [arukana-brade](https://github.com/YuuheiOokawa/arukana-brade) | ゲーム開発 | React 19, Vite, Zustand |
| [DevQuest-Empire](https://github.com/YuuheiOokawa/DevQuest-Empire) | ゲーム開発 | Next.js, TypeScript |
| [javaSilver](https://github.com/YuuheiOokawa/javaSilver) | 学習コンテンツ | HTML, CSS, JavaScript |

## 参考

- [GitHubポートフォリオの作り方](https://ai-career-japan.jp/posts/github%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E4%BD%9C%E3%82%8A%E6%96%B9/)
