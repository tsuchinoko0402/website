# OKAZAKI SHogo's Website

[岡崎　正悟](mailto:okazaki@zakioka.net) の個人サイトです。
## 利用技術

- TypeScript
- Gatsby
- microCMS
- Firebase

### 開発サーバ立ち上げ方法

- microCMS に利用登録し、API キーとサービス ID を取得する。
- 環境変数を設定する
    - `MICROCMS_API_KEY`: microCMS の API キーの値
    - `MICROCMS_SERVICE_ID`: microCMS のサービス ID
    - `GOOGLE_ANALYTICS_TRACKING_ID`: Google Analytics のトラッキング ID
- 以下のコマンドで開発サーバ立ち上げ

```shell
$ yarn develop
```

## ビルド方法

```shell
$ yarn build
```

## デプロイ方法

- Firebase にアカウント作成、プロジェクト作成を行い、 `.firebaserc` の設定を変更する
- 以下のコマンドでデプロイ

```shell
$ yarn deploy
```

- 現在は、 GitHub Actions でビルドとデプロイを自動化している。