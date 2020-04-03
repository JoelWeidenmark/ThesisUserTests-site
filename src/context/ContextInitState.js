export const ContextInitState = {
    Posts: [
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
        ID: 2,
        Type: 'Text',
        Name: "Filip Smith",
        To: "Sara Jonsson",
        TimeStamp: "18:20",
        Image: "postBeach.jpg",
        Text: 'Thailand flight canceled... Lucky you!',
        Likes: 3,
        LikedByUser: false,
        Comments: [
            {
                ID: 1,
                Name: "Sara Jonsson",
                Text: `Woop! Let's go next year instead! 😍`,
                Likes: 2,
                LikedByUser: false,
                Image: null
            } 
        ]
    },
    {
        ID: 3,
        Type: 'Text',
        Name: "Jim Rasmussen",
        TimeStamp: "21:20",
        Image: "null",
        Text: "Just got sick and can't go outside. If anyone can help me with some shopping that would be amazing!",
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
        Text: 'Cat!',
        Likes: 1,
        LikedByUser: false,
        Comments: []
    },
    {
        ID: 5,
        Type: 'Image',
        Name: "Olivia Stevens",
        TimeStamp: "17:20",
        Image: "postWood.jpg",
        Text: 'Morning Walk!',
        Likes: 1,
        LikedByUser: false,
        Comments: [{
            ID: 1,
            Name: "Filip Smith",
            Text: `Early riser I see 🙌`,
            Likes: 0,
            LikedByUser: false,
            Image: null
            }
        ]
    },
    {
        ID: 6,
        Type: 'Text',
        Name: "Sara Jonsson",
        TimeStamp: "17:20",
        Image: "",
        Text: 'Hi! Just got laid off work because of the Corona pandemic so will be spending quite a lot of time doing nothing for the next few days! If anyone needs help with shopping or the like, feel free to hit me up! ',
        Likes: 5,
        LikedByUser: true,
        Comments: [{
            ID: 1,
            Name: "Jim Rasmussen",
            Text: `Currently in quarantine, would love some help!`,
            Likes: 1,
            LikedByUser: true,
            Image: null
            },
            {
            ID: 2,
            Name: "Jenny Karlsson",
            Text: `❤️❤️❤️`,
            Likes: 1,
            LikedByUser: false,
            Image: null
            }
        ]
    },
    {
        ID: 7,
        Type: 'Image',
        Name: "Oscar Andersson",
        TimeStamp: "17:20",
        Image: "postPlane.jpg",
        Text: 'Next stop Bali!',
        Likes: 8,
        LikedByUser: true,
        Comments: [
        ]
    },
    {
        ID: 7,
        Type: 'Image',
        Name: "Jenny Karlsson",
        TimeStamp: "17:20",
        Image: "postBowl.jpg",
        Text: 'Breakfast for champions',
        Likes: 4,
        LikedByUser: true,
        Comments: [
        ]
    },
    {
        ID: 8,
        Type: 'Video',
        Name: "Jim Rasmussen",
        TimeStamp: "17:20",
        Video: "https://youtu.be/Gq7yFiki0Qs",
        Image: "postBowl.jpg",
        Text: "Some great info from BBC! Stay inside people 🙏",
        Likes: 4,
        LikedByUser: false,
        Comments: [

        ]
    },
    {
        ID: 101,
        Type: 'AdAnimate',
        Name: "Nike",
        TimeStamp: "17:20",
        Image: "adNike.jpg",
        Text: '',
        Likes: 3,
        LikedByUser: false,
        Comments: []
    }
    ]
}

export const UsersInitState = {
    Users: [{
        Name: "Test User",
        PostIDs: [],
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
        PostIDs: [3, 8],
        ProfileImage: "man1",
        BannerImage: "bannerGlasses",
        Education: "High School",
        Work: "SEB",
        Relationship: "Single",
        Hometown: "Stockholm"
    },
    {
        Name: "Olivia Stevens",
        PostIDs: [5],
        ProfileImage: "woman1",
        BannerImage: "bannerMountain",
        Education: "Chalmers",
        Work: "Volvo",
        Relationship: "Relationship",
        Hometown: "Gothenburg"
    },
    {
        Name: "Oscar Andersson",
        PostIDs: [1, 4, 7],
        ProfileImage: "profileM",
        BannerImage: "bannerCrowd",
        Education: "SU",
        Work: "SEB",
        Relationship: "Relationship",
        Hometown: "Stockholm"
    },
    {
        Name: "Sara Jonsson",
        PostIDs: [2, 6],
        ProfileImage: "woman2",
        BannerImage: "bannerMountain",
        Education: "KTH",
        Work: "Scania",
        Relationship: "Single",
        Hometown: "Stockholm"
    },
    {
        Name: "Jenny Karlsson",
        PostIDs: [8],
        ProfileImage: "woman2",
        BannerImage: "bannerMountain",
        Education: "KTH",
        Work: "Ericsson",
        Relationship: "Relationship",
        Hometown: "Stockholm"
    }
    ]
}