

//export const ContextInitState = {Init: [{hello: 1}]};
export const ContextInitState = {
    Posts: [{
        ID: 1,
        Type: 'Text',
        Name: "Oscar Andersson",
        TimeStamp: "17:20",
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper sem vel nisl molestie tristique. Aenean vehicula eleifend odio eget condimentum. Nam condimentum dignissim leo, vel mattis ligula consequat nec.',
        Likes: 2,
        Comments: [
            {
                ID: 1,
                Name: "Olivia Stevens",
                Text: `Hello this is comment 1`,
                Likes: 2,
                Image: null
            },
            {
                ID: 2,
                Name: "Jim Rasmussen",
                Text: `Hello this is comment 2`,
                Likes: 3,
                Image: null
            } 
        ]
    },
    {
        ID: 2,
        Type: 'Text',
        Name: "Filip Smith",
        TimeStamp: "18:20",
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
    }
    ]
}

export const UsersInitState = {
    Users: [{
        Name: "Test User",
        PostIDs: [],
        ProfileImage: "profileW"
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