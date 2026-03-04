# Album Browser

Lab 6: Routing & HTTP — Angular Album Browser using Router and HttpClient with the JSONPlaceholder API.

## How to run

1. Install dependencies (if needed):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   ng serve
   ```

3. Open [http://localhost:4200/](http://localhost:4200/) in your browser. The app redirects to `/home`.

## Features

- **Routing:** Home, About, Albums list, Album detail, Album photos
- **HTTP:** All data via `AlbumService` and HttpClient (JSONPlaceholder)
- **CRUD:** List albums, view/edit album title, delete album (UI updates; API is simulated)
- **UI:** Navigation bar with active link highlight, loading states, responsive photo grid

## Project structure

- `src/app/models/` — `Album` and `Photo` interfaces
- `src/app/services/album.service.ts` — API calls (getAlbums, getAlbum, getAlbumPhotos, updateAlbum, deleteAlbum)
- `src/app/components/` — Home, About, Albums, AlbumDetail, AlbumPhotos

Do not push `node_modules/` (excluded via `.gitignore`).
