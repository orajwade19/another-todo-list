import React from "react";

function CheckListItem({ checkListItem, onItemCheckChange, onItemTextChange }) {
  function handleItemCheckChange() {
    onItemCheckChange(checkListItem);
  }

  function handleItemTextChange(e) {
    onItemTextChange(checkListItem, e.target.value);
  }

  function getTextClass() {
    console.log("getTextClass called!");
    return checkListItem.checked
      ? "form-control list-item-done"
      : "form-control";
  }

  return (
    <div className="input-group m-2 ">
      <div className="input-group-text">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          value=""
          aria-label="Checkbox for following text input"
          checked={checkListItem.checked}
          onChange={handleItemCheckChange}
        />
      </div>
      <input
        type="text"
        className={getTextClass()}
        aria-label="Text input with checkbox"
        value={checkListItem.itemText}
        onChange={handleItemTextChange}
      ></input>
    </div>
  );
}

export default CheckListItem;
