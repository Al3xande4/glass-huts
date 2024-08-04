import { useEffect, useRef, useState } from 'react';
import { ImgScrollerHorizontalProps } from './ImgScrollerHorizontal.props';
import styles from './ImgScrollerHorizontal.module.css';

export function ImgScrollerHorizontal({
	images,
	current = 0,
}: ImgScrollerHorizontalProps) {
	const [currImg, setCurrImg] = useState(current);
	const [width, setWidth] = useState(0);
	const [progress, setProgress] = useState(0);

	const refImg = useRef<HTMLImageElement>(null);
	const progressRef = useRef<HTMLHRElement>(null);

	useEffect(() => {
		if (refImg.current) {
			setWidth(refImg.current.offsetWidth);
		}
	}, [currImg, refImg.current]);

	useEffect(() => {
		if (progressRef.current) {
			setProgress(progressRef.current.offsetWidth / images.length);
		}
	}, [images.length, progressRef.current]);

	const setNext = () => {
		setCurrImg((curr) => (curr + 1) % images.length);
	};

	const setPrev = () => {
		setCurrImg((curr) => (curr - 1 + images.length) % images.length);
	};

	return (
		<div className={styles.container}>
			<div className={styles.img}>
				<div
					className={styles['img-container']}
					style={{
						left: `${-width * currImg}px`,
					}}
				>
					{images.map((el, index) => {
						if (index == currImg) {
							return (
								<div ref={refImg} key={index}>
									{el}
								</div>
							);
						}
						return <div key={index}>{el}</div>;
					})}
				</div>
			</div>
			<div className={styles.count}>
				01
				<div className={styles['progress-container']}>
					<hr
						ref={progressRef}
						className={styles['progress_bar']}
					></hr>
					<hr
						className={styles['progress']}
						style={{
							width: `${progress}px`,
							left: `${progress * currImg}px`,
						}}
					></hr>
				</div>
				{images.length.toString().padStart(2, '0')}
			</div>
			<div className={styles.actions}>
				<button
					onClick={() => {
						setPrev();
					}}
					className={styles.back}
				>
					<img src='/forward_black.svg' alt='back arrow'></img>
				</button>
				<button
					onClick={() => {
						setNext();
					}}
					className={styles.forward}
				>
					<img src='/forward_black.svg' alt='forward arrow'></img>
				</button>
			</div>
		</div>
	);
}
