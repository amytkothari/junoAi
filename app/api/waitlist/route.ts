import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Email to the admin (you can change this to your email)
    const adminEmail = process.env.ADMIN_EMAIL || 'your-email@gmail.com';

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: adminEmail,
      subject: 'New Waitlist Signup - Juno',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">🎉 New Waitlist Signup!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Platform:</strong> Juno Mental Health App</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent automatically when someone joined your waitlist.
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to Juno Waitlist! 🧠',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
          <h2 style="color: #6366f1; text-align: center;">Welcome to Juno! 🧠</h2>
          <p>Hi there,</p>
          <p>Thank you for joining the waitlist for <strong>Juno</strong> - your AI-powered mental health journaling companion!</p>
          <p>We're working hard to create a journaling experience that feels like talking to a friend who truly understands.</p>
          <div style="background-color: #e0e7ff; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h3 style="color: #4338ca; margin: 0 0 10px 0;">What to expect:</h3>
            <ul style="color: #3730a3; margin: 0; padding-left: 20px;">
              <li>AI-powered prompts that guide your reflection</li>
              <li>Private and secure journaling space</li>
              <li>Mood tracking and insights over time</li>
              <li>Gentle reminders to help you stay consistent</li>
            </ul>
          </div>
          <p>We'll notify you as soon as Juno is ready for you to try. In the meantime, take care of yourself!</p>
          <p>Best regards,<br>The Juno Team</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            You're receiving this email because you joined the Juno waitlist.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
