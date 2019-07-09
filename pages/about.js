/* Method 1: Normal one */

import Layout from '../components/MyLayout';

export default function About() {
    return (
      <div>
        <Layout>
          <p>This is the about page</p>
        </Layout>
      </div>
    );
  }

/* Method 2: Layout as a higher order component*/

// import withLayout from '../components/MyLayout';

// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);


/* Method 3: Page content as a prop */

// import Layout from '../components/MyLayout.js';

// const aboutPageContent = <p>This is the about page</p>;

// export default function About() {
//   return <Layout content={aboutPageContent} />;
// }