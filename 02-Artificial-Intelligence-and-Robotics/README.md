# Artificial Intelligence and Robotics

This folder documents all tasks, activities, and learning outcomes related to the Artificial Intelligence and Robotics track during my summer training.

# Task 01-Image Classification using Teachable Machine
## Description

In this task, I created an image classification model using **Teachable Machine** with two classes:

- 🌵 Cactus
- 🌹 Flower
  
After training the model, I tested its predictions using sample images to evaluate its accuracy. The trained model was then exported and integrated into **Google Colab**, where the generated Python code was executed successfully for image classification.

## Workflow

1. Created two image classes:
   - Cactus
   - Flower
2. Collected training images.
3. Trained the model using Teachable Machine.
- ![Teachable machine](Teachablemachine.png)
4. Tested the model's predictions.
5. Exported the trained model.
6. Imported the model into Google Colab.
7. Executed the generated Python code.
8. Verified the classification results
- ![Google Colab Code](Task1.png)
- ![Google Colab Code](Task11.png)

## Results
- Successfully trained a two-class image classification model.
- Successfully executed the exported model in Google Colab.
- Verified that the model correctly classified the test images.
  
## Status
✅ Completed
## 📂 Task 01 Files

The following files are associated with **Task 01 – Image Classification using Teachable Machine**:

-  `Untitled2.ipynb` — Google Colab notebook containing the Python implementation.
-  `Teachablemachine.png` — Teachable Machine project overview.
-  `Task1.png` — Google Colab code (Part 1).
-  `Task11.png` — Google Colab code (Part 2).
-  `keras_model.h5` — Exported trained AI model.
-  `labels.txt` — Class labels used by the trained model.

 # Task 02 -👁️ Face Detection with OpenCV

Welcome to my second AI task! 🤖

In this project, I built a simple face detection program using **OpenCV**. The program detects human faces in an image and highlights each face with a green rectangle.

## 🚀 Tools
- Python 🐍
- OpenCV 👁️
- Visual Studio Code 💻

## 📁 Project Files
- `face_detection.py` 
- `Face.jpg`
- `haarcascade_frontalface_default.xml` 
- `Task2.png` 
- `Task2 VS CODE.mp4` – video.

## 📸 Preview

![Task2](Task2.png)

## 💡 What I Learned
- Working with OpenCV.
- Detecting human faces in images.
- Processing images using Python.
- Building a simple Computer Vision application.!


# Task 03- AI Voice Assistant Website🤖

## Project Description

For this task, I created a simple AI Voice Assistant website with a clean and modern design. The website allows users to interact using their voice by converting speech into text, generating a response, and then reading the response aloud. It also supports both Arabic 🇸🇦 and English 🇺🇸, making the experience more flexible and user-friendly.
![Task3](Task3.png)
![Task32](Task32.png)

## Project Workflow🚀 
1- Select the preferred language (Arabic or English).
2- Click Start Recording and speak.
3- The speech is converted into text.
4- The assistant generates a suitable response.
5- The response appears on the screen.
6- The response is played back using Text-to-Speech.

 ## Tools Used
- Lovable AI
- Speech Recognition
- Text-to-Speech

## Result
The final website successfully demonstrates the complete workflow of an AI Voice Assistant in a simple and interactive way. It provides a smooth user experience with bilingual support, making voice interaction easy and enjoyable.

أكيديي 😭🤍 هذا نفس المحتوى **بالإنجليزي** وبأسلوب بسيط وطبيعي، كأنه توثيقك أنتِ للمهمة، مع التفاصيل من أول خطوة إلى النتيجة النهائية:

# Task 4– Installing ROS 2 Humble

## 🌱 Introduction

In this task, I installed **ROS 2 Humble** and prepared the environment to use ROS in the upcoming robotics tasks.

Since my computer uses **Windows**, I used **WSL2 (Windows Subsystem for Linux)** to run Ubuntu inside Windows. After that, I installed **Ubuntu 22.04** and then installed and configured **ROS 2 Humble**.

---

## 🛠️ Steps I Followed

### 1. Opening Windows PowerShell

First, I opened the **Start menu** in Windows and searched for:

**PowerShell**

Then, I right-clicked on it and selected:

**Run as administrator**

I did this because I needed administrator permissions to install and configure WSL.

---

### 2. Installing WSL

After opening PowerShell as administrator, I used the following command:

```bash
wsl --install
```

This command installs **Windows Subsystem for Linux (WSL)**, which allows me to run a Linux environment directly inside Windows.

After the installation, I restarted my computer to apply the changes.

---

### 3. Checking WSL

After restarting the computer, I opened **PowerShell** again and checked the WSL status using:

```bash
wsl --status
```

This helped me make sure that WSL was installed and ready to use.

---

### 4. Installing Ubuntu 22.04

Next, I installed **Ubuntu 22.04 LTS** through WSL using:

```bash
wsl --install -d Ubuntu-22.04
```

I waited until Ubuntu finished downloading and installing.

After the installation was completed, Ubuntu asked me to create a user account, so I created a username and password.

---

### 5. Setting Up the Ubuntu User

After creating the account, I opened Ubuntu and the Ubuntu Terminal appeared.

I had a small issue with the password, so I used the **root account** to reset the password. After that, I returned to my normal user account.

Once this was done, Ubuntu was working normally and I was able to run Linux commands.

---

# 🐧 Preparing Ubuntu

### 6. Updating Ubuntu

After entering Ubuntu, I started by updating the system packages:

```bash
sudo apt update
```

Then, I upgraded the installed packages using:

```bash
sudo apt upgrade -y
```

I waited until the update and upgrade processes were completed.

---

### 7. Installing Required Packages

Next, I installed the packages needed to continue with the ROS 2 installation:

```bash
sudo apt install software-properties-common curl
```

These packages were needed to help add the ROS 2 repository and download the required files.

---

# 🤖 Installing ROS 2 Humble

### 8. Adding the ROS 2 Key

After that, I added the ROS 2 repository key using:

```bash
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
```

---

### 9. Adding the ROS 2 Repository

Then, I added the ROS 2 repository for Ubuntu 22.04 using:

```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

---

### 10. Updating the Package List Again

After adding the ROS 2 repository, I updated the package list again:

```bash
sudo apt update
```

This allowed Ubuntu to recognize the new ROS 2 packages.

---

### 11. Installing ROS 2 Humble Desktop

After preparing the repository, I installed **ROS 2 Humble Desktop** using:

```bash
sudo apt install ros-humble-desktop
```

The installation took some time because ROS 2 includes many required packages and dependencies.

After the installation was completed, ROS 2 Humble was successfully installed on Ubuntu.

---

# ⚙️ Configuring ROS 2

### 12. Activating ROS 2

After installing ROS 2, I activated the ROS 2 environment using:

```bash
source /opt/ros/humble/setup.bash
```

Then, I added this command to the `.bashrc` file so that ROS 2 would be automatically configured whenever I open Ubuntu:

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

After that, I applied the changes using:

```bash
source ~/.bashrc
```

---

# ✅ Final Check

Finally, I needed to make sure that ROS 2 was installed and configured correctly.

I used:

```bash
echo $ROS_DISTRO
```

The result was:

```text
humble
```

🎉 This confirmed that **ROS 2 Humble was successfully installed and configured**.

---

# 💡 What I Learned

Through this task, I learned how to:

* Use **Windows PowerShell**.
* Install and use **WSL2**.
* Install **Ubuntu 22.04** inside Windows.
* Work with the **Ubuntu Terminal** and Linux commands.
* Update and install packages using `apt`.
* Add the ROS 2 repository and its key.
* Install **ROS 2 Humble Desktop**.
* Configure ROS 2 to start automatically.
* Check and verify that ROS 2 is working correctly.

---

## 🎯 Final Result

**ROS 2 Humble was successfully installed and configured on Ubuntu 22.04 using WSL2.** 🤖✨

The final check showed:

```text
humble
```
-[Task4](Task4.png)

