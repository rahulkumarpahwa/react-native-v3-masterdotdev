1. What is the recommended method for checking the installed Node version?
1. Use the command node-v to check the installed Node version, and aim to use a long-term support (LTS) version, which are typically even-numbered versions like 18, 20, or 22.

2. What is npx and what is its primary purpose?
2. npx is a Node package executor that comes pre-installed with Node. It allows executing packages from the Node package repository without installing them globally on the machine.

3. What command is used to create a new Expo React Native project?
3. The command is npx create-expo-app, optionally with flags like --template to specify a template and the package manager of choice.

4. What are the key considerations when choosing a package manager for a React Native project?
4. For React Native projects, ensure the package manager supports node modules linking, especially for iOS and Android native directories. Some modern package managers like Yarn Modern and pnpm may require configuration like 'node linker hosted' to work correctly.

5. What is the recommended approach for understanding a new CLI command?
5. Run the command with the -Help flag, which typically provides documentation, available options, and usage instructions for the script.

6. What are the two main components of a React Native app?
6. A React Native app consists of a JavaScript side and a native app side

7. How can you start the Expo packager for a React Native project?
7. You can use commands like 'npx expo start', 'yarn start', or 'npm run start'

8. What is the main difference between accessing the debug menu on iOS and Android in Expo Go?
8. On iOS, you hold three fingers on the screen to open the debug menu, while on Android, you shake the phone

9. What is TypeScript in relation to JavaScript?
9. TypeScript is a superset of JavaScript that adds type information, and all JavaScript code is valid TypeScript code

10. What is the workaround if you cannot connect to Expo Go on the same Wi-Fi network?
10. Run the start command with '--tunnel' option, which uses Ngrok to expose the bundler externally to the internet