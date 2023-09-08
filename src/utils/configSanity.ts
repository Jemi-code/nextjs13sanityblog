import {createClient} from 'next-sanity';

export const client = createClient({
    projectId: '73y5f4i2',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
})
