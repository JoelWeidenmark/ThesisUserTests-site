

//export const ContextInitState = {Init: [{hello: 1}]};
export const ContextInitState = {
    Posts: [{
        ID: 1,
        Type: 'Text',
        Name: "Name LastName",
        TimeStamp: "17:20",
        Text: 'Name Surname Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper sem vel nisl molestie tristique. Aenean vehicula eleifend odio eget condimentum. Nam condimentum dignissim leo, vel mattis ligula consequat nec.',
        Likes: 2,
        Comments: [
            {
                ID: 1,
                Name: "Steve Stevens",
                Text: `Hello this is comment 1`,
                Likes: 2
            },
            {
                ID: 2,
                Name: "Jim Jimmy",
                Text: `Hello this is comment 2`,
                Likes: 3
            }
        ]
    }
    ]
} 