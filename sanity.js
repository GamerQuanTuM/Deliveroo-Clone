import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "yypw6qo7",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn:true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
