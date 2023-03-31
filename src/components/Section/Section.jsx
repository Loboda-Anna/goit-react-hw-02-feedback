import './Section.css';
export const Section = ({ title, children }) => {
  return (
    <div className='section'>
      <h2 className="section__title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};
