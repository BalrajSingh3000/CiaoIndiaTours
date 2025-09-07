import { motion } from 'framer-motion';
import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card/20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-4"
          >
            Privacy Policy
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              At Ciao India Tours we value the privacy of our clients and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully to understand our practices regarding your personal data.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Information We Collect</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              We may collect and process the following types of information about you:
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">Personal Information:</h3>
            <ul className="space-y-2 text-muted-foreground font-light mb-6">
              <li>• <strong>Name:</strong> To personalize your experience and for booking purposes.</li>
              <li>• <strong>Contact Details:</strong> Including email address, phone number, and postal address for communication.</li>
              <li>• <strong>Payment Information:</strong> Such as credit card details, billing address, and bank account information for processing payments.</li>
              <li>• <strong>Travel Details:</strong> Including passport information, travel itinerary, and preferences to provide tailored travel services.</li>
              <li>• <strong>Demographic Information:</strong> Age, gender, and interests to improve our services.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Non-Personal Information:</h3>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• <strong>Log Data:</strong> Including IP address, browser type, and pages visited to analyze website usage and improve functionality.</li>
              <li>• <strong>Cookies:</strong> Small files stored on your device that help us remember your preferences and enhance your experience on our website.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• <strong>Providing Services:</strong> To facilitate bookings, process payments, and manage travel itineraries.</li>
              <li>• <strong>Communication:</strong> To send you confirmations, updates, and promotional materials related to our services.</li>
              <li>• <strong>Customer Support:</strong> To address inquiries, resolve issues, and provide customer service.</li>
              <li>• <strong>Personalization:</strong> To tailor our services and recommendations to your preferences.</li>
              <li>• <strong>Marketing:</strong> To send newsletters, offers, and promotional content, subject to your consent.</li>
              <li>• <strong>Compliance:</strong> To comply with legal obligations and protect our rights and the rights of our clients.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Sharing Your Information</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              We may share your personal information with third parties under the following circumstances:
            </p>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• <strong>Service Providers:</strong> We may share your information with trusted third-party providers who assist us in delivering our services, such as airlines, hotels, and payment processors.</li>
              <li>• <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to legal requests, such as subpoenas or court orders.</li>
              <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owners.</li>
              <li>• <strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Data Security</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• <strong>Encryption:</strong> Using secure socket layer (SSL) technology to encrypt sensitive information.</li>
              <li>• <strong>Access Controls:</strong> Limiting access to personal information to authorized personnel only.</li>
              <li>• <strong>Regular Audits:</strong> Conducting regular security audits and assessments to ensure data protection.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Data Retention</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. When your information is no longer needed, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Your Rights</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground font-light mb-6">
              <li>• <strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li>• <strong>Correction:</strong> You can request corrections to any inaccurate or incomplete information.</li>
              <li>• <strong>Deletion:</strong> You can request the deletion of your personal information, subject to legal constraints.</li>
              <li>• <strong>Objection:</strong> You can object to the processing of your personal information for certain purposes.</li>
              <li>• <strong>Withdrawal of Consent:</strong> You can withdraw your consent for us to process your information at any time.</li>
            </ul>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              To exercise these rights, please contact us via <a href="mailto:info@ciaoindiatours.com" className="text-primary hover:underline">info@ciaoindiatours.com</a>
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Third-Party Links</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Contact Us</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-card/30 p-6 rounded-xl border border-white/10">
              <p className="text-foreground font-medium mb-2">Ciao India Tours</p>
              <p className="text-muted-foreground font-light">140, Budhpur Delhi 110036</p>
              <p className="text-muted-foreground font-light">
                <a href="mailto:info@ciaoindiatours.com" className="text-primary hover:underline">info@ciaoindiatours.com</a>
              </p>
              <p className="text-muted-foreground font-light">+919971981381</p>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed mt-6">
              Thank you for choosing Ciao India Tours. We are committed to protecting your privacy and providing you with a safe and enjoyable travel experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;