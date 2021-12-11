import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import styles from './Up.module.css';
import UpIcon from './up.svg';

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
		<motion.button
			className={styles.up}
			onClick={scrollToTop}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<UpIcon />
		</motion.button>
	);
};