'use client';
import { IKVideo } from 'imagekitio-next';

type VideoTypes = {
	path: string;
	className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;
const Video = ({ path, className }: VideoTypes) => {
	return (
		<IKVideo
			urlEndpoint={urlEndpoint}
			path={path}
			className={className}
			transformation={[{ width: '1920', height: '1080', quality: 90 }, { raw: 'l-text,i-lamadev,fs-100,co-white,l-end' }]}
			controls={true}
		/>
	);
};

export default Video;
