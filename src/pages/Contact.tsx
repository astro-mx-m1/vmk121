import { Helmet } from "react-helmet";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 characters").max(20, "Phone number must be less than 20 characters").optional().or(z.literal("")),
  location: z.string().min(1, "Please select your location"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  const locations = [
    "Kenton",
    "Harrow",
    "Kingsbury",
    "Stanmore",
    "Wembley",
    "Finchley",
    "Northwood",
    "Edgware",
    "Southall",
    "Hayes",
    "Wood Green",
    "Watford",
    "Hendon",
    "Northolt",
    "London",
    "Other",
  ];

  return (
    <div>
      <Helmet>
        <title>Contact VMK Accountants | North West London Tax Advisors</title>
        <meta name="description" content="Contact VMK Accountants for expert accounting, tax, and business advisory services in North West London. Call 07956309363 or email us for a free consultation." />
        <meta name="keywords" content="contact accountants london, tax advisors harrow, accountants near me, accounting services contact" />
        <link rel="canonical" href="https://vmkaccountants.co.uk/contact" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Get in touch with VMK Accountants. We're here to answer your questions and discuss how we can help your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="h-6 w-6 text-secondary" />
                    <CardTitle>Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">07956309363</p>
                  <p className="text-sm text-muted-foreground mt-2">Monday - Friday: 9am - 5pm</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="h-6 w-6 text-secondary" />
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground break-words">vipul@vmkaccountants.co.uk</p>
                  <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className="h-6 w-6 text-secondary" />
                    <CardTitle>Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Harrow, NW London</p>
                  <p className="text-sm text-muted-foreground mt-2">Serving all of North West London</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-6 w-6 text-secondary" />
                    <CardTitle>Office Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Location *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {locations.map((location) => (
                                  <SelectItem key={location} value={location.toLowerCase()}>
                                    {location}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="What can we help you with?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your enquiry..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Based in Harrow, North West London, serving businesses across the region
            </p>
            
            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-large mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39658.12776498764!2d-0.36379!3d51.5836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761155c4e6d605%3A0x2b3c4d6b3e8c25dd!2sHarrow%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VMK Accountants Location - Harrow, North West London"
              ></iframe>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Why Choose VMK?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                When you contact us, you're not just getting an accountant — you're gaining a trusted business partner.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-large transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-lg mb-2 text-primary">Fast Response</h4>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond to all enquiries within 24 hours
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-large transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-lg mb-2 text-primary">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    Your first consultation is completely free, no obligations
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-large transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-lg mb-2 text-primary">Local Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Based in NW London, we understand your local business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
