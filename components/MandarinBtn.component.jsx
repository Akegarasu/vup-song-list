import styles from "../styles/Home.module.css";

import { SplitButton, Dropdown } from "react-bootstrap";
import { getCursor } from "../utils/utils";

// const activeColor = "#6100ff";
const activeColor = "#BEA5C1";

export default function MandarinBtn({
  languageFilter,
  initialFilter,
  setLanguageState,
  setInitialState,
}) {
  let dropItems = [];
  for (let i = 65; i < 91; i++) {
    let alphabet = String.fromCharCode(i);
    dropItems.push(
      <Dropdown.Item
        onClick={(e) => {
          initialFilter == alphabet
            ? setInitialState("")
            : setInitialState(alphabet);
        }}
        style={
          initialFilter == alphabet
            ? {
                backgroundColor: activeColor,
                cursor: getCursor(),
              }
            : { cursor: getCursor() }
        }
        key={i}
      >
        首字母-{alphabet}
      </Dropdown.Item>
    );
  }

  return (
    <div className="d-grid">
      <SplitButton
        title="国语"
        className={
          languageFilter == "国语"
            ? styles.mandarinBtnActive
            : styles.mandarinBtn
        }
        onClick={(e) => {
          languageFilter == "国语"
            ? setLanguageState("")
            : setLanguageState("国语");
        }}
      >
        {dropItems}
      </SplitButton>
    </div>
  );
}
