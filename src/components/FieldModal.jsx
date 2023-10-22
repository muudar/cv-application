import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Form from "./Form";

function FieldModal({ title, form, onChangeFunction }) {
  const [FieldModalStatus, setFieldModalStatus] = useState(false);
  return (
    <>
      <div className="field-modal-div">
        <div className="field-modal-header">
          <h3>{title}</h3>
          <div className="field-modal-icon-div">
            {FieldModalStatus ? (
              <AiFillCaretUp
                onClick={() => setFieldModalStatus(false)}
              ></AiFillCaretUp>
            ) : (
              <AiFillCaretDown
                onClick={() => setFieldModalStatus(true)}
              ></AiFillCaretDown>
            )}
          </div>
        </div>
        {FieldModalStatus && (
          <Form form={form} onChangeFunction={onChangeFunction}></Form>
        )}
      </div>
    </>
  );
}

export default FieldModal;
