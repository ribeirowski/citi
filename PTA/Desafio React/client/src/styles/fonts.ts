import { Titillium_Web } from 'next/font/google'

// define your variable fonts
const titillium400 = Titillium_Web({ weight: '400' , subsets: ['latin']});
const titillium600 = Titillium_Web({ weight: '600' , subsets: ['latin']});
const titillium700 = Titillium_Web({ weight: '700' , subsets: ['latin']});

export { titillium400, titillium600, titillium700 };