import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// Destructure props
const Confirm = ({
                     handleNext,
                     handleBack,
                     values: { title, driverless, evaluation, scene, startTime, endTime, driverlessParam, evaluationParam }
                 }) => {
    const handleSubmit = () => {
        console.log({ title, driverless, evaluation, scene, startTime, endTime, driverlessParam, evaluationParam });
        handleNext();
    };
    return (
        <Fragment>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="登録名" secondary={title} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="ドライバレスシステム" secondary={driverless} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="評価プログラム" secondary={evaluation} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="シーン名" secondary={scene} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="開始時刻" secondary={startTime} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="終了時刻" secondary={endTime} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="ドライバレスパラメータ" secondary={driverlessParam} />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText primary="評価プログラムパラメータ" secondary={evaluationParam} />
                </ListItem>

            </List>

            <div
                style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
            >
                <Button variant="contained" color="default" onClick={handleBack}>
                    Back
                </Button>
                <Button
                    style={{ marginLeft: 20 }}
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                    Confirm & Continue
                </Button>
            </div>
        </Fragment>
    );
};

export default Confirm;
