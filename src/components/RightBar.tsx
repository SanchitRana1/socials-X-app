import React from 'react';
import Search from './Search';
import PopularTags from './PopularTags';
import Recommendations from './Recommendations';
import Link from 'next/link';

const RightBar = () => {
	return (
		<div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
			<Search />
			<PopularTags />
			<Recommendations />
			<div className="text-textGray text-sm flex gap-x-4 flex-wrap">
				<Link href="/terms">Terms of Services</Link>
				<Link href="/privacy">Privacy Policy</Link>
				<Link href="/cookie-policy">Cookie Policy</Link>
				<Link href="/accessibility">Accessibility</Link>
				<Link href="/ads-info">Ads Info</Link>
				<span>2026 Lama corp.</span>
			</div>
		</div>
	);
};

export default RightBar;
