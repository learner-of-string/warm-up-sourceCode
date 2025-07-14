# WarmUp 🌟

A modern, responsive donation platform built with React.js that connects donors with meaningful causes and campaigns. WarmUp provides a seamless experience for users to discover, donate to, and track various charitable campaigns across different categories.

## 🌐 Live Demo

**Visit the live application:** [https://warm-up-delta.vercel.app/](https://warm-up-delta.vercel.app/)

## 🎯 Purpose

WarmUp serves as a comprehensive donation platform designed to:
- **Bridge the gap** between donors and charitable causes
- **Provide transparency** in donation tracking and campaign management
- **Support diverse causes** including education, healthcare, disaster relief, and community development
- **Create impact** through easy-to-use donation mechanisms
- **Foster community** engagement in social causes

## ✨ Key Features

### 🔐 Authentication & User Management
- **Secure Authentication** with Firebase Auth
- **User Registration & Login** with email/password
- **Profile Management** with photo uploads
- **Password Reset** functionality
- **Protected Routes** for authenticated users

### 🏠 Campaign Management
- **Browse Campaigns** with detailed information
- **Campaign Categories** including:
  - Children & Education
  - Healthcare & Medical
  - Disaster Relief
  - Women Empowerment
  - Environmental Conservation
  - Animal Welfare
  - Mental Health Support
  - And many more...

### 💰 Donation System
- **Multiple Donation Types**:
  - Monetary donations
  - In-kind donations (clothes, food, etc.)

### 🎨 Modern UI/UX
- **Responsive Design** optimized for all devices
- **Glass Morphism** effects with LiquidGlass component
- **Smooth Animations** and transitions
- **Mobile-First** approach with tailwind

### 📱 Responsive Features
- **Mobile-Optimized** navigation
- **Touch-Friendly** interface
- **Adaptive Layouts** for different screen sizes

### 🔍 Search & Filter
- **Campaign Search** functionality
- **Category Filtering**
- **Location-based** campaign discovery
- **Status Tracking** for active campaigns

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **React Router DOM 7.6.3** - Client-side routing
- **Vite 7.0.0** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **DaisyUI 5.0.46** - Component library for Tailwind
- **Lucide React 0.525.0** - Beautiful icons
- **Tailwind Merge 3.3.1** - Utility for merging Tailwind classes
- **Class Variance Authority 0.7.1** - Component variant management

### UI Components
- **Radix UI** - Accessible component primitives:
  - Alert Dialog
  - Dialog
  - Tabs
  - Slot
- **Material-UI 7.2.0** - Additional UI components
- **React FAQ Component 1.3.4** - FAQ functionality
- **React Loader Spinner 6.1.6** - Loading states

### Backend & Services
- **Firebase 11.10.0** - Authentication and database
- **Howler 2.2.4** - Audio library for sound effects

### Utilities & Helpers
- **CLSX 2.1.1** - Conditional className utility
- **Array Shuffle 3.0.0** - Array randomization
- **Sonner 2.0.6** - Toast notifications
- **Tw Animate CSS 1.3.5** - Animation utilities

### Development Tools
- **ESLint 9.29.0** - Code linting
- **SWC Plugin** - Fast React compilation
- **TypeScript Support** - Type definitions for React

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm

### Run in Development Server locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/learner-of-string/warm-up-sourceCode.git

   cd warm-up
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` or `.env.local`(ignored by GitHub by default) file in the root directory and add your Firebase configuration and each environment variable name should be start with VITE_ e.g,:
   ```env
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Build for production**
   ```bash
   pnpm build
   ```

## 📁 Project Structure

```
warm-up/
├── src/
│   ├── Components/          # Reusable UI components
│   ├── Pages/              # Page components
│   ├── Context/            # React context providers
│   ├── Routes/             # Routing configuration
│   ├── Firebase/           # Firebase configuration
│   ├── data/               # Static data (campaigns)
│   ├── assets/             # Images and static assets
│   └── lib/                # Utility functions
├── public/                 # Public assets
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

WarmUp uses a modern design system with:
- **Glass Morphism** effects for depth and elegance
- **Sky Blue** color palette for trust and warmth
- **Responsive Typography** with Work Sans font
- **Smooth Animations** for enhanced user experience
- **Accessible Design** following WCAG guidelines

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint


## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Firebase** for authentication and backend services
- **Tailwind CSS** for the utility-first styling approach
- **Vercel** for hosting and deployment
- **Unsplash** for high-quality images
- **Lucide** for beautiful icons

---

**Made with ❤️ by someone undefined**
