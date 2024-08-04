import { ImgScrollerHorizontal } from '../../components/domain/ImgScrollerHorizontal/ImgScrollerHorizontal';
import { Heading } from '../../components/ui/Heading/Heading';
import styles from './Hut.module.css';

const outside_images = [
	<img className={styles['scroll-img']} src='/outside_1.jpg'></img>,
	<img className={styles['scroll-img']} src='/outside_3.webp'></img>,
	<img className={styles['scroll-img']} src='/outside_4.webp'></img>,
	<img className={styles['scroll-img']} src='/outside_5.webp'></img>,
];

const inside_images = [
	<img className={styles['scroll-img']} src='/inside_1.webp'></img>,
	<img className={styles['scroll-img']} src='/inside_2.webp'></img>,
	<img className={styles['scroll-img']} src='/inside_3.webp'></img>,
	<img className={styles['scroll-img']} src='/inside_4.webp'></img>,
	<img className={styles['scroll-img']} src='/inside_5.webp'></img>,
	<img className={styles['scroll-img']} src='/inside_6.webp'></img>,
];

const practicalities_images = [
	<img className={styles['scroll-img']} src='/practicalities_1.jpg'></img>,
	<img className={styles['scroll-img']} src='/practicalities_2.jpeg'></img>,
	<img className={styles['scroll-img']} src='/practicalities_3.jpeg'></img>,
	<img className={styles['scroll-img']} src='/practicalities_4.webp'></img>,
];

export function HutPage() {
	return (
		<div className={styles.page}>
			<section className={styles.preview}>
				<img className={styles['preview-img']} src='/hut.jpg'></img>
				<div className={styles['preview-info']}>
					<Heading type='h1'>The Hut</Heading>
				</div>
			</section>

			<section className={styles.outside}>
				<ImgScrollerHorizontal images={outside_images} />
				<div className={styles['outside-info']}>
					<Heading type='h2'>The Outside</Heading>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>
			</section>

			<section className={styles.inside}>
				<div className={styles['inside-info']}>
					<Heading type='h2'>The Inside</Heading>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>

				<ImgScrollerHorizontal images={inside_images} />
			</section>

			<section className={styles.practicalities}>
				<ImgScrollerHorizontal images={practicalities_images} />

				<div className={styles['practicalities-info']}>
					<Heading type='h2'>Practicalities</Heading>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>
			</section>
		</div>
	);
}
