function Details(props) {
  const Object = props.Object;
  return (
    <>
      {Object.map(item => {
        return <p>{item}</p>;
      })}
    </>
  );
}

export default Details