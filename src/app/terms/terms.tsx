"use client";

import React from 'react';
import Link from 'next/link';
import { FiFileText, FiUsers, FiCpu, FiShield, FiAlertTriangle } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const Terms = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-24" dir={dir}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('home.footer.termsOfService') || 'Terms of Service'}
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using Uniview Iran services. Your access to and use of the service is conditioned on your acceptance of these terms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiFileText className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 mb-4">
                By accessing or using the Uniview Iran website, products, or services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site or services.
              </p>
              <p className="text-gray-700">
                The materials contained in this website and the products provided by Uniview Iran are protected by applicable copyright and trademark law.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiUsers className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Use License</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on Uniview Iran's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on Uniview Iran's website or products</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-700">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Uniview Iran at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiCpu className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Products and Services</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Uniview Iran offers a range of security solutions, including but not limited to surveillance cameras, access control systems, and video management software. All products are subject to availability and we reserve the right to discontinue any product at any time.
              </p>
              <p className="text-gray-700 mb-4">
                Product specifications and prices are subject to change without notice. While we strive to provide accurate product information, we do not warrant that product descriptions or other content on the site is accurate, complete, reliable, current, or error-free.
              </p>
              <p className="text-gray-700">
                For hardware products, standard manufacturer warranties apply as specified in the product documentation. Service agreements and extended warranties may be available for purchase.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Disclaimer</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The materials on Uniview Iran's website and our products are provided on an 'as is' basis. Uniview Iran makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700 mb-4">
                Further, Uniview Iran does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
              <p className="text-gray-700">
                While our products are designed to enhance security, no security system is 100% effective. Uniview Iran does not guarantee that our products will prevent all security breaches or incidents.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiAlertTriangle className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Limitations</h2>
              </div>
              <p className="text-gray-700 mb-4">
                In no event shall Uniview Iran or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Uniview Iran's website or products, even if Uniview Iran or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-gray-700 mb-4">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiFileText className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Accuracy of Materials</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The materials appearing on Uniview Iran's website could include technical, typographical, or photographic errors. Uniview Iran does not warrant that any of the materials on its website are accurate, complete, or current. Uniview Iran may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Links</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Uniview Iran has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Uniview Iran of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiAlertTriangle className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Modifications</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Uniview Iran may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiFileText className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Governing Law</h2>
              </div>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the Islamic Republic of Iran and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FiShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Uniview Iran</strong></p>
                <p className="text-gray-700 mb-2">Email: legal@uniview-iran.com</p>
                <p className="text-gray-700 mb-2">Phone: +98 21 XXXX XXXX</p>
                <p className="text-gray-700">Address: [Your Address in Iran]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 mb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Need Clarification About Our Terms?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              If you have any questions about our terms of service or how they apply to your use of our products, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center"
              >
                Contact Our Support Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
