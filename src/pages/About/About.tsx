import { NavLink } from 'react-router-dom';
import { Heading } from '../../components/ui/Heading/Heading';
import styles from './About.module.css';
import classNames from 'classnames';
import Button from '../../components/ui/Button/Button';
import { ContactForm } from '../../components/domain/ContactForm/ContactForm';

export function AboutPage() {
	return (
		<div className={styles.page}>
			<section className={styles.preview}>
				<img className={styles['preview-img']} src='/about.jpg'></img>
				<div className={styles['preview-info']}>
					<Heading type='h1'>About Us</Heading>
					<div className={styles.navigation}>
						<a
							href='#contact-form'
							className={styles['preview-btn']}
						>
							contact us
						</a>
						<NavLink to={'/faq'} className={styles['preview-btn']}>
							read faq
						</NavLink>
					</div>
				</div>
			</section>

			<section className={styles.about}>
				<img src='/about_2.jpg'></img>
				<div className={styles['about-info']}>
					<Heading type='h3'>
						“Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.”
					</Heading>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and
					Ly, are designed by architect Sigurd Larsen. They all have
					an open space with a double bed, a double sofa bed, kitchen,
					separate toilet and an outdoor shower. On the roof,
					surrounded by treetops, there is a terrace, which is about
					nine meters above ground.
				</div>
			</section>

			<Heading type='h2' className={styles['title']}>
				Lorem ipsum dolor sit amet, consectetur adipiscing...
			</Heading>

			<section className={styles['img-section']}>
				<ul className={styles['gallery']}>
					<li>
						<img src='/gallery_1.jpg'></img>
					</li>
					<li className={styles['big-img']}>
						<img src='/gallery_2.jpg'></img>
					</li>
					<li>
						<img src='/gallery_3.jpg'></img>
					</li>
					<li className={styles['gallery-text']}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</li>
					<li>
						<img src='/gallery_4.jpg'></img>
					</li>
				</ul>
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
				<ContactForm className={styles.form} />
			</section>
			<img className={styles['with-love']} src='/with love.svg'></img>
		</div>
	);
}
