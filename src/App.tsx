"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import BBSHeader from "@/components/BBSHeader"

// Import all pages
import HomePage from "@/pages/HomePage"
import CoursesPage from "@/pages/courses/CoursesPage"
import PricingPage from "@/pages/PricingPage"
import ResourcesPage from "@/pages/resources/ResourcesPage"
import DashboardPage from "@/pages/student/DashboardPage"
import LoginPage from "@/pages/auth/LoginPage"
import SignupPage from "@/pages/auth/SignupPage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import EnrollPage from "@/pages/EnrollPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <BBSHeader />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/curriculum" element={<CoursesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Student Routes (would normally be protected) */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/student/dashboard" element={<DashboardPage />} />
          
          {/* Redirect old paths */}
          <Route path="/student" element={<Navigate to="/dashboard" replace />} />
          
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App