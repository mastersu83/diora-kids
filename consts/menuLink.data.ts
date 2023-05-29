export interface IMenuItems {
  id: number;
  link: string;
  title: string;
}

export const menuItems: IMenuItems[] = [
  {
    id: 1,
    link: "/",
    title: "ГЛАВНАЯ",
  },
  {
    id: 2,
    link: "/clothes",
    title: "НАРЯДНАЯ ОДЕЖДА",
  },
  {
    id: 3,
    link: "/clothes/others",
    title: "КОНВЕРТЫ, ПЛЕДЫ, КОРЗИНЫ",
  },
  {
    id: 4,
    link: "/contacts",
    title: "КОНТАКТЫ",
  },
];
