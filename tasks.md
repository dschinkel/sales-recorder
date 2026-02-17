# Tasks

## Completed
- [x] **F.0.1** Hello World is runnable on iOS emulator (locally)
- [x] **F.1.2.0** Setup EAS for cloud builds and TestFlight submission
    - Initialized React Native boilerplate.
    - Configured `app.json` with Expo metadata.
    - Installed `eas-cli`, `expo`, and `expo-dev-client`.
    - Created `eas.json` with `development`, `preview`, and `production` profiles.
- [x] **F.2.0** Prompt the sales person to fill out set questions
    - [x] **F.2.0.0** Topic of conversation
    - [x] **F.2.0.1** Customer's objective
    - [x] **F.2.0.2** Project timeline
    - [x] **F.2.0.3** Decision makers
- [x] **F.2.3** Formatted report with Answers

## Upcoming
- [ ] **F.2.1** Answer those questions (Voice integration)
- [ ] **F.1.2.1** Run `eas login` and `eas init` (requires user intervention)
- [ ] **F.1.2.2** Run `eas build -p ios --profile production` to generate iOS binary
- [ ] **F.1.2.3** Run `eas submit -p ios --latest` to push to TestFlight

## Deployment FAQ
- **Do I need TestFlight?** Yes, to test the app on your physical iPhone before it's on the App Store.
- **Do I need an Apple Developer account?** Yes ($99/year) to use TestFlight.
- **Is EAS related?** EAS is used to build and submit the app to TestFlight.
