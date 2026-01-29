import React from 'react';
import ImageComp from './Image';
import PostInfo from './PostInfo';
import PostInteractions from './PostInteractions';
import { imageKit } from '@/utils';
import Video from './Video';

type FileDetailsResponse = {
	width: number;
	height: number;
	filePath: string;
	url: string;
	fileType: string;
	customMetadata?: {
		sensitive: boolean;
	};
};

const Post = async () => {
	const getFileDetails = async (fileId: string): Promise<FileDetailsResponse> => {
		//fetch file details from server
		return new Promise(async (res, rej) => {
			imageKit?.getFileDetails(fileId, function (error, result) {
				if (error) console.log(error);
				else res(result as FileDetailsResponse);
			});
		});
	};

	const fileDetails = await getFileDetails('697a430d5c7cd75eb8f8745f');

	return (
		<div className='p-4 border-y-[1px] border-borderGray'>
			{/* POST TYPE */}
			<div className='flex items-center gap-2 text-sm text-textGray mb-2 font-bold'>
				<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
					<path
						className='fill-[#71767b]'
						d='M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z'
					/>
				</svg>
				<span>Lama</span>
			</div>

			{/* POST CONTENT */}
			<div className='flex gap-4'>
				{/* AVATAR */}
				<div className='relative w-10 h-10 rounded-full overflow-hidden'>
					<ImageComp src='/general/avatar.png' alt='Post Image' w={100} h={100} tr={true} />
				</div>
				{/* CONTENT */}
				<div className='flex-1 flex flex-col gap-2'>
					{/* TOP SECTION */}
					<div className='flex items-center justify-between gap-2'>
						<div className='flex items-center flex-wrap gap-2'>
							<h1 className='text-md font-bold'>Lama</h1>
							<span className='text-textGray'>@lama</span>
							<span className='text-textGray'>1 Day Ago</span>
						</div>
						<PostInfo />
					</div>

					{/* TEXT and MEDIA */}
					<p className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sit, facere laborum ipsa dolores ipsam consequatur molestias vel amet sequi nemo quia ipsum voluptas.
						Quidem repellendus nisi id exercitationem quia.
					</p>
					{/* <ImageComp src='general/post.jpeg' alt='Post Image' w={600} h={600} /> */}

					{fileDetails && fileDetails?.fileType==='image' ? <ImageComp src={fileDetails?.filePath} alt='Post Image' w={fileDetails.width} h={fileDetails?.height} 
          className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
           /> : <Video path={fileDetails?.filePath}  
           className={fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''}
           />}
					{/* ACTIONS */}
					<PostInteractions />
				</div>
			</div>
		</div>
	);
};

export default Post;
