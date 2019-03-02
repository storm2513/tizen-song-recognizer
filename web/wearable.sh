export PATH=$PATH:~/tizen-studio/tools/ide/bin
rm -rf ../wearable/*
cp -R build/* ../wearable/
cp -R ../tizen/* ../wearable/
tizen build-web -- ../wearable
tizen clean -- ../wearable
# make sure you register Samsung certificate in order to run your application on real device
tizen package -t wgt -s storm2513 -- ../wearable
export PATH=$PATH:~/tizen-studio/tools/emulator/bin
em-cli launch -n W-3.0-circle-x86 # replace with your emulator
tizen install -n SongID.wgt -- ../wearable
