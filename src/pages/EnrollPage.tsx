import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export default function EnrollPage() {
  const [selectedPlan, setSelectedPlan] = useState("professional")

  const plans = {
    starter: { name: "Starter", price: 97 },
    professional: { name: "Professional", price: 197 },
    enterprise: { name: "Enterprise", price: 497 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              Start Your 7-Day Free Trial
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              You're One Step Away from Transformation
            </h1>
            <p className="text-xl text-amber-700">
              Join 500+ contractors who have already transformed their businesses
            </p>
          </motion.div>

          {/* Plan Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Select Your Plan</h2>
            <div className="space-y-4">
              {Object.entries(plans).map(([key, plan]) => (
                <label
                  key={key}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition ${
                    selectedPlan === key
                      ? "border-orange-500 bg-orange-50"
                      : "border-amber-200 hover:border-amber-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={key}
                    checked={selectedPlan === key}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-amber-900">{plan.name}</p>
                      {key === "professional" && (
                        <Badge className="mt-1 bg-orange-100 text-orange-800">Most Popular</Badge>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-amber-900">${plan.price}/mo</p>
                  </div>
                </label>
              ))}
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-6">What You Get Immediately</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900">Day 1: Welcome Kit</p>
                  <p className="text-sm text-amber-700">QuickStart guide, goal-setting worksheet</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900">Day 2: LLC Setup Guide</p>
                  <p className="text-sm text-amber-700">Step-by-step formation instructions</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900">Day 3: Tax Calculator</p>
                  <p className="text-sm text-amber-700">See your potential savings instantly</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900">Day 4: Pricing Templates</p>
                  <p className="text-sm text-amber-700">Charge what you're worth</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900">100% Risk-Free Guarantee</h2>
            </div>
            <p className="text-center text-green-800 mb-4">
              Try the entire program for 30 days. If you don't see measurable improvements 
              in your business, we'll refund every penny. No questions asked.
            </p>
            <p className="text-center text-sm text-green-700">
              Plus, you keep all the templates and resources you've downloaded.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link to="/signup">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
                Start Your Free Trial Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-amber-600">
              <Clock className="inline w-4 h-4 mr-1" />
              Takes less than 2 minutes • Cancel anytime
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center border-t border-amber-200 pt-12"
          >
            <p className="text-lg text-amber-700 italic mb-4">
              "I made back my investment in the first week just from the tax strategies. 
              The rest has been pure profit and peace of mind."
            </p>
            <p className="font-semibold text-amber-900">- James Miller, Plumbing Contractor</p>
            <p className="text-sm text-amber-600">Member since 2023</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}