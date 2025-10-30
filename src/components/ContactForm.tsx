import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, User, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
          },
        ]);

      if (error) throw error;

      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      form.setError('root', {
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Get Your <span className="text-blue-600">Free Quote</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Ready to experience a spotless home? Fill out the form and we'll get back to you within 24 hours with a personalized quote.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Call Us</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Available Mon-Sat, 8am-6pm</p>
                  <a href="tel:+18457758080" className="text-blue-600 font-semibold hover:underline text-sm sm:text-base">
                    (845) 775-8080
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Email Us</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">We'll respond within 24 hours</p>
                  <a href="mailto:info@cleaningservice.com" className="text-blue-600 font-semibold hover:underline text-sm sm:text-base">
                    info@cleaningservice.com
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-blue-600 text-white rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Why Choose Us?</h3>
                <ul className="space-y-2 text-blue-50 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Eco-friendly cleaning products</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Licensed and insured professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {isSuccess ? (
              <div className="text-center py-8 sm:py-12">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-3 sm:mb-4">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  We've received your information and will contact you shortly with your free quote.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Request Your Free Quote
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                              <Input
                                placeholder="John Doe"
                                className="pl-10 h-12 text-sm sm:text-base"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="pl-10 h-12 text-sm sm:text-base"
                                {...field}
                              />
                            </div>
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
                          <FormLabel className="text-sm sm:text-base">Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                              <Input
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="pl-10 h-12 text-sm sm:text-base"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.formState.errors.root && (
                      <div className="text-xs sm:text-sm text-red-600 bg-red-50 p-3 rounded-md">
                        {form.formState.errors.root.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 sm:py-6 text-base sm:text-lg font-semibold min-h-[48px] touch-manipulation"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Get My Free Quote'
                      )}
                    </Button>

                    <p className="text-xs sm:text-sm text-slate-500 text-center">
                      By submitting this form, you agree to receive communications from us.
                    </p>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
