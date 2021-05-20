import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {Field} from "react-final-form";

// Destructuring props
const FirstStep = ({
  handleNext,
  handleChange,
  values: { title, driverless, evaluation },
  formErrors
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    title.length > 0 &&
    !formErrors.title &&
    driverless.length > 0 &&
    evaluation.length > 0;

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="登録名"
            name="title"
            placeholder="登録名"
            margin="normal"
            value={title || ""}
            onChange={handleChange}
            error={!!formErrors.title}
            helperText={formErrors.title}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>ドライバレスシステム</InputLabel>
            <Select value={driverless} onChange={handleChange} name="driverless">
                <MenuItem value="ステカメVer3.5ABC_101">ステカメVer3.5ABC_101</MenuItem>
                <MenuItem value="ステカメVer4.5ABC_101">ステカメVer4.5ABC_101</MenuItem>
                <MenuItem value="ステカメVer5.5ABC_102">ステカメVer5.5ABC_102</MenuItem>
            </Select>
          </FormControl>
        </Grid>
          <Grid item xs={12}>
              <FormControl fullWidth required margin="normal">
                  <InputLabel>評価プログラム</InputLabel>
                  <Select value={evaluation} onChange={handleChange} name="evaluation">
                      <MenuItem value="評価プログラム1">評価プログラム1</MenuItem>
                      <MenuItem value="評価プログラム2">評価プログラム2</MenuItem>
                      <MenuItem value="評価プログラム3">評価プログラム3</MenuItem>
                      <MenuItem value="評価プログラム4">評価プログラム4</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isValid}
          color="primary"
          onClick={isValid ? handleNext : null}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default FirstStep;
