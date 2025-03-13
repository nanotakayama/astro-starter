# Astro 4.0 Static
Astroとは静的なWebサイトの作成に特化したWebフレームワーク  
JavaScriptをビルド時に排除することで高速なWebサイトを作成可能  
使い方・作成の手順は一通り下記を参照し、拡張する場合は公式ドキュメントを参照(https://docs.astro.build/en/getting-started/)
 

## 特徴
・Astroファイル内にHTML,CSS,Javascriptを全てまとめられる
・ビルド後のHTMLに不要なファイルを取り除くことができるため、表示などのパフォーマンスが凄まじい  
・LP,ポートフォリオ,コーポレートサイトの作成に有効的（幅広く言えばアプリ以外）  
・またReact、Preact、Svelte、Vueなどの有名なフロントエンドフレームワークをサポートしているため、制作の幅が広い 


## 開発仕様
Astroで構築したものをHTMLへ変換しWebへ表示。   
CSS設計は「FLOCSS」を採用。  

Vscodeを使用している人は以下のプラグインのインストールを推奨
```
・Astro（https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode）
言語モードにAstroを追加

・Astro Snippets（https://marketplace.visualstudio.com/items?itemName=SheltonLouis.astro-snippets）
Astro構築が快適になるスニペットセットを追加
```


## 動作環境
```
node: 22.3.0
npm: 9.6.7
(asdfでバージョン管理)
```


## 使用方法
1.gitよりclone,もしくはzipfileで保存  
2.フォルダをコピーし、用途に併せフォルダ名を変更  
　※ cloneの際はこの開発環境を上書きしないようにするためコピー必須  
3.開発準備の手順を進める


## 開発準備
- Node.js バージョン
  ```sh
  node -v
  ```

  ```sh
  v22.3.0
  ```

- npm パッケージインストール
  ```sh
  npm i
  ```

- npm ビルド (publicを生成するために必要)
  ```sh
  npm run build
  ```

- npm 環境起動
  ```sh
  npm run dev
  ```


## ディレクトリ構成
```
src
├── assets
│   ├── images
│   ├── scripts
│   └── styles
│       ├── foundation
│       └── object
│           ├── component
│           ├── layout
│           ├── project
│           └── utility
├── components
├── layouts
└── pages
```
- images  
  画像を格納

- scripts  
  パーツ化以外で使用するjsを個別ファイルとして使用したい場合に使用  
  読み込みの記述を忘れないように

- styles/founfation  
  mixin,変数を指定するファイルを格納  
  ある程度用意しているものからカスタムして使用することが可能

- styles/object  
  astroファイルに書かず、各要素/パーツを個別ファイルとして使用したい場合に使用

- components  
  パーツ類のAstroを格納

- layouts  
  ページに必要なテンプレート類のAstroを格納

- pages  
  ページ単位のAstroを格納。初期はindex.astro


## その他
- FLOCSSの命名規則
```
Layout：l-*
Component：c-*
Project：p-*
Utility：u-*
JS関連: js-*,is-*
```

- 画像命名ルール(参考程度)
```
bg-main_section（背景 bg-）
hero-top_slide（メインビジュアル hero-）
logo-brand_name （ロゴ logo-）
title-about （タイトル title-）
txt-about_desc （文章 txt-）
icon-open （アイコン icon-）
chart-access （グラフ・リスト chart-）
bnr-campaign （バナー bnr-）
thm-single（サムネイル・アイキャッチ thm-）
img-project（一般的な画像 img-）
img-project_0001 （連番2桁か4桁をよく使う）
img-project_off （on・off）
img-project_sp （sp）
img-project_2x （2x）
```