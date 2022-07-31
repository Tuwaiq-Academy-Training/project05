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
		username: 'Wasayf',
		userAvatarUrl: "https://picsum.photos/seed/picsum/200/300",
		imageUrl:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--dqu4SDQu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/buoycvcu5b2gtwl2r6vm.jpg',
			description:'Firefox (and other browsers), Forgotten?',
			date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '2',
		username: 'Sara',
		userAvatarUrl: 'https://images.unsplash.com/photo-1658728942332-9e9a4feb0bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
		imageUrl:"",
		description: 'How to Build Responsive car rental website using Html CSS JavaScript',
	    date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'Noor',
		userAvatarUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
		imageUrl:"",
		description: 'Four Years using Flutter: Lessons Learned',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
    {
		id: '4',
		username: 'Rana',
		userAvatarUrl: 'https://images.unsplash.com/photo-1658937364065-60f3f6818724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
		imageUrl:"",
		description: 'Find min length string in given array',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
    {
		id: '5',
		username: 'Amani',
		userAvatarUrl: 'https://images.unsplash.com/photo-1629322415112-a986264c08f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		imageUrl:"",
		description: 'Getting Started with SvelteKit and TypeScript',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];
/*------------------------------------------------------------------------------------------*/ 
export interface IPodcast {
	id: string;
	title: string;
	imageUrl: string;
	author: string;
    paragraph: string;
}
export const podcast: IPodcast[] = [
	{
		id: '1',
		author: 'Nancy Wheeler',
        title:"What I learned from my visit to The Upside Down",
		imageUrl:'https://picsum.photos/id/54/400/300',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	},
    {
		id: '2',
		author: 'Nancy Wheeler',
        title:"What I learned from my visit to The Upside Down",
		imageUrl:'https://picsum.photos/id/54/400/300',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	},
    {
		id: '3',
		author: 'Nancy Wheeler',
        title:"What I learned from my visit to The Upside Down",
		imageUrl:'https://picsum.photos/id/54/400/300',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	},
    {
		id: '4',
		author: 'Nancy Wheeler',
        title:"What I learned from my visit to The Upside Down",
		imageUrl:'https://picsum.photos/id/54/400/300',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	},
    {
		id: '5',
		author: 'Nancy Wheeler',
        title:"What I learned from my visit to The Upside Down",
		imageUrl:'https://picsum.photos/id/54/400/300',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	},
];