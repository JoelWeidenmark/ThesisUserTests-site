

//export const ContextInitState = {Init: [{hello: 1}]};
export const ContextInitState = {
    Posts: [{
        ID: 1,
        Type: 'Image',
        Name: "Oscar Andersson",
        TimeStamp: "17:20",
        Image: "postBeach.jpg",
        Text: 'Beach Day 🌞',
        Likes: 2,
        Comments: [
            {
                ID: 1,
                Name: "Olivia Stevens",
                Text: `😍😍`,
                Likes: 1,
                Image: null
            },
            {
                ID: 2,
                Name: "Jim Rasmussen",
                Text: `Hope it rains 😒`,
                Likes: 4,
                Image: null
            } 
        ]
    },
    {
        ID: 2,
        Type: 'Text',
        Name: "Filip Smith",
        TimeStamp: "18:20",
        Image: "postBeach.jpg",
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper sem vel nisl molestie tristique. Aenean vehicula eleifend odio eget condimentum. Nam condimentum dignissim leo, vel mattis ligula consequat nec.',
        Likes: 2,
        Comments: [
            {
                ID: 1,
                Name: "Sara Jonsson",
                Text: `Hello this is comment 1`,
                Likes: 3,
                Image: null
            } 
        ]
    },
    {
        ID: 3,
        Type: 'Text',
        Name: "Test User",
        TimeStamp: "21:20",
        Image: "null",
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper sem vel nisl molestie tristique. Aenean vehicula eleifend odio eget condimentum. Nam condimentum dignissim leo, vel mattis ligula consequat nec.',
        Likes: 2,
        Comments: []
    }
    ]
}

export const UsersInitState = {
    Users: [{
        Name: "Test User",
        PostIDs: [3],
        ProfileImage: "profileW",
        BannerImage: "bannerMountain"
    },
    {
        Name: "Filip Smith",
        PostIDs: [2],
        ProfileImage: "man2"
    },
    {
        Name: "Jim Rasmussen",
        PostIDs: [],
        ProfileImage: "man1"
    },
    {
        Name: "Olivia Stevens",
        PostIDs: [],
        ProfileImage: "woman1"
    },
    {
        Name: "Oscar Andersson",
        PostIDs: [1],
        ProfileImage: "profileM"
    },
    {
        Name: "Sara Jonsson",
        PostIDs: [],
        ProfileImage: "woman2"
    }
    ]
}