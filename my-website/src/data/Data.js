// TODO for future refactoring, nicely segment out all data into different files 

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'MEEE',
    description: 'Hamna hamna hamna',
    buttonLabel: 'Yeah baby',
    imgStart: false,
    img: require('../images/jeevan_philly.jpg'),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false

}

export const CoverSectionData = {
    title: 'Welcome to Jeevan`s personal page!'
}


export  const ProfileFactsData = [
    {
        key: 'Name',
        value: 'Jeevan NS',
    },
    {
        key: 'Age',
        value: '24',
    },
    {
        key: 'Residence',
        value: 'Singapore',
    },
    {
        key: 'Occupation',
        value: 'Final Year Student at National University of Singapore'
    }
]


export const Routes = [
    {
        title: 'Profile',
        path: '/profile',    
    },
    {
        title: 'Skillsets',
        path: '/skillsets',
    },
    {
        title: 'Work',
        path: '/work',
    },
    {
        title: 'Projects',
        path: '/projects',
    },
    {
        title: 'Interests',
        path: '/interests',
    }
]
// settle Dolla and Sign In 