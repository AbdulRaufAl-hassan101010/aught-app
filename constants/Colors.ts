/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#151718';
const tintColorDark = '#fff';
const secondarytheme = {
  color: "#AF47D2",
};

 export const Colors = {
   light: {
     text: "#161622",
     background: "#F0F8FF",
     tint: tintColorLight,
     icon: "#687076",
     tabIconDefault: "#687076",
     tabIconSelected: tintColorLight,
     secondarytheme,
   },
   dark: {
     text: "#ECEDEE",
     background: "#151718",
     tint: tintColorDark,
     icon: "#9BA1A6",
     tabIconDefault: "#9BA1A6",
     tabIconSelected: tintColorDark,
     secondarytheme,
   },
 };
