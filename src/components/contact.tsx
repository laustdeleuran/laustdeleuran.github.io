import React, { Fragment } from 'react';

export const Contact = () => (
	<Fragment>
		<h2 id="get-in-touch">Get in touch</h2>
		<p>
			If you ever want to get in touch, please feel free to do so! Just throw me
			a mail.
		</p>
		<table className="vcard">
			<tbody>
				<tr>
					<th colSpan={2} className="fn n">
						Laust Johan Deleuran
					</th>
				</tr>
				<tr>
					<td>E-mail</td>
					<td>
						<a href="mailto:hello@ljd.dk" className="email" target="_blank">
							hello@ljd.dk
						</a>
					</td>
				</tr>
				<tr>
					<td>LinkedIn</td>
					<td>
						<a
							href="http://www.linkedin.com/in/laustdeleuran/"
							className="url"
							target="_blank"
						>
							/in/laustdeleuran/
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	</Fragment>
);
