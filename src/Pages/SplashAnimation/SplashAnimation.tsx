import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { splashAnimationStyles } from "./SplashAnimation.styles";
import { useAppSelector } from "../../Store/Hooks/Hooks";
import { useNavigation, CommonActions } from "@react-navigation/native";
const rnlogo =  require("../../../assets/rn.png");

const SplashAnimation: React.FC = () => {
  const circleScale = useRef(new Animated.Value(0)).current;
  const screenOpacity = useRef(new Animated.Value(0)).current;
  const imageScale = useRef(new Animated.Value(0)).current;

  const currentUser = useAppSelector((state: any) => state.auth.user);
  const navigation = useNavigation();

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(circleScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(screenOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(imageScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    const timer = setTimeout(() => {
      if (true) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "UserInputsPage" }],
          })
        );
       }
    }, 3000);

    return () => clearTimeout(timer);
  }, [circleScale, screenOpacity, imageScale, currentUser, navigation]);

  return (
    <View style={splashAnimationStyles.container}>
      <Animated.View
        style={[
          splashAnimationStyles.circle,
          {
            transform: [
              {
                scale: circleScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.1, 10],
                }),
              },
            ],
          },
        ]}
      />
      <View style={splashAnimationStyles.logoContainer}>
        <Animated.Image
          source={rnlogo}
          style={{
            width: 100,
            height: 100,
            objectFit: "contain",
            transform: [
              {
                scale: imageScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 2],
                }),
              },
            ],
          }}
        />
      </View>
      <Animated.View
        style={[
          splashAnimationStyles.overlay,
          {
            opacity: screenOpacity,
          },
        ]}
      />
    </View>
  );
};

export default SplashAnimation;
