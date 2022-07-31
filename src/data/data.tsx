interface IComment {
    id: string;
    content: string;
    ownerId: string;
}
export interface IPost {
    id: string;
    imageUrl: string;
    userAvatarUrl: string;
    username: string;
    title: string;
    created_at: Date;
    likeCount: number;
    comments: IComment[];
    content: string;
    tags: string,
}

export const posts: IPost[] = JSON.parse(localStorage.getItem("IPost") || "[]")

// [
//     {
//         id: '1',
//         username: 'axendateam',
//         title: '12 Must Have Browser',
//         userAvatarUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400',
//         created_at: new Date('2019-01-01'),
//         likeCount: 0,
//         comments: [],
//         tags: '#testing  #testing'
//     },
//     /// post with my dog image
//     {
//         id: '2',
//         username: 'axendateam',
//         title: '13 Must Have Browser',
//         userAvatarUrl: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400',
//         created_at: new Date('2019-01-02'),
//         likeCount: 0,
//         comments: [],
//         tags: '#testing'
//     },
//     {
//         id: '3',
//         username: 'axendateam',
//         title: '14 Must Have Browser',
//         userAvatarUrl: 'https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=400',
//         created_at: new Date('2019-01-02'),
//         likeCount: 0,
//         comments: [],
//         tags: '#testing'
//     },
// ];