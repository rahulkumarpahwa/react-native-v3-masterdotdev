# Taskly - React Native Habit & Shopping Tracker

A feature-rich **React Native** mobile application built with **Expo SDK 57** and **Expo Router** that combines a **shopping list manager** with a **habit-tracking countdown timer**. Taskly demonstrates modern React Native development practices including file-based routing, persistent local storage, haptic feedback, push notifications, and animated UI transitions.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture & Internals](#architecture--internals)
  - [Navigation System](#navigation-system)
  - [State Management & Persistence](#state-management--persistence)
  - [Component Architecture](#component-architecture)
  - [Utility Layer](#utility-layer)
  - [Theming](#theming)
- [Screens Overview](#screens-overview)
  - [Shopping List](#1-shopping-list)
  - [Counter (Habit Tracker)](#2-counter-habit-tracker)
  - [Idea](#3-idea)
- [Data Flow](#data-flow)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [Linting & Code Quality](#linting--code-quality)
- [License](#license)

---

## Features

### Shopping List

- **Add items** via a text input with keyboard submission
- **Toggle completion** — tap the circle/check icon to mark items as done/undone
- **Delete items** with a confirmation alert dialog
- **Persistent storage** — all items survive app restarts via AsyncStorage
- **Animated transitions** — smooth `LayoutAnimation` on add, delete, and toggle
- **Haptic feedback** — distinct vibration patterns for completion (success) and deletion (impact)
- **Empty state** — friendly message when the list is empty
- **Sticky header** — the input field stays pinned at the top while scrolling

### Counter (Habit Tracker)

- **Countdown timer** — tracks time remaining until a recurring task is due
- **Overdue detection** — visually switches to a red theme when the deadline passes
- **Time segments** — displays days, hours, minutes, and seconds in a clean layout
- **Completion history** — records every "I've done the thing!" press with timestamps
- **Persistent state** — countdown state and history survive app restarts
- **Loading state** — shows an `ActivityIndicator` while fetching persisted data
- **Nested navigation** — history and settings screens within a stack navigator

### Idea Screen

- **Confetti animation** — celebratory confetti burst on button press
- **Haptic feedback** — success notification haptic on interaction
- **Responsive layout** — uses `useWindowDimensions` for adaptive positioning

---

## Tech Stack

| Technology                       | Purpose                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| **React Native 0.86**            | Cross-platform mobile UI framework                                                   |
| **Expo SDK 57**                  | Managed workflow, tooling, and native module access                                  |
| **Expo Router**                  | File-based routing and navigation                                                    |
| **TypeScript**                   | Type-safe development                                                                |
| **AsyncStorage**                 | Persistent local key-value storage                                                   |
| **date-fns**                     | Date manipulation and formatting                                                     |
| **expo-haptics**                 | Haptic feedback (vibration)                                                          |
| **expo-notifications**           | Local push notifications                                                             |
| **react-native-confetti-cannon** | Confetti animation effects                                                           |
| **@expo/vector-icons**           | Icon library (FontAwesome6, MaterialCommunityIcons, Ionicons, Entypo, MaterialIcons) |
| **ESLint + Prettier**            | Code quality and formatting                                                          |

---

## Project Structure

```
taskly/
├── app/                          # Expo Router file-based routes
│   ├── _layout.tsx               # Root layout — bottom tab navigator
│   ├── index.tsx                 # Shopping List screen (home tab)
│   ├── idea.tsx                  # Idea screen (tab)
│   └── counter/                  # Counter tab (nested stack)
│       ├── _layout.tsx           # Counter stack layout
│       ├── index.tsx             # Countdown timer screen
│       ├── history.tsx           # Completion history screen
│       └── settings.tsx          # Settings screen (placeholder)
├── components/                   # Reusable UI components
│   ├── ShoppingListItem.tsx      # Individual shopping list row
│   └── TimeSegment.tsx           # Countdown time display unit
├── themes/
│   └── theme.ts                  # Centralized color palette
├── utils/                        # Business logic & helpers
│   ├── types.ts                  # TypeScript type definitions
│   ├── storage.ts                # AsyncStorage abstraction layer
│   ├── generateId.ts             # Unique ID generator
│   ├── registerForPushNotificationsAsync.ts  # Notification permission handler
│   └── tasks/                    # Task manipulation utilities
│       ├── deleteTask.ts         # Filter-based deletion
│       ├── toggleTask.ts         # Completion status toggle
│       └── sortTaskList.ts       # Chronological sorting
├── assets/                       # Static assets (icons, splash)
├── app.json                      # Expo configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint flat config
└── LICENSE                       # MIT License
```

---

## Architecture & Internals

### Navigation System

Taskly uses **Expo Router** with a **file-based routing** architecture. The navigation hierarchy is:

```
Root Layout (_layout.tsx)
├── Bottom Tab Navigator
│   ├── Tab: "Shopping List" (index.tsx)
│   ├── Tab: "Counter" (counter/_layout.tsx)
│   │   └── Stack Navigator
│   │       ├── index.tsx (Countdown Timer)
│   │       ├── history.tsx (Completion History)
│   │       └── settings.tsx (Settings)
│   └── Tab: "Idea" (idea.tsx)
```

**Key navigation patterns:**

- **Bottom tabs** provide primary screen switching with active tab tint color (`colorCerulean`)
- **Stack navigation** within the Counter tab enables push/pop transitions for history and settings
- **Modal presentation** with `slide_from_bottom` animation for the Counter screen
- **Programmatic navigation** via `router.navigate()` and `router.push()`
- **Link component** for declarative navigation to history screen
- **Header customization** — each screen can define its own header options, with the outer header hidden (`headerShown: false`) to prevent double headers in nested stacks

### State Management & Persistence

The app does not use a global state management library. Instead, it relies on:

1. **React `useState` hooks** — local component state for UI data
2. **AsyncStorage** — persistent key-value storage for data survival across app launches

**Storage keys:**

- `"shopping-list"` — stores the array of shopping list items
- `"taskly-countdown"` — stores the countdown state including `currentNotificationId` and `completedAtTimestamps`

**Storage abstraction (`utils/storage.ts`):**

```typescript
getFromStorage(key); // Retrieves and parses JSON data
saveToStorage(key, data); // Serializes and persists data
```

**Data flow pattern:**

1. On mount, `useEffect` fetches persisted data from AsyncStorage
2. User interactions update local state via `useState` setters
3. State changes are immediately persisted to AsyncStorage
4. `LayoutAnimation.configureNext()` is called before state updates to animate UI transitions

### Component Architecture

#### `ShoppingListItem`

A reusable row component that renders a single shopping list item with:

- **Toggle button** — circular check icon that toggles completion status
- **Item name** — with strikethrough styling when completed
- **Delete button** — close icon with confirmation alert
- **Conditional styling** — grey background and muted colors for completed items
- **Haptic feedback** — success notification on complete, medium impact on delete/undo

**Props interface:**

```typescript
type Props = {
  id: number;
  name?: string;
  isCompleted?: boolean;
  deleteTask: (id: number, list: List[]) => List[];
  list: List[];
  changeList: Dispatch<SetStateAction<List[]>>;
  changeStatus: (id: number, list: List[]) => List[];
  storageKey: string;
};
```

#### `TimeSegment`

A presentational component that displays a single time unit (e.g., "5 Days") with:

- Large bold number with `tabular-nums` font variant for consistent digit width
- Unit label below the number
- Optional `textStyle` prop for conditional styling (e.g., white text on overdue background)

### Utility Layer

| File                                         | Purpose                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------- |
| `utils/types.ts`                             | Defines the `List` type: `{ name, id, status, completedAt? }`                     |
| `utils/storage.ts`                           | AsyncStorage get/set with JSON serialization                                      |
| `utils/generateId.ts`                        | Generates sequential IDs based on the last item's ID                              |
| `utils/tasks/deleteTask.ts`                  | Filters out an item by ID                                                         |
| `utils/tasks/toggleTask.ts`                  | Maps through list, toggling `status` and setting `completedAt`                    |
| `utils/tasks/sortTaskList.ts`                | Sorts items chronologically by `completedAt` timestamp                            |
| `utils/registerForPushNotificationsAsync.ts` | Handles notification permission flow (Android channel setup + permission request) |

### Theming

The app uses a centralized theme object (`themes/theme.ts`) for consistent styling:

```typescript
export const theme = {
  colorCerulean: "#1a759f", // Primary accent (tabs, borders)
  colorWhite: "#fff", // Backgrounds
  colorBlack: "#000", // Text, buttons
  colorRed: "red", // Delete, overdue states
  colorGrey: "grey", // Completed items, secondary text
  colorLightGrey: "#eee", // Subtle backgrounds, borders
};
```

---

## Screens Overview

### 1. Shopping List (`app/index.tsx`)

The home screen and primary feature. It renders a `FlatList` with:

- **Sticky header** — a `TextInput` for adding new items (auto-focused on mount)
- **Empty state** — "Your Shopping List is Empty!" message when no items exist
- **Item rows** — each rendered via `ShoppingListItem` component
- **Add flow** — pressing "done" on the keyboard generates a new ID, saves to storage, and updates state with `LayoutAnimation`
- **Initial load** — fetches persisted list from AsyncStorage on mount

**Key implementation details:**

- Uses `FlatList` (not `ScrollView`) for performance with large lists
- `stickyHeaderIndices={[0]}` pins the input at the top
- `LayoutAnimation.Presets.easeInEaseOut` for smooth add/delete/toggle animations
- `expo-haptics` provides tactile feedback for all interactions

### 2. Counter (Habit Tracker) (`app/counter/`)

A nested stack of three screens:

#### Countdown Timer (`index.tsx`)

- Displays a countdown to the next task deadline
- Uses `date-fns` (`intervalToDuration`, `isBefore`) for time calculations
- Updates every second via `setInterval` in a `useEffect`
- **Overdue state** — red background with white text when deadline has passed
- **"I've done the thing!" button** — resets the countdown and records the timestamp
- **Loading state** — `ActivityIndicator` while fetching persisted state

#### History (`history.tsx`)

- `FlatList` displaying all completed task timestamps
- Formats dates using `date-fns/format` (e.g., "15 Mar 25, Mon, 02:30 PM")
- Sticky header with "Last Completion TimeStamp"
- Empty state: "No History."

#### Settings (`settings.tsx`)

- Placeholder screen for future configuration options

### 3. Idea (`app/idea.tsx`)

A demo/playground screen featuring:

- **ConfettiCannon** — triggered via ref on button press
- **Haptic feedback** — `Haptics.notificationAsync` with success style
- **Responsive positioning** — uses `useWindowDimensions` to center confetti origin
- **Push notification permission** — commented-out demo code for requesting notification access

---

## Data Flow

```
User Action (tap, type, submit)
        │
        ▼
Component Event Handler
        │
        ├──► Update Local State (useState)
        │       │
        │       ├──► LayoutAnimation.configureNext()
        │       └──► UI Re-render with animation
        │
        └──► Persist to AsyncStorage
                │
                └──► Data survives app restart
                        │
                        ▼
                useEffect on mount fetches & restores state
```

**Example: Toggling a shopping list item**

1. User taps the circle icon on a shopping list item
2. `ShoppingListItem` calls `changeStatus(id, list)` (from `utils/tasks/toggleTask.ts`)
3. `toggleTask` maps through the list, toggling `status` and setting/resetting `completedAt`
4. `LayoutAnimation.configureNext()` is called for smooth transition
5. State is updated via `changeList(newList)`
6. New state is persisted to AsyncStorage via `saveToStorage()`
7. Haptic feedback fires (success for complete, impact for undo)

---

## Installation & Setup

### Prerequisites

- **Node.js** (LTS version 18, 20, or 22 recommended)
- **npm** (comes with Node.js)
- **Expo Go** app on your iOS/Android device (for development)
- **Git** (optional)

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd taskly
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   > Uses `npx expo install` for SDK-compatible package versions.

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Open on your device**
   - Scan the QR code with **Expo Go** (Android) or the **Camera** app (iOS)
   - Or press `a` for Android emulator / `i` for iOS simulator

### Troubleshooting

- **Can't connect on same Wi-Fi?** Use the `--tunnel` flag:
  ```bash
  npx expo start --tunnel
  ```
  This uses Ngrok to expose the bundler externally.

---

## Running the App

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm start`       | Start the Expo development server |
| `npm run android` | Start and open on Android         |
| `npm run ios`     | Start and open on iOS             |
| `npm run web`     | Start and open in web browser     |
| `npm run lint`    | Run ESLint with Expo config       |

---

## Linting & Code Quality

The project uses **ESLint** with the Expo flat config and **Prettier** for code formatting.

**Configuration files:**

- `eslint.config.js` — ESLint flat config with Expo rules, Prettier integration, and React Native plugin
- `.prettierrc.js` — (optional) Prettier formatting preferences

**Key linting rules:**

- `react-native/no-unused-styles` — catches unused `StyleSheet` definitions
- Prettier formatting errors displayed as ESLint errors

**Auto-fix on save** is supported in VS Code with the ESLint plugin.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./taskly/LICENSE) file for details.

---

## Learning Resources

This project was built as part of a React Native mastery course covering:

- Expo SDK & managed workflow
- File-based routing with Expo Router
- Bottom tabs and nested stack navigation
- AsyncStorage for persistent data
- Haptic feedback integration
- Local push notifications
- Layout animations
- TypeScript in React Native
- ESLint & Prettier setup
- date-fns for date manipulation
- Custom component architecture
- Utility function separation of concerns
