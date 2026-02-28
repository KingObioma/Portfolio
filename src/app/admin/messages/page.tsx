import { prisma } from "@/lib/prisma";
import { Mail, Calendar, User, MessageSquare } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages Dashboard | King Obioma",
  description: "Admin dashboard for viewing contact form messages",
};

export const dynamic = "force-dynamic";

async function getMessages() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return [];
  }
}

export default async function MessagesPage() {
  // Gate: only accessible when ADMIN_KEY is set in the server environment.
  // Set this variable in your Vercel/hosting env vars to enable the route.
  if (!process.env.ADMIN_KEY) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <div className="section">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Messages Dashboard
          </h1>
          <p className="text-muted-foreground">
            View and manage contact form submissions.
          </p>
        </div>

        {/* Messages List */}
        {messages.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No Messages Yet</h2>
            <p className="text-muted-foreground">
              Contact form submissions will appear here once the database is
              configured and messages are received.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`card p-6 ${
                  !message.read ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      {message.subject}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {message.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a
                          href={`mailto:${message.email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {message.email}
                        </a>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(message.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                  {!message.read && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                      New
                    </span>
                  )}
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-foreground whitespace-pre-wrap">
                    {message.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
