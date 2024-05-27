## Clone and run locally

1. Clone project.

2. Please make sure you have nvm install in ur local, else you have to install the follow node version

   ```
    node=18.20.3
    npm=10.7.0
   ```

3. Enable node version `18.20.3` with nvm

   ```
     # Mac
     nvm use

     # Window

     nvm install 18.20.3
     nvm use 18.20.3
   ```

4. Next, run the following

   ```
     corepack enable
     yarn set version stable
     yarn install
   ```

5. Lastly, run `yarn dev` and you are good to go

6. You may find out alot of error, but that's fine because this project using yarn PnP. To fix this issue

   ```
     Find a ts or tsx file
     Press command + shift + p (mac)
     Press ctrl + shift + p (window)
     Find and choose "Typescript: Select TypeScript Version"
     Pick "Use Workspace Version"
   ```
