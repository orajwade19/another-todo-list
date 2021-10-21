import React, { useState } from "react";
import CheckListItem from "./CheckListItem";
import _uniqueId from "lodash/uniqueId";

function CheckList() {
  const [listItems, setListItems] = useState([
    { itemId: _uniqueId(), checked: false, itemText: "AAA" },
    { itemId: _uniqueId(), checked: false, itemText: "BBB" },
  ]);

  function handleListItemTextChange(checkListItem, targetValue) {
    const aCloneList = [...listItems];
    const idx = aCloneList.indexOf(checkListItem);
    aCloneList[idx] = {
      itemId: checkListItem.itemId,
      checked: checkListItem.checked,
      itemText: targetValue,
    };
    setListItems(aCloneList);
  }

  function handleListItemCheckedChange(checkListItem) {
    const aCloneList = [...listItems];
    const idx = aCloneList.indexOf(checkListItem);
    aCloneList[idx] = {
      itemId: checkListItem.itemId,
      checked: !checkListItem.checked,
      itemText: checkListItem.itemText,
    };
    setListItems(aCloneList);
  }

  function addItem() {
    const aCloneList = [...listItems];
    aCloneList.unshift({ itemId: _uniqueId(), checked: false, itemText: "" });
    setListItems(aCloneList);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-lg m-2"
        onClick={addItem}
      >
        Click me to add an item!
      </button>
      {listItems.map((c) => (
        <CheckListItem
          key={c.itemId}
          checkListItem={c}
          onItemCheckChange={handleListItemCheckedChange}
          onItemTextChange={handleListItemTextChange}
        />
      ))}
    </>
  );
}

export default CheckList;
