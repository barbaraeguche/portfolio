'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SectionHeader from './section-header';
import MailButton from './mail-btn';
import { ContactData } from '@/lib/types';
import { mailMe } from '@/mail/sendEmail';

export default function Contact() {
    const [contactInfo, setContactInfo] = useState<ContactData>({ email: '', message: '' });
    const [isMailing, setIsMailing] = useState<boolean>(false);
    
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target;
        setContactInfo(prev => ({ ...prev, [name as keyof ContactData]: value }));
    };
    
    return (
        <section id="contact"
                 className="flex flex-col justify-center gap-y-10 mx-auto w-[85%] max-w-[450px] mb-by-section text-mocha
        		 dark:text-cream transition scroll-mt-by-section"
        >
            <SectionHeader>contact me</SectionHeader>
            <form className="flex flex-col gap-y-10"
                  onSubmit={async (evt: React.FormEvent<HTMLFormElement>) => {
                      evt.preventDefault();
                      
                      setIsMailing(true);
                      const { error } = await mailMe(contactInfo);
                      setTimeout(() => {
                          setIsMailing(false);
                          
                          if(error) {
                              toast.error(error);
                              return;
                          }
                          toast.success('Mail successfully sent!');
                          setContactInfo({ email: '', message: '' });
                      }, 3000);
                  }
            }>
                <div className="flex flex-col gap-y-1.5">
                    <input type="email" name="email" value={contactInfo.email} onChange={handleChange}
                           placeholder="your email..."
                           className="bg-lm-input-bg border border-lm-border pl-4 py-2 rounded-[5px] placeholder-lm-border"
                           maxLength={50} required
                    />
                    <textarea name="message" value={contactInfo.message} onChange={handleChange}
                              placeholder="your message..."
                              className="bg-lm-input-bg border border-lm-border pl-4 py-2 rounded-[5px] placeholder-lm-border resize-none"
                              rows={5} minLength={10} maxLength={200} required
                    ></textarea>
                </div>
                <MailButton isSubmitting={isMailing}/>
            </form>
        </section>
    );
};