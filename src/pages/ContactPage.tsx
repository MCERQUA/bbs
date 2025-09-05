import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
  }

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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Let's Start Your Transformation
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Ready to take your contracting business to the next level? 
              We're here to answer your questions and help you get started.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-amber-900">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-amber-200 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-amber-900">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-amber-200 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-amber-900">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-amber-900">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-amber-200 focus:border-orange-500"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-amber-900">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-amber-200 rounded-md focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Tell us about your business and goals..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <p className="font-semibold text-amber-900">Email</p>
                      <p className="text-amber-700">support@bluecollarbusinessschool.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <p className="font-semibold text-amber-900">Phone</p>
                      <p className="text-amber-700">1-800-BBS-GROW</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                    <div>
                      <p className="font-semibold text-amber-900">Headquarters</p>
                      <p className="text-amber-700">Austin, Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-amber-700">
                  <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM CST</p>
                  <p><span className="font-semibold">Saturday:</span> 9:00 AM - 2:00 PM CST</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Response Time</h3>
                <p className="text-amber-700 mb-4">
                  We typically respond to all inquiries within 24 business hours. 
                  For urgent matters, please call our support line.
                </p>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-semibold">Priority Support</span>
                  <Badge className="bg-green-100 text-green-800">For Members</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}