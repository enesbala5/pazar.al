import { Cloudinary } from 'cloudinary-core';

var cl = new Cloudinary({ cloud_name: 'dfy2ewof6', secure: true });

// `----------------------`
// cloudinary.v2.config({
// 	cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
// });

// cloudinary.config({
// cloud_name: 'dfy2ewof6',
// api_key: '456488463241268',
// api_secret: 'hxFR3zJSUkjRTouifM7vXoCu4nw',
// });
// const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const uploadImages: any = (images: []) => {
	// console.log(cloud_name);
	// cloudinary.v2.uploader.upload(
	// 	'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
	// 	{ public_id: 'olympic_flag' },
	// 	function (error, result) {
	// 		console.log(result);
	// 	}
	// );

	images.map((image) => console.log(image));
};

// cloudinary.v2.uploader
// .upload("/home/my_image.jpg")
// .then(result=>console.log(result));
