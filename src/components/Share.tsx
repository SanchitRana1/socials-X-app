'use client';
import React, { useState } from 'react';
import ImageComp from './Image';
import { shareAction } from '../../actions';
import NextImage from 'next/image';
import ImageEditor from './ImageEditor';

const Share = () => {
	const [media, setMedia] = useState<File | null>(null);
	const [isEditorOpen, setIsEditorOpen] = useState(false);
	const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setMedia(e.target.files[0]);
		}
	};

	const [settings, setSettings] = useState<{ type: 'original' | 'wide' | 'square'; sensitive: boolean }>({ type: 'original', sensitive: false });

	const previewUrl = media ? URL.createObjectURL(media) : null;
	console.log({ media });
	return (
		<form action={(formData) => shareAction(formData, settings)} className='p-4 flex gap-4'>
			{/* AVATAR */}
			<div className='relative w-10 h-10 rounded-full overflow-hidden'>
				<ImageComp src='general/avatar.png' alt='avatar' w={100} h={100} className='rounded-full' />
			</div>

			{/* OTHERS */}
			<div className='flex flex-1 flex-col gap-4'>
				<input className='bg-transparent outline-none placeholder:text-textGray text-xl' type='text' placeholder='Share your thoughts...' name='desc' />

				{/* PREVIEW IMAGE */}
				{media?.type.includes('image') && previewUrl && (
					<div className='relative rounded-xl overflow-hidden'>
						<NextImage
							src={previewUrl}
							alt='preview'
							width={600}
							height={600}
							className={`w-full ${settings.type === 'original' ? 'w-full object-contain' : settings.type === 'square' ? 'aspect-square object-cover' : 'aspect-video object-cover'}`}
						/>
						<div onClick={() => setIsEditorOpen(true)} className='absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded-full py-1 px-4 font-bold cursor-pointer'>
							Edit
						</div>
            	<div
							onClick={() => setMedia(null)}
							className='absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm'
						>
							x
						</div>
					</div>
				)}

				{media?.type.includes('video') && previewUrl && (
					<div className='relative rounded-xl overflow-hidden'>
						<video
							src={previewUrl}
							controls
							className={`w-full ${settings.type === 'original' ? 'w-full object-contain' : settings.type === 'square' ? 'aspect-square object-cover' : 'aspect-video object-cover'}`}
						></video>
						<div
							onClick={() => setMedia(null)}
							className='absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm'
						>
							x
						</div>
					</div>
				)}

				{isEditorOpen && previewUrl && <ImageEditor url={previewUrl} onClose={() => setIsEditorOpen(false)} settings={settings} setSettings={setSettings} />}

				<div className='flex items-center justify-between gap-4 flex-wrap'>
					<div className='flex gap-4 flex-wrap'>
						<input type='file' id='file' onChange={handleMediaChange} className='hidden' name='file' accept='image/*,video/*' />
						<label htmlFor='file'>
							<ImageComp src='icons/image.svg' alt='image icon' w={20} h={20} className='cursor-pointer mr-4' />
						</label>
						<ImageComp src='icons/gif.svg' alt='gif icon' w={20} h={20} className='cursor-pointer mr-4' />
						<ImageComp src='icons/poll.svg' alt='poll icon' w={20} h={20} className='cursor-pointer mr-4' />
						<ImageComp src='icons/schedule.svg' alt='schedule icon' w={20} h={20} className='cursor-pointer mr-4' />
						<ImageComp src='icons/location.svg' alt='location icon' w={20} h={20} className='cursor-pointer mr-4' />
					</div>
					<button className='bg-white text-black font-bold px-4 py-2 rounded-full'>POST</button>
				</div>
			</div>
		</form>
	);
};

export default Share;
