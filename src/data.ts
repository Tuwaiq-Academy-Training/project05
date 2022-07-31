interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	imageUrl: string;
	title:string;
	tags:string,
	username: string,
	date: string;
	likeCount: number;
	comments: IComment[];
	

}







export const posts: IPost[] = [
	{
		
		imageUrl:'https://res.cloudinary.com/practicaldev/image/fetch/s--JpnZwwRh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5o3z8c08u7uyyxdqyiu1.jpeg',
		title:'July 29th, 2022: What did you learn this week?',
		tags:"#weeklylearn  #discuss",
		username:'Nick Taylor',
		date: 'Jul 15',
		likeCount: 6,
		comments: [],
	},



	{
		
		imageUrl:'https://res.cloudinary.com/practicaldev/image/fetch/s--NDOSburE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nvqauygxqppirjjy8uak.jpg',
		title:'Diagrams are the ultimate engineering tool',
		tags:"#programming  #desig  #beginners  #productivity",
		username:'Manuel Odendahl',
		date: 'Jul 30',
		likeCount: 8,
		comments: [],
	},


	{
		
		imageUrl:'https://res.cloudinary.com/practicaldev/image/fetch/s--bbvVzDEf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/as4bxtjano2dpzcjjrcz.png',
		title:'The Ultimate List of CSS Code Generators For Web Development',
		tags:"#css #webdev  #programming  #productivity",
		username:'Julia Furst Morgado',
		date: 'Jul 30',
		likeCount: 8,
		comments: [],
	},

	


]; 



