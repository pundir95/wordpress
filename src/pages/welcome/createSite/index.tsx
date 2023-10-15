import Button from "@/pages/components/button";
import React from "react";
import style from "./create.module.css";
import { GoLightBulb } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  siteName: "",
};

const validationSchema = Yup.object({
  siteName: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Please enter a valid website address. You can copy and paste'
  )
  .required('Website URL is required'),
});

const CreateSite = () => {
  const createSiteFunc = () => {};

  const formik: any = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });
  return (
    <div className={style.container}>
      <div className={style.leftContent}>
        <h3 className={style.heading}>Where will you import from?</h3>
        <p className={style.para}>
          After a brief scan, we’ll prompt with what we can import from your
          website.
        </p>
        <img
          src="https://wordpress.com/calypso/images/import-1-412399824454bafeb9b6.svg"
          className={style.image}
        />
      </div>

      <div className="rightContent">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <h4 className={style.headingFour}>Existing site address</h4>

            <input
              type="text"
              name="siteName"
              placeholder="Ex.www.artfulkar.blog"
              className={style.createSiteInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.siteName}
            />
            {formik.touched.siteName && formik.errors.siteName ? (
              <div className={style.error}>{formik.errors.siteName}</div>
            ) : (
              <>
                <div className={style.smallPara}>
                  <GoLightBulb size="1em" />
                  <p className={style.webPara}> You must own this website.</p>
                </div>
              </>
            )}
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              className={style.continueBtn}
              text="Continue"
              onClick={createSiteFunc}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSite;
