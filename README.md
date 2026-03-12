# 🖼️ Image Upload App

`Image Upload App` is a fullstack application that lets users upload images to Cloudinary, store data in PostgreSQL, and view uploaded images in real time on a web interface.

The project has two parts:
- `web`: Next.js frontend for image upload/preview and comments.
- `api`: NestJS backend for handling uploads and managing image/comment data.

## ✨ Main Features

- Upload images from your computer (supports drag-and-drop and file picker).
- Store uploaded images on Cloudinary via the backend.
- Fetch and display all uploaded images on the home page.
- Add comments to each image.

## 🧰 Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, SWR, Shadcn Ui.
- **Backend**: NestJS, TypeScript, TypeORM, PostgreSQL, Multer.
- **Cloud storage**: Cloudinary.

## 🚀 How to Run

### 🧩 1) Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended).
- npm.
- PostgreSQL (local or remote).
- A Cloudinary account.

### ⚙️ 2) Environment Variables

Create `.env` files from the examples:

```bash
cp api/.env.example api/.env
cp web/.env.example web/.env
```

Then update values in `api/.env`:
- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`, `DB_SYNC`
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_FOLDER`

And in `web/.env`:
- `PORT=3000`
- `BE_URL=http://localhost:3001`

### 📦 3) Install Dependencies

```bash
cd api && npm install
cd ../web && npm install
```

### 🛠️ 4) Run Backend

```bash
cd api
npm run dev
```

Backend default URL: `http://localhost:3001`

### 💻 5) Run Frontend

Open another terminal:

```bash
cd web
npm run dev
```

Frontend default URL: `http://localhost:3000`

### 🔎 6) Access the App

- Web: `http://localhost:3000`
- Swagger: `http://localhost:3001/api-docs`
