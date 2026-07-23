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

11. What is the primary role of the React Native framework?
11. The React Native framework provides tools and libraries not included by default in React, such as navigation, push notifications, data storage, and other essential mobile app functionalities.

12. What are the key requirements for a React Native framework?
12. A React Native framework must be open source, popular, free, have no vendor lock-in, and not require paid features to use the core functionality.

13. What limitations does vanilla React Native have out of the box?
13. Vanilla React Native lacks built-in support for navigation, push notifications, data storage across app launches, camera access, changing app icons, and building app bundles for store release.

14. What is the purpose of Expo Go?
14. Expo Go is a sandbox environment designed for learning, prototyping, and getting started quickly with React Native, and is not recommended for building production apps.

15. What core building blocks does React Native provide by default?
15. React Native provides basic components like Text, View, ScrollView, and Lists out of the box, along with the ability to run React JavaScript code on iOS and Android platforms using native components.

16. What command can be used to set up linting in Expo SDK 51?
16. npx expo Lint

17. What are the key benefits of using Prettier?
17. Prettier allows developers to focus on writing code by automatically formatting and handling code style, reducing manual formatting decisions

18. How can Prettier errors be automatically fixed?
18. By running the Lint command with the --fix flag, or by using an editor like VS Code with an ESLint plugin that auto-fixes on save

19. What configuration file can be created to change Prettier's default quote preference?
19. .prettierrc.js

20. What does integrating Prettier with ESLint do?
20. It extends the Prettier configuration and adds the Prettier plugin so that Prettier formatting errors are displayed as ESLint errors

21. What is the equivalent of a div in React Native?
21. View component is the equivalent of a div in React Native

22. What component must all text be wrapped in within React Native?
22. Text component

23. What is the default flex direction in React Native?
23. Column (unlike web, which defaults to row)

24. What units are used for styling dimensions in React Native?
24. Display points, which vary by device pixel density

25. How are styles created in React Native?
25. Using JavaScript objects, typically created with StyleSheet.create(), with no built-in CSS modules or variables

26. What are the two most commonly used components for creating buttons in React Native?
26. TouchableOpacity and Pressable

27. What prop can be used to adjust the opacity effect when pressing a TouchableOpacity?
27. activeOpacity

28. What React Native method is used to create an alert dialog?
28. Alert.alert()

29. What are the three arguments typically passed to Alert.alert()?
29. Title, subtitle/description, and an array of button options

30. What are the typical style options for button options in an alert?
30. 'destructive' (usually for dangerous actions like delete) and 'cancel'

31. What is the purpose of creating components in React Native?
31. To create a modular app structure and prevent files like app.tsx from becoming massive and difficult to manage

32. How do you define a prop as optional in TypeScript?
32. By adding a question mark (?) after the property name in the type definition, such as name?: string

33. How can you embed dynamic values into a string in JavaScript?
33. By using backticks () and embedding values with ${variableName}` syntax

34. What does StyleSheet.create() primarily do in development mode?
34. It performs validation to ensure the styles passed are valid and will not cause crashes

35. How do you pass props to a component in React Native?
35. By passing an object with named properties when rendering the component, and then destructuring those properties in the component's function definition

36. How can you conditionally apply styles in React Native using an array of style objects?
36. You can pass an array of style objects and include 'undefined' for optional styles. This allows you to conditionally apply styles by adding styles to the array or passing 'undefined' when the condition is not met.

37. What is a shorthand way to pass a 'true' boolean prop in React Native?
37. For boolean props, instead of isCompleted={true}, you can simply use isCompleted. This is a concise syntax specifically for boolean properties that are true.

38. How can you add a text decoration to mark an item as completed?
38. Use textDecorationLine: 'line-through' and textDecorationColor to create a visual indication of a completed item by crossing out the text with a specific color.

39. How do you handle optional style properties in React Native?
39. You can pass 'undefined' as a style, which allows you to conditionally apply styles without causing errors. This means you can use an array of styles with conditional logic by including 'undefined' when a condition is not met.

40. What is a recommended approach for using icons in mobile UIs?
40. Use icon buttons instead of text, which makes mobile apps feel nicer and allows less text on the screen. Expo icons library is a convenient way to quickly add icons to an app.

41. What potential performance issue exists when using SVGs in React Native?
41. SVGs can be performance-intensive, especially on Android. If an app uses many SVGs, it might slow down significantly. Small PNGs are often preferred for rendering icons in React Native.

42. Why use npx expo install instead of standard package managers like npm or yarn?
42. npx expo install ensures SDK compatibility, checking that the library being installed works with the current Expo SDK version. This helps prevent version conflicts with native modules.

43. What determines which package manager (yarn, npm, pnpm) is used during installation?
43. The lock file in the project determines the package manager. If a yarn.lock file exists, yarn will be used; if package-lock.json exists, npm will be used; if pnpm-lock.yaml exists, pnpm will be used.

44. What alternative methods exist for adding icons in a React Native application if Expo icons are not suitable?
44. Alternatives include using react-native-svg for SVG icons, Expo Image for rendering SVGs, or importing custom SVG icons from various icon libraries and websites.

45. What are the three main navigation concepts in mobile apps that differ from web navigation?
45. Bottom tabs, modals, and stack navigator

46. How does file system-based routing in Expo Router work for determining screen and URL paths?
46. File and folder names dictate screen names and URLs, with the app folder as the root. For example, an index.tsx becomes the root, a home folder becomes /home, and a products folder becomes /products

47. What is the purpose of a layout file in Expo Router?
47. A layout file (named _layout.tsx) tells how screens in a folder should be laid out, such as defining navigation type (stack, tab, modal) and adding headers

48. What is the significance of the scheme in mobile app deep linking?
48. The scheme allows a mobile app to register and listen for specific URL intents, enabling apps to respond when a particular URL scheme is triggered

49. What library helps handle safe areas in mobile app development?
49. react-native-safe-area-context, which identifies the safe area of the screen to use for content placement

50. What is the default navigation behavior in Expo Router when moving between screens?
50. By default, screens are rendered in a stack, with new screens rendering on top of previous screens. When navigating back, it returns to the previous screen.

51. What are the three main ways to navigate between screens in Expo Router?
51. Using the Link component, 2. Navigating programmatically with router.navigate(), router.push(), or router.replace(), 3. Using built-in navigation buttons from React Navigation

52. What is the difference between router.push(), router.replace(), and router.navigate() in Expo Router?
52. push() always adds a new screen to the stack
replace() replaces the current screen
navigate() may go back in the stack if the target screen already exists

53. How can you navigate programmatically in Expo Router?
53. Use the useRouter() hook to get a router object, then call methods like navigate(), push(), or replace() with the target screen's path

54. What platform-specific behavior exists for navigation in Expo Router?
54. Navigation animations and header styling differ slightly between iOS and Android to provide a more natural look and feel for each platform