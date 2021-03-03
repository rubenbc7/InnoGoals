import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="InnoGoals"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Juan Zazueta</h3>
                    <h6>DISEÑADOR</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Me considero una persona bastante creativa, amigable y muy trabajadora. 
                Puedes contar conmigo para cualquier cosa y trataré de ayudarte a solucionarlo. 
                Además soy Tauro y me gusta el ciclismo y los videojuegos. 
                Tengo un tsuru tuneado.{" "}
              </p>
            </div>
            <div id="buttons">
          <div className={classes.title}>
            <h2>
              Mis logros
            </h2>
          </div>
          <NavPills
              color="success"
              tabs={[
                {
                  tabButton: "Puntualidad",
                  tabContent: (
                    <span>
                      <p>
                      <small>Realizaste 3 o más trabajos en una semana - 45i</small>
                      </p>
                      <br />
                      <p>
                        <small>Cumpliste 6 meses trabajando con nosotros - 30i</small>
                      </p>
                      <br />
                      <p>
                        <small>Ganaste 2 o más veces consecutivas el premio de equipos - 50i</small>   
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Desempeño",
                  tabContent: (
                    <span>
                      <p>
                      <small>Realizaste 3 o más trabajos en una semana - 45i</small>
                      </p>
                      <br />
                      <p>
                        <small>Cumpliste 6 meses trabajando con nosotros - 30i</small>
                      </p>
                      <br />
                      <p>
                        <small>Ganaste 2 o más veces consecutivas el premio de equipos - 50i</small>   
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Asiduidad",
                  tabContent: (
                    <span>
                      <p>
                      <small>Realizaste 3 o más trabajos en una semana - 45i</small>
                      </p>
                      <br />
                      <p>
                        <small>Cumpliste 6 meses trabajando con nosotros - 30i</small>
                      </p>
                      <br />
                      <p>
                        <small>Ganaste 2 o más veces consecutivas el premio de equipos - 50i</small>   
                      </p>
                    </span>
                  )
                }
              ]}
            />
          {/*<h2>
            
            
                <br />
                <small className={classes.logros}> Realizaste 3 o más trabajos en una semana - 45i </small>
                <br />
                <small> Cumpliste 6 meses trabajando con nosotros - 30i </small>
                <br />
                <small> Ganaste 2 o más veces consecutivas el premio de equipos - 50i </small>
          </h2>*/}
        </div>
        <br/>
            {/*<GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
                </GridContainer>*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
