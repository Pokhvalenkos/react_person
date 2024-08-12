export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const partnerAge = age ? <p className="Person__age">I am {age}</p> : null;

  const partnerType = sex === 'm' ? 'wife' : 'husband';

  const partnerText = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {partnerType}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>
        {partnerAge}
        {partnerText}
      </section>
    </div>
  );
};
