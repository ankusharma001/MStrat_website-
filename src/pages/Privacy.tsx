
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Eye, Database, FileCheck } from 'lucide-react';

const Privacy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-stone-800 mb-6">
            Privacy & Security
          </h1>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto">
            Your financial privacy and security are our top priorities. Learn how we protect 
            your data with industry-leading security measures and transparent privacy practices.
          </p>
        </motion.div>

        {/* Security Features */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-stone-800 text-center mb-12"
          >
            Security Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              // {
              //   icon: Lock,
              //   title: "Bank-Level Encryption",
              //   description: "All your data is protected with AES-256 encryption, the same standard used by banks and financial institutions worldwide.",
              //   color: "from-green-400 to-green-500"
              // },
              {
                icon: Eye,
                title: "Zero-Knowledge Architecture",
                description: "We can't see your financial data. Your information is encrypted on your device before it ever reaches our servers.",
                color: "from-stone-400 to-stone-500"
              },
              {
                icon: Shield,
                title: "Biometric Authentication",
                description: "Secure your app with Face ID or Touch ID. Your biometric data never leaves your device.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Globe,
                title: "Secure Cloud Sync",
                description: "Your encrypted data syncs securely across your devices using industry-standard protocols.",
                color: "from-stone-500 to-stone-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 border border-stone-100 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Privacy Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl p-12 border border-stone-100 mb-20 shadow-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-stone-800 mb-12 text-center"
          >
            Our Privacy Principles
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: "Data Minimization",
                description: "We only collect the data necessary to provide you with the best Expense tracker and management experience. No unnecessary personal information is ever requested or stored.",
              },
              {
                title: "Your Data, Your Control",
                description: "You have complete control over your Expense data. Export it, delete it, or take it with you at any time. Your data belongs to you, not us.",
              },
              {
                title: "No Data Selling",
                description: "We will never sell, rent, or share your Expense data with third parties for marketing purposes. Your privacy is not for sale.",
              },
              {
                title: "Transparent Practices",
                description: "We're committed to being transparent about how we handle your data. Any changes to our privacy policy will be clearly communicated to you.",
              },
              {
                title: "Local Processing",
                description: "Most data processing, like calculation of expsense groups expesnse  happens locally on your device. This means your sensitive like Expense information stays with you.",
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 border-green-400 pl-8 py-4"
              >
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{principle.title}</h3>
                <p className="text-stone-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance & Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-stone-800 mb-12"
          >
            Compliance & Standards
          </motion.h2> */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "SOC 2 Type II",
                description: "Audited security controls",
                icon: FileCheck,
                color: "from-green-400 to-green-500"
              },
              {
                title: "GDPR Compliant",
                description: "European privacy standards",
                icon: Shield,
                color: "from-stone-400 to-stone-500"
              },
              {
                title: "CCPA Compliant",
                description: "California privacy rights",
                icon: Database,
                color: "from-green-500 to-green-600"
              },
              {
                title: "PCI DSS",
                description: "Payment card security",
                icon: Lock,
                color: "from-stone-500 to-stone-600"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl p-6 border border-stone-100 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{cert.title}</h3>
                <p className="text-stone-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-10 border border-stone-100 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-stone-800 mb-4">Questions About Privacy?</h3>
            <p className="text-stone-600 mb-6">
              We're here to help. If you have any questions about how we protect your privacy 
              and secure your data, please don't hesitate to reach out.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Privacy Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
