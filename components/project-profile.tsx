import React from "react";
// import ProjectProfileHeader from "./project-profile-header"


import styles from './project-profile.module.css'; // Import the CSS module
import { Button } from "@mui/material";


const ProjectProfile = () => {
  return (
    <div className={styles['project-profile']}>
      {/* <ProjectProfileHeader
        // className={styles["headersinstance"]}
        // ellipse="image.png"
        // image="off"
        // img="line1792.svg"
        // line="line1782.svg"
        // line1="line1802.svg"
        // line2="line1812.svg"
        // line3="line1822.svg"
        // overlapGroupClassName={styles["headers4"]}
        // text="Stir"
        // text1="MVP for Serverless Ecommerce Return Portal"
        // type="projecttoapply"
        // userDetailsClassName={styles["headers2"]}
        // userDetailsClassNameOverride="headers3"
      /> */}
      <div className={styles["details"]}>
        <div className={styles["details-of-the"]}>
          <div className={styles["company-details"]}>
            <div className={styles["div-2"]}>
              <div className={styles["company-logo-name-and"]}>
                <div className={styles["image"]}>
                  <div className={styles["group"]}>
                    <div className={styles["image-wrapper"]}>
                      {/* <img className={styles["image2" alt="Image" src="image2.png" /> */}
                    </div>
                  </div>
                </div>
                <div className={styles["frame-wrapper"]}>
                  <div className={styles["frame-2"]}>
                    <div className={styles["companyName"]}>Google</div>
                    <div className={styles["webLink"]}>www.google.com</div>
                  </div>
                </div>
              </div>
              <div className={styles["category-and"]}>
                <div className={styles["frame-3"]}>
                  {/* <Building07 className={styles["iconinstancenode2" /> */}
                  <div className={styles["department"]}>Computer Software</div>
                </div>
                <div className={styles["frame-3"]}>
                  {/* <MarkerPin01 className={styles["iconinstancenode2" /> */}
                  <div className={styles["department"]}>Amsterdam, NL</div>
                </div>
              </div>
              <p className={styles["p"]}>
                We created Stir to meet your unique needs as a creator, and to help you enhance and grow your business.
                Stir takes all the innovative ways you make money — like YouTube and Shopify and Patreon and Twitch and
                Instagram and Facebook and Brand Deals and Anchor — and puts them all in one place.
              </p>
              <div className={styles["companyProfileLink"]}>View company profile</div>
            </div>
          </div>
          {/* <img className={styles["line5" alt="Line" src="line.svg" /> */}
          <div className={styles["div-2"]}>
            <div className={styles["time-estimate"]}>
              <div className={styles["timelineEstimateAndStart"]}>Timeline estimate</div>
              <div className={styles["date"]}>November 20, 2022</div>
            </div>
            <div className={styles["start-date"]}>
              <div className={styles["timelineEstimateAndStart"]}>Start date</div>
              <div className={styles["date"]}>November 20, 2022</div>
            </div>
          </div>
          {/* <img className={styles["line5" alt="Line" src="line2.svg" /> */}
          <div className={styles["job-poster"]}>
            {/* <img className={styles["image" alt="Image" src="image2.svg" /> */}
            <div className={styles["frame-wrapper"]}>
              <div className={styles["frame-4"]}>
                <div className={styles["text-3"]}>Jack Green</div>
                <div className={styles["text-6"]}>Project consultant</div>
              </div>
            </div>
          </div>
          {/* <Button
            className={styles["button2"
            destructive={false}
            hierarchy="primary"
            icon="default"
            iconLeading={false}
            iconTrailing={false}
            size="xl"
            state="default"
            text="Ask a question"
          /> */}
        </div>
        {/* <img className={styles["divisoryline" alt="Divisory line" src="divisoryline.svg" /> */}
        <div className={styles["about-super-skills"]}>
          <div className={styles["frame-5"]}>
            <div className={styles["frame-6"]}>
              <div className={styles["text-7"]}>Project outline</div>
            </div>
            <div className={styles["flex-container"]}>
              <p className={styles["p"]}>
                <span className={styles["span"]}>
                  We are helping ecommerce to be more profitable and sustainable by processing, analysing and reselling
                  returns and overstock through our software and logistics platform.
                  <br />
                </span>
              </p>
              <p className={styles["p"]}>
                <span className={styles["span"]}>
                  We need a passionate team to build the beta version of our SaaS Customer Returns Portal and a
                  multitenant web application that helps ecommerce companies to save their returned items from
                  destruction.
                </span>
              </p>
            </div>
          </div>
          <div className={styles["frame-5"]}>
            <div className={styles["frame-6"]}>
              <div className={styles["text-7"]}>Key deliverables</div>
            </div>
            {/* <div className={styles["flex-container"]}>
              <p className={styles["p"]}>
                <span className={styles["span"]}>
                  Product design of new platform features
                  <br />
                </span>
              </p>
              <p className={styles["p"]}>
                <span className={styles["span"]}>
                  Back end architecture and documentation for new development 
                  <br />
                </span>
              </p>
              <p className={styles["p"]}>
                <span className={styles["span"]}>Front end engineering to bring the platform to life</span>
              </p>
            </div> */}
            <div className={styles["flex-container"]}>
              <ul className={styles["p"]}>
                <li>
                  Product design of new platform features
                </li>
                <li>
                  Back end architecture and documentation for new development
                </li>
                <li>
                  Front end engineering to bring the platform to life
                </li>
              </ul>
            </div> 
          </div>
          {/* <img className={styles["video" alt="Video" src="video.png" /> */}
          <Button href="/application_apply" className="absolute top-0 left-0 p-4">Apply</Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectProfile;