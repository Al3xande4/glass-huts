import { ImgScrollerHorizontal } from '../../components/domain/ImgScrollerHorizontal/ImgScrollerHorizontal';
import { Heading } from '../../components/ui/Heading/Heading';
import styles from './Area.module.css';

const vesterborg_images = [
	<img className={styles['scroll-img']} src='/vesterbord_1.png'></img>,
	<img className={styles['scroll-img']} src='/vesterborg_2.jpeg'></img>,
	<img className={styles['scroll-img']} src='/vesterborg_3.jpeg'></img>,
	<img className={styles['scroll-img']} src='/vesterborg_4.jpeg'></img>,
	<img className={styles['scroll-img']} src='/vesterborg_5.jpeg'></img>,
];

const restaurant_images = [
	<img className={styles['scroll-img']} src='/restaurant_1.jpg'></img>,
	<img className={styles['scroll-img']} src='/restaurant_2.jpeg'></img>,
	<img className={styles['scroll-img']} src='/restaurant_3.jpeg'></img>,
	<img className={styles['scroll-img']} src='/restaurant_4.jpeg'></img>,
	<img className={styles['scroll-img']} src='/restaurant_5.jpeg'></img>,
	<img className={styles['scroll-img']} src='/restaurant_6.webp'></img>,
];

const nature_images = [
	<img className={styles['scroll-img']} src='/nature_1.jpeg'></img>,
	<img className={styles['scroll-img']} src='/nature_2.jpeg'></img>,
	<img className={styles['scroll-img']} src='/nature_3.jpg'></img>,
	<img className={styles['scroll-img']} src='/nature_4.jpeg'></img>,
];

const road_images = [
	<img className={styles['scroll-img']} src='/road_1.jpg'></img>,
	<img className={styles['scroll-img']} src='/road_2.jpeg'></img>,
	<img className={styles['scroll-img']} src='/road_3.jpeg'></img>,
];

export function AreaPage() {
	return (
		<div className={styles.page}>
			<section className={styles.preview}>
				<img className={styles['preview-img']} src='/area.jpg'></img>
				<div className={styles['preview-info']}>
					<Heading type='h1'>The Area</Heading>
					<p className={styles.directions}>
						<img alt='icon point' src='/marker.svg'></img>
						Vesterborg, Denmark
					</p>
					<a
						rel='noreferrer noopener'
						target='_blank'
						href='https://www.google.com/maps/dir//56.088703,10.21575/@56.089943,10.1334365,12z/data=!4m2!4m1!3e0?entry=ttu'
						className={styles['directions-btn']}
					>
						get directions
					</a>
				</div>
			</section>

			<section className={styles.vesterborg}>
				<ImgScrollerHorizontal images={vesterborg_images} />
				<div className={styles['vesterborg-info']}>
					<Heading type='h2'>Vesterborg</Heading>
					<p className={styles['additional-info']}>
						Lorem ipsum dolor sit amet, consectetur adipiscing...
					</p>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>
			</section>

			<section className={styles.map}>
				<Heading className={styles['map-title']} type='h2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing...
				</Heading>
				<img src='/map.png' alt='map'></img>
			</section>

			<Heading type='h2'>Activities</Heading>

			<section className={styles.restaurants}>
				<ImgScrollerHorizontal images={restaurant_images} />

				<div className={styles['restaurants-info']}>
					<Heading type='h2'>Restaurants & shopping</Heading>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>
			</section>

			<section className={styles.nature}>
				<div className={styles['nature-info']}>
					<Heading type='h2'>Experiences in nature</Heading>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>

				<ImgScrollerHorizontal images={nature_images} />
			</section>

			<section className={styles.drive}>
				<ImgScrollerHorizontal images={road_images} />

				<div className={styles['drive-info']}>
					<Heading type='h2'>Go for a drive</Heading>
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
