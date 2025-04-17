# 1. ビルド用ステージ
FROM node:18 AS build

WORKDIR /app

# package.json & lockを先にコピーして依存解決
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install

# ソース全体をコピー
COPY . .

# 本番用にビルド（vite or CRA）
RUN npm run build

# 2. 開発用ステージ (開発環境)
FROM node:18 AS dev

WORKDIR /app

# package.json & lockを先にコピーして依存解決
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install

# ソース全体をコピー
COPY . .

# 開発サーバーを起動 (Vite や CRA 用)
CMD ["npm", "run", "dev"]

# 3. 本番用ステージ (軽量な nginx で配信)
FROM nginx:alpine AS production

# ビルド成果物をnginxの公開ディレクトリへ
COPY --from=build /app/build /usr/share/nginx/html

# Nginx ポート設定
EXPOSE 5173

# nginx を起動する
CMD ["nginx", "-g", "daemon off;"]
