```bash 

git add . && git commit -m "Mar 17: starting project" && git push 

## 📦 Build APK (Release)
bun run prebuild
cd android
./gradlew clean
./gradlew assembleRelease
./gradlew bundleRelease
bunx expo run:android