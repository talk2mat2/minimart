# minimart App

![App Screenshot](https://raw.githubusercontent.com/talk2mat2/Martins_c/master/phone1.png)


This project is a React Native CLI application built for both **iOS** and **Android** platforms.

## 🛠 Requirements

Ensure the following dependencies are installed:

### Global Dependencies

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or npm
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

```bash
npm install -g react-native-cli
```

---

### Android Setup

- [Android Studio](https://developer.android.com/studio)
- Android SDK and emulator
- Configure `ANDROID_HOME` environment variable

```bash
# Add to ~/.bash_profile or ~/.zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Ensure an emulator is installed via AVD Manager or connect a physical device via USB.

---

### iOS Setup (macOS only)

- macOS with [Xcode](https://developer.apple.com/xcode/) installed
- [CocoaPods](https://cocoapods.org/) (for iOS dependencies)

```bash
sudo gem install cocoapods
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/talk2mat2/minimart.git
cd Minimart
```

### 2. Install dependencies

```bash
yarn install


### 3. iOS Setup

```bash
cd ios
pod install
cd ..
```

## 📱 Running the App

### Android

Make sure an Android emulator is running or a device is connected.

```bash
npx react-native run-android
```

### iOS

Run only on macOS with Xcode and CocoaPods installed:

```bash
npx react-native run-ios
```

You can also open the project in Xcode via:

```bash
open ios/Minimart.xcworkspace
```

And hit the Run ▶️ button in Xcode.

---

## 🧪 Troubleshooting

- **Metro bundler not running?**

```bash
npx react-native start
```

- **Build failed on Android?**

Try cleaning the build:

```bash
cd android && ./gradlew clean && cd ..
```

- **Build failed on iOS?**

Ensure CocoaPods are installed, then run:

```bash
cd ios && pod install && cd ..
```

---

## 📂 Project Structure

```
.
├── android/      # Android native code
├── ios/          # iOS native code
├── src/          # Your JavaScript/TypeScript source files
├── App.js
└── package.json
```

---

## 📃 License

[MIT](LICENSE)