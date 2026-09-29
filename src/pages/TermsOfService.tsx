import { motion } from 'motion/react';
import { ArrowLeft, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-4xl mx-auto py-6 pb-16 px-4 font-montserrat"
    >
      {/* Back button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-pink-deep hover:text-black mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Studio</span>
      </Link>

      <div className="bg-white rounded-[32px] p-8 md:p-12 border border-brand-pink-light shadow-sm">
        {/* Header */}
        <div className="border-b border-brand-pink-light/60 pb-6 mb-8">
          <div className="flex items-center gap-2 text-brand-pink-deep bg-brand-pink-light/30 border border-brand-pink-light px-3 py-1 rounded-full w-fit mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[10px] font-black uppercase tracking-widest">Legal Document</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-black text-black">
            Terms of Service
          </h1>
          <p className="text-xs text-black/50 mt-1 font-medium">
            Last Updated: September 27, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-black/80 leading-relaxed space-y-7">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">1. Acceptance of These Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of stylAist ("stylAist," "we," "us," or "our").
            </p>
            <p>
              By accessing or using stylAist, you acknowledge that you have read and understood these Terms and agree to be bound by them and by our Privacy Policy.
            </p>
            <p>
              If you do not agree to these Terms, please do not use stylAist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">2. Nature of the Service</h2>
            <p>
              stylAist is a fashion discovery and personal styling project.
            </p>
            <p>
              The service may provide tools, references, recommendations, aesthetic information, color palettes, product discoveries, and other creative or informational content intended to help users explore fashion and develop their personal style.
            </p>
            <p>
              stylAist is not a retailer, manufacturer, distributor, payment processor, shipping provider, or seller of the physical products that may be displayed or referenced through the service.
            </p>
            <p>
              Unless explicitly stated otherwise, stylAist does not take ownership of products displayed through third-party retailers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">3. Styling and AI-Generated Content</h2>
            <p>
              Any styling suggestions, recommendations, aesthetic analysis, color information, outfit combinations, or other content generated or presented by stylAist are provided for informational, creative, and entertainment purposes.
            </p>
            <p>
              Such content is not a guarantee that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-black/75">
              <li>a particular garment will suit a particular person;</li>
              <li>colors or combinations will appear as expected;</li>
              <li>a product will fit a particular person;</li>
              <li>a product will be available;</li>
              <li>a product will have the characteristics described by a third party; or</li>
              <li>a particular styling recommendation will produce a desired result.</li>
            </ul>
            <p>
              Where stylAist uses automated or artificial-intelligence-based functionality, results may be inaccurate, incomplete, inconsistent, or unsuitable for a particular user.
            </p>
            <p>
              Users are responsible for deciding whether and how to use any styling recommendation provided by stylAist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">4. Third-Party Product Information</h2>
            <p>
              stylAist may display or reference products, product names, descriptions, images, prices, colors, sizes, availability, promotions, and other information obtained from third-party retailers, affiliate networks, brands, or other sources.
            </p>
            <p>
              Third-party product information may change at any time and may contain errors or omissions.
            </p>
            <p>
              stylAist does not guarantee the accuracy, completeness, reliability, availability, price, stock status, sizing, color representation, description, quality, legality, or suitability of any third-party product or product information.
            </p>
            <p>
              The relevant retailer's website is the authoritative source for current product information.
            </p>
            <p>
              If you identify an inaccurate product listing or other issue, you may contact us so that we can review it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">5. Purchases and Third-Party Retailers</h2>
            <p>
              When you select a product or shopping link and are redirected to another website, you are leaving stylAist and interacting directly with the third-party website.
            </p>
            <p>
              Any purchase, payment, order, delivery, return, refund, exchange, warranty, customer service issue, or other transaction is between you and the relevant third-party retailer.
            </p>
            <p>
              stylAist is not a party to those transactions and does not process or control them.
            </p>
            <p>
              stylAist is not responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-black/75">
              <li>the fulfillment or cancellation of an order;</li>
              <li>payment processing;</li>
              <li>shipping or delivery;</li>
              <li>returns or refunds;</li>
              <li>product defects;</li>
              <li>product warranties;</li>
              <li>retailer customer service;</li>
              <li>retailer policies; or</li>
              <li>disputes between users and third-party merchants.</li>
            </ul>
            <p>
              Any dispute concerning a purchase should be directed to the relevant retailer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">6. Affiliate Relationships</h2>
            <p>
              Some links on stylAist may be affiliate links.
            </p>
            <p>
              If you click an affiliate link and subsequently make a qualifying purchase, stylAist may receive a commission from the relevant retailer or affiliate network.
            </p>
            <p>
              Affiliate commissions do not increase the price you pay for the product.
            </p>
            <p>
              The existence of an affiliate relationship does not mean that stylAist owns, sells, manufactures, endorses, or guarantees the relevant product unless expressly stated otherwise.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">7. Third-Party Websites and Services</h2>
            <p>
              stylAist may contain links to websites, applications, services, retailers, brands, affiliate networks, and other third parties.
            </p>
            <p>
              These third parties operate independently from stylAist and may have their own terms, privacy policies, security practices, and content.
            </p>
            <p>
              stylAist does not control and is not responsible for the availability, content, accuracy, security, privacy practices, policies, products, services, or actions of third-party websites or services.
            </p>
            <p>
              You access third-party services at your own discretion and should review their applicable terms and policies before using them.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">8. Intellectual Property</h2>
            <p>
              The stylAist name, logo, original website design, original written content, software, interface, and other original materials created for stylAist may be protected by copyright, trademark, and other applicable intellectual-property laws.
            </p>
            <p>
              Except as expressly permitted by stylAist or applicable law, you may not:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-black/75">
              <li>copy or reproduce stylAist's proprietary content or software;</li>
              <li>scrape or systematically extract data from the service;</li>
              <li>redistribute substantial portions of the service;</li>
              <li>reverse-engineer or attempt to circumvent technical protections;</li>
              <li>interfere with the operation of the service; or</li>
              <li>commercially exploit stylAist's proprietary materials.</li>
            </ul>
            <p>
              Third-party trademarks, product names, photographs, descriptions, and other materials remain the property of their respective owners. Their appearance on stylAist does not necessarily mean that the relevant owner endorses or operates stylAist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">9. Acceptable Use</h2>
            <p>
              You agree not to use stylAist:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-black/75">
              <li>for unlawful purposes;</li>
              <li>to interfere with or disrupt the service;</li>
              <li>to attempt unauthorized access to systems or data;</li>
              <li>to introduce malicious software or harmful code;</li>
              <li>to scrape or automatically collect information in a manner that violates these Terms or applicable restrictions;</li>
              <li>to impersonate stylAist or another person or organization; or</li>
              <li>in a manner that could reasonably damage the service or its users.</li>
            </ul>
            <p>
              We reserve the right to restrict or terminate access to the service where reasonably necessary to protect the service, its users, or third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">10. Availability and Changes to the Service</h2>
            <p>
              stylAist is provided on an "as is" and "as available" basis.
            </p>
            <p>
              We may modify, add, remove, suspend, or discontinue any part of the service at any time.
            </p>
            <p>
              We do not guarantee that stylAist will:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-black/75">
              <li>always be available;</li>
              <li>operate without interruption;</li>
              <li>be free from errors or bugs;</li>
              <li>remain compatible with every device or browser;</li>
              <li>remain unchanged;</li>
              <li>remain available indefinitely; or</li>
              <li>always contain functioning third-party links.</li>
            </ul>
            <p>
              We may perform maintenance, updates, or other changes that temporarily affect availability.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">11. Disclaimer of Warranties</h2>
            <p>
              To the maximum extent permitted by applicable law, stylAist is provided without warranties of any kind, whether express, implied, statutory, or otherwise.
            </p>
            <p>
              To the extent permitted by law, we disclaim warranties concerning the accuracy, reliability, availability, suitability, merchantability, fitness for a particular purpose, and non-infringement of the service and information provided through it.
            </p>
            <p>
              Nothing in these Terms excludes a warranty, right, or protection that cannot legally be excluded under applicable law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, stylAist and its operators, creators, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or business opportunities arising from or related to your use of, or inability to use, stylAist.
            </p>
            <p>
              This includes, to the extent permitted by law, losses arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-black/75">
              <li>reliance on styling recommendations or other information;</li>
              <li>inaccurate or outdated third-party product information;</li>
              <li>product purchases made through third-party retailers;</li>
              <li>third-party websites or services;</li>
              <li>interrupted or unavailable service;</li>
              <li>technical errors or bugs; or</li>
              <li>unauthorized access or security incidents beyond our reasonable control.</li>
            </ul>
            <p>
              Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">13. Indemnification</h2>
            <p>
              To the extent permitted by applicable law, you agree to be responsible for claims, losses, liabilities, and reasonable expenses arising from your unlawful use of stylAist, your violation of these Terms, or your infringement of another person's rights.
            </p>
            <p>
              This section does not apply to the extent that the relevant claim results from conduct for which stylAist is legally responsible.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">14. Privacy</h2>
            <p>
              Your use of stylAist is also subject to our Privacy Policy, which explains how information may be handled when you use the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes to stylAist, third-party services, applicable requirements, or the way the service operates.
            </p>
            <p>
              When we make changes, we will update the "Last Updated" date at the beginning of these Terms.
            </p>
            <p>
              Your continued use of stylAist after updated Terms are posted constitutes acceptance of the updated Terms to the extent permitted by applicable law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif">16. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be interpreted or limited to the minimum extent necessary, and the remaining provisions will continue to apply to the extent permitted by law.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-brand-pink-light/60">
            <h2 className="text-base sm:text-lg font-bold text-black font-serif flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-pink-deep" />
              <span>17. Contact</span>
            </h2>
            <p>
              For questions, concerns, legal notices, or other inquiries concerning stylAist or these Terms, contact:
            </p>
            <p className="font-bold text-brand-pink-deep text-sm">
              <a href="mailto:tchstud2026i2605@gmail.com" className="hover:underline">
                tchstud2026i2605@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
