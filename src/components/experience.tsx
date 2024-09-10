'use client';
import SectionHeader from './section-header';
import {
	VerticalTimeline, VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/lib/data';
import { useTheme } from '@/hooks/theme-context';

export default function Experience() {
	const { theme } = useTheme();
	const getTextColor = (light: string, dark: string) => theme === 'light'? light : dark;

    return (
        <section id="experience"
				 className="flex flex-col gap-y-10 px-8 mb-by-section text-mocha
        		 dark:text-cream transition scroll-mt-by-section"
		>
            <SectionHeader>experience</SectionHeader>
			<VerticalTimeline lineColor="">
				{experiences.map(({ icon: Icon, title, date, location, description }, index) => (
					<VerticalTimelineElement
						key={index}
						icon={<Icon/>}
						date={date}
						iconClassName={getTextColor('bg-lm-card-bg', 'bg-dm-card-bg')}
						dateClassName={`italic ${getTextColor('text-mocha', 'text-cream')}`}
						contentStyle={{
							background: '#F9EDE3',
							border: `1px solid ${getTextColor('#C4A69F', '#C73B1BFF')}`,
							boxShadow: '2px 2px 4px #E0D4CC',
							borderRadius: '10px',
							textAlign: 'justify',
							padding: '0 20px 10px',
						}}
						contentArrowStyle={{
							borderRight: `0.4rem solid ${getTextColor('#EECDA9FF', '#C73B1BFF')}`,
						}}
						visible={true}
						className="hover:-rotate-3 transition will-change-transform"
					>
						<p className={`!text-[16px] !font-semibold ${getTextColor('text-mocha', 'text-cream')}`}>{title}</p>
						<p className={`!text-[16px] !mt-0 ${getTextColor('text-mocha', 'text-cream')}`}>{location}</p>
						<p className={`!text-[15px] !mt-3 ${getTextColor('text-mocha', 'text-cream')}`}>{description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
        </section>
    );
};