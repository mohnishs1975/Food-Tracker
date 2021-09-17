# SW-Mini-Project

Agile Workflow
1. Install everything nessecary for the work environment(Python, React, Android Emulator)
1. Research/Get familiar with React and Node.js fireabse, and API with Python


Frontend:
1. Log in or regrister (Use Gmail for authentication)
2. Scan bar code or add recipe manually.  https://docs.expo.dev/versions/v42.0.0/sdk/bar-code-scanner/ 
3. View recipe
4. Take a picture to ead barcodes of products: https://docs.expo.dev/versions/v42.0.0/sdk/bar-code-scanner/ 
5. Ask the user for amount of servings: https://docs.expo.dev/versions/latest/react-native/textinput/
 https://snack.expo.dev/@aboutreact/example-to-get-only-numeric-value-from-textinput-?session_id=snack-session-ESXWizmjL


Backend: 
1. Successful API call with FDA https://fdc.nal.usda.gov/api-guide.html
2. Successful API call with gmail authenticator 
3. Successful use of Firebase https://firebase.google.com/docs/firestore/library-integrations

Things Learned and Done:

Mohnish
- This was my first time doing app development and working with Javascript/React-Native so it was a challenging and rewarding experience. 
- I started with creating bare screens for login, adding and creating recipes and signing out. In order to switch between screens I came across stack navigation for a simple solution to navigate the app. Once I started work on Firebase Authentication, I split the navigation stack into one for Authentication and one for the App. 
- To take in user inputs for login I used a form field and passed the values to a function that calls the firebase method. I did the same with user registration, signing out as well as resetting the password. One issue I ran into was that everytime I reran the app on Expo, the app would automatically sign me in because it remembered me. In order to combat this, I added the sign out option on every screen. 
- The user flow I went with was login/regisration page, followed by a home screen with options "Manually Enter Barcode", "Scan Barcode", and "View Recipes". When the user clicks the Manually enter button, the user is send to another page where they can enter the barcode number and are prompted with an alert if the item has been successfully added to Firebase. The "View Recipe" button take the user to a page that displays all data that the user has added manually. At any point the user has the option to sign out. 
- I worked with Firebase Authentication, Firebase Database and overall app flow and Tina worked with the FDA API with the Barcode scanner. 



API Architure: 


<img width="409" alt="Screen Shot 2021-09-16 at 18 31 46" src="https://user-images.githubusercontent.com/90277008/133693983-1f915466-d48b-4794-933f-7ed3e7fe42a2.png">
