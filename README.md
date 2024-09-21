# Neda Software Engineering

## Introduction to Windows Subsystem for Linux (WSL2) Environment Setup

### Check Your Windows System Compatibility

Before installing the required tools, ensure your Windows system meets the necessary specifications.

**Action Item: Check Your Windows System Specifications**
1. Open the **Settings** application using the **Start** menu.
2. Select the **System** option.
3. Click on **About** at the bottom of the list.
4. Scroll down to the **Windows specifications** heading.
5. Verify that your **Edition** is one of the following:
   - Windows 10 Home
   - Windows 10 Pro
   - Windows 10 Server
   - Windows 11
6. Ensure that your **Version** is greater than or equal to **2004**.
7. Confirm that your **OS build** is greater than **19041.000**.

---

### Install Visual Studio Code (VS Code)

Visual Studio Code (VS Code) is a powerful text editor that provides useful extensions for developers, including an integrated terminal.

**Action Item: Install Visual Studio Code**
1. Open the [Visual Studio Code Download webpage](https://code.visualstudio.com/Download) in your browser.
2. Click on the **Windows** download option.
3. Download and run the Visual Studio Code installer.
4. Complete the installation process.

---

### Install Windows Subsystem for Linux (WSL) and Ubuntu

You will be using WSL and the Ubuntu Linux distribution for most of your development work.

**Action Item: Install WSL Features**
1. Search for the **Command Prompt** application using the **Start** menu.
2. Select **Run as administrator** from the right side of the search window.
3. Allow the program to make changes to your device and wait for the Command Prompt to open.
4. Type `wsl --install -d Ubuntu` and press `<Enter>`.
5. You should see the message: **"The requested operation is successful."**
6. Restart your computer to complete the installation.

**Check Your Work:** [Video Guide](https://youtu.be/w01AU7pl24w?si=5V8VsZPBrYI8VoDG)

---

### Install the "Ubuntu" Application

Now, you’ll install and set up the Ubuntu operating system.

**Action Item: Install Ubuntu**
1. Open the **Microsoft Store** application using the **Start** menu.
2. Search for **Ubuntu** (choose the option without a version number).
3. Click **Get** and **Install**. Wait for the installation to complete.
4. Open the **Ubuntu** application.
5. When prompted, **Enter new UNIX username:** and press `<Enter>`.
6. For **New password:** enter a password and press `<Enter>` (no text will be displayed).
7. Retype the same password and press `<Enter>`.
8. The terminal should output **"Installation successful!"**.

**Check Your Work:** [Video Guide](https://youtu.be/cmLjpYx1Ys8?si=Yl54Hb_e-4xO5fU9)

---

### Update WSL to Version 2

Now that WSL is installed, update it to version 2 and configure Ubuntu to use WSL 2.

**Action Item: Update to WSL 2**
1. Open the **Command Prompt** as an administrator (as done previously).
2. Type `wsl --set-default-version 2` and press `<Enter>`.
3. Type `wsl --status` to confirm the default version is set to 2.
4. Type `wsl --set-version Ubuntu 2` and press `<Enter>`.
5. Wait for the message: **"Conversion complete"** or **"This distribution is already the requested version."**
6. Type `wsl --list --verbose` to verify that Ubuntu is using version 2.

**Check Your Work:** [Video Guide](https://youtu.be/Thy8DJEb7Pk?si=IUDLhWgaKPmDHMYx)

---

### Configure VS Code to Work with WSL

Finally, configure Visual Studio Code to work with WSL.

**Action Item: Set Up VS Code**
1. Open **Visual Studio Code**.
2. Click **View** in the toolbar, then select **Extensions** or use the shortcut `<Control> + <Shift> + X`.
3. Search for **WSL** and click on the item that starts with **"Open any folder in the Windows Subsystem for Linux (WSL)"**.
4. Click the **Install** button.
5. Click **Terminal** in the toolbar, then select **New Terminal**.
6. If the dropdown in your terminal says **"1: powershell"**, click on it and choose **Select Default Profile**.
7. Select **Ubuntu (WSL)** to enable the Ubuntu terminal in VS Code.
8. Close the **Visual Studio Code** application.
9. Open the **Ubuntu** application.
10. Type `code` and press `<Enter>`.

**Check Your Work:** [Video Guide](https://youtu.be/UasRLsxCFRQ?si=YDP0FX5_eHzYl1v8)

---

## Configuring Git and GitHub on WSL2

### Create a GitHub Account

To work on and get credit for the labs and lessons during the program, you will need to sign up for a GitHub account if you don't already have one.

**Action Item: Create a GitHub Account**
1. Open the [GitHub signup webpage](https://github.com/join) in your browser.
2. Fill out the form to create your account.
3. Verify the email address connected to your GitHub account.

**Check Your Work:** [Video Guide](https://youtu.be/f2yf1RJUAp4?si=NqbxqULTZukGSdWy)

---

### Configure Git and GitHub

Git is the tool we will use to download and upload our work in labs and lessons. To avoid signing in every time, create a Secure Shell (SSH) key and associate it with your GitHub account.

**Action Item: Update Git**
1. Open the **Ubuntu** application using the **Start** menu.
2. Type `sudo add-apt-repository ppa:git-core/ppa` and press `<Enter>` to add a package repository for downloading the latest version of Git. Follow the prompts.
3. Type `sudo apt update` and press `<Enter>` to update your local repository cache.
4. Type `sudo apt install git` and press `<Enter>` to install the latest version of Git.

**Check Your Work:** [Video Guide](https://youtu.be/hgAurDMhKAc?si=b7eZtql1qP8qfULB)

---

**Action Item: Configure Git**
1. Open the **Ubuntu** application.
2. Type `git config --global color.ui true` and press `<Enter>`.
3. Type `git config --global user.name "Your Full Name"` and press `<Enter>`.
4. Type `git config --global user.email "your_email@example.com"` and press `<Enter>`.
5. Type `git config --global init.defaultBranch main` to set the default branch name to main.
6. Type `ssh-keygen` and press `<Enter>`. For each prompt, just press `<Enter>` (do not enter a passphrase).
7. Type `cat ~/.ssh/id_rsa.pub | clip.exe` and press `<Enter>` to copy your SSH key to your clipboard.
8. Open the [GitHub New SSH key form](https://github.com/settings/ssh/new) (you need to be logged in to GitHub).
9. Type **"My personal PC"** in the **Title** input field.
10. Paste the SSH key from your clipboard in the **Key** input field.
11. Click **Add SSH Key**.

**Check Your Work:** [Video Guide](https://youtu.be/bRCOqNaYnKQ?si=cI8uHG56LOQB2SBy)

---

## Conclusion

You have successfully set up your development environment using WSL2, Visual Studio Code, and GitHub. You’re now ready to start coding!
