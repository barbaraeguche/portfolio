'use server';

import { Resend } from 'resend';
import { ContactData } from '@/lib/types';
import { validateFields } from '@/utils/validate-fields';

const resend = new Resend('re_hsGhLJmh_Ez6T9rrbZkXnK7LrcxW3hrqg');

const emailContent = (info: ContactData) => {
	return `
		<div style="display: flex; flex-direction: column; row-gap: 15px; font-family: Judson, serif; font-size: 15px;">
			<span>Hello Barbara,</span>
			<span>${info.message.trim()}</span>
			<span>Sent from: ${info.email.trim()}</span>
			<span>Have a lovely day.</span>
		</div>
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