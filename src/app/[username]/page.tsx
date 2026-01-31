import Feed from '@/components/Feed';
import ImageComp from '@/components/Image';
import Link from 'next/link';
import React from 'react';

const UserPage = () => {
	return (
		<div>
			{/* PROFILE TITLE */}
			<div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000048] '>
				<Link href='/' className=''>
					<ImageComp src='icons/back.svg' alt='back' w={24} h={24} />
				</Link>
				<h1 className='font-bold text-lg'>Lama</h1>
			</div>
			{/* INFO   */}
			<div className=''>
				{/* CONVER and AVATAR */}
				<div className='relative w-full'>
					{/* COVER */}
					<div className='w-full aspect-[3/1] relative'>
						<ImageComp src='general/cover.jpg' alt='cover' w={600} h={200} tr={true} />
					</div>

					{/* AVATAR */}
					<div className='w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2'>
						<ImageComp src='general/cover.jpg' alt='cover' w={100} h={100} tr={true} />
					</div>
				</div>
				<div className='flex w-full items-center justify-end p-2 gap-2'>
					<div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
						<ImageComp src='icons/more.svg' alt='more info' w={20} h={20} />
					</div>
					<div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
						<ImageComp src='icons/explore.svg' alt='explore' w={20} h={20} />
					</div>
					<div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
						<ImageComp src='icons/message.svg' alt='message' w={20} h={20} />
					</div>
					<button className='bg-white text-black px-4 py-2 font-bold rounded-full'>Follow</button>
				</div>

				{/* USER DETAILS */}
				<div className='p-4 flex flex-col gap-2'>
					{/* USERNAME and HANDLE */}
					<div className='flex flex-col'>
						<h2 className='font-bold text-2xl'>Lama</h2>
						<p className='text-textGray text-sm'>@lama</p>
					</div>
					<p className=''>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					{/* JOB, LOCATION, DATE */}
					<div className='flex gap-4 text-textGray text-[15px]'>
						<div className='flex items-center gap-2'>
							<ImageComp src='icons/userLocation.svg' alt='job' w={20} h={20} />
							<span>IND</span>
						</div>
						<div className='flex items-center gap-2'>
							<ImageComp src='icons/date.svg' alt='job' w={20} h={20} />
							<span>Joined Aug 2022</span>
						</div>
					</div>

					{/* FOLLOWINGS AND FOLLOWERS */}
					<div className='flex gap-4'>
						<div className='flex items-center gap-2'>
							<span className='font-bold'>100</span>
							<span className='text-textGray text-[15px]'> Following</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-bold'>1M</span>
							<span className='text-textGray text-[15px]'> Followers</span>
						</div>
					</div>
				</div>
			</div>

   {/* FEED */}
   <Feed />
		</div>
	);
};

export default UserPage;
