"use client";
import React,{ useState } from "react";
import style from "./welcome.module.css";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { radioContent } from "./content";
import axios from "axios";
import Button from "../components/button";

const Welcome = () => {
  const [options, setOptions] = useState(radioContent);
  const [siteName, setSiteName] = useState<string>("");

  const handleClick = (value: number) => {
    // let updateOptions = options?.map((item, index) => {
    //   if (value == index) {
    //     return { ...item, selected: true };
    //   } else {
    //     return { ...item, selected: false };
    //   }
    // });
    const updateOptions = options?.map((item, index) => ({
      ...item,
      selected: value === index,
    }));
    setOptions(updateOptions);
  };

  const continueButton = () => {
    alert("hhhhhhh");
    console.log("ooooooooooooooo");
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(e.target.value)
  };

  const generateSiteName = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/generate");
      setSiteName(res.data.suggestions[0].title);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div>
          <h3 className={style.heading}>Let's create your site</h3>
          <div className={style.siteName}>
            <div>
              <label className={style.label}>Give your site a name</label>
            </div>
            <button className={style.generate} onClick={generateSiteName}>
              <HiArrowPathRoundedSquare />
              Generate
            </button>
            <input
              className={style.siteInput}
              type="text"
              value={siteName}
              placeholder="My Hosted Site"
              onChange={(e)=>handleChange(e)}
            />
            <h4>Don't worry, you can change it later.</h4>
          </div>
          <div className={style.mainContent}>
            <h3 className={style.h3Heading}>Pick your primary data center</h3>
            <p className={style.para}>
              Your site will replicate in real-time to a second data center in a
              different region. Learn more.
            </p>
            {options?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`${style.checkContent} ${
                      item.selected ? style.active : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    <input type="radio" checked={item.selected} readOnly/>
                    <div>
                      <h4 className={style.h4Heading}>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}

            <div className={style.siteDiv}>
              <Button className={style.continueBtn} text="Continue" onClick={continueButton}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
