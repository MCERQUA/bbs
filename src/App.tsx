import { useState } from "react"
import { motion } from "framer-motion"
import { 
  DollarSign,
  Shield,
  TrendingUp,
  Building,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Menu,
  X,
  Target,
  Zap,
  BarChart,
  FileText,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-navy">BBS</span>
            <span className="ml-2 text-sm text-gray-600 hidden sm:inline">Blue Collar Business School</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#curriculum" className="text-gray-700 hover:text-navy transition">Curriculum</a>
            <a href="#pricing" className="text-gray-700 hover:text-navy transition">Pricing</a>
            <a href="#success-stories" className="text-gray-700 hover:text-navy transition">Success Stories</a>
            <a href="#resources" className="text-gray-700 hover:text-navy transition">Resources</a>
            <Button className="bg-safety hover:bg-safety-dark text-white">Start Free Trial</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <a href="#curriculum" className="block px-3 py-2 text-gray-700 hover:text-navy">Curriculum</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-navy">Pricing</a>
            <a href="#success-stories" className="block px-3 py-2 text-gray-700 hover:text-navy">Success Stories</a>
            <a href="#resources" className="block px-3 py-2 text-gray-700 hover:text-navy">Resources</a>
            <Button className="w-full bg-safety hover:bg-safety-dark text-white mt-2">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-navy mb-6"
        >
          Stop Working IN Your Business.<br />
          Start Working ON It.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          The 12-Week Email Course That Transforms Contractors Into CEOs
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
        >
          <div className="bg-white rounded-lg p-4 shadow-md">
            <DollarSign className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="font-semibold text-navy">Tax Savings</p>
            <p className="text-sm text-gray-600">$7,065+ annually</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <Shield className="w-8 h-8 text-steel mx-auto mb-2" />
            <p className="font-semibold text-navy">Asset Protection</p>
            <p className="text-sm text-gray-600">$847,000 avg</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <TrendingUp className="w-8 h-8 text-safety mx-auto mb-2" />
            <p className="font-semibold text-navy">Premium Pricing</p>
            <p className="text-sm text-gray-600">18% higher rates</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <Building className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="font-semibold text-navy">Gov Contracts</p>
            <p className="text-sm text-gray-600">$400B market</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <Button size="lg" className="bg-safety hover:bg-safety-dark text-white text-lg px-8 py-6">
            Start Free 7-Day Trial
            <ArrowRight className="ml-2" />
          </Button>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 500+ Contractors Enrolled</span>
            <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> $3.5M Saved in Taxes</span>
            <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-yellow-500" /> 4.9 Star Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Problem/Solution Section
const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">The Harsh Reality</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-2xl font-bold text-red-900">73%</p>
              <p className="text-lg text-red-800">of contractors fail within 5 years</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Poor Business Structure</p>
                  <p className="text-sm text-gray-600">Operating as sole proprietor, missing tax advantages</p>
                </div>
              </div>
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">No Systems</p>
                  <p className="text-sm text-gray-600">Working 60+ hours, everything depends on you</p>
                </div>
              </div>
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Bad Financial Management</p>
                  <p className="text-sm text-gray-600">Mixing personal and business, no profit margins</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">The Solution</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <p className="text-2xl font-bold text-green-900">12 Weeks</p>
              <p className="text-lg text-green-800">to transform your contracting business</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Step-by-Step Education</p>
                  <p className="text-sm text-gray-600">60+ lessons designed for busy contractors</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Practical Templates</p>
                  <p className="text-sm text-gray-600">50+ contracts, SOPs, and financial tools</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Real Results</p>
                  <p className="text-sm text-gray-600">Join 500+ contractors building wealth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Course Overview Section
const CourseOverviewSection = () => {
  const phases = [
    {
      title: "Phase 1: Foundation",
      weeks: "Weeks 1-4",
      color: "bg-navy",
      modules: [
        { week: 1, title: "Business Structure & Legal", icon: <FileText className="w-5 h-5" /> },
        { week: 2, title: "Contracts & Protection", icon: <Shield className="w-5 h-5" /> },
        { week: 3, title: "Financial Management", icon: <DollarSign className="w-5 h-5" /> },
        { week: 4, title: "Operations & SOPs", icon: <Briefcase className="w-5 h-5" /> }
      ]
    },
    {
      title: "Phase 2: Growth",
      weeks: "Weeks 5-8",
      color: "bg-steel",
      modules: [
        { week: 5, title: "Marketing & Branding", icon: <Target className="w-5 h-5" /> },
        { week: 6, title: "Lead Generation & Sales", icon: <TrendingUp className="w-5 h-5" /> },
        { week: 7, title: "Advanced Financials", icon: <BarChart className="w-5 h-5" /> },
        { week: 8, title: "Team Building", icon: <Users className="w-5 h-5" /> }
      ]
    },
    {
      title: "Phase 3: Scaling",
      weeks: "Weeks 9-12",
      color: "bg-safety",
      modules: [
        { week: 9, title: "Growth Strategies", icon: <Zap className="w-5 h-5" /> },
        { week: 10, title: "Trade-Specific Tactics", icon: <Building className="w-5 h-5" /> },
        { week: 11, title: "Leadership Development", icon: <Award className="w-5 h-5" /> },
        { week: 12, title: "Exit Planning", icon: <Target className="w-5 h-5" /> }
      ]
    }
  ]

  return (
    <section id="curriculum" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Your 12-Week Transformation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daily 15-minute lessons delivered at 6 AM, designed to fit your busy schedule
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`${phase.color} text-white p-6`}>
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <p className="text-sm opacity-90">{phase.weeks}</p>
              </div>
              <div className="p-6 space-y-4">
                {phase.modules.map((module, mIndex) => (
                  <div key={mIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                      {module.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Week {module.week}</p>
                      <p className="font-semibold text-gray-900">{module.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-navy mb-6">What's Included</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-steel mx-auto mb-3" />
              <p className="font-bold text-2xl text-navy">60+</p>
              <p className="text-gray-600">Lessons</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-steel mx-auto mb-3" />
              <p className="font-bold text-2xl text-navy">50+</p>
              <p className="text-gray-600">Templates</p>
            </div>
            <div className="text-center">
              <BarChart className="w-12 h-12 text-steel mx-auto mb-3" />
              <p className="font-bold text-2xl text-navy">25+</p>
              <p className="text-gray-600">Calculators</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-steel mx-auto mb-3" />
              <p className="font-bold text-2xl text-navy">100+</p>
              <p className="text-gray-600">AI Prompts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Success Stories Section
const SuccessStoriesSection = () => {
  const stories = [
    {
      name: "Mike Rodriguez",
      trade: "HVAC Contractor",
      location: "Texas",
      image: "/api/placeholder/150/150",
      revenue: { before: "$250K", after: "$850K" },
      profit: { before: "8%", after: "22%" },
      quote: "The LLC structure alone saved me $18,000 in taxes last year. The systems we implemented freed up 20 hours a week.",
      highlights: ["3.4x revenue growth", "Hired 5 employees", "Got first government contract"]
    },
    {
      name: "Sarah Chen",
      trade: "Electrical Contractor",
      location: "California",
      image: "/api/placeholder/150/150",
      revenue: { before: "$180K", after: "$520K" },
      profit: { before: "5%", after: "18%" },
      quote: "I went from working 70 hours a week to 40, while tripling my income. The course paid for itself in the first month.",
      highlights: ["Won $200K contract", "Automated billing", "4-day work week"]
    },
    {
      name: "Tom Wilson",
      trade: "General Contractor",
      location: "Florida",
      image: "/api/placeholder/150/150",
      revenue: { before: "$400K", after: "$1.2M" },
      profit: { before: "10%", after: "25%" },
      quote: "Finally built a business that runs without me. Just closed on my dream vacation home thanks to the profit increase.",
      highlights: ["3x revenue", "15 employees", "Sold for 4x revenue"]
    }
  ]

  return (
    <section id="success-stories" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Real Contractors. Real Results.</h2>
          <p className="text-xl text-gray-600">Join 500+ contractors who transformed their businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold text-navy">{story.name}</p>
                  <p className="text-sm text-gray-600">{story.trade}</p>
                  <p className="text-xs text-gray-500">{story.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <p className="text-sm line-through text-gray-400">{story.revenue.before}</p>
                  <p className="text-lg font-bold text-green-600">{story.revenue.after}</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Profit Margin</p>
                  <p className="text-sm line-through text-gray-400">{story.profit.before}</p>
                  <p className="text-lg font-bold text-green-600">{story.profit.after}</p>
                </div>
              </div>

              <p className="text-gray-700 italic mb-4">"{story.quote}"</p>

              <div className="space-y-2">
                {story.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false)

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
        "Tax savings calculator"
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
        "Marketing templates"
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
        "Team training access",
        "Exit planning guidance",
        "M&A preparation tools"
      ],
      cta: "Start Free Trial",
      isPopular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Investment in Your Future</h2>
          <p className="text-xl text-gray-600 mb-8">Choose the plan that fits your business goals</p>
          
          <div className="inline-flex items-center space-x-3 bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md transition ${!isAnnual ? 'bg-navy text-white' : 'text-gray-600'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md transition ${isAnnual ? 'bg-navy text-white' : 'text-gray-600'}`}
            >
              Annual
              <Badge className="ml-2 bg-green-100 text-green-800">Save 20%</Badge>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.isPopular ? 'ring-2 ring-safety' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-safety text-white px-3 py-1 text-sm rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${
                  plan.isPopular 
                    ? 'bg-safety hover:bg-safety-dark' 
                    : 'bg-navy hover:bg-navy-dark'
                } text-white`}>
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

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
  )
}

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How much time do I need to commit daily?",
      answer: "Just 15 minutes a day. Lessons are delivered at 6 AM and designed to be completed during your morning coffee. Most contractors finish each lesson in 10-15 minutes."
    },
    {
      question: "What if I'm already running an LLC?",
      answer: "Perfect! The course covers advanced strategies beyond basic entity structure. You'll learn about S-Corp elections, holding companies, asset protection strategies, and tax optimization techniques that save established businesses even more money."
    },
    {
      question: "Is this specific to my state?",
      answer: "Yes! We provide state-specific guides for all 50 states covering licensing requirements, insurance minimums, tax obligations, and bonding requirements. The core business strategies apply nationwide."
    },
    {
      question: "Can I access the content on my phone?",
      answer: "Absolutely. All content is mobile-optimized. You can read lessons on your phone, tablet, or computer. Many contractors complete lessons on job sites during breaks."
    },
    {
      question: "What trades is this for?",
      answer: "The course is designed for all construction trades including electrical, plumbing, HVAC, roofing, general construction, painting, flooring, and more. Week 10 includes trade-specific modules."
    },
    {
      question: "Do I get support if I have questions?",
      answer: "Yes! Starter plans get email support. Professional plans get community access and monthly group calls. Enterprise plans get 1-on-1 monthly coaching sessions."
    },
    {
      question: "What if I don't see results?",
      answer: "We offer a 30-day money-back guarantee. If you don't see measurable improvements in your business within 30 days, we'll refund your payment in full. You keep all downloaded materials."
    },
    {
      question: "Can my team access the training?",
      answer: "Professional and Enterprise plans include team access options. Enterprise plans include unlimited team members. This is perfect for training your office manager or key employees."
    },
    {
      question: "How quickly will I see ROI?",
      answer: "Most contractors save more than the course cost in the first month through entity structure optimization alone. The average student sees 5-10x ROI within 90 days."
    },
    {
      question: "Is this just theory or practical advice?",
      answer: "100% practical. Every lesson includes actionable steps you can implement immediately. Plus, you get 50+ templates, contracts, and tools you can use right away."
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-navy">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}

// ROI Calculator Section
const ROICalculatorSection = () => {
  const [revenue, setRevenue] = useState(250000)
  const [employees, setEmployees] = useState(2)
  
  const calculateSavings = () => {
    const entitySavings = revenue * 0.03 // 3% savings from proper entity structure
    const taxStrategySavings = revenue * 0.02 // 2% from tax strategies
    const efficiencySavings = revenue * 0.05 // 5% from operational efficiency
    const pricingIncrease = revenue * 0.18 // 18% pricing increase potential
    
    return {
      entity: Math.round(entitySavings),
      tax: Math.round(taxStrategySavings),
      efficiency: Math.round(efficiencySavings),
      pricing: Math.round(pricingIncrease),
      total: Math.round(entitySavings + taxStrategySavings + efficiencySavings + pricingIncrease)
    }
  }

  const savings = calculateSavings()

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600">See how much you could save and earn</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Revenue
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-navy mb-4">Potential Annual Savings & Earnings</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Entity Structure Optimization</span>
                <span className="font-semibold text-green-600">+${savings.entity.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax Strategy Savings</span>
                <span className="font-semibold text-green-600">+${savings.tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Operational Efficiency</span>
                <span className="font-semibold text-green-600">+${savings.efficiency.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Premium Pricing Potential</span>
                <span className="font-semibold text-green-600">+${savings.pricing.toLocaleString()}</span>
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-navy">Total Annual Impact</span>
                  <span className="text-2xl font-bold text-green-600">${savings.total.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  ROI in first year: {Math.round(savings.total / (197 * 12) * 100)}%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4 text-center">
            <p className="text-green-900 font-semibold">
              The course pays for itself in {Math.round((197 * 12) / (savings.total / 365))} days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Section
const FooterSection = () => {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy-dark to-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Empire?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ contractors who are building wealth, not just businesses
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white text-gray-900"
              />
              <Button className="bg-safety hover:bg-safety-dark text-white">
                Get Free LLC Guide
              </Button>
            </div>
            <p className="text-sm mt-3 opacity-75">
              Free guide: "7 Expensive Mistakes Contractors Make with LLCs"
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Blue Collar Business School</h3>
            <p className="text-sm opacity-75">
              Building contractors who build wealth. Transform your skills into a scalable business.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">Free Tools</a></li>
              <li><a href="#" className="hover:opacity-100">State Guides</a></li>
              <li><a href="#" className="hover:opacity-100">Industry Reports</a></li>
              <li><a href="#" className="hover:opacity-100">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">About Us</a></li>
              <li><a href="#" className="hover:opacity-100">Success Stories</a></li>
              <li><a href="#" className="hover:opacity-100">Contact</a></li>
              <li><a href="#" className="hover:opacity-100">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                support@bluecollarbusinessschool.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                1-800-BBS-GROW
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Mon-Fri 8AM-6PM EST
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>© 2024 Blue Collar Business School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms of Service</a>
            <a href="#" className="hover:opacity-100">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <CourseOverviewSection />
      <SuccessStoriesSection />
      <PricingSection />
      <ROICalculatorSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}