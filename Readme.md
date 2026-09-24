ProjectTim2 — Website UMKM

Tentang Project:

website UMKM yang dibuat untuk menampilkan berbagai produk makanan dan minuman secara digital. Website ini menyediakan informasi produk seperti nama, harga, dan gambar sehingga pengguna dapat melihat katalog produk dengan lebih mudah. Project ini dikembangkan sebagai project kolaborasi tim menggunakan GitHub, dengan pembagian tugas berdasarkan role masing-masing anggota.

Website berfokus pada katalog produk makanan dan minuman UMKM dengan tampilan yang sederhana, informatif, dan mudah digunakan.

Anggota Tim:

| No | Nama    | Role                |
| -- | ------- | ------------------- |
| 1  | Abin    | Project Manager     |
| 2  | Kesya   | Front-End Developer |
| 3  | Bintang | UI/UX Designer      |
| 4  | Satria  | Back-End Developer  |
| 5  | Zafira  | Testing / QA        |

 UI/UX Design:
Desain antarmuka website dibuat menggunakan Figma sebagai acuan pengembangan Front-End.

Figma Link
https://www.figma.com/design/unCo5gKS0QHVujXDe4GCiZ/UI-UX-WEB-UMKM?node-id=13-2&t=bVHzTmryHMqpLqNz-0  

Fitur Website: 
* Landing Page
* Tampilan produk makanan
* Tampilan produk minuman dan dessert
* Gambar produk
* Informasi harga produk
* Tampilan website yang menyesuaikan desain UI/UX
* Integrasi data Front-End dengan Back-End
* Data produk melalui API
* Testing dan pengecekan fitur website

Teknologi yang Digunakan:

Front-End

* HTML
* CSS
* JavaScript

Back-End

* Node.js
* JavaScript
* JSON
* API

Design

* Figma

Version Control

* Git
* GitHub

Struktur Project:

```text
ProjectTim2/
│
├── assets/
│
├── data/
│   └── products.json
│
├── image/
│   ├── PECEL LELE.png
│   ├── PECEL AYAM.png
│   ├── AYAM SERUNDENG.png
│   ├── NASI KUNING.png
│   └── ...
│
├── JS/
│   └── index.js
│
├── src/
│   ├── input.css
│   └── output.css
│
├── about.html
├── dessertDrink.html
├── landingPage.html
├── mainCourse.html
├── package.json
└── server.js
```

------------------------------------------------------------------------------------------------

Cara Menjalankan Project:

1. Clone Repository

```bash
git clone https://github.com/Abinaya223/ProjectTim2.git
```

2. Masuk ke Folder Project

```bash
cd ProjectTim2
```

3. Install Dependency

```bash
npm install
```

4. Jalankan Back-End

```bash
node server.js
```

Pastikan server Back-End tetap berjalan selama proses pengujian.

5. Jalankan Front-End

Buka file:

```text
landingPage.html
```

Kemudian jalankan menggunakan **Live Server** melalui Visual Studio Code.

------------------------------------------------------------------------------------------------

Git Workflow:

Project ini menggunakan struktur branch:

```text
master
   │
   └── develop
         │
         ├── feature/frontend
         │
         ├── feature/pecel-api
```

Alur pengembangan:

```text
develop
   ↓
Membuat feature branch
   ↓
Coding
   ↓
Commit
   ↓
Push
   ↓
Pull Request → develop
   ↓
Code Review
   ↓
Perbaikan jika diperlukan
   ↓
Merge → develop
   ↓
Testing
   ↓
Merge develop → master
```

Setiap anggota mengerjakan tugas pada branch masing-masing dan tidak melakukan push langsung ke branch utama. Alur ini mengikuti aturan kolaborasi project yang menggunakan `develop` sebagai branch integrasi dan `feature/*` untuk tugas atau fitur tertentu.

Branch yang Digunakan:

| Branch              | Keterangan                                      |
| ------------------- | ----------------------------------------------- |
| `master`            | Branch utama untuk versi final project          |
| `develop`           | Branch utama untuk integrasi hasil pengembangan |
| `feature/frontend`  | Branch pengembangan Front-End                   |
| `feature/pecel-api` | Branch pengembangan Back-End/API produk         |

------------------------------------------------------------------------------------------------

Screenshot:

### Landing Page

<img width="430" height="650" alt="Screenshot 2026-09-24 114439" src="https://github.com/user-attachments/assets/0bf74d83-ce23-4c3b-b6b2-2d4b29498f3b" />

### Halaman Produk

<img width="358" height="650" alt="Screenshot 2026-09-24 114723" src="https://github.com/user-attachments/assets/9a21fc40-e69b-44a5-8dfc-94a8e7dabe18" />

### Halaman Dessert & Drink

<img width="327" height="650" alt="Screenshot 2026-09-24 114937" src="https://github.com/user-attachments/assets/b26e85b3-b64d-48ee-ab10-89ae3bca6f4a" />

### Halaman About

<img width="317" height="650" alt="Screenshot 2026-09-24 115214" src="https://github.com/user-attachments/assets/06e56c6a-6eeb-49e4-9a85-02d7f655e344" />

## Tujuan Project

Project ini dibuat untuk menerapkan proses pengembangan software secara kolaboratif menggunakan Git dan GitHub, mulai dari pembagian tugas, penggunaan branch, commit, Issue, Pull Request, code review, testing, hingga proses integrasi ke branch utama.

---

## Repository

Project ini dikembangkan oleh **ProjectTim2** sebagai project kolaborasi RPL.

**Project Manager:** Abin
**Tema:** UMKM — Website Produk Makanan
