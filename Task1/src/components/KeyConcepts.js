import '../index.css';

const KeyConcepts = (props) => {
  return <div>
          <img
            src={props.image}
            alt={props.title}
            className="concept_img"
          />
          <div>
            <div className="concept_h2">
              <h2>{props.title}</h2>
            </div>
            <div className="concept_p">{props.description}</div>
          </div>
  </div>;
};

export default KeyConcepts;
