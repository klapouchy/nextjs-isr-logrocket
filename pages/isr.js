import Page from '../Page';
import { getRandomAPI } from '../publicApis';

//https://github.com/vercel/next.js/issues/5354

export default Page;

export async function getStaticProps() {
    const props = await getRandomAPI();
    return { props, revalidate: 30 };
}
