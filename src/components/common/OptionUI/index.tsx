import React from "react";
import styles from "./style.module.css";
import type { OptionType } from "../../../utils/menu";
import CommonRadioButton from "../CommonRadioButton";
import CommonSlider from "../CommonSlider";

const OptionUI = ({ type }: { type: OptionType }) => {
  const options: {
    [key in OptionType]: { name: string; tool: React.ReactNode };
  } = {
    cream: {
      name: "クリーム",
      tool: <CommonSlider />,
    },
    size: {
      name: "サイズ",
      tool: <CommonRadioButton options={["S", "M", "L"]} />,
    },
    milk: {
      name: "ミルク",
      tool: <CommonSlider />,
    },
    sugar: {
      name: "砂糖",
      tool: <CommonRadioButton options={["なし", "あり"]} />,
    },
    sweetener: {
      name: "甘さ",
      tool: <CommonSlider />,
    },
    temperature: {
      name: "温度",
      tool: <CommonRadioButton options={["ホット", "アイス"]} />,
    },
    topping: {
      name: "トッピング",
      tool: <CommonRadioButton options={["なし", "あり"]} />,
    },
  } as any;

  return (
    <div className={styles.optionContainer}>
      <div>
        <p className={styles.optionSubTitle}>{type}</p>
        <p className={styles.optionTitle}>{options[type].name}</p>
      </div>
      <div className={styles.optionTool}>{options[type].tool}</div>
    </div>
  );
};

export default OptionUI;
