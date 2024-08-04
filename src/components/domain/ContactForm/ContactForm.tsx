import { ContactFormProps } from './ContactForm.props';
import styles from './ContactForm.module.css';
import { Input } from '../../ui/Input/Input';
import { Textarea } from '../../ui/Textarea/Textarea';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useState } from 'react';

export function ContactForm({ className, ...props }: ContactFormProps) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	return (
		<form
			{...props}
			id='contact-form'
			className={cn(styles.form, className)}
		>
			<div className={styles['inputs']}>
				<fieldset className={styles.fieldset}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !firstName,
						})}
						htmlFor='first-name'
					>
						First Name
					</label>
					<Input
						name='first name'
						id='first-name'
						placeholder='First Name'
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					/>
				</fieldset>

				<fieldset className={styles.fieldset}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !lastName,
						})}
						htmlFor='last-name'
					>
						Last Name
					</label>
					<Input
						name='last name'
						id='last-name'
						placeholder='Last Name'
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value);
						}}
					/>
				</fieldset>

				<fieldset className={cn(styles.big, styles.fieldset)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !email,
						})}
						htmlFor='email'
					>
						Email
					</label>
					<Input
						id='email'
						name='email'
						className={styles['input-big']}
						placeholder='Email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !subject,
						})}
						htmlFor='subject'
					>
						Subject
					</label>
					<Input
						name='subject'
						id='subject'
						className={styles['input-big']}
						placeholder='Subject'
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
					/>
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !message,
						})}
						htmlFor='message'
					>
						Message
					</label>
					<Textarea
						name='message'
						id='message'
						className={styles['input-big']}
						placeholder='Message'
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					></Textarea>
				</fieldset>
			</div>
			<Button type='submit'>send</Button>
		</form>
	);
}
