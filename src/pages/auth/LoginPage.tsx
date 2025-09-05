import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log("Login:", { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-amber-900">Welcome Back</h1>
          <p className="text-amber-700 mt-2">Log in to continue your business transformation</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-amber-900">Email Address</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-amber-200 focus:border-orange-500"
                placeholder="john@contractorbiz.com"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-amber-900">Password</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 border-amber-200 focus:border-orange-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-amber-300 text-orange-600 focus:ring-orange-500" />
              <span className="ml-2 text-sm text-amber-700">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-700">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-amber-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-amber-600">New to BBS?</span>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-amber-700 mb-4">Don't have an account yet?</p>
          <Link to="/signup">
            <Button variant="outline" className="w-full border-amber-300 text-amber-800 hover:bg-amber-100">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}