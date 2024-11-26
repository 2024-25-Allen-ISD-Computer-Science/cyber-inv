# Cyber Invitational

https://www.figma.com/design/5koEB8FCVJDM381Gn8Ag3e/Main-page?node-id=0-1&t=tZCmMGGGnCmNmbO1-1

## Getting Started

### Setup

First, enable corepack so you can run pnpm:

```bash
corepack enable
```

Ensure that you have node.js 20 or 22 (LTS) downloaded. **DO NOT USE NPM, PLEASE!**

### Database

This app relies on a postgres database. To get one locally, you can use docker. If you already have your own local instance, skip to the next section.

```bash
pnpm create-volume
pnpm create-db
```

This will run the necessary docker commands to start up the database. If you already have a DB container running or paused, start it with:

```bash
pnpm restart-db
```

### `.env`

Next, you'll need to **copy** the `.env.example` file, and then **rename _your_ copy** to `.env`.

The `DATABASE_URL` should be correct _unless_ you use your own postgres instance. If that is the case, paste the URL for your own instance in you `.env` file, which should be gitignored.

### Development

Lastly, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Team Members

Abel Semahagen - @1sparo1
Darrion Nguyen - @t1np0tb0y
Richard Jang - @o7
Tanay Sreedharan - @stuffysaturn
Advaiya Lad - @advaiyalad

## Goals

- [ ] Get Registration/Auth Published - **Due November 15, 2024**
