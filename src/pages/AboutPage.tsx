import { motion } from "framer-motion"
import { Award, Users, TrendingUp, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              About BBS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Transforming Contractors Into CEOs
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Blue Collar Business School was founded by contractors, for contractors. 
              We understand the challenges you face because we've been there.
            </p>
          </motion.div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Mission</h2>
              <p className="text-amber-700 mb-4">
                To empower skilled tradespeople with the business knowledge they need to build 
                sustainable, profitable companies that can run without them.
              </p>
              <p className="text-amber-700">
                We believe every contractor deserves to work ON their business, not just IN it. 
                Our proven 12-week program has helped over 500 contractors transform their operations, 
                increase profits, and reclaim their time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-orange-600 mb-3" />
                <p className="text-2xl font-bold text-amber-900">500+</p>
                <p className="text-amber-700">Graduates</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                <p className="text-2xl font-bold text-amber-900">$3.5M</p>
                <p className="text-amber-700">Tax Saved</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Award className="w-8 h-8 text-orange-600 mb-3" />
                <p className="text-2xl font-bold text-amber-900">18%</p>
                <p className="text-amber-700">Avg Price Increase</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <p className="text-2xl font-bold text-amber-900">97%</p>
                <p className="text-amber-700">Success Rate</p>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔨</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Practical Knowledge</h3>
                <p className="text-amber-700">
                  Real-world strategies that work in the field, not just theory
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Community Support</h3>
                <p className="text-amber-700">
                  Learn alongside peers who understand your challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Measurable Results</h3>
                <p className="text-amber-700">
                  Track your progress with clear metrics and milestones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}