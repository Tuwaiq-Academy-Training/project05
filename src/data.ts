interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	description: string;
	description1: string;
	imageUrl: string;
	date: string;
	likeCount: number;
	comments: IComment[];
	username: string;
	userAvatarUrl: string;
}

export const posts: IPost[] = [
	{
		id: '1',
		username: 'Norah Mansour ',
		userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6m1tTp5Y--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/900583/29b984fa-9f87-4356-9749-be4a580c6057.jpeg',
		description: `A short comment on comments in the code
	` ,
	description1: `
	` ,
		imageUrl:
			'https://images.unsplash.com/photo-1659141170537-6e0aa70329a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
		date: 'Jul 7',
		likeCount: 0,
		comments: [],
	},
	/// post with my dog image
	{
		id: '2',
		username: 'Shivam Jha',
		userAvatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
		description: 'The History of JavaScript',
		description1: '    #css  #javascript  #tutorial ',
		
		imageUrl:
			'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		date: 'Sep 12',
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'Johny Wise',
		userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6WfL3G5V--/c_fill,f_auto,fl_progressive,h_90,q_66,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/528762/cd4ce7bd-dd34-40fd-9be9-e22cccfd9e5b.gif',
		description: 'How to build responsive web apps using React ✨.',
		description1: '',
		
		imageUrl:'',
			// 'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		date: 'Nov 22',
		likeCount: 0,
		comments: [],
	},

	{
		id: '4',
		username: 'Shshank',
		userAvatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--MrJ2lmGZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/73146/1a581e0c-1e08-462b-99af-400a7d5938cc.jpg',
		description: '   Whats new in Vue.js 2.7.8 💡 ? ',
		description1: '   #javascript ',
		imageUrl:'',
			// 'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		date: 'May 12',
		likeCount: 0,
		comments: [],
	},
];
