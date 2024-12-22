# Expo Camera API Initialization Error

This repository demonstrates a common error when using the Expo Camera API: attempting to access camera features before the camera is fully initialized.  The provided solution uses the `onCameraReady` callback to ensure the camera is ready before accessing its properties and methods.

## Bug

The bug occurs when trying to take a picture or access camera properties immediately after creating a camera instance with Expo's Camera API. This often results in unexpected behavior or crashes.

## Solution

The solution uses the `onCameraReady` callback provided by the Expo Camera API.  This callback ensures that the camera is initialized and ready before any operations are performed on it.