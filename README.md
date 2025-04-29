# 🃏 Card & Number Selector – Atomic Deck Assistant

This is a browser-based magician’s assistant built to simulate randomness while secretly guiding the magician using a structured, precomputed distribution derived from an **Atomic Deck**.

---

## 🎩 What This Tool Does

- Simulates the **random selection** of a card and a position in a deck (1–52)
- Displays a secret instruction for the magician, encoded as `0.ddss`:
  - `dd` = number of double cards dealt (tuples)
  - `ss` = number of single cards dealt
- Based on a **predefined table** (`cardRanges`) of **valid distributions** for an Atomic Deck when dealing cards **face up from the top of the deck**
- Allows the spectator to:
  - Randomize the card
  - Randomize the number
  - Or randomize both

Behind the scenes, the program ensures that **only valid deals** are allowed, so that the magician is always in control.

---

## 🧠 What is an Atomic Deck?

An **Atomic Deck** is a stacked deck used by magicians where cards are paired in controlled positions, often in **tuples** (doubles) and singles. This tool uses a model where:

- **Cards are dealt face up from the top of the deck**
- The deck contains controlled duplicates
- Only a subset of card–position pairs are allowed
- The `cardRanges` object defines all allowed combinations

---

## 🛠 How It Works

1. The magician presents this tool to the spectator.
2. The spectator selects (or randomizes) a **card** and a **position (1–52)**.
3. The program checks if the combination is valid according to the `cardRanges` table.
4. If valid, it displays the “popularity” value:
   ```
   Popularity of this combination is currently 0.ddss%
   ```
   - This is secretly a coded instruction for the magician:
     - `dd` = number of double cards (tuples) to deal
     - `ss` = number of single cards to deal

---

## 🧪 Example

If the output is:

```
Popularity of this combination is currently 0.0307%
```

The magician reads this as:

- 3 doubles (6 cards)
- 7 singles (7 cards)
- → Deal a total of **13 cards** from the top to reveal the selected one.

The spectator only sees a fake popularity percentage.

---

## 📦 File Overview

| File               | Description                                    |
|--------------------|------------------------------------------------|
| `index.html`       | The main UI and logic for the assistant        |
| `cardRanges` (JS)  | The precomputed valid stack mapping            |
| `style` (inline)   | Gradient background, responsive design         |
| `sparkleContainer` | Optional sparkle animation overlay             |
| `peek` div         | Shows the hidden instruction in disguise       |

---

## 💻 Technologies Used

- HTML5, CSS3
- Pure JavaScript (no frameworks)
- Mobile-first responsive design
- Optionally installable as PWA (requires manifest & service worker)

---

## ✅ Features

- Works entirely offline (when used with a Service Worker)
- Mobile-friendly interface
- Subtle visual animations
- Clean separation between spectator-facing interface and magician-only output
- Minimalist UI for live performance

---

## 🚀 Deployment

You can deploy this on GitHub Pages or any static hosting environment.  
To deploy on GitHub Pages:

1. Commit all files to your GitHub repo
2. Go to **Settings → Pages**
3. Select `main` branch and `/root` folder
4. Save and visit: `https://your-username.github.io/your-repo-name`

Make sure your favicon and manifest paths match your deployment path.

---

## 📜 License

This project is free to use and adapt for personal or professional performance purposes. Attribution is appreciated but not required.
