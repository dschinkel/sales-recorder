# Tasks

## Completed
- [x] **F.0.1** Hello World is runnable on iOS emulator (locally)
- [x] **F.1.2.0** Setup EAS for cloud builds and TestFlight submission
    - Initialized React Native boilerplate.
    - Configured `app.json` with Expo metadata.
    - Installed `eas-cli`, `expo`, and `expo-dev-client`.
    - Created `eas.json` with `development`, `preview`, and `production` profiles.
- [x] **F.1.3** Run on iOS Simulator with Development Client
    - Successfully aligned dependencies with `npx expo install --fix` (React 19, RN 0.81.5 for Expo SDK 54).
    - Regenerated the `ios` directory with `npx expo prebuild`.
    - Verified `pod install` succeeds with the new `ReactAppDependencyProvider` podspec.

## Upcoming
- [ ] **F.2.0** Prompt the sales person to fill out set question
    - Re-read GUIDELINES.MD AND PROJECT_SPEC.MD
    - [ ] **F.2.0.0** Topic of conversation
    - [ ] **F.2.0.1** What is the customer's objective
    - [ ] **F.2.0.2** Project timeline
    - [ ] **F.2.0.3** Decision makers
- [ ] **F.2.3** Formatted report with Answers
- [ ] **F.1.2.1** Run `eas login` and `eas init` (requires user intervention)
- [ ] **F.1.2.2** Run `eas build -p ios --profile development` to generate iOS binary for real device
- [ ] **F.1.2.3** Run `eas build -p ios --profile production` to generate iOS binary for App Store
- [ ] **F.1.2.4** Run `eas submit -p ios --latest` to push to TestFlight
- [ ] **F.1.3** Run on iOS Simulator with Development Client
    - [x] Align dependencies and fix native `ios` folder using prebuild.
    - [ ] Run `npx expo run:ios` once to build and install the native app on the simulator.

## PR.1.2 Fix [COMPLETED]
### Fix for compile error, Development Build mismatch, and ReactAppDependencyProvider missing
The Fix:
- [x] Align `bundleIdentifier` in `app.json` with the native project (`org.reactjs.native.example.salesrecorder`).
- [x] Change `babel.config.js` to use `babel-preset-expo`.
- [x] Import `expo-dev-client` in `index.js`.
- [x] Fix `ReactAppDependencyProvider` error by upgrading dependencies (`npx expo install --fix`) to match Expo SDK 54 (RN 0.81.5).
- [x] Use `npx expo prebuild` to generate a fresh, compatible `ios` directory.
- [x] Verified `pod install` completion.
