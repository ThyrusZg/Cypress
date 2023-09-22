# Cypress

This repository is holding cypress "framework" that was used to automate small test cases for Njuskalo.hr web page.

## How to start tests -> step by step guide

- First **node.js** must be installed on your computer. **https://nodejs.org/en** from this link you can download last stable version.
In my case, I used **18.16.0** version of node.js
- After **node.js** has be sucessfully installed on your computer, download **Visual Studio Code** link **https://code.visualstudio.com/download**
- After successfull instalation of **Visual Studio Code** create folder somewhere on your computer where you want to store project
- Open **Visual Studio Code** click on **File** -> **Open Folder** and select your created folder
- After successfully opening your empty folder in **Visual Studio Code** open terminal in visual studio code (bottom left corner of the screen)
- In terminal write following comand: **npm init**
- After that write package name, version, entry point,test command, git repository (if you have it), keywords, author and liscence. Note that some of the options will have the name prepared, you only need to accept it
- After you are done with writing it will generate json file and ask you **Is this OK? (yes)** , if you are happy with everything , type **yes**
- Check that you can open **package.json** newly generated file and check that data is inside, it should be
- Return to terminal and type following command: **npm install cypress --save-dev**
- After instalation of **cypress** is completed, open **package.json** file and under scripts add **"cypress:open" : "cypress open"** and save the changes
- In terminal type following command:**npm run cypress:open**
- In newly opened window select **E2E** testting button
- Click on **Continue** button if you have **next.js** configured, if not pick instalation of that
- Choose browser, for example pick **Google Chrome** and click on **Start e2e testing**
- Click on **Create new spec** and after suggested name and location of the file is given click on **Create Spec**
- After new popup window appears click on **Okay, run the spec** -> test should pass
- Close both **cyress** application and **Browser window** where test was executed
- Return to **Visual Studio Code** and click on **cypress** -> **e2e** and paste two folders located in this project at the same location (**practise** and **tests**)
- In terminal of **Visual Studio Code** run following command: **npm install -D @cypress/xpath**
- After instalation is successfull, in terminal run command: **npm run cypress:open** and start tests in **tests** by selecting them in specs

### Additional info

- test_data.json is holding informations that I didn't want to remember, but also in the future can be used as a storage for constants used in tests
- If tests are not executing, you can try to change your data with one provided in this project
