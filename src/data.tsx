import exp from "constants";

interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
    title: string;
	description: string;
	imageUrl: string;
	createDate: string;
	reactionCount: number;
	comments: IComment[];
    commentsCount:number;
	username: string;
	userAvatarUrl: string;
    tags:string[];
    readTime: string;
}
export interface IPodcast{
    imageUrl: string;
    description: string;
    date:string;
}
export interface IVide{
    imageUrl: string;
    title: string;
    userName:string;
}
export interface ITag{
    tag:string;
    description: string;
    postCount:string;    
}

export const posts: IPost[] = [
{
    id: '12',
    title: 'The Ultimate List ',
	description: '',
	imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--bbvVzDEf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/as4bxtjano2dpzcjjrcz.png',
	createDate: 'Jul 25',
	reactionCount: 551,
	comments: [],
    commentsCount:18,
	username: 'Julia Furst Morgado',
	userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--bbvVzDEf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/as4bxtjano2dpzcjjrcz.png',
    tags:['#webdev','#programming','#productivity'],
    readTime: '13',
},
{
    id: '12',
    title: 'The Ultimate List of CSS Code Generators For Web Development',
	description: '',
	imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--bbvVzDEf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/as4bxtjano2dpzcjjrcz.png',
	createDate: 'Jul 25',
	reactionCount: 551,
	comments: [],
    commentsCount:18,
	username: 'Julia Furst Morgado',
	userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--bbvVzDEf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/as4bxtjano2dpzcjjrcz.png',
    tags:['#webdev','#programming','#productivity'],
    readTime: '13',
}

]

export const podcasts:IPodcast[]=[
    {
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--7_tgaxF5--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/567/de317e06-1d0c-40b6-a5a6-64dc3cf60474.png',
    description: 'More than a Cache: Turning Redis into a Composable, ML Data Platform // Samuel Partee // Coffee Sessions #111',
    date:'MLOps Community, Jul 30',
    },
    {
        imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--7_tgaxF5--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/567/de317e06-1d0c-40b6-a5a6-64dc3cf60474.png',
        description: 'More than a Cache: Turning Redis into a Composable, ML Data Platform // Samuel Partee // Coffee Sessions #111',
        date:'MLOps Community, Jul 30',
    },
    {
        imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--7_tgaxF5--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/567/de317e06-1d0c-40b6-a5a6-64dc3cf60474.png',
        description: 'More than a Cache: Turning Redis into a Composable, ML Data Platform // Samuel Partee // Coffee Sessions #111',
        date:'MLOps Community, Jul 30',
    }

]

export const videos:IVide[]=[
    {imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--24XEBxSb--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5v87e76rb7kxm6v34vxq.png',
        title: 'Serverless GraphQL on any Cloud',
        userName:'Ryan Cartwright',},
    {imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--cBueuhrn--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__f5a8add314802aaa7e83ea009c5a38b4/thumbs-video-upload__f5a8add314802aaa7e83ea009c5a38b4-00001.png',
        title: 'This is 2022 Technology',
        userName:'Mansoor Ahmed',},
    {imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--p_Cr7M1a--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__ad36c70b7f4fa3ecd1d4bf03387502a2/thumbs-video-upload__ad36c70b7f4fa3ecd1d4bf03387502a2-00001.png',
        title: 'Connect Power BI to MySQL Database',
        userName:'Olanrewaju Oyinbooke',}
]

export const tags:ITag[]=[
{    tag:'#javascript',
    description:'Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code.',
    postCount:'101459', 
},
{    tag:'#webdev',
    description: 'Because the internet...',
    postCount:'84921', 
},
{    tag:'#beginners',
    description: 'A journey of a thousand miles begins with a single step." -Chinese Proverb',
    postCount:'60514', 
}

]
