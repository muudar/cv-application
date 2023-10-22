import FieldModal from "./FieldModal";

function FieldModalContainer({ titles }) {
  return (
    <div>
      {titles.map((t) => (
        <FieldModal key={t} title={t}></FieldModal>
      ))}
    </div>
  );
}

export default FieldModalContainer;
