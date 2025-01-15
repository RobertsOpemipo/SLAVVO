/* eslint-disable @typescript-eslint/no-unused-vars 
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(req: { json: () => PromiseLike<{ email: unknown; }> | { email: unknown; }; }) {
    const { email } = await req.json();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return new Response(JSON.stringify({ message: "Valid email is required." }), { status: 400 });
        }

    try {
    const response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_AUDIENCE_ID ?? "",
        {
            email_address: String(email),  
            status: "subscribed",           
        }
    );

        return new Response(JSON.stringify({ message: "Successfully subscribed!" }), { status: 200 });
    } catch (error) {
    console.error("Error subscribing:", error); // Log full error object
    return new Response(JSON.stringify({ message: "Subscription failed", error: error.response?.data || error.message }), { status: 500 });
        }
}*/