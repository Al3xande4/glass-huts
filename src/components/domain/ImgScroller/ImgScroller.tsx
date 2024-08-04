import { useEffect, useState } from 'react';
import { ImgScrollerProps } from './ImgScroller.props';
import styles from './ImgScroller.module.css';

export function ImgScroller({ images, current = 0 }: ImgScrollerProps) {
	useEffect(() => {
		setCurrImg(current);
	}, [current]);

	const [currImg, setCurrImg] = useState(current);
	const progress = 400 / images.length;

	const setNext = () => {
		setCurrImg((curr) => (curr + 1) % images.length);
	};

	const setPrev = () => {
		setCurrImg((curr) => (curr - 1 + images.length) % images.length);
	};

	return (
		<div className={styles.container}>
			<div className={styles.cover}></div>
			<div className={styles.img}>
				<div
					className={styles['img-container']}
					style={{ top: `${-708.8 * currImg}px` }}
				>
					{images.map((el, index) => (
						<div key={index}>{el}</div>
					))}
				</div>
			</div>
			<hr className={styles['progress_bar']}></hr>
			<hr
				className={styles['progress']}
				style={{
					height: `${progress}px`,
					top: `${95 + progress * currImg}px`,
				}}
			></hr>
			<button
				onClick={() => {
					setPrev();
				}}
				className={styles.back}
			>
				<img src='/back_arrow.svg' alt='back arrow'></img>
			</button>
			<button
				onClick={() => {
					setNext();
				}}
				className={styles.forward}
			>
				<img src='/forward_arrow.svg' alt='forward arrow'></img>
			</button>
		</div>
	);
}
