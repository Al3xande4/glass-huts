import { Link, NavLink } from 'react-router-dom';
import { ImgScroller } from '../../components/domain/ImgScroller/ImgScroller';
import Button from '../../components/ui/Button/Button';
import { Heading } from '../../components/ui/Heading/Heading';
import styles from './Home.module.css';
import classNames from 'classnames';

const images = [
	<img className={styles['scroll-img']} src='/hotel_8.webp'></img>,
	<img className={styles['scroll-img']} src='/background.jpg'></img>,
	<img className={styles['scroll-img']} src='/hotel_5.webp'></img>,
	<img className={styles['scroll-img']} src='/hotel_6.webp'></img>,
	<img className={styles['scroll-img']} src='/hotel_9.webp'></img>,
];

function HomePage() {
	return (
		<div className={styles.page}>
			<section className={styles.preview}>
				<ImgScroller current={1} images={images} />
				<Heading className={styles.title}>
					Find peace in the Forest
				</Heading>
				<p className={styles['preview-info']}>
					Come and stay in out hut hotel near Mariager Fjord in
					Denmark
				</p>
				<div className={styles['preview-card']}>
					<NavLink to={'/booking'}>
						<Button size='large'>Book Now</Button>
					</NavLink>
					<div className={styles['preview-prize']}>
						<span className={styles['preview-prize-left']}>
							from
						</span>
						Є3.200
						<span className={styles['preview-prize-right']}>
							per night
						</span>
					</div>
				</div>
			</section>

			<section className={styles.cabins}>
				<div className={styles['cabins-text']}>
					<Heading type='h2'>The Cabins</Heading>
					<p className={styles['cabins-info']}>
						Løvtag’s three exclusive and comfortable cabins, Et, Ro
						and Ly, are designed by architect Sigurd Larsen. They
						all have an open space with a double bed, a double sofa
						bed, kitchen, separate toilet and an outdoor shower. On
						the roof, surrounded by treetops, there is a terrace,
						which is about nine meters above ground. The cottages
						are built around tall, old trees that go through the
						entire cottage from floor to ceiling.
					</p>
				</div>
				<img src='/bed.jpg'></img>
			</section>

			<section className={styles['cabins-img']}>
				<img src='/cabins_1.jpg'></img>
				<img src='/cabins_2.jpg'></img>
				<img src='/cabins_3.jpg'></img>
			</section>

			<section className={styles.forest}>
				<a
					className={styles.coords}
					rel='noreferrer noopener'
					target='_blank'
					href='https://maps.app.goo.gl/VZXfdeCPsSoWAoDi7'
				>
					<img
						className={styles['forest-img']}
						src='/coords.png'
					></img>
				</a>
				<div className={styles['forest-text']}>
					<Heading type='h2'>The Forest</Heading>
					<p className={styles['forest-info']}>
						Løvtag’s three exclusive and comfortable cabins, Et, Ro
						and Ly, are designed by architect Sigurd Larsen. They
						all have an open space with a double bed, a double sofa
						bed, kitchen, separate toilet and an outdoor shower. On
						the roof, surrounded by treetops, there is a terrace,
						which is about nine meters above ground. The cottages
						are built around tall, old trees that go through the
						entire cottage from floor to ceiling.
					</p>
				</div>
			</section>

			<section className={styles.facilities}>
				<Heading className={styles['facilities-title']} type='h2'>
					Facilities
				</Heading>

				<ul className={styles['facilities-list']}>
					<li className={styles['facilities-item']}>
						<img src='/fridge.svg'></img>
						Mini fridge
					</li>

					<li className={styles['facilities-item']}>
						<img src='/kitchen.svg'></img>
						Kitchenette
					</li>

					<li className={styles['facilities-item']}>
						<img src='/coffee.svg'></img>
						Coffee machine
					</li>

					<li className={styles['facilities-item']}>
						<img src='/teapot.svg'></img>
						Electric tea kettle
					</li>

					<li className={styles['facilities-item']}>
						<img src='/park.svg'></img>
						Parking
					</li>

					<li className={styles['facilities-item']}>
						<img src='/trees.svg'></img>
						Breathtaking views
					</li>

					<li className={styles['facilities-item']}>
						<img src='/temperature.svg'></img>
						Floor heating
					</li>

					<li className={styles['facilities-item']}>
						<img src='/plug.svg'></img>
						230V
					</li>

					<li className={styles['facilities-item']}>
						<img src='/wifi.svg'></img>
						Wifi
					</li>

					<li className={styles['facilities-item']}>
						<img src='/shower.svg'></img>
						Shower
					</li>

					<li className={styles['facilities-item']}>
						<img src='/toilet.svg'></img>
						Flushing toilets
					</li>

					<li className={styles['facilities-item']}>
						<img src='/towels.svg'></img>
						Bedding & towels
					</li>
				</ul>
			</section>

			<section className={styles['about-us']}>
				<img src='/overlook.jpg'></img>
				<img src='/panorama.jpg'></img>
				<Link
					reloadDocument
					to={'/about'}
					className={styles['about-link']}
				>
					<Button theme='light' className={styles['about-btn']}>
						More about us
					</Button>
				</Link>
			</section>

			<section className={styles['in-touch']}>
				<div className={styles['in-touch-text']}>
					<Heading type='h2'>Stay in touch with us</Heading>
					<p
						className={classNames(
							styles['in-touch-info'],
							styles['place-info']
						)}
					>
						Vesterborg, Denmark
					</p>
					<p className={styles['in-touch-info']}>+123 456 789 000</p>
					<p className={styles['in-touch-info']}>
						info@theglasshuts.com
					</p>

					<ul className={styles.socials}>
						<a href=''>
							<Button size='small'>
								<img src='/instagram.svg'></img>
							</Button>
						</a>

						<a href=''>
							<Button size='small'>
								<img src='/Facebook.svg'></img>
							</Button>
						</a>

						<a href=''>
							<Button size='small'>
								<img src='/X.svg'></img>
							</Button>
						</a>
					</ul>
				</div>
				<div className={styles['in-touch-card']}>
					<img src='/observer.jpg'></img>
					<div className={styles['preview-card']}>
						<NavLink to={'/booking'}>
							<Button size='large'>Book Now</Button>
						</NavLink>
						<div className={styles['preview-prize']}>
							<span className={styles['preview-prize-left']}>
								from
							</span>
							Є3.200
							<span className={styles['preview-prize-right']}>
								per night
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
