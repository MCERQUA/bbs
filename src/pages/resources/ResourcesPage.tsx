import { motion } from "framer-motion"
import { FileText, Download, Calculator, BookOpen, Video, Briefcase, Shield, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const resourceCategories = [
  {
    title: "Free Tools & Calculators",
    icon: <Calculator className="w-6 h-6" />,
    description: "Essential business calculators and planning tools",
    resources: [
      { name: "Entity Structure Quiz", type: "Quiz", url: "/resources/entity-quiz" },
      { name: "Tax Savings Calculator", type: "Calculator", url: "/resources/tax-calculator" },
      { name: "Pricing Calculator", type: "Calculator", url: "/resources/pricing-calculator" },
      { name: "ROI Calculator", type: "Calculator", url: "/roi-calculator" }
    ]
  },
  {
    title: "Templates & Documents",
    icon: <FileText className="w-6 h-6" />,
    description: "Ready-to-use contracts, agreements, and forms",
    resources: [
      { name: "Service Agreement Template", type: "PDF", locked: true },
      { name: "Subcontractor Agreement", type: "PDF", locked: true },
      { name: "Change Order Form", type: "PDF", locked: true },
      { name: "Invoice Template", type: "Excel", locked: true }
    ]
  },
  {
    title: "State Guides",
    icon: <Shield className="w-6 h-6" />,
    description: "State-specific licensing and compliance information",
    resources: [
      { name: "All 50 States Directory", type: "Guide", url: "/resources/state-guides" },
      { name: "Licensing Requirements", type: "PDF", url: "/resources/licensing" },
      { name: "Insurance Minimums", type: "PDF", url: "/resources/insurance" },
      { name: "Bonding Requirements", type: "PDF", url: "/resources/bonding" }
    ]
  },
  {
    title: "Video Library",
    icon: <Video className="w-6 h-6" />,
    description: "Training videos and tutorials",
    resources: [
      { name: "QuickBooks Setup Guide", type: "Video", locked: true },
      { name: "LLC Formation Walkthrough", type: "Video", locked: true },
      { name: "Google Business Profile Setup", type: "Video", locked: true },
      { name: "Sales Presentation Training", type: "Video", locked: true }
    ]
  },
  {
    title: "Business Guides",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Comprehensive guides on key business topics",
    resources: [
      { name: "7 LLC Mistakes to Avoid", type: "PDF", url: "/resources/llc-guide" },
      { name: "Contractor Tax Guide 2024", type: "PDF", locked: true },
      { name: "Marketing Playbook", type: "PDF", locked: true },
      { name: "Hiring Your First Employee", type: "PDF", locked: true }
    ]
  },
  {
    title: "Financial Tools",
    icon: <DollarSign className="w-6 h-6" />,
    description: "Spreadsheets and financial management tools",
    resources: [
      { name: "Job Costing Spreadsheet", type: "Excel", locked: true },
      { name: "Cash Flow Projector", type: "Excel", locked: true },
      { name: "Budget Template", type: "Excel", locked: true },
      { name: "Expense Tracker", type: "Excel", locked: true }
    ]
  }
]

export default function ResourcesPage() {
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
              <Briefcase className="w-4 h-4 mr-2" />
              Resources Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Tools & Resources for Contractor Success
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Free tools, templates, calculators, and guides to help you build and grow your contracting business.
            </p>
          </motion.div>

          {/* Resource Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-amber-900">{category.title}</h3>
                </div>
                <p className="text-amber-700 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.resources.map((resource, rIndex) => (
                    <div key={rIndex} className="flex items-center justify-between p-2 hover:bg-amber-50 rounded-lg transition-colors">
                      <div className="flex items-center flex-1">
                        <span className="text-sm text-amber-800">{resource.name}</span>
                        {resource.locked && (
                          <Badge className="ml-2 bg-gray-100 text-gray-600" variant="outline">
                            Pro
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2 text-xs">
                          {resource.type}
                        </Badge>
                        {resource.locked ? (
                          <Shield className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Link to={resource.url || '#'}>
                            <Download className="w-4 h-4 text-orange-600 hover:text-orange-700 cursor-pointer" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Unlock All Premium Resources
            </h2>
            <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto">
              Get instant access to 50+ templates, contracts, calculators, and video tutorials 
              with our Professional and Enterprise plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  View Pricing Plans
                </Button>
              </Link>
              <Link to="/resources/llc-guide">
                <Button size="lg" variant="outline" className="border-amber-300 text-amber-800 hover:bg-white">
                  Get Free LLC Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}