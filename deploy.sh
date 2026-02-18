#!/bin/bash

# Task F.10: Build and Deploy script
# Automates the build, install, and launch process for the iOS simulator in Release mode.

set -e

echo "🚀 Starting Release Build..."

# 1. Run xcodebuild
# Using tee to show output in console and capture it in a temporary file for verification
BUILD_LOG="ios_build.log"

xcodebuild \
  -workspace ios/salesrecorder.xcworkspace \
  -scheme salesrecorder \
  -configuration Release \
  -destination 'platform=iOS Simulator,name=iPhone 17 Pro' \
  -derivedDataPath ios/build \
  CODE_SIGNING_ALLOWED=NO CODE_SIGNING_REQUIRED=NO CODE_SIGN_IDENTITY="" AD_HOC_CODE_SIGNING_ALLOWED=YES \
  build | tee "$BUILD_LOG"

# 2. Check for success
if grep -q "BUILD SUCCEEDED" "$BUILD_LOG"; then
  echo "✅ Build Succeeded! Installing to simulator..."
  
  # 3. Install to booted simulator
  xcrun simctl install booted ios/build/Build/Products/Release-iphonesimulator/salesrecorder.app
  
  echo "🚀 Launching app..."
  
  # 4. Launch the app
  xcrun simctl launch booted org.reactjs.native.example.salesrecorder
  
  echo "✨ Deployment Complete!"
else
  echo "❌ Build Failed. Check the logs above."
  exit 1
fi

# Cleanup
rm "$BUILD_LOG"
