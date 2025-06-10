# Reverse Text Web Page - Project Instructions - CHATGPT https://chatgpt.com/

This project is a simple web page using HTML5 and JavaScript that reverses user input text and displays it in a modal. The project was developed iteratively with the following enhancements:

---

## 🟢 Step 1: Basic Version

**Features:**
- One text input
- One "Process" button
- Modal displays reversed text when button is clicked

**Technologies:**
- HTML5
- JavaScript (inline)

---

## 🟡 Step 2: Refactor JavaScript into `script.js`

**Changes:**
- Moved all JavaScript logic into an external `script.js` file
- Clean separation of concerns (HTML for structure, JS for logic)

---

## 🟠 Step 3: Show Button Only If Input > 3 Characters

**Changes:**
- Added `input` event listener to show/hide the button dynamically
- Button becomes visible only if user enters more than 3 characters

---

## 🔴 Step 4 (Final): Remove Button and Process on Typing

**Changes:**
- Removed the button entirely
- Reverses text and displays modal in real-time as the user types
- Modal is only shown if input has more than 3 characters
- Modal hides again if input drops to 3 or fewer characters

---