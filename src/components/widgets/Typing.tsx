import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text = "Subash Chandra Sapkota!" }) => {
	const [typedText, setTypedText] = useState('');
	const [currentTextIndex, setCurrentTextIndex] = useState(0);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setTypedText(text.substring(0, currentTextIndex + 1));
			setCurrentTextIndex((currentIndex) => (currentIndex === text.length - 1 ? 0 : currentIndex + 1));
		}, 900);

		return () => clearTimeout(timerId);
	}, [currentTextIndex, text]);

	return (
		<span className='animate-text'>
			<span>Hi I'm, {typedText}</span>
			<span className="cursor" />
		</span>
	);
};

export default TypingAnimation;
