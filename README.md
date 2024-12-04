
# Next Banking 🏦

**Next Banking** is a modern and robust banking application built with **Next.js**, featuring seamless integration with third-party APIs and tools to enhance user experience and developer productivity.

<img width="1715" alt="Screenshot 2024-12-04 at 12 07 40 pm" src="https://github.com/user-attachments/assets/e9f0dc3b-db0f-45e7-ac39-897b845cb22a">

## 🌐 Test URL

Explore the app in the test environment: [Next Banking - Test Environment](https://next-banking.vercel.app) <!-- Update the URL if needed -->

---

## 🚀 Features

- **Modern Frontend:** Built with **Next.js** and **TypeScript** for a scalable and efficient development experience.
- **Banking Integrations:**
  - **Plaid**: Securely link and interact with bank accounts.
  - **Dwolla**: Facilitate ACH transfers with ease.
- **Authentication & Backend Services:**
  - **Appwrite**: Manage user authentication and backend functionality.
- **Error Monitoring:**
  - **Sentry**: Detect and monitor errors in production for faster debugging.
- **Responsive UI:** Built with **Tailwind CSS** for an adaptive design on all devices.
- **Light/Dark Mode:** Customizable user experience based on preferences.

---

## 🛠️ Technologies Used

- **Frontend:** [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Error Monitoring:** [Sentry](https://sentry.io/)
- **Banking APIs:** [Plaid](https://plaid.com/), [Dwolla](https://www.dwolla.com/)
- **Backend Services:** [Appwrite](https://appwrite.io/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📸 Screenshots

<img width="1718" alt="Screenshot 2024-12-04 at 12 08 08 pm" src="https://github.com/user-attachments/assets/1089b52e-2539-4c7f-89b0-b909e8ad893b">

---

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- NPM or Yarn
- Environment variables for Sentry, Appwrite, Plaid, and Dwolla

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/pablin202/next-banking.git
   cd next-banking
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   SENTRY_DSN=<your-sentry-dsn>
   APPWRITE_ENDPOINT=<your-appwrite-endpoint>
   APPWRITE_PROJECT=<your-appwrite-project-id>
   PLAID_CLIENT_ID=<your-plaid-client-id>
   PLAID_SECRET=<your-plaid-secret>
   DWOLLA_KEY=<your-dwolla-key>
   DWOLLA_SECRET=<your-dwolla-secret>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🚀 Deployment

1. Deploy the app on **Vercel**:
   - Link your repository.
   - Add environment variables in the **Vercel dashboard**.
   - Trigger a new deployment.

2. Monitor errors and performance via **Sentry**.

---

## 🔗 API Integrations

- **Plaid**: Handles secure bank connections and financial data aggregation.
- **Dwolla**: Facilitates ACH transfers for secure money movement.
- **Appwrite**: Provides authentication, database, and real-time functionality.

---

## 🛡️ Error Monitoring with Sentry

Sentry is integrated to monitor errors and exceptions:
1. Errors are automatically captured during runtime.
2. Use the **Sentry dashboard** to view and address issues.

---

## 📋 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute, report issues, or suggest features to improve this project. 😊
