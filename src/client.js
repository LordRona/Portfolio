import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Used import.meta.env for Vite
    dataset: 'production',
    apiVersion: '2025-03-06',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_PROJECT_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
