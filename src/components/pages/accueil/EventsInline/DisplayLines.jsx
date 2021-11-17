import Lines from './Line';

const DisplayLines = () => (
  <div>
    <h2>Concerts</h2>
    <Lines theme="Concert" />
    <h2>Animations</h2>
    <Lines theme="Animations" />
    <h2>Festivals</h2>
    <Lines theme="Concert%2C+Festival" />
    <h2>Expositions</h2>
    <Lines theme="Exposition" />
    <h2>Spectacles</h2>
    <Lines theme="Animations%2C+Spectacle" />
  </div>
);

export default DisplayLines;
