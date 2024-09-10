'use server';

import { Resend } from 'resend';
import { ContactData } from '@/lib/types';
import { validateFields } from '@/utils/validate-fields';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailContent = (info: ContactData) => {
	return `
		<article>
			<h3>Hello Barbara,</h3>
			<p>${info.message.trim()}</p>
			<p>Sent from: ${info.email.trim()}</p>
			<span>Have a lovely day.</span>
		</article>
	`;
}
const errorMsg = (error: unknown): string => {
	if(error === null) return '';
	
	if(error instanceof Error) return error.message;
	if(error && typeof error === 'object' && 'message' in error) return String(error.message);
	if(error && typeof error === 'string') return error;
	return 'An unfortunate error occurred...';
}

export const mailMe = async (formData: ContactData) => {
	if(!validateFields(formData)) return { error: 'Invalid form data.' };

	try {
		const { error } = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: 'barbaraeguche@icloud.com',
			replyTo: formData.email,
			subject: 'portfolio ~ contact',
			html: emailContent(formData)
		});
		return { error: errorMsg(error) };
	} catch (error: unknown) {
		return { error: errorMsg(error) };
	}
};