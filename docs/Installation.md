## Mac OS 10.13.2 - High Sierra

Note, I've not created a comprehensive brewfile or installation script as each step requires a little validation on your end. Plus, I don't want to spend the time trying to figuring out how to automate each step.

### VirtualBox

We'll use VirtualBox to run Minikube and Windows/Linux/Mac images for testing/development on different operating systems.

```
> download at https://www.virtualbox.org/wiki/Downloads
```

##### Validate

You should be able locate and open virtualbox on your machine. Run > VirtualBox --help

### Homebrew

Used to install packages on Macs.

```
> https://brew.sh/
```

##### Validate

Run the following command and fix any errors

```
> brew doctor
```

### Kubernetes

#### Minikube

This runs kubernetes and docker containers we need locally, keeping the production/development environments virtually identical.

```
> brew cask install minikube
```

#### Kubectl

Command line interface for kubernetes.

```
> visit https://kubernetes.io/docs/tasks/tools/install-kubectl/ for latest instructions
```

#### Setup

Start up minikube. This will download the iso using virtualbox, setup kubernetes locally, and run it.

```
> minikube start
```

##### Validate

The output of the start command should be something like:

```
Starting local Kubernetes v1.8.0 cluster...
Starting VM...
Downloading Minikube ISO
 140.01 MB / 140.01 MB [============================================] 100.00% 0s
Getting VM IP address...
Moving files into cluster...
Downloading localkube binary
 148.25 MB / 148.25 MB [============================================] 100.00% 0s
 65 B / 65 B [======================================================] 100.00% 0s
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```

Minikube stores files at ~/.minikube, kubectl at ~/.kube. Inspect both directories.

```
> ls ~/.minikube/ ~/.kube/
```

Ensure that kubectl has the proper context setup, and it can connect to minikube:

```
> kubectl config get-contexts
```

outputs:

```
CURRENT   NAME                                        CLUSTER                                     AUTHINFO                                    NAMESPACE
*         minikube                                    minikube                                    minikube
```

Next, run the kubectl proxy command and navigate to the url:

```
> kubectl proxy
outputs Starting to serve on 127.0.0.1:8001
```

Open your browser 127.0.0.1:8001/ui

Click around!

### Node

We'll be using Node Version Manager to install and properly version our node environment.

```
> brew install nvm
```

Follow the instructions in the brew results and add the NVM home to your path.

Then install latest node

```
> nvm install node
```

##### Validate

```
> env | grep NVM
```

Outputs NVM_DIR and NVM_BIN

```
> nvm ls
```

Outputs installed versions, and you should be using the latest node.

### Python

We'll be using Python Version Manager to install and properly version our python environment. Unfortunately, python has breaking changes between 2.7.4 and 3.0 for many projects. It requires moving back and forth based on the directory.  Boo.

```
> brew install pyenv
```

Then install 2.7.4

> cd kickstart && pyenv install

##### Validate

```
> env | grep PYENV
```

Outputs PYENV_ROOT and PYENV_SHELL

```
> pyenv versions
```

Outputs installed versions, you should have three. System and 2.7.4

### XCode & XCode CLI

This section borrowed from [React Native](https://facebook.github.io/react-native/docs/getting-started.html).

The easiest way to [install Xcode is via the Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). This installs the iOS simulator and all the necessary tools to build your iOS app. You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown. This paragraph borrowed from [React Native](https://facebook.github.io/react-native/docs/getting-started.html).

Agree to the license after its installed:

```
> sudo xcodebuild -license
```

### Android

This paragraph borrowed from [React Native](https://facebook.github.io/react-native/docs/getting-started.html).

Install Android Studio - Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM)
- Android Virtual Device

Then, click "Next" to install all of these components. If the checkboxes are grayed out, you will have a chance to install these components later on.

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 6.0 (Marshmallow) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 6.0 (Marshmallow) entry, then make sure the following items are all checked:

- Google APIs
- Android SDK Platform 23
- Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom_64 System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 23.0.1 is selected.

Click "Apply" to download and install the Android SDK and related build tools.

Add the following lines to your $HOME/.bash_profile config file:

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Type source $HOME/.bash_profile to load the config into your current shell.

We'll need to setup an Android Virtual Device to use based. Open Android Studio -> Tools -> Android -> AVD Manager

Create a new virtual device -> Phone -> Select Nexus 5 , Next -> System Images X86 Images Marshmellow 6.0 Google APIs -> name it nexus_5.

##### Validate

Ensure path variables are set properly:

```
> env | grep ANDROID
```

Outputs ANDROID_HOME=

Open Android Studio -> Tools -> Android -> AVD Manager and press play on nexus_5.

It should boot up a running copy of Nexus 5 running Android.

### React Native

We'll install react-native globally, which will give us access to react-native cli:

```
> npm install -g react-native-cli
```

##### Validate

Create a base project and open in android and ios

```
> react-native init AwesomeProject
```
Outputs a new directory, installs tools into it.

Validate iOS, should open up iPhone with AwesomeProject. Note, it takes awhile on first build.

```
> cd AwesomeProject && react-native run-ios
```

Validate Android. First start the nexus_5 through AVD Manager above.

```
> cd AwesomeProject && react-native run-android
```

Cleanup & remove the AwesomeProject directory

### Electron

We'll install electron globally, which installs the binary.

```
> npm install -g electron
```

##### Validate

Open up electron interactive terminal:

```
> electron -i
> this
> .exit
```

The above will output information about electron.

### Apache Thrift

[Thrift](https://thrift.apache.org/) is a cross language services framework that enables typing, error specification and services over different protocols/formats. Its super useful for building RPC systems.

```
> brew install thrift
```

##### Validate

You should be able to run thrift manually:

```
thrift -h
```

Outputs thrift commands.

### Keybase

Lastly, I use keybase to manage/share app secrets between developers. This enables version control and team sharing of secrets, ensuring that the secrets are encrypted on the file system in the cloud. It also enables revoking access and swapping keys.

Install at https://keybase.io/ and setup your local keybase.

##### Validate

Run keybase cli:

```
> keybase
```

You should see all the available commands.

### Parcel

I'm moving from webpack to Parcel. Its way faster, easier, and has a cleaner UI. https://parceljs.org/

```
> npm install -g parcel-bundler
```

#### Validate

```
> parcel -h
```

Outputs the help commands for Parcel.
