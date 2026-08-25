# Task 1
# 🤖 Four Servo Motors Control Using Arduino

## 📌 Project Description

In this project, I designed and tested an Arduino circuit in **Tinkercad** to control **four servo motors** at the same time.

The main idea was to program the motors to move together through a specific range. First, the servos rotate from **0° to 180°**, then return to their starting position at **0°**. At the end of the program, all four motors move to **90°**, where they stay as their final position.

This project helped me understand how servo motors can be connected to an Arduino and controlled using programmed angles.

---

## 🔧 Components Used

* Arduino Uno
* Breadboard
* 4 Servo Motors
* Jumper Wires
* Tinkercad Circuits

---

##  Circuit Design🖥️

The circuit was assembled and simulated using **Tinkercad**. The four servo motors were connected to the Arduino through the breadboard, with the required power, ground, and control connections.

**Circuit Preview**

-![Task1](Task1E.png)
## 🧪 Testing Process

### 1. Arduino Setup Test

I started by checking the Arduino setup and running a simple test to make sure the board was functioning correctly before adding all the motors.



https://github.com/user-attachments/assets/f391db2b-7a19-4c25-b44f-f30e0ab65dfb


### 2. Initial Servo Test

After confirming that the Arduino was working, I tested the servo connection and programmed the motor to rotate between **0° and 180°**, then return to **0°**.



https://github.com/user-attachments/assets/58ced596-a4d1-4703-a65a-fc418fe86851


### 3. Multiple Servo Control

Next, I connected the four servo motors and tested them together. All four motors responded to the same commands and moved simultaneously from **0° → 180° → 0°**.



https://github.com/user-attachments/assets/4db83406-0237-46f9-a64e-c3af44ce913f


---

## ⚙️ How the System Works

The Arduino sends control signals to each servo motor. The program determines the angle of rotation and makes the four motors perform the same movement at the same time.

The movement sequence is:

**0° → 180° → 0° → 90°**

The final position is **90°**, where all four servo motors remain stationary.


---

##  Tools & Technologies

* **Arduino Uno**
* **C++ / Arduino IDE code**
* **Tinkercad Circuits**

---
## ✨ Main Features

* Simultaneous control of four servo motors.
* Programmable servo angles.
* Movement between **0° and 180°**.
* Final positioning at **90°**.
* Arduino-based control system.
* Complete circuit simulation using Tinkercad.


# Task 2
# 🤖 Arduino 4 DC Motors Control using L293D

This project demonstrates how to control four DC motors using an Arduino Uno and two L293D motor driver ICs. The circuit was simulated using Tinkercad to understand how the Arduino can control the direction and movement of multiple motors.

## 📌 Project Description

The Arduino Uno is connected to two L293D motor drivers, with each driver controlling two DC motors. The motors are programmed to perform different movements automatically according to the programmed sequence.
<img width="1388" height="874" alt="Task2E" src="https://github.com/user-attachments/assets/dbb5667f-b6b8-4db7-80a9-daa396b20398" />


The movement sequence includes:

*  Moving forward for 30 seconds
*  Moving backward for 1 minute
* Turning right and left alternately for 1 minute

This task helped me understand the basic connection between the Arduino, motor drivers, and DC motors, as well as how programming can be used to control robot movement.

## 🛠️ Components Used

* Arduino Uno R3
* 2 × L293D Motor Driver IC
* 4 × DC Motors
* Breadboard
* Jumper Wires
* External Power Supply

## 💻 Simulation

The circuit was designed and tested using Tinkercad Circuits. The simulation shows the connections between the Arduino, L293D motor drivers, and the four DC motors.



https://github.com/user-attachments/assets/82b4a9ed-b5b3-4af8-850c-ad658a8485dc


## 🎯 What I Learned

Through this task, I learned the basics of DC motor control, how the L293D motor driver works, and how Arduino can be programmed to control the movement of multiple motors in a specific sequence.

