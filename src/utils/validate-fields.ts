import { ContactData } from '@/lib/types';

const emailPattern: RegExp = /^[a-zA-Z0-9._-]+[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/;
export const validateFields = (info: ContactData): boolean => {
	return emailPattern.test(info.email.trim()) && info.message.trim().length >= 10;
}