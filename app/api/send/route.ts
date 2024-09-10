import { EmailTemplate } from "@/components/emails/email-template";
import { RESEND_FROM_EMAIL } from "@/config";
import { NextRequest } from "next/server";
import { ReactNode } from "react";
import { Resend } from "resend";
// type: 'INSERT',
//   table: 'users',
//   record: {
//     id: 'b8e87681-619f-413f-aa65-2fd9e331d520',
//     aud: 'authenticated',
//     role: '',
//     email: 'kk@mail.com',
//     phone: null,
//     created_at: '2024-09-06T14:47:40.308941+00:00',
//     deleted_at: null,
//     invited_at: null,
//     updated_at: '2024-09-06T14:47:40.308941+00:00',
//     instance_id: '00000000-0000-0000-0000-000000000000',
//     is_sso_user: false,
//     banned_until: null,
//     confirmed_at: null,
//     email_change: '',
//     is_anonymous: false,
//     phone_change: '',
//     is_super_admin: null,
//     recovery_token: '',
//     last_sign_in_at: null,
//     recovery_sent_at: null,
//     raw_app_meta_data: { provider: 'email', providers: [Array] },
//     confirmation_token: '',
//     email_confirmed_at: null,
//     encrypted_password: '',
//     phone_change_token: '',
//     phone_confirmed_at: null,
//     raw_user_meta_data: {},
//     confirmation_sent_at: null,
//     email_change_sent_at: null,
//     phone_change_sent_at: null,
//     email_change_token_new: '',
//     reauthentication_token: '',
//     reauthentication_sent_at: null,
//     email_change_token_current: '',
//     email_change_confirm_status: 0
//   },
//   schema: 'auth',
//   old_record: null
// }
const resend = new Resend(process.env.RESEND_API_KEY);

// http://host.docker.internal:3000/api/send

export async function POST(request: NextRequest) {
  const json = await request.json();
  const record = json.record;

  // confirmed email
  if (
    record.type === "UPDATE" &&
    record.email_confirmed_at != null &&
    record.old_record.email_confirmed_at === null
  ) {
    try {
      const email = json.record.email;
      const { data, error } = await resend.emails.send({
        from: RESEND_FROM_EMAIL,
        to: [email],
        subject: "Welcome",
        react: EmailTemplate({ firstName: email }),
        bcc: ["luije87@gmail.com"],
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }

  return Response.json({ message: "No email sent" });
}
