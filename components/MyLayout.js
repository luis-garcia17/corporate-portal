import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

/* Method 1: Normal one */

const Layout = props => (
  <div style={layoutStyle}>
      <Header/>
      {props.children}
  </div>
);

export default Layout;

/* Method 2: Layout as a higher order component*/

// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };

// export default withLayout;

/* Method 3: Page content as a prop */

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.content}
//   </div>
// );

// export default Layout;