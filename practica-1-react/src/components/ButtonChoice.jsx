export const ButtonChoice = ({id, src, alt}) => {
  return (
    <>
      <button id={id} className="quiz-type">
        <div className="button-icon-container">
          <img src={src} alt={alt} />
        </div>
        {id}
      </button>
    </>
  );
};
