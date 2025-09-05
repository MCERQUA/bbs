import { motion } from "framer-motion"
import { BookOpen, Clock, Users, Award, ArrowRight, Calendar, DollarSign, Target, Shield, TrendingUp, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const courseModules = [
  {
    id: "foundations",
    week: "Weeks 1-2",
    title: "Business Foundations",
    icon: <Shield className="w-6 h-6" />,
    description: "Entity structure, registration, banking, insurance, and contracts",
    lessons: 14,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "financial",
    week: "Weeks 3-4",
    title: "Financial Management",
    icon: <DollarSign className="w-6 h-6" />,
    description: "QuickBooks, job costing, pricing, payroll, and tax strategies",
    lessons: 14,
    color: "from-green-500 to-green-600"
  },
  {
    id: "marketing",
    week: "Weeks 5-6",
    title: "Marketing & Sales",
    icon: <Target className="w-6 h-6" />,
    description: "Brand building, online presence, lead generation, and closing",
    lessons: 14,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "operations",
    week: "Weeks 7-8",
    title: "Operations & Management",
    icon: <Users className="w-6 h-6" />,
    description: "SOPs, safety programs, project management, and team building",
    lessons: 14,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "legal",
    week: "Weeks 9-10",
    title: "Legal & Compliance",
    icon: <Shield className="w-6 h-6" />,
    description: "Contracts, employment law, OSHA, licensing, and disputes",
    lessons: 14,
    color: "from-red-500 to-red-600"
  },
  {
    id: "growth",
    week: "Week 11",
    title: "Growth & Scaling",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Expansion strategies, equipment, new services, and exit planning",
    lessons: 7,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: "personal",
    week: "Week 12",
    title: "Personal Development",
    icon: <Brain className="w-6 h-6" />,
    description: "Leadership, negotiation, mindset, and work-life balance",
    lessons: 7,
    color: "from-pink-500 to-pink-600"
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Curriculum
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              12-Week Contractor Business Mastery
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              84 daily lessons delivered via email, covering everything you need to build, 
              manage, and scale a successful contracting business.
            </p>
          </motion.div>

          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-900">12</p>
              <p className="text-amber-700">Weeks</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-900">84</p>
              <p className="text-amber-700">Lessons</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-900">15</p>
              <p className="text-amber-700">Min/Day</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-900">50+</p>
              <p className="text-amber-700">Templates</p>
            </div>
          </div>

          {/* Course Modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${module.color} text-white`}>
                      {module.icon}
                    </div>
                    <Badge variant="outline" className="text-amber-700 border-amber-300">
                      {module.week}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{module.title}</h3>
                  <p className="text-amber-700 mb-4">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-600">{module.lessons} lessons</span>
                    <Link to={`/courses/${module.id}`}>
                      <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto">
              Join 500+ contractors who are building successful, scalable businesses 
              with our comprehensive email course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enroll">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Start Free 7-Day Trial
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
                  View Pricing Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}