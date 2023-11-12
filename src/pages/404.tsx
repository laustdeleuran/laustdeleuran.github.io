import React, { FunctionComponent } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage: FunctionComponent = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>Not found</h1>
		<p>Wow. You found something that's not there. So it goes.</p>
	</Layout>
);

export default NotFoundPage;
