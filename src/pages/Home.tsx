
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, TrendingUp, Clock, Target, BarChart3, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl font-bold text-stone-800 leading-tight">
                  Find{' '}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                      smart
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>{' '}
                  financial
                  <br />
                  insights & tools
                </h1>
                
                <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                  Do you want to learn techniques that will make your 
                  financial management or budgeting journey easier?
                </p>
              </div>

              {/* Email signup */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white border border-stone-200 rounded-2xl text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-stone-800 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send
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
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-stone-800 font-semibold text-lg">FinanceTracker</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-stone-600">Smart expense tracking</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-stone-600">Budget optimization</span>
                      </div>
                      <div className="bg-stone-50 rounded-2xl p-4 mt-4">
                        <div className="flex items-center justify-between text-stone-700">
                          <span className="font-medium">Monthly Savings</span>
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="text-2xl font-bold text-stone-800 mt-1">$1,247</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl px-4 py-2 shadow-lg"
                >
                  <span className="text-white font-medium text-sm">Smart AI</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-8 py-24 bg-gradient-to-br from-stone-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-stone-800 mb-6">
              How FinanceTracker Helps You Grow
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Transforming personal finance management with intelligent tools and insights.
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
                color: "from-green-500 to-green-600"
              },
              {
                title: "Secure & Private",
                description: "Your financial data stays protected with bank-level security and end-to-end encryption.",
                icon: Shield,
                color: "from-stone-500 to-stone-600"
              },
              {
                title: "Smart Reminders",
                description: "Never miss a bill payment with intelligent notifications and spending limit alerts.",
                icon: Clock,
                color: "from-green-400 to-green-500"
              },
              {
                title: "Goal Management",
                description: "Set and track financial goals with visual progress indicators and milestone celebrations.",
                icon: Smartphone,
                color: "from-stone-400 to-stone-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-400 to-green-500 rounded-3xl p-16 shadow-2xl"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Life?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already taking control of their finances with smart, 
              AI-powered insights and beautiful, intuitive design.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
