<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/17lntclouXEQVsW95VJWPJ76dT1rN6Xix

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file and set your Gemini API key:
   ```bash
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to Netlify

The project is configured to deploy to Netlify automatically.

1. Set the environment variable `VITE_GEMINI_API_KEY` in your Netlify site settings
2. Push your changes to the repository
3. Netlify will automatically build and deploy your site
