import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { ButtonIcon } from '..';
import { useScrollY } from '../../hooks/useScrollY';
import styles from './Up.module.css';

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y > 150 ? 1 : 0 });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ButtonIcon aria-label='Up' appearence='primary' icon='up' onClick={scrollToTop} />
		</motion.div>
	);
};