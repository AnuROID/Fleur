import MegaMenu from "./MegaMenu";



  const columns = [
    {
      title: "Classic",
      items: [
        { name: "Accordions & Toggles" },
        { name: "Tabs" },
        { name: "Buttons" },
        { name: "Call To Action" },
        { name: "Separators" },
        { name: "Blockquote" },
        { name: "Contact Form" }
      ]
    },

    {
      title: "Infographic",
      items: [
        { name: "Counters" },
        { name: "Pie Charts" },
        { name: "Google Maps" },
        { name: "Process" },
        { name: "Workflow" },
        { name: "Pricing Tables" },
        { name: "Progress Bar" }
      ]
    },

    {
      title: "Presentation",
      items: [
        { name: "Team Shortcode" },
        { name: "Testimonials Grid" },
        { name: "Testimonials Slider" },
        { name: "Clients" },
        { name: "Blog List Shortcode" },
        { name: "Static Text Slider" }
      ]
    },

    {
      title: "Typography",
      items: [
        { name: "Headings" },
        { name: "Columns" },
        { name: "Dropcaps" },
        { name: "Highlights" },
        { name: "Custom Font" },
        { name: "Title & Subtitle" }
      ]
    }
  ];
function ElementsMenu() {
  return <MegaMenu columns={columns} />;
}
export {columns};
export default ElementsMenu;