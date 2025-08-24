import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageBarMenu() {
  const { i18n } = useTranslation("app");
  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      size="small"
      sx={{ minWidth: 100, backgroundColor: "#4bc676", marginRight: "0.5em" }}
      variant="outlined"
    >
      <MenuItem value="en">🇬🇧 EN</MenuItem>
      <MenuItem value="de">🇩🇪 DE</MenuItem>
    </Select>
  );
}
