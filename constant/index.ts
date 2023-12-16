export const headerLinks = [
    {
        lable:"Home",
        route:"/"
    },
    {
        lable:"Create Event",
        route:"/events/create"
    },
    {
        lable:"My Profile",
        route:"/profile"
    }
]


export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }