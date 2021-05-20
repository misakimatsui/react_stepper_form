import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// Destructuring props
const SecondStep = ({
                        handleNext,
                        handleBack,
                        handleChange,
                        values: { scene, startTime, endTime, driverlessParam, evaluationParam },
                        formErrors
                    }) => {
    // Check if all values are not empty or if there are some error
    const isValid =
        scene.length > 0 &&
        startTime.length > 0 &&
        endTime.length > 0 &&
        driverlessParam.length > 0 &&
        evaluationParam.length > 0 &&
        !formErrors.evaluationParam;

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth required margin="normal">
                        <InputLabel>シーン名</InputLabel>
                        <Select value={scene} onChange={handleChange} name="scene">
                            <MenuItem value="2021年ABC路線の記録">2021年ABC路線の記録</MenuItem>
                            <MenuItem value="2020年ABC路線の記録">2020年ABC路線の記録</MenuItem>
                            <MenuItem value="2019年ABC路線の記録">2019年ABC路線の記録</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="startTime"
                    label="Start Time"
                    type="time"
                    defaultValue={startTime}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    required
                    onChange={handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="End Time"
                        name="endTime"
                        type="time"
                        defaultValue={endTime}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        onChange={handleChange}
                        required
                    />
                </Grid>


                <Grid item xs={12}>
                    <FormControl fullWidth required margin="normal">
                    <InputLabel>ドライバレスシステムパラメータ</InputLabel>
                        <Select value={driverlessParam} onChange={handleChange} name="driverlessParam">
                            <MenuItem value="ステカメVer3.5ABC_101">ステカメVer3.5ABC_101</MenuItem>
                            <MenuItem value="ステカメVer4.5ABC_101">ステカメVer4.5ABC_101</MenuItem>
                            <MenuItem value="ステカメVer5.5ABC_102">ステカメVer5.5ABC_102</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required margin="normal">
                        <InputLabel>評価プログラムパラメータ</InputLabel>
                        <Select value={evaluationParam} onChange={handleChange} name="evaluationParam">
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
                    color="default"
                    onClick={handleBack}
                    style={{ marginRight: 10 }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    disabled={!isValid}
                    color="primary"
                    onClick={isValid ? handleNext : null}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default SecondStep;
