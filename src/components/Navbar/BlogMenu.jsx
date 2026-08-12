import DropdownMenu from "./DropdownMenu";



const columns = [
  {
    title: "Blog",
    items: [
      { name: "Standard Left Sidebar" },
      { name: "Standard Right Sidebar" },
      { name: "Standard Without Sidebar" },
      { name: "Masonry" },
      { name: "Carousel" },
      { name: "Post Types", arrow: true }
    ],
  },
  ];
function BlogMenu() {
  return <DropdownMenu items={columns[0].items} />;
}
export { columns };

export default BlogMenu;