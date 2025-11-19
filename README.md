# 📝 ToDoList App

A simple and clean To-Do List application built with **HTML, CSS, and Vanilla JavaScript**.  
This project helped me practice DOM manipulation, event delegation, localStorage, and UI state management (filters, counters, etc.).

---

## 🚀 Features

### ✓ Add Tasks  
Users can input a task and add it to the list dynamically.

### ✓ Remove Tasks  
Each task includes a **Remove** button. When clicked, the selected task is deleted using **event delegation**.

### ✓ Mark as Completed  
Tasks include a checkbox that toggles their completion state.

### ✓ Task Filters  
Three filters allow the user to update the task view:
- **All** → Shows all tasks  
- **Active** → Shows only tasks without a check  
- **Completed** → Shows only tasks marked as done

Filtering is handled using **data attributes** and DOM traversal.

### ✓ Task Counter  
A dynamic counter shows how many tasks are still active (“X tasks left”).  
It updates automatically when tasks are added, removed, or checked.

### ✓ Persistent Storage (localStorage)  
Tasks are saved in the browser using **localStorage**, keeping content between page reloads.

---

## 🧠 What I Practiced / Key Concepts

### 🔹 DOM Manipulation
- Creating elements with `createElement()`
- Injecting HTML with `innerHTML`
- Toggling classes (`hidden`, `active`)
- Updating the UI dynamically

### 🔹 Event Delegation
Used on the task list container (`ul`) to detect clicks on dynamically created buttons.

### 🔹 Event Handling
- **click** events for add/remove/filter
- **change** events for checkboxes

### 🔹 Local Storage
Storing and retrieving tasks:
- `localStorage.setItem()`
- `localStorage.getItem()`
- JSON serialization with `JSON.stringify()` and `JSON.parse()`

### 🔹 Array Manipulation
Used to save, update, and filter the list of tasks.

---

## ⚙️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- Git / GitHub for version control

---

🧑‍💻 Author

Created with ☕ and JavaScript by Agustin Grosso.
Feel free to connect on GitHub!
