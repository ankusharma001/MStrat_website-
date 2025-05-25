
import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy & Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your financial privacy and security are our top priorities. Learn how we protect 
            your data with industry-leading security measures and transparent privacy practices.
          </p>
        </motion.div>

        {/* Security Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 text-center mb-8"
          >
            Security Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔐",
                title: "Bank-Level Encryption",
                description: "All your data is protected with AES-256 encryption, the same standard used by banks and financial institutions worldwide."
              },
              {
                icon: "🔒",
                title: "Zero-Knowledge Architecture",
                description: "We can't see your financial data. Your information is encrypted on your device before it ever reaches our servers."
              },
              {
                icon: "🛡️",
                title: "Biometric Authentication",
                description: "Secure your app with Face ID or Touch ID. Your biometric data never leaves your device."
              },
              {
                icon: "🌐",
                title: "Secure Cloud Sync",
                description: "Your encrypted data syncs securely across your devices using industry-standard protocols."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="backdrop-blur-md bg-white/80 rounded-2xl p-6 border border-green-200/50 hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-md bg-white/80 rounded-2xl p-8 border border-green-200/50 mb-16 shadow-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Privacy Principles
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: "Data Minimization",
                description: "We only collect the data necessary to provide you with the best financial tracking experience. No unnecessary personal information is ever requested or stored."
              },
              {
                title: "Your Data, Your Control",
                description: "You have complete control over your data. Export it, delete it, or take it with you at any time. We believe your financial data belongs to you, not us."
              },
              {
                title: "No Data Selling",
                description: "We will never sell, rent, or share your personal financial data with third parties for marketing purposes. Your privacy is not for sale."
              },
              {
                title: "Transparent Practices",
                description: "We're committed to being transparent about how we handle your data. Any changes to our privacy policy will be clearly communicated to you."
              },
              {
                title: "Local Processing",
                description: "Most data processing happens locally on your device. This means your sensitive financial information stays where it belongs - with you."
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-l-4 border-green-500 pl-6 py-2"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
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
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Compliance & Standards
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SOC 2 Type II",
                description: "Audited security controls"
              },
              {
                title: "GDPR Compliant",
                description: "European privacy standards"
              },
              {
                title: "CCPA Compliant",
                description: "California privacy rights"
              },
              {
                title: "PCI DSS",
                description: "Payment card security"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/80 rounded-xl p-4 border border-green-200/50 hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 backdrop-blur-md bg-white/80 rounded-2xl p-6 border border-green-200/50 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About Privacy?</h3>
            <p className="text-gray-600 mb-4">
              We're here to help. If you have any questions about how we protect your privacy 
              and secure your data, please don't hesitate to reach out.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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
