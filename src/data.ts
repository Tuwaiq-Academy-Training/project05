interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	description: string;
	imageUrl: string;
	date: Date;
	likeCount: number;
	comments: IComment[];
	username: string;
	userAvatarUrl: string;
}

export const posts: IPost[] = [
	{
		id: '1',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: `
		sunset background`,
		imageUrl:
			'https://th.bing.com/th/id/R.77c572842a96c77e999e11969473e19a?rik=B5bYUtz%2bk6vrXA&pid=ImgRaw&r=0',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
	/// post with my dog image
	{
		id: '2',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'This is my second post',
		imageUrl:
			'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'This is my second post',
		imageUrl:
			'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];
