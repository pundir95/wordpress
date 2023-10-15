import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import { MdGridView, MdViewList } from "react-icons/md";
import SearchIcon from "@material-ui/icons/Search";
import style from "../topbar/global.module.css";
const Filter = () => {
  const [age, setAge] = React.useState("");
  const handleChange = () => {};
  const currencies = [
    {
      value: "All Sites",
      label: "All Sites",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <div className={style.topBarContent}>
      <div className={style.leftContentFilter}>
        <TextField
          id="outlined-search"
          type="search"
          size="small"
          placeholder="Search by name or domain..."
          className={style.searchField}
          InputProps={{
            startAdornment: (
              <SearchIcon color="action" style={{ cursor: "pointer" }} />
            ),
          }}
        />

        <TextField
          id="outlined-select-sites"
          select
          size="small"
          className={style.filteredSite}
          label="Status"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={style.iconsFilter}>
        <MdGridView  size="2rem" style={{background:"black", color:"white"}}/>
        <MdViewList size="2rem"/>
      </div>
    </div>
  );
};

export default Filter;
