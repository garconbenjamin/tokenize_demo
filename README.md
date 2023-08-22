# Tokenize Demo

Welcome to Tokenize Demo App! This project is a demo app for showing the basic UI and interacting with public API.

## Table of Contents

- [Project Structure](#project-structure)
- [Prequisties](#prequisties)
- [Getting Started](#getting-started)

## Project Structure

The project is organized as follows:

### Directory structure

    .
    ├── src                     # Source files (alternatively `lib` or `app`)
        ├── components          # Reusable UI components.
        ├── constants           # Constant values and configuration files.
        ├── hooks               # Custom hooks.
        ├── images              # Images and icons for the app.
        ├── locales             # Localization files.
        ├── navigators          # Manage different navigators.(etc: tab)
        ├── screens             # Screens for the app.
        ├── store               # Redux store.
        ├── types               # Typescript types.
        ├── utils               # Utility functions.
        ├── App.tsx             # App.
        ├── i18n.ts             # Localization setup.
       ├── theme.ts             # Override default react-native-element-ui style.
    ├── index.js                # Entry point, providers.

### App structur

- Before initializing the app, will do some setup work synchronously and asynchronously.

  - Synchronously:

    - Set up localization.
    - Set up redux store.
    - Set up theme.

  - Asynchronously:
    - Get device info.

- Use different navigator control screen UI with bottom tab or without it.

## Prequisties

- Android Studio and emulator
- Xcode and simulator
- Node.js
- Yarn

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository.

```
git clone https://github.com/garconbenjamin/tokenize_demo.git
```

2. Navigate to the project directory:

```
cd tokenize_demo
```

3. Install dependencies:

```
yarn install
```

4. iOS only: Install pods:

```
cd ios && pod install
```

5. Run the app:

```
  yarn ios
  # or
  yarn android
```
