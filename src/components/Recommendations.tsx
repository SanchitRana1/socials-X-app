import Link from 'next/link';
import React from 'react';
import ImageComp from './Image';

const Recommendations = () => {
	return (
		<div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
			<h1 className='text-xl font-bold text-textGrayLight'>Who To Follow</h1>

			{/* USER CARD */}
			<div className='flex items-center justify-between'>

    {/* IMAGE AND USER INFO */}
    <div className="flex items-center gap-2 cursor-pointer">
     <div className="relative w-10 h-10 rounded-full overflow-hidden">
      <ImageComp src='general/avatar.png' alt='user' w={100} h={100} tr={true} />
     </div>
     <div className="">
      <h1 className='text-md font-bold'>Username</h1>
      <span className='text-textGray text-sm'>@username</span>
     </div>
    </div>

    {/* BUTTON */}
    <button className="px-4 py-1 bg-white text-black rounded-full font-semibold">Follow</button>
   </div>

   		<div className='flex items-center justify-between'>

    {/* IMAGE AND USER INFO */}
    <div className="flex items-center gap-2 cursor-pointer">
     <div className="relative w-10 h-10 rounded-full overflow-hidden">
      <ImageComp src='general/avatar.png' alt='user' w={100} h={100} tr={true} />
     </div>
     <div className="">
      <h1 className='text-md font-bold'>Username</h1>
      <span className='text-textGray text-sm'>@username</span>
     </div>
    </div>

    {/* BUTTON */}
    <button className="px-4 py-1 bg-white text-black rounded-full font-semibold">Follow</button>
   </div>

   		<div className='flex items-center justify-between'>

    {/* IMAGE AND USER INFO */}
    <div className="flex items-center gap-2 cursor-pointer">
     <div className="relative w-10 h-10 rounded-full overflow-hidden">
      <ImageComp src='general/avatar.png' alt='user' w={100} h={100} tr={true} />
     </div>
     <div className="">
      <h1 className='text-md font-bold'>Username</h1>
      <span className='text-textGray text-sm'>@username</span>
     </div>
    </div>

    {/* BUTTON */}
    <button className="px-4 py-1 bg-white text-black rounded-full font-semibold">Follow</button>
   </div>

			<Link href='/' className='text-iconBlue'>
				Show More
			</Link>
		</div>
	);
};

export default Recommendations;
