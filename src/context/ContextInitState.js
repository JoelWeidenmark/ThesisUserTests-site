

//export const ContextInitState = {Init: [{hello: 1}]};
export const ContextInitState = {
    Posts: [
        {
            ID: 100,
            Type: 'AdVideo',
            Name: "Volvo",
            TimeStamp: "17:20",
            Image: "adIkea.jpg",
            Video: "https://www.youtube.com/watch?v=9u4Ejwfiqlo",
            Text: '',
            Likes: 2,
            LikedByUser: false,
            Comments: []
        },
        {
            ID: 99,
            Type: 'Ad',
            Name: "IKEA",
            TimeStamp: "17:20",
            Image: "adIkea.jpg",
            Text: '',
            Likes: 2,
            LikedByUser: false,
            Comments: []
        },
        {
            ID: 4,
            Type: 'Video',
            Name: "Oscar Andersson",
            TimeStamp: "17:20",
            Video: "https://www.youtube.com/watch?v=rNSnfXl1ZjU",
            Text: 'Cuuute!',
            Likes: 1,
            LikedByUser: false,
            Comments: []
        },
        {
        ID: 1,
        Type: 'Image',
        Name: "Oscar Andersson",
        TimeStamp: "17:20",
        Image: "postBeach.jpg",
        Text: 'Beach Day 🌞',
        Likes: 2,
        LikedByUser: true,
        Comments: [
            {
                ID: 1,
                Name: "Olivia Stevens",
                Text: `😍😍`,
                Likes: 1,
                LikedByUser: true,
                Image: null
            },
            {
                ID: 2,
                Name: "Jim Rasmussen",
                Text: `Hope it rains 😒`,
                Likes: 4,
                LikedByUser: false,
                Image: null
            } 
        ]
    },
    {
        ID: 2,
        Type: 'Text',
        Name: "Filip Smith",
        To: "Test User",
        TimeStamp: "18:20",
        Image: "postBeach.jpg",
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper sem vel nisl molestie tristique. Aenean vehicula eleifend odio eget condimentum. Nam condimentum dignissim leo, vel mattis ligula consequat nec.',
        Likes: 2,
        LikedByUser: false,
        Comments: [
            {
                ID: 1,
                Name: "Sara Jonsson",
                Text: `Hello this is comment 1`,
                Likes: 3,
                LikedByUser: false,
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
        LikedByUser: false,
        Comments: []
    }
    ]
}

export const UsersInitState = {
    Users: [{
        Name: "Test User",
        PostIDs: [2, 3],
        ProfileImage: "profileW",
        BannerImage: "bannerMountain",
        Education: "KTH",
        Work: "Google",
        Relationship: "Relationship",
        Hometown: "Stockholm"
    },
    {
        Name: "Filip Smith",
        PostIDs: [2],
        ProfileImage: "man2",
        BannerImage: "bannerBeach",
        Education: "MIT",
        Work: "Microsoft",
        Relationship: "Single",
        Hometown: "New York"
    },
    {
        Name: "Jim Rasmussen",
        PostIDs: [],
        ProfileImage: "man1",
        BannerImage: "bannerGlasses",
        Education: "High School",
        Work: "SEB",
        Relationship: "Single",
        Hometown: "Stockholm"
    },
    {
        Name: "Olivia Stevens",
        PostIDs: [],
        ProfileImage: "woman1",
        BannerImage: "bannerMountain",
        Education: "Chalmers",
        Work: "Volvo",
        Relationship: "Relationship",
        Hometown: "Gothenburg"
    },
    {
        Name: "Oscar Andersson",
        PostIDs: [1],
        ProfileImage: "profileM",
        BannerImage: "bannerCrowd",
        Education: "SU",
        Work: "SEB",
        Relationship: "Relationship",
        Hometown: "Stockholm"
    },
    {
        Name: "Sara Jonsson",
        PostIDs: [],
        ProfileImage: "woman2",
        BannerImage: "bannerMountain",
        Education: "KTH",
        Work: "Scania",
        Relationship: "Single",
        Hometown: "Stockholm"
    }
    ]
}