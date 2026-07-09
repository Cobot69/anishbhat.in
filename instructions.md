# Portfolio Setup & Deployment Instructions

This guide explains how to configure, run, and deploy your cinematic AI Engineer portfolio.

## 1. Firebase Setup Step-by-Step

To power the Admin Dashboard and dynamic content, you must set up a Firebase project.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add Project"**, name it (e.g., "Anish Portfolio"), and follow the setup wizard.
3. Inside the project dashboard, click the **Web icon (</>)** to add a web app. Register the app.
4. Copy the `firebaseConfig` object provided by Firebase. It will look like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
5. Go to **Build > Authentication**, click "Get Started", and enable **Email/Password** sign-in.
6. Still in Authentication, go to the **Users** tab and click **Add User**. Create your admin email and password.
7. Go to **Build > Firestore Database**, click "Create Database", and start in **Production Mode**.

## 2. Configuring `.env.local`

In the root of your project folder (`D:\KYMOS\portfolioAnish`), create a file named `.env.local`. Paste your Firebase keys into it:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
```

*Note: Never commit `.env.local` to GitHub. The `.gitignore` file already ignores it.*

## 3. Running the Project Locally

To run the project on your machine:

1. Open your terminal in the project root.
2. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

*Note: The `npm run dev` script automatically triggers `copy-assets` which copies the image sequences into the `public/` folder so the scroll animations work.*

## 4. How the Frame Animation System Works

The cinematic scroll animations are powered by HTML5 `<canvas>` and GSAP ScrollTrigger.
1. The images from your `ezgif` folders are dynamically mapped into arrays in `HeroSequence.tsx` and `IntroSequence.tsx`.
2. As the user scrolls, `ScrollTrigger` tracks the scroll progress and scrubs through the image array.
3. `requestAnimationFrame` and canvas `drawImage` ensure the frames render at 60fps without lag. 

## 5. Adding Content via Admin Dashboard

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).
2. Log in using the Email and Password you created in Firebase Authentication.
3. Use the tabs (Projects, Experience, Blog) to manage your content. 
*(Note: The UI shell is built. To fully link the save buttons, add the Firestore `addDoc`/`updateDoc` functions in `app/admin/page.tsx` once your Firebase is active).*

## 6. Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New > Project** and import your GitHub repository.
4. Open the **Environment Variables** section in the Vercel setup screen.
5. Add all your `NEXT_PUBLIC_FIREBASE_...` keys exactly as they are in your `.env.local`.
6. Click **Deploy**. Vercel will automatically run the build and deploy your site.
