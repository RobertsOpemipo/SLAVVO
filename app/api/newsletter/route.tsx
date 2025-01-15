// app/api/newsletter/route.js
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(req) {
    const { email } = await req.json();

    if (!email) {
        return new Response(JSON.stringify({ message: "Email is required." }), { status: 400 });
    }

    try {
        const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: "subscribed",
        });
        return new Response(JSON.stringify({ message: "Successfully subscribed!" }), { status: 200 });
    } catch (error) {
        console.error("Error subscribing:", error);
        return new Response(JSON.stringify({ message: "Subscription failed", error: error.message }), { status: 500 });
    }
}