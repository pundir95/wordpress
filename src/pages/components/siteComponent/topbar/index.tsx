import React from "react";
import style from "./global.module.css";
import { BsChevronDown } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className={style.topBarMainContent}> 
      <div className={style.topBarContent}>
        <p className={style.paraSite}>Sites</p>
        <div className={style.largeBtn}>
          <div className={style.manageBtn}>Manage all domains</div>
          <div className="flex">
            <div className={style.createBtn}>Add new site</div>
            <button className={style.chevron}>
              <BsChevronDown size="1rem" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
