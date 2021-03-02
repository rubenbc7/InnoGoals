import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="buttons">
          <div className={classes.title}>
            <h2>
              Mi progreso
            </h2>
          </div>
          <h3>
            <small>Ultimos logros</small>
                <br />
                <small>Descripcion logro 1</small>
                <br />
                <small>Descripcion logro 2</small>
                <br />
                <small>Descripcion logro 3</small>
          </h3>
          <Button color="primary" simple>
            <h5>Ver todos tus logros!</h5>
          </Button>
          <div className={classes.space40} />
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h3>Meta mensual</h3>
                <CustomLinearProgress
                  variant="determinate"
                  color="primary"
                  value={60}
                />
                <p style={{ float: 'left' }}>60%</p>
                <p style={{ float: 'right'}}>Iphone 12</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3>Meta Anual</h3>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  value={20}
                />
                <p style={{ float: 'left' }}>20%</p>
                <p style={{ float: 'right' }}>Viaje a Cancun</p>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.space70} />
        <div id="progress">
          <div className={classes.title}>
            <h2>
              Progreso del equipo
            </h2>
          </div>
          <h3>
            <small>Tu equipo esta semana es:</small>
                <br />
                <small>Luis Alfonso</small>
                <br />
                <small>Puesto: Conserje</small>
                <br />
                <small>Ultimo logro: Descripcion del logro</small>
                <br />
                <Button color="primary" simple>
                  <h5>Ver todos sus logros!</h5>
                </Button>
                <div className={classes.space50}/>
                <small>Maria Duarte</small>
                <br />
                <small>Puesto: Secretaria</small>
                <br />
                <small>Ultimo logro: Descripcion del logro</small>
                <br />
                <Button color="primary" simple>
                  <h5>Ver todos sus logros!</h5>
                </Button>
          </h3>
          <div>
            <h3>Meta semanal</h3>
            <CustomLinearProgress
              variant="determinate"
              color="success"
              value={60}
            />
              <p style={{ float: 'left' }}>60%</p>
              <p style={{ float: 'right'}}>Membresia de Netflix (3 meses)</p>
          </div>
          <div className={classes.space70} />
        </div>
      </div>
    </div>
  );
}
