'use client';
import { Mailbox } from 'lucide-react';

export default function MailButton({ isSubmitting }: { isSubmitting: boolean }) {
    return (
		<button type="submit"
				disabled={isSubmitting}
				className="group flex justify-center items-center border border-lm-border
                     py-1.5 px-3 tracking-[20%] rounded-[5px] mx-auto w-24 cursor-pointer bg-lm-card-bg
                     will-change-transform hover:scale-105 active:scale-90
                     disabled:scale-100 disabled:cursor-help disabled:drop-shadow-none
                     hover:drop-shadow-lm-card-shadow transition"
		>
			{isSubmitting ? (
				<Mailbox className="animate-rotate-icon transition-transform"/>
			) : (
				<>
					mail
					<Mailbox className="ml-1 group-hover:animate-shake-icon transition-transform duration-[1000ms]"/>
				</>
			)}
		</button>
	);
};