The `onCameraReady` callback ensures that the camera is ready before accessing its functionalities:

```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraReady, setCameraReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} onCameraReady={() => setCameraReady(true)}>
          {cameraReady && (
            <Button title="Take Picture" onPress={async () => {
                let photo = await cameraRef.current.takePictureAsync();
              }} />
          )}
      </Camera>
    </View>
  );
}
```