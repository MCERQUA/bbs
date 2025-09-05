import { motion } from "framer-motion"
import { User, BookOpen, Award, TrendingUp, Calendar, CheckCircle, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export default function DashboardPage() {
  // Mock data - would be fetched from API
  const studentProgress = {
    currentWeek: 3,
    currentDay: 18,
    completedLessons: 17,
    totalLessons: 84,
    streak: 12,
    nextLesson: "Job Costing Essentials"
  }

  const recentLessons = [
    { day: 17, title: "Daily Financial Management", completed: true },
    { day: 16, title: "QuickBooks Setup", completed: true },
    { day: 15, title: "Accounting Fundamentals", completed: true }
  ]

  const achievements = [
    { title: "Week 1 Complete", icon: "🏆", earned: true },
    { title: "Week 2 Complete", icon: "🏆", earned: true },
    { title: "7-Day Streak", icon: "🔥", earned: true },
    { title: "Financial Module", icon: "💰", earned: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Welcome Back, John!</h1>
            <p className="text-xl text-amber-700">You're on Day {studentProgress.currentDay} of your transformation journey</p>
          </motion.div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
                <Badge className="bg-orange-100 text-orange-800">Progress</Badge>
              </div>
              <p className="text-3xl font-bold text-amber-900">{Math.round((studentProgress.completedLessons / studentProgress.totalLessons) * 100)}%</p>
              <p className="text-amber-700">Course Complete</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
                <Badge className="bg-blue-100 text-blue-800">Week {studentProgress.currentWeek}</Badge>
              </div>
              <p className="text-3xl font-bold text-amber-900">Day {studentProgress.currentDay}</p>
              <p className="text-amber-700">Current Position</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <Badge className="bg-green-100 text-green-800">Streak</Badge>
              </div>
              <p className="text-3xl font-bold text-amber-900">{studentProgress.streak}</p>
              <p className="text-amber-700">Day Streak 🔥</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-purple-600" />
                <Badge className="bg-purple-100 text-purple-800">Achievements</Badge>
              </div>
              <p className="text-3xl font-bold text-amber-900">3</p>
              <p className="text-amber-700">Badges Earned</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Today's Lesson */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Today's Lesson</h2>
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="mb-2 bg-amber-800 text-white">Day {studentProgress.currentDay}</Badge>
                      <h3 className="text-xl font-bold text-amber-900">{studentProgress.nextLesson}</h3>
                      <p className="text-amber-700 mt-2">Learn how to accurately track costs for every job to ensure profitability.</p>
                    </div>
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-amber-600">15 minutes</span>
                    <Link to="/lessons/current">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        Start Lesson
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Recent Lessons */}
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Recent Lessons</h3>
                <div className="space-y-3">
                  {recentLessons.map((lesson, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-amber-50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <p className="font-medium text-amber-900">Day {lesson.day}: {lesson.title}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-amber-600">
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-amber-900 mb-4">Achievements</h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`text-center p-3 rounded-lg ${
                        achievement.earned ? 'bg-amber-50' : 'bg-gray-50 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <p className="text-xs text-amber-800">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-amber-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/resources" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resources
                    </Button>
                  </Link>
                  <Link to="/community" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Join Community Call
                    </Button>
                  </Link>
                  <Link to="/support" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Award className="w-4 h-4 mr-2" />
                      Get Support
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}