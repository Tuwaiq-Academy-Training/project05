
export interface IPodcast {
	imageUrl: string;
	description: string;
	date: Date;
	
}

export const podcasts: IPodcast[] = [
	{
		
		imageUrl:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'An Approach to Continuous Learning		' ,
            date: new Date('2019-01-01'),
		
	},
	{
		
		imageUrl:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'An Approach to Continuous Learning		' ,
            date: new Date('2019-01-01'),
		
	},
	
];
