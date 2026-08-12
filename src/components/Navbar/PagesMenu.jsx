import DropdownMenu from "./DropdownMenu";


const columns = [
  {
    title: "Pages",

    items: [
      { name: "About Us" },
      { name: "About Me" },
      { name: "Our Services" },
      { name: "Our Process" },
      { name: "Our Team" },
      { name: "Pricing Info" },
      { name: "RSVP" },
      { name: "Contact Us" },
      { name: "Coming Soon" },
    ],
  },
];


function PagesMenu() {

  return (
    <DropdownMenu
      items={columns[0].items}
    />
  );

}


export { columns };

export default PagesMenu;