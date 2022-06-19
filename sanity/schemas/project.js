export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "demo",
      type: "string",
      title: "Demo",
    },
    {
      name: "github",
      type: "string",
      title: "Github",
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
