# Card Matching Game

## Prerequisite
```
- Node
- npm
```
#### Install `NVM` (Node version manager)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
#### Add the NVM Directory Paths to Your Shell Profile
Add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### Install Node and npm using NVM
```
nvm install stable
```

## Setup Step
#### Clone Project
```
git@github.com:nuugut/card-matching.git

cd card-matching
```

#### Install packages
```
npm install
```

#### Build Project
```
npm run build
```

#### Start app
```
npm start
```
Note: This command will start app at port 3000 (`localhost:3000`)