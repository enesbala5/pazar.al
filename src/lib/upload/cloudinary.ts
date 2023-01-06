// Cloudinary Types
type ImageFileExtension =
	| string
	| 'jpg'
	| 'jpe'
	| 'jpeg'
	| 'jpc'
	| 'jp2'
	| 'j2k'
	| 'wdp'
	| 'jxr'
	| 'hdp'
	| 'png'
	| 'gif'
	| 'webp'
	| 'bmp'
	| 'tif'
	| 'tiff'
	| 'ico'
	| 'pdf'
	| 'ps'
	| 'ept'
	| 'eps'
	| 'eps3'
	| 'psd'
	| 'svg'
	| 'ai'
	| 'djvu'
	| 'flif';
type VideoFileExtension = string | 'webm' | 'mp4' | 'ogv' | 'flv' | 'm3u8';
interface CloudinaryResponseSuccessful {
	asset_id: string;
	public_id: string;
	version: number;
	version_id: string;
	signature: string;
	width?: string | number;
	height?: string | number;
	format: ImageFileExtension;
	resource_type: string;
	created_at: Date; //'2023-01-05T22:07:38Z'
	tags: [];
	bytes: number;
	type: string;
	etag: string;
	placeholder: boolean;
	url: string;
	secure_url: string;
	folder: string;
	access_mode: 'public' | 'private';
	existing?: boolean;
	original_filename: string;
}

interface ImageDatabaseStructure {
	imageIndex: number;
	data: CloudinaryResponseSuccessful;
}

export const uploadImages: any = async (files: any) => {
	const formData = new FormData();
	formData.append('upload_preset', 'my-uploads');

	let uploadedImages: ImageDatabaseStructure[] = [];

	for (const file in files) {
		const index = Number(file);
		console.log(index);

		console.log('file', files[index]);

		formData.append('file', files[index]);
		const response = await fetch(`https://api.cloudinary.com/v1_1/pazar-al/upload`, {
			method: 'POST',
			body: formData,
		});
		console.log('body: ', formData);

		if (!response.ok) {
			return undefined;
		}

		const data: CloudinaryResponseSuccessful = await response.json();

		uploadedImages.push({ imageIndex: index, data });

		console.log(files[index].name, typeof index, index, data);
	}

	// console.log(uploadedImages);
	return uploadedImages;
};
