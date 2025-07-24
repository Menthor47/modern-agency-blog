import SEOHead from '@/components/ui/seo-head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Privacy Policy - Next.Level.Design"
        description="Learn how Next.Level.Design protects your privacy and handles your personal data in compliance with GDPR and other privacy regulations."
        noindex={true}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation or audit</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p>This may include your name, email address, company name, phone number, and project details.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. GDPR Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>If you are a resident of the European Union, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Right to access:</strong> You can request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> You can request correction of inaccurate data</li>
                <li><strong>Right to erasure:</strong> You can request deletion of your personal data</li>
                <li><strong>Right to portability:</strong> You can request transfer of your data</li>
                <li><strong>Right to object:</strong> You can object to processing of your data</li>
              </ul>
              <p>To exercise these rights, contact us at privacy@nextleveldesign.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We implement appropriate technical and organizational measures to protect your personal data, including:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our website uses cookies to improve your experience. We use:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> To understand how visitors use our site</li>
                <li><strong>Marketing cookies:</strong> To provide relevant advertisements (with consent)</li>
              </ul>
              <p>You can control cookie preferences through your browser settings.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may use third-party services that collect, monitor and analyze data:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Google Analytics (with IP anonymization)</li>
                <li>Email marketing platforms (with explicit consent)</li>
                <li>Customer relationship management systems</li>
              </ul>
              <p>These services have their own privacy policies governing their use of your information.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact form submissions: 3 years</li>
                <li>Email communications: 7 years (for business records)</li>
                <li>Website analytics: 26 months (Google Analytics default)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. International Transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other appropriate safeguards as required by applicable law</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our services are not intended for children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@nextleveldesign.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Digital Ave, Tech City, TC 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;