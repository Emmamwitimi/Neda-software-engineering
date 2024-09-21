# Neda-software-engineering
### Introduction to Windows Subsystem for Linux (WSL2) Environment Setup
####Check That your Windows system is Compatible with Flatiron School's Requirements
When working on software, your computer and the software you're using must be compatible. In this step, we'll ensure that you are able to install all the tools that you will need to complete the program.

Action Item: Check your Windows System Specifications
1.Open the "Settings" application using the "Start" menu
2.Select the "System" option
3.Select "About" at the bottom of the list
4.Scroll down to the "Windows specifications" heading
5.Check that your "Edition" is one of the following: Windows 10 Home, Windows 10 Pro, Windows 10 Server, Windows 11
6.Check that your "Version" is greater than or equal to "2004"
7.Check that your "OS build" is greater than "19041.000"

####Install Visual Studio Code (VS Code) on Windows
Visual Studio Code (VS Code) is the tool that you'll use to edit your Ruby and JavaScript files. It is a text editor that provides some really useful extensions for developers. One such tool is an integrated terminal! This means that you can edit your code and use your terminal in the same window. Follow the steps below to get both set up.
1.Open the Visual Studio Code Download webpageLinks to an external site. 2.https://code.visualstudio.com/DownloadLinks to an external site. in your browser
3.Click on the Windows download option
4.Download and run the Visual Studio Code installer
5.Complete the installer

####Install Windows Subsystem for Linux (WSL) and Ubuntu
Now that we know your computer is ready for the rest of the environment setup, we can install Windows Subsystem for Linux (WSL) and the Ubuntu Linux distribution. You'll be doing the majority of your dev work using WSL and Ubuntu, so this step is critical to complete before moving ahead.
######Action Item: Install WSL Features
1.Search for the "Command Prompt" application using the "Start" menu
2.Select "Run as administrator" from the right side of the search window
3.Allow the program to make changes to your device and wait for the "Command Prompt" application to open
4.Type wsl --install -d Ubuntu and press <Enter>
5.The terminal should output "The requested operation is successful."
6.Restart your computer to complete the installation.
##########Check Your Work https://youtu.be/w01AU7pl24w?si=5V8VsZPBrYI8VoDG

####Action Item: Install the "Ubuntu" Application
You are ready to install and set up the Ubuntu operating system! Ubuntu is a Linux-based operating system and this is the application we'll use to run the remainder of the environment setup.

1.Open the "Microsoft Store" application using the "Start" menu
2.Search for "Ubuntu" (Note: do not choose "Ubuntu 16.04 LTS", "Ubuntu 18.04 LTS", or "Ubuntu 20.04LTS". Instead, choose the option that has no number next to it.)
3.Click "Get" and "Install" and wait for the application installation to complete
4.Open the "Ubuntu" application
5.When it says "Enter new UNIX username:" add a simple username and press <Enter> (Note: usernames may not start with a number, and may not include capital letters)
6.Where it says "New password:" add a simple password and press <Enter> (Note: you will not see any text when you are typing your password.)
7.Where it says "Retype new password:" retype the same password from before and press <Enter> (Note: store this password somewhere safe. You will need it to be able to run commands in the future)
8.The terminal should output "Installation successful!" and then print about 50 lines that you can ignore
#########Check Your Work https://youtu.be/cmLjpYx1Ys8?si=Yl54Hb_e-4xO5fU9

####Update the Windows Subsystem for Linux (WSL) to WSL 2
Now that we have the Windows Subsystem for Linux (WSL) enabled and we have the "Ubuntu" application installed, we can update WSL to version 2 and update the "Ubuntu" application to use WSL 2.

Action Item
1.Search for the "Command Prompt" application using the "Start" menu
2.Select "Run as administrator" from the right side of the search window
3.Allow the program to make changes to your device and wait for the "Command Prompt" application to open
4.Type wsl --set-default-version 2 into the terminal and press <Enter> (Note: you should see a message starting with "For information on key differences…")
5.Type wsl --status into the terminal and press <Enter>. You should see a message including "Default Version 2", which verifies that the default version has been set correctly.
6.Type wsl --set-version Ubuntu 2 into the terminal and press <Enter>
7.Wait for the "Conversion complete" or "This distribution is already the requested version" message in the terminal
8.Type wsl --list --verbose into the terminal and press <Enter>. You should see a message including "NAME Ubuntu VERSION 2", which verifies that the default version has been set correctly.
######## check your work https://youtu.be/Thy8DJEb7Pk?si=IUDLhWgaKPmDHMYx

####Configure VS Code to Work with WSL
Action Item
1.Open the "Visual Studio Code" application using the "Start" menu
2.Click "View" in the toolbar, then click "Extensions" in the dropdown menu, or use the shortcut <Control> + <Shift> + X
3.Search for "WSL" and click on the item in the list with a description that starts with "Open any folder in the Windows Subsystem for Linux (WSL) …". (Note that the name of the extension has been changed from "Remote - WSL" to just "WSL" since the video below was recorded.)
4.Click the "Install" button near the top of the page
5.Click "Terminal" in the toolbar, then click "New Terminal" (Note: a new terminal should appear at the bottom of your VS Code window)
6.If the dropdown in your terminal says "1: wsl", continue to step 9. Otherwise, click on the dropdown in the terminal that says "1: powershell" and choose "Select Default Profile"
7.A dropdown should appear at the top of your VS Code window
8.Click on "Ubuntu (WSL)" to enable VS Code to display your Ubuntu terminal
9.Close the "Visual Studio Code" application
10.Open the "Ubuntu" application using the "Start" menu
11.Type code and press <Enter>
#########Check Your Work https://youtu.be/UasRLsxCFRQ?si=YDP0FX5_eHzYl1v8




