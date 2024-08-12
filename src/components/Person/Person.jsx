export const Person = ({ person }) => {
  let partnerText;
  let partnerAge;

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerText = (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      );
    } else {
      partnerText = (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      );
    }
  } else {
    partnerText = <p className="Person__partner">I am not married</p>;
  }

  if (person.age) {
    partnerAge = <p className="Person__age">I am {person.age}</p>;
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        {partnerAge}
        {partnerText}
      </section>
    </div>
  );
};
