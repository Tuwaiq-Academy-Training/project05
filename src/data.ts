interface IComment {
	id: string;
	content: string;
	ownerId: string;
}

export interface IPost {
    date: string;
	imageUrl: string;
	title: string;
    tags:string;
	likeCount: number;
	comments: IComment[];
	username: string;

}

export const posts: IPost[] = [
	{
        
        title: "post1",
		username: 'axenda',
		imageUrl:'https://images.unsplash.com/photo-1658507165855-a4e4c3b3fe73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		likeCount: 0,
		comments: [],
        tags: "#week #JS",
        date: "2 july",
	},

	{
        
		title: "post2",
		username: 'axenda',
		imageUrl:
			'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		likeCount: 0,
        tags: "#week #data",
		comments: [],
        date: "23 july",
	},
	{
         
		title: "post3",
		username: 'axenda',
		imageUrl:
			'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
        tags: "#week #programming",
		likeCount: 0,
		comments: [],
        date: "15 july",
	},
];