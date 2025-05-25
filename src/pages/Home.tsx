
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, TrendingUp, Clock, Target, BarChart3 } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Coming Soon to iOS</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  Your Personal
                  <span className="block text-green-600">Finance Expert</span>
                  <span className="block text-stone-600">in Your Pocket</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Identify spending patterns instantly, get customized budgeting guides, and manage 
                  your finances with smart insights - all in one beautifully designed app.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Notified at Launch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-8 w-8 text-white" />
                    <span className="text-white font-semibold text-lg">FinanceTracker</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-white/90">Point your camera at any expense</div>
                    <div className="text-white/90">for instant categorization</div>
                    <div className="bg-white/20 rounded-lg p-3 mt-4">
                      <div className="flex items-center justify-between text-white">
                        <span>Smart Recognition</span>
                        <TrendingUp className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-yellow-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💡</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                >
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-stone-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How FinanceTracker Helps You Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming personal finance management with real-time expense tracking and intelligent insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Expense Tracking",
                description: "Point your camera at any receipt and get instant expense categorization with AI-powered recognition.",
                icon: Target,
                color: "from-green-400 to-green-500"
              },
              {
                title: "Intelligent Budgeting",
                description: "Get personalized budgeting recommendations based on your spending patterns and financial goals.",
                icon: TrendingUp,
                color: "from-stone-400 to-stone-500"
              },
              {
                title: "Real-time Insights",
                description: "Monitor your financial health with real-time analytics and spending trend visualization.",
                icon: BarChart3,
                color: "from-gray-400 to-gray-500"
              },
              {
                title: "Secure & Private",
                description: "Your financial data stays protected with bank-level security and end-to-end encryption.",
                icon: Shield,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Smart Reminders",
                description: "Never miss a bill payment with intelligent notifications and spending limit alerts.",
                icon: Clock,
                color: "from-stone-500 to-stone-600"
              },
              {
                title: "Goal Management",
                description: "Set and track financial goals with visual progress indicators and milestone celebrations.",
                icon: Target,
                color: "from-gray-500 to-gray-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Life?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already taking control of their finances with smart, 
              AI-powered insights and beautiful, intuitive design.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Early Access
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
