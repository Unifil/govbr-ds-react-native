import React from "react";
import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

const { height } = Dimensions.get("window");

export default function Modalize( ) {
  const translateY = useSharedValue(0);
  const [isMove, setIsMove] = React.useState(false);
  const opacity = useSharedValue(0.3);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      console.log(event.translationY);
      if (isMove) {
        console.log("height", height);
        console.log(" event.translationY",  event.translationY);
        
        translateY.value = ctx.startY + event.translationY;

        const maxDragDistance = 200;  
        const newOpacity = 1 - (event.translationY / maxDragDistance * .8);
        opacity.value = Math.max(0, Math.min(newOpacity, .3));
        console.log("opacity", opacity.value);
      } else {
        opacity.value = 0.3
      }
    },
    onEnd: (event) => {
      console.log(event.velocityY);
      if (event.translationY > 120) {
        if (isMove) {
          
          translateY.value = withSpring(height);
         
        }  
      } else {
        if (isMove) {
          translateY.value = withSpring(0);
        }  
      }
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: !isMove ? `rgba(0,0,0,0.3)` :  `rgba(0,0,0,${opacity.value})`,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedContainerStyles]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.content, animatedStyles]}>
          <Pressable
            onPress={() => {
              setIsMove(false);
            }}
          >
            <TouchableOpacity
              onPressIn={() => { 
                setIsMove(true);
              }}
              style={{
                height: 4,
                width: 70,
                backgroundColor: "lightgrey",
                borderRadius: 2,
                alignSelf: "center",
                marginTop: 10,
              }}
            ></TouchableOpacity>

            <View 
              style={{
                height: '100%',
                width: '100%', 
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Text>Atividade</Text>

            </View>
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "white",
    height: height *0.6,
    bottom: -200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handle: {
    height: 40,
    width: "100%",
    backgroundColor: "lightgrey",  
  },
});
