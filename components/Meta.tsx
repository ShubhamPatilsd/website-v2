import { DefaultSeo } from "next-seo";

export const title = "Shubham Patil";
export const description = "Hey there! I'm Shubham Patil ᕕ( ᐛ )ᕗ";
export const url = "https://shubhampatil.dev";

export const Meta = ({}: {
  title?: string;
  description?: string;
  url?: string;
}) => (
  <DefaultSeo
    title={title}
    description={description}
    openGraph={{
      url,
      title,
      description,
      images: [
        {
          url: `${url}/logo.png`,
          width: 1200,
          height: 1200,
          alt: "Shubham Patil",
        },
      ],
      site_name: "Shubham Patil",
    }}
    twitter={{
      handle: "@ShubhamPatilsd",
      site: url,
      cardType: "summary_large_image",
    }}
  />
);
