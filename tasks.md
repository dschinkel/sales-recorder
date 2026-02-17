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
- [ ] **F.1.0** Provide this list of questions for a sales person to answer [IN PROGRESS]
    - Re-read GUIDELINES.MD AND PROJECT_SPEC.MD
    - [ ] **F.1.0.0** Company Name
    - [ ] **F.1.0.1** What was Topic of your conversation with the customer
    - [ ] **F.1.0.2** What is the customer's objectives
    - [ ] **F.1.0.3** What is the Timeline for the project
    - [ ] **F.1.0.4** Who are the Decision makers for the project
    - [ ] **F.1.0.5** Estimated Deal Size
    - [ ] **F.1.0.6** Decision Makers’ Goals, Likes, and Interests?
    - [ ] **F.1.0.7** Concerns
    - [ ] **F.1.0.8** Competition
    - [ ] **F.1.0.9** Budget
    - [ ] **F.1.0.10** Marketing Support Expectations
    - [ ] **F.1.0.11** Confidence Level
    - [ ] **F.1.0.12** Strategy
    - [ ] **F.1.0.13** What Does Success Look Like for Them?
    - [ ] **F.1.0.14** Procurement, Legal, Security? Gating step?
    - [ ] **F.1.0.15** Risk to Forecast Date?
- [ ] **F.1.1** Answer those questions
- [ ] **F.1.2** List questions not answered yet
- [ ] **F.2.0** Prompt the sales person to fill out set question
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
