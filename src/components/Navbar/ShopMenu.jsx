import DropdownMenu from "./DropdownMenu";

const columns = [
  {
    title: "Shop",
    items: [
      { name: "Bridal Store" },
      { name: "Shop Home" },
      { name: "Shop List", star: true },
      { name: "Product Single" },
      { name: "Shop Pages" },
    ],
  },
];

function ShopMenu() {
  return (
    <DropdownMenu
      items={columns[0].items}
    />
  );
}

export { columns };

export default ShopMenu;