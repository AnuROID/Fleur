import MegaMenu from "./MegaMenu";



  const columns = [
    {
      title: "Standard",
      items: [
        { name: "Three Columns", star: true },
        { name: "Three Columns Wide" },
        { name: "Four Columns" },
        { name: "Four Columns Wide" },
        { name: "Five Columns Wide", star: true }
      ]
    },

    {
      title: "Gallery",
      items: [
        { name: "Three Columns", star: true },
        { name: "Three Columns Wide" },
        { name: "Four Columns" },
        { name: "Four Columns Wide", star: true },
        { name: "Five Columns Wide" }
      ]
    },

    {
      title: "Masonry & Carousel",
      items: [
        { name: "Masonry With Space Grid", star: true },
        { name: "Masonry With Space Wide" },
        { name: "Masonry No Space Grid" },
        { name: "Masonry No Space Wide" },
        { name: "Portfolio Pinterest" },
        { name: "Portfolio Carousel", star: true }
      ]
    },

    {
      title: "Portfolio Single",
      items: [
        { name: "Masonry", star: true },
        { name: "Small Images" },
        { name: "Small Slider" },
        { name: "Big Images" },
        { name: "Big Slider" },
        { name: "Gallery", star: true }
      ]
    }
  ];
function PortfolioMenu() {
  return <MegaMenu columns={columns} />;
}
export {columns};
export default PortfolioMenu;