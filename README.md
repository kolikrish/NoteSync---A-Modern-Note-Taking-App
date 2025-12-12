# 📝 NoteSync – A Modern Note-Taking App

**NoteSync** is a modern note-taking web app powered by **React**, **TypeScript**, and **Supabase**. It enables users to **create**, **sync**, and **manage** notes securely in **real-time**. Designed for speed and simplicity, NoteSync ensures your thoughts and ideas are always saved, accessible, and synced across devices effortlessly.

🔗 **Live Preview**: [https://note-sync-supabase.vercel.app/](https://note-sync-supabase.vercel.app/)

---

## 🚀 Features

- ✅ **User Authentication** (Sign up / Log in via Supabase Auth)
- 🧠 **Real-Time Note Syncing**  
- 📝 **Create, Edit, Delete Notes**
- 💾 **Cloud Storage** using Supabase Database
- 🌙 **Dark Mode** Friendly UI (if implemented)
- 📱 **Responsive Design** – Mobile & Desktop Ready
- 🧩 **Component-Based Architecture** using React

---

## 🛠 Tech Stack

### Frontend:
- **NextJs** – Component-based UI
- **TypeScript** – Strongly-typed JS for reliability
- **Tailwind CSS** – Utility-first styling (if used)

### Backend (BaaS):
- **Supabase**
  - 🔐 Auth – Secure email/password sign-up & login
  - 🗃️ Database – Real-time syncing of notes
  - ☁️ Storage – (Optional: file/image uploads)

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- npm or yarn
- A [Supabase](https://supabase.com/) project with:
  - Supabase URL
  - Public anon key
  - Auth enabled
  - A `notes` table (with relevant fields)

---

### Installation

```bash
# Clone the repository
git clone 

# Navigate into the project
cd note-sync

# Install dependencies
npm install
# or
yarn install

# Create a `.env` file and add your Supabase credentials

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Start the app
npm run dev
# or
yarn dev
