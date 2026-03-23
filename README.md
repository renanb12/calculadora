# 🧮 iPhone Calculator Clone

A simple calculator inspired by the iPhone design, built using **HTML, CSS, and JavaScript**.

This project focuses on replicating both the **visual design** and the **behavior** of the native iOS calculator.

---

## 🚀 Features

* Basic operations:

  * Addition (+)
  * Subtraction (−)
  * Multiplication (×)
  * Division (÷)
  * Percentage (%)

* Real calculator behavior:

  * Starts with `0`
  * Automatically replaces the display when starting a new number
  * Prevents invalid inputs like `05`
  * Backspace (delete last digit)
  * Clear (reset calculator)

* UI:

  * iPhone-inspired layout
  * Responsive design (adapts to different screen sizes)
  * Custom font (SF Pro)

---

## 🎓 Context

This project was developed as part of a **study group from AGES (Agência Experimental de Engenharia de Software – PUCRS)**, in partnership with **Preto no Branco**.

AGES is a practical learning environment connected to PUCRS, focused on applying software engineering concepts in real projects.

The study group promotes collaboration, hands-on development, and knowledge exchange among students, in partnership with industry professionals.

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox)
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```
📁 calculator
 ├── index.html
 ├── style.css
 ├── script.js
 └── SFPRODISPLAYREGULAR.OTF
```

---

## ⚙️ How It Works

The calculator uses a state-based logic:

* `displayValue` → current number on screen
* `firstNumber` → stored value before operation
* `operator` → selected operation
* `waitingForSecondNumber` → controls when to reset the display

This allows behavior similar to real calculators, instead of just concatenating strings.

---

## 📸 Preview

<img width="534" height="886" alt="image" src="https://github.com/user-attachments/assets/2e2bd58c-9337-41a5-a411-a01007b6c874" />


---

## ▶️ How to Run

1. Clone the repository:

```bash
git clone https://github.com/renanb12/calculator.git
```

2. Open the project folder

3. Run the `index.html` file in your browser

---

## 💡 Future Improvements

* Keyboard support
* Animations (button press feedback)
* History of calculations
* Scientific calculator mode

---

## 👨‍💻 Author

Developed by **Renan Bernardo**

---

## 📄 License

This project is open-source and available under the MIT License.
