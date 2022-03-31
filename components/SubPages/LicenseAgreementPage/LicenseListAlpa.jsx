const LicenseListAlpa = ({ listItems }) => {
  return (
    <ol className="list-alpha ml-4">
      {
        listItems.map((item, i) => {
          return (
            <li key={i}>{item}</li>
          )
        })
      }
    </ol>
  );
};

export default LicenseListAlpa;