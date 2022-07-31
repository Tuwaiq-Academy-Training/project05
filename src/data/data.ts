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
		username: 'mohamed',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'An Approach to Continuous Learning		' ,
		
		imageUrl:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
	/// post with my dog image
	{
		id: '2',
		username: 'mohamed',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'An Approach to Continuous Learning',
		imageUrl:
			'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'mohamed',
		userAvatarUrl: 'http://localhost:3001/logo512.png',
		description: 'An Approach to Continuous Learning',
		imageUrl:
			'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];
