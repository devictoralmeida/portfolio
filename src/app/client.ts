import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "b6s4qmbu",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
  token:
    "skexWYBamrVgoFevqiqsYlca7tfrso0nVoXZNMhHlSUsFfTWpqxmvO9Res6CJ51RCsMgV4Kwom8W2b2kaHoAk2QsqJYpiFMYBhBEdYwcMsKS37Qet5kz4F9u7Diu1mbay6kwRl0ZHwyorWtLQOnj38x2IB4fHXjHu3KLNcMC6cc2v7H1lDUq",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
