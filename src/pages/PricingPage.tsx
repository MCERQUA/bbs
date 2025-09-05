import { motion } from "framer-motion"
import { CheckCircle, Shield, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 97,
    annualPrice: 77,
    description: "Perfect for new contractors",
    features: [
      "Full 12-week email course",
      "Basic templates & contracts",
      "Email support",
      "State licensing guide",
      "Tax savings calculator",
      "Certificate of completion"
    ],
    cta: "Start Free Trial",
    isPopular: false
  },
  {
    name: "Professional",
    monthlyPrice: 197,
    annualPrice: 157,
    description: "For growing businesses",
    features: [
      "Everything in Starter",
      "All 50+ templates & tools",
      "Community access",
      "Monthly group calls",
      "Priority email support",
      "Advanced financial tools",
      "Marketing templates",
      "Vendor discount network"
    ],
    cta: "Start Free Trial",
    isPopular: true
  },
  {
    name: "Enterprise",
    monthlyPrice: 497,
    annualPrice: 397,
    description: "For scaling companies",
    features: [
      "Everything in Professional",
      "1-on-1 monthly coaching",
      "Custom SOPs for your business",
      "Priority phone support",
      "Team training access (5 seats)",
      "Exit planning guidance",
      "M&A preparation tools",
      "Quarterly business review"
    ],
    cta: "Start Free Trial",
    isPopular: false
  }
]

export default function PricingPage() {
  const showPricing = false // Set to true when ready to show pricing

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {showPricing ? (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 px-6 py-2 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                FREE ENROLLMENT - LIMITED TIME
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Investment in Your Business Future
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
              All courses are currently FREE for a limited time. No credit card required.
            </p>

          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.isPopular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{plan.name}</h3>
                  <p className="text-amber-700 mb-4">{plan.description}</p>
                  
                  <div className="mb-6 relative">
                    <div className="flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-400 line-through mr-3">
                        ${plan.monthlyPrice}
                      </span>
                      <div className="relative">
                        <span className="text-5xl font-bold text-green-600">FREE</span>
                        <div className="absolute -top-2 -right-8 transform rotate-12">
                          <Badge className="bg-red-500 text-white border-0 text-xs px-2 py-1">
                            Limited Time
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-amber-700 mt-2 text-center">
                      Regular price: ${plan.monthlyPrice}/month
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-amber-800">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/signup">
                    <Button className={`w-full ${
                      plan.isPopular 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white shadow-lg`}>
                      Get Started FREE
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
              Your Return on Investment
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">$7,065+</p>
                <p className="text-amber-700">Annual Tax Savings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">18%</p>
                <p className="text-amber-700">Higher Pricing Power</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">5-10x</p>
                <p className="text-amber-700">ROI Within 90 Days</p>
              </div>
            </div>
            <p className="text-center text-amber-700 mb-6">
              Most contractors save more than the course cost in the first month through entity structure optimization alone.
            </p>
            <div className="text-center">
              <Link to="/roi-calculator">
                <Button variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
                  Calculate Your Specific ROI
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-900">30-Day Money Back Guarantee</h3>
            </div>
            <p className="text-center text-green-800">
              Show measurable results or get a full refund. Keep all downloaded materials.
            </p>
          </div>
        </div>
      </section>
      ) : (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Pricing Coming Soon</h1>
          <p className="text-xl text-amber-700 mb-8">We're currently offering FREE enrollment for a limited time!</p>
          <Link to="/signup">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Get Started FREE
            </Button>
          </Link>
        </div>
      </div>
      )}
    </div>
  )
}