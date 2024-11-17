
export const retriveHeroAreaBackgroundImage = (pathName: string) : string => {

    switch (pathName) {
        case 'About':
            return "/Images/people-taking-care-office-cleaning-scaled-about.jpg";
        case 'Gallery':
            return "/Images/full-shot-people-cleaning-office-scaled.jpg";
        case 'Contact':
            return "/Images/professional-cleaning-service-people-working-together-office-1-scaled.jpg";
        case 'Service':
            return "/Images/professional-cleaning-service-people-working-together-office-scaled.jpg";
              
        default:
            return "/Images/people-taking-care-office-cleaning-scaled-about.jpg";;
    }
}