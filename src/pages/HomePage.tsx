import React, { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { 
  BookOpen, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Brain, 
  Target, 
  Zap,
  Mail,
  Phone,
  Shield,
  Headphones
} from "lucide-react"
import confetti from "canvas-confetti"
import NumberFlow from "@number-flow/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

// Utility function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Types
interface PricingPlan {
  name: string
  price: string
  yearlyPrice: string
  period: string
  features: string[]
  description: string
  buttonText: string
  href: string
  isPopular: boolean
}

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  image?: string
  rating: number
  revenue?: string
}

// AnimatedPhoto Component
const AnimatedPhoto: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const photos = [
    "/placeholder-1.jpg",
    "/placeholder-2.jpg",
    "/placeholder-3.jpg",
    "/placeholder-4.jpg"
  ]
  
  const [currentPhoto, setCurrentPhoto] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length)
    }, 3000 + delay)
    return () => clearInterval(interval)
  }, [delay, photos.length])
  
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-amber-100 to-orange-200">
      <motion.div
        key={currentPhoto}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0"
      >
        <div className="h-full w-full bg-gradient-to-br from-amber-300 to-orange-400" />
      </motion.div>
    </div>
  )
}

export default function HomePage() {
  const [isYearly, setIsYearly] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [enrollmentCount] = useState(487)
  
  const ref = useRef(null)
  useInView(ref, { once: true })
  
  const features = [
    { icon: <Brain className="w-6 h-6" />, title: "Business Strategy", desc: "Learn to work ON your business" },
    { icon: <Target className="w-6 h-6" />, title: "Financial Mastery", desc: "Save $7,065+ in taxes annually" },
    { icon: <Zap className="w-6 h-6" />, title: "Systems & Automation", desc: "Free up 20+ hours per week" }
  ]
  
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$97",
      yearlyPrice: "$77",
      period: "per month",
      description: "Perfect for new contractors just starting their business transformation",
      features: [
        "Full 12-week email course (84 lessons)",
        "Basic contract templates (5)",
        "Entity structure quiz & guide",
        "Tax savings calculator",
        "Email support",
        "Certificate of completion"
      ],
      buttonText: "Start Free Trial",
      href: "/enroll",
      isPopular: false
    },
    {
      name: "Professional",
      price: "$197",
      yearlyPrice: "$157",
      period: "per month",
      description: "For established contractors ready to scale their operations",
      features: [
        "Everything in Starter",
        "All 50+ contract templates & SOPs",
        "Monthly group coaching calls",
        "Private community access",
        "Priority email support",
        "QuickBooks integration guide",
        "Marketing playbook & templates",
        "Vendor discount network ($3,000+ value)"
      ],
      buttonText: "Start Free Trial",
      href: "/enroll",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$497",
      yearlyPrice: "$397",
      period: "per month",
      description: "For companies ready to build a sellable business",
      features: [
        "Everything in Professional",
        "1-on-1 monthly coaching (60 min)",
        "Custom SOPs for your business",
        "Team training (5 seats)",
        "Exit planning guidance",
        "M&A preparation tools",
        "Priority phone support",
        "Quarterly business review"
      ],
      buttonText: "Start Free Trial",
      href: "/enroll",
      isPopular: false
    }
  ]

  const testimonials: Testimonial[] = [
    {
      quote: "The LLC structure alone saved me $18,000 in taxes last year. The systems we implemented freed up 20 hours a week. I'm finally working ON my business, not IN it.",
      author: "Mike Rodriguez",
      title: "Owner",
      company: "Rodriguez HVAC",
      rating: 5,
      revenue: "$2.3M Revenue"
    },
    {
      quote: "Went from charging $65/hour to $125/hour after implementing the value-based pricing strategies. My close rate actually improved!",
      author: "Sarah Chen",
      title: "Founder",
      company: "Premier Electric Solutions",
      rating: 5,
      revenue: "$1.8M Revenue"
    },
    {
      quote: "The templates and systems saved me from hiring a business consultant. I've grown from 3 to 12 employees in 8 months.",
      author: "James Thompson",
      title: "CEO",
      company: "Thompson Plumbing Group",
      rating: 5,
      revenue: "$4.1M Revenue"
    }
  ]

  const handleGetStarted = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <Badge className="mb-4 w-fit bg-orange-100 text-orange-800 border-orange-200">
                <span className="flex items-center gap-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <NumberFlow value={enrollmentCount} /> contractors enrolled
                </span>
              </Badge>
              
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-amber-900 sm:text-6xl">
                Stop Working IN Your Business.{" "}
                <span className="text-orange-600">Start Working ON It.</span>
              </h1>
              
              <p className="mb-8 text-xl text-amber-700">
                The 12-Week Email Course That Transforms Contractors Into CEOs. 
                Save $7,065+ annually in taxes, protect your assets, charge 18% higher rates, 
                and build a sellable business.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/enroll">
                  <Button 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={handleGetStarted}
                  >
                    Start 7-Day Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
                    Get Free Resources
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-amber-600">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  30-day money back guarantee
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-48 overflow-hidden rounded-lg">
                  <AnimatedPhoto delay={0} />
                </div>
                <div className="h-64 overflow-hidden rounded-lg">
                  <AnimatedPhoto delay={500} />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 overflow-hidden rounded-lg">
                  <AnimatedPhoto delay={1000} />
                </div>
                <div className="h-48 overflow-hidden rounded-lg">
                  <AnimatedPhoto delay={1500} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-amber-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Average Tax Savings", value: "$7,065", suffix: "/year" },
              { label: "Price Increase", value: "18", suffix: "%" },
              { label: "Time Saved", value: "20", suffix: "hrs/week" },
              { label: "Success Rate", value: "97", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl font-bold">
                  {stat.suffix === "%" || stat.suffix === "hrs/week" ? (
                    <>
                      <NumberFlow value={parseInt(stat.value)} />
                      <span className="text-2xl">{stat.suffix}</span>
                    </>
                  ) : (
                    <>
                      {stat.value}
                      <span className="text-xl font-normal">{stat.suffix}</span>
                    </>
                  )}
                </div>
                <div className="text-sm text-amber-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Transform Your Business
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Everything You Need to Build a Real Business
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Stop trading time for money. Build systems, scale your team, and create a business that runs without you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-8 rounded-xl border-2 cursor-pointer transition-all",
                  activeFeature === index
                    ? "border-orange-500 bg-orange-50 shadow-xl scale-105"
                    : "border-amber-200 hover:border-amber-300"
                )}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{feature.title}</h3>
                <p className="text-amber-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              12-Week Program
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Your 84-Day Transformation Roadmap
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              One lesson per day, delivered straight to your inbox. 
              Each lesson takes just 15 minutes but delivers insights that last a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Foundation",
                weeks: "Weeks 1-4",
                color: "blue",
                modules: [
                  "Business Entity Setup (LLC/S-Corp)",
                  "Contractor Licensing & Insurance",
                  "Basic Accounting & QuickBooks",
                  "Essential Contracts & Agreements"
                ]
              },
              {
                phase: "Growth",
                weeks: "Weeks 5-8",
                color: "green",
                modules: [
                  "Pricing Strategies & Job Costing",
                  "Marketing & Lead Generation",
                  "Sales Process & Closing",
                  "Building Your First Team"
                ]
              },
              {
                phase: "Scale",
                weeks: "Weeks 9-12",
                color: "purple",
                modules: [
                  "Systems & Standard Operating Procedures",
                  "Advanced Tax Strategies",
                  "Leadership & Company Culture",
                  "Exit Planning & Business Valuation"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={cn(
                  "p-6",
                  phase.color === "blue" && "bg-gradient-to-br from-blue-500 to-blue-600",
                  phase.color === "green" && "bg-gradient-to-br from-green-500 to-green-600",
                  phase.color === "purple" && "bg-gradient-to-br from-purple-500 to-purple-600"
                )}>
                  <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                  <p className="text-white/90">{phase.weeks}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {phase.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-amber-800">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
                View Full Curriculum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="success-stories" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Join 500+ Contractors Who Transformed Their Business
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Real results from real contractors. No fluff, just proven strategies that work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-amber-800 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-bold text-amber-900">{testimonial.author}</p>
                  <p className="text-sm text-amber-700">{testimonial.title}, {testimonial.company}</p>
                  {testimonial.revenue && (
                    <p className="text-sm font-semibold text-orange-600 mt-1">{testimonial.revenue}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Investment Options
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
              Start with our 7-day free trial. Cancel anytime. 
              Save 20% with annual billing.
            </p>
            
            <div className="inline-flex items-center space-x-3 bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "px-4 py-2 rounded-md transition",
                  !isYearly ? "bg-amber-900 text-white" : "text-amber-700"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-4 py-2 rounded-md transition",
                  isYearly ? "bg-amber-900 text-white" : "text-amber-700"
                )}
              >
                Annual
                <Badge className="ml-2 bg-green-100 text-green-800">Save 20%</Badge>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative bg-white rounded-xl p-8",
                  plan.isPopular ? "shadow-2xl ring-2 ring-orange-500 scale-105" : "shadow-lg"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{plan.name}</h3>
                <p className="text-amber-700 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-900">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-amber-700">/{plan.period}</span>
                  {isYearly && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(parseInt(plan.price.slice(1)) - parseInt(plan.yearlyPrice.slice(1))) * 12}/year
                    </p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={plan.href}>
                  <Button className={cn(
                    "w-full",
                    plan.isPopular 
                      ? "bg-orange-600 hover:bg-orange-700" 
                      : "bg-amber-900 hover:bg-amber-800",
                    "text-white"
                  )}>
                    {plan.buttonText}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-xl p-8">
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "How quickly will I see results?",
                a: "Most contractors save enough in taxes within the first 30 days to cover the entire year's tuition. You'll implement 2-3 game-changing strategies each week."
              },
              {
                q: "What if I'm already established?",
                a: "Perfect! Our Professional and Enterprise plans are designed for scaling businesses. You'll learn advanced strategies for systemization, team building, and preparing for exit."
              },
              {
                q: "How much time does it require?",
                a: "Each daily lesson takes 15 minutes. Implementation varies, but the time you invest pays back 10x through the systems and processes you'll build."
              },
              {
                q: "Is this specific to certain trades?",
                a: "The principles apply to all trades - HVAC, plumbing, electrical, roofing, landscaping, and more. We provide trade-specific templates and examples."
              },
              {
                q: "What's your refund policy?",
                a: "30-day money back guarantee. Show us you've implemented the strategies. If you don't see measurable improvements, we'll refund every penny."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-amber-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-amber-900 mb-2">{item.q}</h3>
                <p className="text-amber-700">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-900 to-orange-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Competition is Already Enrolled
          </h2>
          <p className="text-xl text-amber-200 mb-8">
            While you're thinking about it, they're implementing. 
            Join 500+ contractors who are building real businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enroll">
              <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-100">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Free Resources
              </Button>
            </Link>
          </div>
          <p className="text-amber-200 mt-8">
            Questions? Call <span className="font-bold text-white">1-800-BBS-GROW</span> or email support@bluecollarbusinessschool.com
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Have questions? Our team is here to help you succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Call Us</h3>
              <p className="text-amber-700">1-800-BBS-GROW</p>
              <p className="text-sm text-amber-600">Mon-Fri 8AM-6PM CST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Email Us</h3>
              <p className="text-amber-700">support@bluecollarbusinessschool.com</p>
              <p className="text-sm text-amber-600">24-hour response time</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Live Chat</h3>
              <p className="text-amber-700">Available for members</p>
              <p className="text-sm text-amber-600">Instant support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="font-bold text-xl">BBS</span>
              </div>
              <p className="text-amber-200">
                Transforming contractors into CEOs since 2020.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Program</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link to="/curriculum" className="hover:text-white">Curriculum</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Blue Collar Business School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}