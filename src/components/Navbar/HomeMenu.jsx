import MegaMenu from "./MegaMenu";
const columns = [
  {
    title: "Business",
    items: [
      { name: "Main Home", star: true },
      { name: "Wedding Planner", star: true },
      { name: "Venue Home", star: true },
      { name: "Florist Showcase", star: true },
      { name: "Wedding Cakes" },
      { name: "Landing Page" }
    ]
  },

  {
    title: "Bridal",
    items: [
      { name: "Bridal Store", star: true },
      { name: "Jewelry Shop" },
      { name: "Atelier Home" },
      { name: "Beauty Home" }
    ]
  },

  {
    title: "Personal",
    items: [
      { name: "Wedding Announcement" },
      { name: "Wedding Invitation", star: true },
      { name: "Blog Home" }
    ]
  },

  {
    title: "Photography",
    items: [
      { name: "Photography Carousel", star: true },
      { name: "Photography Portfolio", star: true },
      { name: "vCard Home" }
    ]
  }
];
function HomeMenu(){
  return <MegaMenu columns={columns} />;
}
export { columns };
export default HomeMenu;