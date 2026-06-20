# JS Practical Interview Questions

A growing collection of **practical JavaScript interview questions** with runnable
solutions. Each entry focuses on a concept that commonly comes up in frontend /
JavaScript interviews — output-prediction puzzles, polyfills, tricky language
behaviours, and "implement this from scratch" style challenges.

The goal is simple: **read the question, try it yourself, then compare with the
worked solution.**

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- A terminal and a code editor

Check your Node version:

```bash
node -v
```

---

## 🚀 Getting Started

Clone the repository and run the examples:

```bash
# clone
git clone <your-repo-url>
cd "JS Prectical Interview Questions"

# install (no runtime deps yet, but keeps things consistent)
npm install

# run the current examples
npm run dev
```

`npm run dev` runs `node src/index.js`. You can also run any file directly:

```bash
node src/index.js
```

---

## 📁 Project Structure

```
JS Prectical Interview Questions/
├── src/
│   └── index.js        # interview questions + worked solutions
├── package.json
├── .gitignore
└── README.md
```

> As more questions are added, they can be split into topic-based files
> (e.g. `src/closures.js`, `src/promises.js`, `src/polyfills.js`) and imported
> or run individually.

---

## 📚 Topics Covered

Questions are added over time. Current and planned areas include:

- [x] **`for...in` & `hasOwnProperty`** — why extending prototypes leaks into loops, and how to guard against it
- [x] **Custom array methods** — building your own `forEach`-style polyfills using `this`, `callback.call`, and `thisArg`
- [ ] Closures & scope
- [ ] `this` binding (`call` / `apply` / `bind`)
- [ ] Hoisting & the Temporal Dead Zone
- [ ] Promises, `async/await`, and the event loop
- [ ] Debounce & throttle
- [ ] Deep clone & object comparison
- [ ] Currying & function composition
- [ ] Polyfills (`map`, `filter`, `reduce`, `bind`, `Promise.all`)

---

## 🧠 How to Use This Repo

1. **Read the question** in the comments at the top of each block.
2. **Predict the output** or sketch the solution before scrolling down.
3. **Run the file** and check the console output against your guess.
4. **Read the solution** and the notes explaining *why* it behaves that way.

The learning happens when you attempt it first — don't skip step 2!

---

## 🤝 Contributing

This is a personal practice repository, but suggestions are welcome.
To add a new question:

1. Add the question as a comment, followed by your worked solution.
2. Keep each example self-contained and runnable.
3. Add a short note explaining the underlying concept.

---

## 📄 License

ISC — free to use for learning and practice.
