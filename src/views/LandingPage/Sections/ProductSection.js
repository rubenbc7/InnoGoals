import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { AirlineSeatFlatSharp, AirplanemodeActive, Apple, CreditCard, Phone } from "@material-ui/icons";
import { Card } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Las Recompensas</h2>
          <h5 className={classes.description}>
            Como empresa nos sentimos agradecidos por el desempeño de nuestros empleados.
            Por ello queremos hacerlos sentir motivados a que continuen de ese modo.
            Mediante equipos fortalecemos nuestra comunidad de trabajo.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tarjetas de Regalo"
              description="Estos son entregados semanalmente."
              icon={CreditCard}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Viajes"
              description="Estos son entregados anualmente."
              icon={AirplanemodeActive}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Productos Apple"
              description="Estos son entregados mensualmente."
              icon={Apple}
              iconColor="gray"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
