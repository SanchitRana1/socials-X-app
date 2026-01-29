import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ImageComp from './Image';

const menuList = [
	{ id: 1, name: 'Home', href: '/', icon: 'icons/home.svg' },
	{ id: 2, name: 'Explore', href: '/explore', icon: 'icons/explore.svg' },
	{ id: 3, name: 'Notifications', href: '/notifications', icon: 'icons/notification.svg' },
	{ id: 4, name: 'Messages', href: '/messages', icon: 'icons/message.svg' },
	{ id: 5, name: 'Bookmarks', href: '/bookmarks', icon: 'icons/bookmark.svg' },
	{ id: 6, name: 'Jobs', href: '/jobs', icon: 'icons/job.svg' },
	{ id: 7, name: 'Community', href: '/community', icon: 'icons/community.svg' },
	{ id: 9, name: 'Premium', href: '/premium', icon: 'icons/logo.svg' },
	{ id: 8, name: 'Profile', href: '/profile', icon: 'icons/profile.svg' },
	{ id: 10, name: 'More', href: '/more', icon: 'icons/more.svg' }
];

const LeftBar = () => {
	return (
		<div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
			<div className='flex flex-col gap-4 text-lg items-center xxl:items-start'>
				{/* LOGO */}
				<Link href='/' className='p-2 rounded-full hover:bg-[#181818]'>
					<ImageComp src='icons/logo.svg' alt='Socials-X Logo' w={24} h={24} />
				</Link>

				{/* Menu List */}
				<div className='flex flex-col gap-4'>
					{menuList.map((item) => (
						<Link key={item.id} href={item.href} className='p-2 rounded-full hover:bg-[#181818] flex items-center gap-4'>
							{/* <div className='flex items-center gap-4 p-2'> */}
							<ImageComp src={item.icon} alt={item.name} w={24} h={24} />
							<span className='hidden xxl:inline'>{item.name}</span>
							{/* </div> */}
						</Link>
					))}
				</div>
				{/* Button */}
				<Link href='/' className='bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden'>
					<ImageComp src='icons/post.svg' alt='post' w={24} h={24} />
				</Link>
				<Link href='/' className='hidden xxl:block bg-white text-black rounded-full font-bold px-20 py-2 '>
					Post
				</Link>
			</div>

			{/* User */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='w-10 h-10 relative rounded-full overflow-hidden'>
						<ImageComp src='/general/avatar.png' alt='User' w={100} h={100}  tr={true}/>
					</div>
					<div className='hidden xxl:flex flex-col'>
						<span className='font-bold'>Lama</span>
						<span className='text-sm text-textGray'>@lama</span>
					</div>
				</div>
				<div className='hidden xxl:block cursor-pointer font-bold'>...</div>
			</div>
		</div>
	);
};

export default LeftBar;
