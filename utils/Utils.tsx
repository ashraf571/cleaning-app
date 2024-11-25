
export const retriveHeroAreaBackgroundImage = (pathName: string) : string => {

    switch (pathName) {
        case 'Office-cleaning':
        case 'About':
            return "/Images/office-cleaning.jpg";
        case 'Gallery':
            return "/Images/full-shot-people-cleaning-office-scaled.jpg";
        case 'Contact':
            return "/Images/professional-cleaning-service-people-working-together-office-1-scaled.jpg";
        case 'Service':
            return "/Images/professional-cleaning-service-people-working-together-office-scaled.jpg";
        case 'Domestic-cleaning':
            return "/Images/domestic-cleaning.jpg";
        case 'Commercial-cleaning':
            return "/Images/commercial-cleaning.jpg";
        case 'School-cleaning':
            return "/Images/school-cleaning.jpg";
        case 'Strata-cleaning':
            return "/Images/strata-cleaning.jpg";
        case 'Window-cleaning':
            return "/Images/window-cleaning.jpg";
        case 'Industrial-cleaning':
            return "/Images/industrial-cleaning.jpg";
        case 'High-pressure-cleaning':
            return "/Images/high-pressure-cleaning.jpg";
        case 'Tiles-and-grout-cleaning':
            return "/Images/tiles-and-grout-cleaning.jpg";
        // case 'Tiles-and-grout-cleaning':
        //     return "/Images/tiles-and-grout-cleaning.jpg";
        case 'Carpet-cleaning':
            return "/Images/carpet-cleaning.jpg";
        case 'Vacate-end-of-lease-cleaning':
        case 'End-of-lease-cleaning':
            return "/Images/end-of-lease-cleaning.jpg";
        case 'Oven-bbq-splashback-cleaning':
            return "/Images/oven-bbq-splashback-cleaning.jpg";
        default:
            return "/Images/office-cleaning.jpg";;
    }
}

export const retriveHeroAreaTitle = (slug: string): string => {

    console.log("slug", slug);

    switch (slug) {
        case "Carpit-cleaning":
            return "Carpit Cleaning"
        case "Carpit-upholstry-cleaning":
            return "Carpit/Upholstry Cleaning"
        case "Strata-cleaning":
            return "Strata Cleaning"
        case "Window-cleaning":
            return "Window Cleaning"
        case "High-pressure-cleaning":
            return "High Pressure Cleaning"
        case "Industrial-cleaning":
            return "Industrial Cleaning"
        case "School-cleaning":
            return "School Cleaning"
        case "Commercial-cleaning":
            return "Commercial Cleaning"
        case "Domestic-cleaning":
            return "Domestic Cleaning"
        case "Office-cleaning":
            return "Office Cleaning"
        case "Tiles-and-grout-cleaning":
            return "Tiles and Grout Cleaning"
        case "Vocate-end-of-lease-cleaning":
            return "Vocate End of Lease Cleaning"
        case "End-of-lease-cleaning":
            return "End of Lease Cleaning"
        case "Oven-bbq-splashback-cleaning":
            return "Oven BBQ Splashback Cleaning"
        default:
            return slug;
    }
    
}