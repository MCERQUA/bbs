import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Lock, Phone, Briefcase, GraduationCap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log("Signup:", formData)
  }

  const benefits = [
    "84 daily business lessons",
    "50+ templates & tools",
    "Tax savings strategies",
    "7-day free trial"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Side - Benefits */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                Limited Time Offer
              </Badge>
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                Start Your 7-Day Free Trial
              </h1>
              <p className="text-xl text-amber-700">
                Join 500+ contractors transforming their businesses with our proven 12-week program.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-amber-800">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-amber-700 italic mb-4">
                "The LLC structure alone saved me $18,000 in taxes last year. The systems we implemented freed up 20 hours a week."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-amber-900">Mike Rodriguez</p>
                  <p className="text-sm text-amber-700">HVAC Contractor, Texas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-3">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-amber-900">Create Your Account</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-amber-900">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-amber-900">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-amber-900">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-amber-900">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-amber-900">Company Name</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-10 border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-amber-900">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-amber-900">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Start Free Trial
              </Button>

              <p className="text-center text-sm text-amber-700">
                Already have an account? {" "}
                <Link to="/login" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Sign In
                </Link>
              </p>

              <p className="text-xs text-center text-amber-600">
                By creating an account, you agree to our Terms of Service and Privacy Policy. 
                Cancel anytime during your 7-day trial.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}