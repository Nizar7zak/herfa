import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import WelcomeTemplate from "@/emails/WelcomeTemplate"

export async function POST( req: NextRequest ) {
  const { name, email, phone, message } = await req.json();

  if ( !name || !email || !phone || !message ) {
    return NextResponse.json( { message: "جميع الحقول مطلوبة" }, { status: 400 } );
  }

  try {
    const transporter = nodemailer.createTransport( {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    } );

    const mailToYou = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_RECEIVER,
      subject: `رسالة جديدة من ${name}`,
      html: `
        <p><b>الاسم:</b> ${name}</p>
        <p><b>البريد الإلكتروني:</b> ${email}</p>
        <p><b>رقم الهاتف:</b> ${phone}</p>
        <p><b>الرسالة:</b><br/>${message}</p>
      `,
    };

    const userEmailHtml = await render( <WelcomeTemplate name={ name } /> );

    const mailToUser = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "شكراً لتواصلك معنا",
      html: userEmailHtml,
    };

    await transporter.sendMail( mailToYou );
    await transporter.sendMail( mailToUser );

    return NextResponse.json( { message: "تم الإرسال بنجاح" }, { status: 200 } );

  } catch ( error ) {
    console.error( "Error sending email:", error );
    return NextResponse.json( { message: "فشل في إرسال البريد الإلكتروني" }, { status: 500 } );
  }
}
