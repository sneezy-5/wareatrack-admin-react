import { mdiHomeOutline, mdiAccountGroup } from '@mdi/js';


interface sidebarIterface{
  title:string;
  path:string;
  icon:string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sidebarItem:sidebarIterface[] = [
    {
      title:'dashboard',
      path:'dashboard',
      icon: mdiHomeOutline,
    },
    {
      title:'prospects',
      path:'prospects',
      icon: mdiAccountGroup,
    },
    {
      title:'abonnement',
      path:'abonnement',
      icon: mdiHomeOutline,
    },   {
      title:'products',
      path:'products',
      icon: mdiHomeOutline,
    }
  
  ]
  
  export default sidebarItem