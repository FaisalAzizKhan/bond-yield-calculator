// src/Pages/SplashAnimation/SplashAnimation.styles.ts

import { StyleSheet } from "react-native";

export const splashAnimationStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent", 
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",      
    zIndex: 10,  
  },
  logoContainer: {
  },
});
