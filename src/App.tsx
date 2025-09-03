"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useTransform, useInView, useSpring } from "framer-motion"
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Coffee, 
  Brain, 
  Target, 
  Zap,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Headphones
} from "lucide-react"
import confetti from "canvas-confetti"
import NumberFlow from "@number-flow/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

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

interface TestimonialData {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

interface FAQItem {
  question: string
  answer: string
}

// Hero Section
const HeroSection = () => {
  const [squares, setSquares] = useState<React.ReactElement[]>([])
  const timeoutRef = useRef<number | null>(null)

  const shuffle = (array: any[]) => {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
  }

  const squareData = [
    { id: 1, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { id: 4, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
    { id: 5, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
    { id: 6, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" },
    { id: 7, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
    { id: 8, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
    { id: 9, src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop" },
    { id: 10, src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop" },
    { id: 11, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { id: 12, src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
    { id: 13, src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop" },
    { id: 14, src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { id: 15, src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    { id: 16, src: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=400&h=400&fit=crop" }
  ]

  const generateSquares = () => {
    return shuffle([...squareData]).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full rounded-lg"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    ))
  }

  const shuffleSquares = () => {
    setSquares(generateSquares())
    timeoutRef.current = setTimeout(shuffleSquares, 3000) as unknown as number
  }

  useEffect(() => {
    setSquares(generateSquares())
    shuffleSquares()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <section className="w-full px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
            <Coffee className="w-4 h-4 mr-2" />
            Fuel Your Business Growth
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 leading-tight">
            Master Your
            <span className="text-orange-600"> Contractor </span>
            Business
          </h1>
          <p className="text-lg text-amber-800 mt-6 leading-relaxed">
            Interactive quizzes and expert education designed specifically for growing contractors. 
            Build the business knowledge you need to scale from small jobs to industry leadership.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
            Start Learning Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-amber-300 text-amber-800 hover:bg-amber-100 px-8 py-4 text-lg">
            Take Free Quiz
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-6 pt-4"
        >
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 border-2 border-white" />
              ))}
            </div>
            <span className="ml-3 text-amber-800 font-medium">2,500+ contractors trained</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2 rounded-2xl overflow-hidden shadow-2xl"
      >
        {squares}
      </motion.div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging quizzes covering estimating, project management, and business growth strategies."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Learning",
      description: "Real-world scenarios and case studies from successful contractors who've scaled their businesses."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Growth Focus",
      description: "Learn proven strategies for pricing, marketing, team building, and expanding your contractor business."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certification",
      description: "Earn recognized certificates that demonstrate your business knowledge to clients and partners."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with fellow contractors, share experiences, and learn from industry veterans."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert Content",
      description: "Courses created by successful contractors and business experts who understand your challenges."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            From basic business principles to advanced growth strategies, our platform provides the knowledge and tools you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-orange-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials: TestimonialData[] = [
    {
      name: "Mike Rodriguez",
      role: "General Contractor",
      company: "Rodriguez Construction",
      content: "The business education here transformed how I price jobs and manage my team. Revenue increased 40% in just 6 months.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Electrical Contractor",
      company: "Chen Electric Solutions",
      content: "The quizzes helped me identify gaps in my business knowledge. Now I'm confident bidding on larger commercial projects.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Plumbing Contractor",
      company: "Thompson Plumbing Co.",
      content: "From a one-man operation to a team of 12. The business strategies I learned here made all the difference.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
            <Users className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Real Results from Real Contractors
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            See how our education platform has helped contractors like you build thriving businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-amber-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-amber-800 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                  <p className="text-amber-700 text-sm">{testimonial.role}</p>
                  <p className="text-amber-600 text-sm">{testimonial.company}</p>
                </div>
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
  const [isMonthly, setIsMonthly] = useState(true)
  const switchRef = useRef<HTMLButtonElement>(null)

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#f59e0b", "#ea580c", "#dc2626"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
      })
    }
  }

  const plans: PricingPlan[] = [
    {
      name: "STARTER",
      price: "49",
      yearlyPrice: "39",
      period: "per month",
      features: [
        "Access to basic quizzes",
        "5 business courses",
        "Community forum access",
        "Monthly webinars",
        "Email support"
      ],
      description: "Perfect for new contractors starting their business journey",
      buttonText: "Start Learning",
      href: "/sign-up",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL",
      price: "99",
      yearlyPrice: "79",
      period: "per month",
      features: [
        "All Starter features",
        "Advanced business courses",
        "1-on-1 mentoring sessions",
        "Custom business assessments",
        "Priority support",
        "Industry certification",
        "Marketing templates"
      ],
      description: "Ideal for growing contractors ready to scale",
      buttonText: "Go Professional",
      href: "/sign-up",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      price: "199",
      yearlyPrice: "159",
      period: "per month",
      features: [
        "All Professional features",
        "Team training programs",
        "Custom course creation",
        "White-label platform",
        "Dedicated account manager",
        "Advanced analytics",
        "API access"
      ],
      description: "For established contractors with teams",
      buttonText: "Contact Sales",
      href: "/contact",
      isPopular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            <DollarSign className="w-4 h-4 mr-2" />
            Simple Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Invest in Your Business Education
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business size and growth goals. All plans include our satisfaction guarantee.
          </p>

          <div className="flex justify-center mb-10">
            <label className="relative inline-flex items-center cursor-pointer">
              <Label>
                <Switch
                  ref={switchRef as any}
                  checked={!isMonthly}
                  onCheckedChange={handleToggle}
                  className="relative"
                />
              </Label>
            </label>
            <span className="ml-2 font-semibold text-amber-800">
              Annual billing <span className="text-orange-600">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "rounded-2xl border-2 p-8 bg-white text-center relative",
                plan.isPopular ? "border-orange-500 shadow-xl scale-105" : "border-amber-200",
                "flex flex-col h-full"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-orange-500 py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-white h-4 w-4 fill-current mr-1" />
                  <span className="text-white font-semibold text-sm">Most Popular</span>
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                <p className="text-lg font-semibold text-amber-800 mb-4">{plan.name}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-amber-900">
                    $
                    <NumberFlow
                      value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                      format={{
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      transformTiming={{
                        duration: 500,
                        easing: "ease-out",
                      }}
                      willChange
                    />
                  </span>
                  <span className="text-amber-700 ml-2">/ {plan.period}</span>
                </div>

                <p className="text-amber-700 text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800 text-left">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full py-3 font-semibold",
                    plan.isPopular
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300"
                  )}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "How are the courses designed for contractors specifically?",
      answer: "Our courses are created by successful contractors and business experts who understand the unique challenges of the construction industry. Every lesson includes real-world scenarios, practical tools, and strategies that you can implement immediately in your business."
    },
    {
      question: "Can I access the content on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on all devices. You can take quizzes and watch courses on your phone, tablet, or computer - perfect for learning during downtime on job sites."
    },
    {
      question: "What kind of business topics are covered?",
      answer: "We cover everything from basic business fundamentals to advanced growth strategies including: pricing and estimating, project management, team building, marketing and sales, financial management, legal considerations, and scaling operations."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not completely satisfied with the quality of our education platform, we'll refund your payment in full, no questions asked."
    },
    {
      question: "How often is new content added?",
      answer: "We add new courses, quizzes, and resources monthly. Our content library is constantly growing based on industry trends, member feedback, and emerging business strategies that successful contractors are using."
    },
    {
      question: "Can I get help with my specific business challenges?",
      answer: "Yes! Professional and Enterprise members get access to 1-on-1 mentoring sessions with experienced contractors and business coaches. We also have an active community forum where you can get advice from peers."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            <BookOpen className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-amber-700">
            Everything you need to know about our contractor education platform.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-amber-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-amber-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-amber-900">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-amber-600 transition-transform",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-amber-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Proof Section (Stats)
const ProofSection = () => {
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true })

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: 2500, label: "Contractors Trained", suffix: "+" },
    { icon: <Award className="w-8 h-8" />, value: 95, label: "Success Rate", suffix: "%" },
    { icon: <TrendingUp className="w-8 h-8" />, value: 40, label: "Average Revenue Increase", suffix: "%" },
    { icon: <Clock className="w-8 h-8" />, value: 50, label: "Hours of Content", suffix: "+" },
  ]

  const StatCounter = ({ icon, value, label, suffix, delay }: {
    icon: React.ReactNode
    value: number
    label: string
    suffix: string
    delay: number
  }) => {
    const springValue = useSpring(0, { stiffness: 50, damping: 10 })
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

    useEffect(() => {
      if (isInView) {
        springValue.set(value)
      }
    }, [isInView, value, springValue])

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="text-center"
      >
        <div className="text-orange-600 mb-4 flex justify-center">
          {icon}
        </div>
        <div className="text-4xl font-bold text-amber-900 mb-2">
          <motion.span>{displayValue}</motion.span>
          <span>{suffix}</span>
        </div>
        <p className="text-amber-700">{label}</p>
      </motion.div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
            <Shield className="w-4 h-4 mr-2" />
            Proven Results
          </Badge>
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Join thousands of contractors who have transformed their businesses with our education platform.
          </p>
        </motion.div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
                <Headphones className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-amber-700 mb-8">
                Have questions about our platform? Want to discuss your specific business challenges? 
                Our team of contractor business experts is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Phone</h3>
                  <p className="text-amber-700">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p className="text-amber-700">support@contractoredu.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Office</h3>
                  <p className="text-amber-700">123 Business Ave, Suite 100<br />Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-amber-900">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="border-amber-200 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-amber-900">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Smith" 
                    className="border-amber-200 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-amber-900">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-amber-200 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-amber-900">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your Construction Company" 
                  className="border-amber-200 focus:border-orange-500"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-amber-900">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your business goals and challenges..."
                  className="border-amber-200 focus:border-orange-500 min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3">
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-orange-400" />
              <span className="text-2xl font-bold text-white">ContractorEdu</span>
            </div>
            <p className="text-amber-200">
              Empowering contractors with the business knowledge they need to build successful, scalable companies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Quizzes</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Live Chat</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200">
            © 2024 ContractorEdu. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-amber-200 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Component
const ContractorEducationWebsite = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <ProofSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default ContractorEducationWebsite