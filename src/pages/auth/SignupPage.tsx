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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage("")

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match")
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Don't send passwords to Netlify Forms for security
    const { password, confirmPassword, ...dataToSend } = formData

    const formBody = new URLSearchParams({
      'form-name': 'signup',
      ...dataToSend
    }).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          password: "",
          confirmPassword: ""
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage("There was an error with your submission. Please try again.")
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
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
              <input type="hidden" name="form-name" value="signup" />
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-300 rounded-md text-green-800">
                  Welcome to Blue Collar Business School! Check your email for next steps.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-300 rounded-md text-red-800">
                  {errorMessage}
                </div>
              )}

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

              <Button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Start Free Trial'}
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