# Tizen Song Recognizer

## What is it?

It's a tizen web application that allows you to recognize songs on your tizen device.

## What is used?

This project was bootstraped with create-react-app.
Redux is used for state management.
RecordRTC is used to capture audio from microphone.
ACRCloud API is used for song recognition.

## How it works?

Whole front-end staff is stored in `/web` folder.
User clicks on microphone icon, RecordRTC captures the audio from microphone. Then this data is sending to the proxy server (source code can be found in `/server` folder. It is written with Ruby language with help of Sinatra Ruby gem). Proxy server is required, because there is no way to communicate with ACRCloud API from front-end because of CORS policy. Also it allows you to manage ACRCloud credentials for all installed applications (in case you want to change the account or service, so users are able to use this proxy server without waiting of the application update in Samsung Store). Proxy server makes request to the ACRCloud API and returns response to the application.

## How to run it?

There is a bash script `/web/wearable.sh` that creates tizen application package (`.wgt` file) that can be installed on real device or on emulator.
This script uses application source code from `/web/build` folder. Also it uses data from `/tizen` folder - config, name, icon, privileges and so on.
Before running this script make sure you have installed tizen developer tools and created Samsung Developer certificate. Make relevant changes to the script and run it.
