"use client";

import { useState, useEffect, FormEvent } from "react";
import type { Message } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Paperclip, Send, Download, FileText, UserCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

const mockMessages: Message[] = [
  {
    id: "1",
    sender: "advisor",
    content: "Welcome to ClarityFlow! We're excited to help you.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: "2",
    sender: "advisor",
    content: "Here is your initial Insight Note.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
    isDocument: true,
    documentName: "Insight_Note_Q2_Strategy.pdf",
    documentUrl: "#", // Placeholder
  },
  {
    id: "3",
    sender: "user",
    content: "Thanks! I'll review this shortly.",
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
  },
];

export default function InboxPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMessages(mockMessages);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: String(Date.now()),
      sender: "user",
      content: newMessage,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage("");
    toast({
        title: "Message Sent",
        description: "Your message has been delivered to your advisor.",
    })
  };

  return (
    <Card className="shadow-lg h-[calc(100vh-10rem)] flex flex-col">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Inbox & Communication</CardTitle>
        </div>
        <CardDescription>View messages, download documents, and communicate with your advisor.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col overflow-hidden p-0">
        <ScrollArea className="flex-grow p-6">
          <div className="space-y-6">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className={cn("flex items-start space-x-3", i % 2 === 0 ? "" : "justify-end")}>
                  {i % 2 === 0 && <Skeleton className="h-10 w-10 rounded-full" />}
                  <div className={cn("space-y-1 max-w-[70%]", i % 2 === 0 ? "" : "items-end")}>
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-48 rounded-lg" />
                  </div>
                  {i % 2 !== 0 && <Skeleton className="h-10 w-10 rounded-full" />}
                </div>
              ))
            ) : messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex items-end space-x-3",
                  msg.sender === "user" ? "justify-end" : ""
                )}
              >
                {msg.sender === "advisor" && (
                  <Avatar className="h-10 w-10 shadow">
                    <AvatarImage src="https://placehold.co/40x40.png?text=A" alt="Advisor" data-ai-hint="advisor avatar"/>
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-[70%] shadow",
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {msg.isDocument && msg.documentName ? (
                    <div className="space-y-2">
                      <p>{msg.content}</p>
                      <Button
                        variant={msg.sender === "user" ? "outline" : "secondary"}
                        size="sm"
                        onClick={() => alert(`Downloading ${msg.documentName}`)}
                        className="w-full"
                      >
                        <Download className="mr-2 h-4 w-4" /> {msg.documentName}
                      </Button>
                    </div>
                  ) : (
                    <p>{msg.content}</p>
                  )}
                  <p className={cn(
                      "text-xs mt-1",
                      msg.sender === "user" ? "text-primary-foreground/70 text-right" : "text-muted-foreground/70"
                    )}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                 {msg.sender === "user" && (
                  <Avatar className="h-10 w-10 shadow">
                    <AvatarImage src="https://placehold.co/40x40.png?text=U" alt="User" data-ai-hint="user avatar"/>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4 bg-background">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow resize-none"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e as unknown as FormEvent);
                }
              }}
            />
            <Button type="button" variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Paperclip className="h-5 w-5" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 shadow-md">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
