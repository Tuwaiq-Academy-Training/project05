interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	title:string;
	description: string;
	hashs: string;
	imageUrl: string;
	datePost: Date;
	likeCount: number;
	comments: IComment[];
	username: string;
	userAvatarUrl: string;
}

export const posts: IPost[] = [
	{
		id: '1',
		username: 'Krishna Agarwal',
		userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Y6TyHTlN--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/858682/12b2a67d-d029-430d-bcc3-c7d951460c6b.jpg',
		title:'The Best Github Repos for Self-Taught',
		hashs:'#beginners #programming #git #webdev',
		description: `If you found this helpful, make sure to show your support with a like, and if you want to help others in their projects, a share would be greatly appreciated! Let me know what you think about this! Happy Learning!`,
		imageUrl:'https://res.cloudinary.com/practicaldev/image/fetch/s--6lxMpknZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hkb7hvavd45nb59mxutq.png',
		datePost: new Date('2022-01-01'),
		likeCount: 26,
		comments: [],
	},
	{
		id: '2',
		username: 'Krishna Agarwal',
		userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Y6TyHTlN--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/858682/12b2a67d-d029-430d-bcc3-c7d951460c6b.jpg',
		title:'A short comment on comments in the code',
		hashs:'#webdev #programming #typescript #codenewbie',
		description: `My short comment on why you should stop using comments in your code (unless in special cases)

		Tl;dr
		Please, think twice before adding comments to your code. Probably, there are no needed and will just confuse people who will read your code later on. Write a clean, readable code instead. Thanks in advance!
		
		Intro
		I was thinking about this article for a very long time. As I often help young developers I see how many of them love adding comments to their code. And I still remember lecturers from my studies who tried to convince us that the good code should be commented to be readable for other developers. However, the last straw that breaks the camel’s back was the tweet you can see below.`,
		imageUrl:'https://res.cloudinary.com/practicaldev/image/fetch/s--8RJmen_F--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ek3zts4dsfmq1ajw43c.png',
		datePost: new Date('2022-08-22'),
		likeCount: 42,
		comments: [],
	},
];
