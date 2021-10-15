# アプリケーション名
### 読書の進捗管理アプリ

# アプリケーション概要
書籍に関する進捗状況やメモなどを一括で管理することができるアプリケーションです。

# 目指した課題解決
* 現在、読んでいる本をどれくらい読み終えたのかを分かりやすい形で把握すること。
* ただ書籍を読んで終わりではなく、アウトプットにも繋げられるような仕組みを構築したかった。

# 使用技術
* フロントサイド　React material-ui
* サーバーサイド　Node.js express
* データベース　mongodb
* デプロイ heroku

# Features

### ホーム (/)
![](https://user-images.githubusercontent.com/83949146/137431528-58550bc1-13a9-4652-8517-8d98fced09ff.png)
### 本棚 (/library)
![](https://user-images.githubusercontent.com/83949146/137431757-557cff2a-9600-4eba-8666-d9caab88a99e.png)
### ダッシュボード (/dashboard)
![](https://user-images.githubusercontent.com/83949146/137431824-c1fc7caf-cd4a-460c-ac6d-2480d744fe53.png)
### プロジェクト (/projects)
![](https://user-images.githubusercontent.com/83949146/137432010-41a06136-c239-4659-8604-bc3a0347fa51.png)
### プロジェクトの編集画面 (/project/:id)
![プロジェクト](https://user-images.githubusercontent.com/83949146/137431707-11a049e1-6645-4098-a2bc-579b86ed5222.png)
### サポート (/support)
一部修正中
### ログイン (/signin)
![](https://user-images.githubusercontent.com/83949146/137431399-21490315-8457-444c-bd48-009b6ef5bc7c.png)
### マイページ (/mypage)
![](https://user-images.githubusercontent.com/83949146/137431602-15012141-5594-4c16-9884-2737dfba7e27.png)


# URL
https://teelog.herokuapp.com

※初回アクセス時、多少時間がかかる場合があります。

#### デモ用アカウント

* ユーザー名: Guest
* メールアドレス: teelog@teelog.com
* パスワード: RustPython3
※ デモ用アカウントを使用される場合は、ユーザー情報を変更しないようお願いします。

# Usage

1. 上記リンクにアクセスするとホーム画面に遷移します。
2. ホーム画面では、書籍の検索と書籍情報の確認、本棚への登録ができます。
3. ヘッダーから各機能へのリンクがあります。

# 今後の課題

1. Typescriptの導入
2. testの追加
3. デザインをより良くする
