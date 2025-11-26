# ✅ Todo List with Theme & Done Tasks

A simple, clean, and beginner-friendly **front-end Todo List** built using **React**.

This project supports:
- 🌗 **Dark / Light theme toggle**
- 🌐 **English / Persian language switch (with animated slider checkbox)**
- ✅ **Move tasks to "Done Tasks" page**
- ↩️ **Undo completed tasks back to the active list**
- 📅 Display task date (no time shown in Done section)
- 📱 Sidebar navigation and responsive UI
- 🧩 Component-based React structure

---

## 🛠️ Tech Stack

- **React** (Functional Components + useState)
- **React Router DOM** (Multi-page navigation)
- **CSS** (Modern UI + Custom toggle switch)
- **Local assets/icons** (`/src/assets` folder)

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ TodoInput.jsx
 │   ├─ TodoItem.jsx
 │   ├─ Footer.jsx
 │   └─ DoneTasksPage.jsx
 ├─ assets/   (icons, images)
 ├─ App.jsx   (state lifted up here)
 ├─ App.css
 ├─ HomePage.css
 └─ DoneTasksPage.css
```

---

## ⚙️ How It Works (Logic Overview)

1. All main states (`tasks`, `doneTasks`, `theme`, `language`) are stored in `App.jsx` (**State Lift-Up concept**)
2. When the user completes a task → it moves from `tasks` to `doneTasks`
3. In Done Tasks page, each task shows only the **date and title**
4. Undo button removes the task from `doneTasks` and adds it back to `tasks`
5. Navigation using React Router **does not reset the states**, so data persists
6. The toggle switch controls UI texts and appearance, synced with the `language` state

---

## 🚀 Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Run the project:
   ```sh
   npm run dev
   ```

3. Open the app in your local browser

---

## ✅ Future Enhancements (Ideas)

- 💾 Save tasks in **localStorage**
- ✨ Add smooth animations (Framer Motion)
- 🔍 Search & better date filtering UI
- 🗂️ Sort options (by date, done status, etc.)

---

## 🤝 Contributing

Feel free to **fork**, improve, and send a **pull request** 💚  
All ideas and contributions are welcome!

---

## 👨‍💻 Creator

**Amir Mohammad**  
Front-End Developer | Interested in Web, Cloud Computing & AI  
Building step-by-step and learning every day 🙌
```
