import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectType?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, budget, projectType, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", email);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "NextLevelDesign <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank you for contacting us, ${name}!</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            We have received your message and will get back to you within 24 hours.
          </p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; font-size: 18px; margin-top: 0;">Your Submission Details:</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            ${company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            ${budget ? `<p style="margin: 8px 0;"><strong>Budget:</strong> ${budget}</p>` : ''}
            ${projectType ? `<p style="margin: 8px 0;"><strong>Project Type:</strong> ${projectType}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Message:</strong></p>
            <p style="margin: 8px 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 14px; color: #888; margin-top: 30px;">
            Best regards,<br>
            <strong>The NextLevelDesign Team</strong>
          </p>
        </div>
      `,
    });

    console.log("Customer confirmation email sent:", customerEmailResponse);

    // Send notification to business owner
    // TODO: Replace with your actual business email
    const ownerEmailResponse = await resend.emails.send({
      from: "NextLevelDesign <onboarding@resend.dev>",
      to: ["your-business-email@example.com"], // TODO: Update this email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Contact Form Submission</h1>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            ${company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            ${budget ? `<p style="margin: 8px 0;"><strong>Budget:</strong> ${budget}</p>` : ''}
            ${projectType ? `<p style="margin: 8px 0;"><strong>Project Type:</strong> ${projectType}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Message:</strong></p>
            <p style="margin: 8px 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 14px; color: #888;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log("Owner notification email sent:", ownerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        customerEmailId: customerEmailResponse.data?.id,
        ownerEmailId: ownerEmailResponse.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
