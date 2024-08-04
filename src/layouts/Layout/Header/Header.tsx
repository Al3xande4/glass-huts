import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';

function Header({ className }: HeaderProps) {
	return (
		<header className={cn(className, styles.header)}>
			<img className={styles.logo} alt='logo img' src='/logo.svg' />
			<nav className={styles.navigation}>
				<NavLink
					to={'/'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Home
				</NavLink>

				<NavLink
					to={'/hut'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					The hut
				</NavLink>

				<NavLink
					to={'/area'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					the area
				</NavLink>

				<NavLink
					to={'/booking'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					Booking
				</NavLink>

				<NavLink
					to={'/about'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					About us
				</NavLink>

				<NavLink
					to={'/faq'}
					className={({ isActive }) =>
						cn(styles.link, {
							[styles.active]: isActive,
						})
					}
				>
					FAQ
				</NavLink>
			</nav>

			<NavLink to={'/booking'}>
				<Button className={styles.book}>Book now</Button>
			</NavLink>
		</header>
	);
}

export default Header;
