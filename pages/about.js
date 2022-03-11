import Head from 'next/head'
import { Fade, Grid, Avatar, Typography } from '@mui/material';
import { compiler } from 'markdown-to-jsx';
import { SocialIcon } from 'react-social-icons';

import markdownOptions from '../components/markdownOptions';

const Person = ({ name, title, image, description, links }) => {
  return (
    <Grid item xs={20} s={10} md={5}>
      <div className="flex flex-row gap-4 h-10 items-center">
        <Avatar alt="" src={image} />
        <span className="flex gap-2">
          {links.map((link, index) => (
            <SocialIcon key={index} url={link} style={{height: "30px", width: "30px"}}/>
          ))}
        </span>
      </div>
      <Typography variant="h6" component="h6" gutterBottom={true} sx={{fontWeight: 900}}>{name}</Typography>
      <Typography variant="body1" color="textSecondary" component="span">{title}</Typography>
      <Typography variant="body2" color="textSecondary" component="span">{description}</Typography><br />
    </Grid>
  )
}

export default function About() {
  return (
    <div className="container">
      <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
        <div>
          <Fade in={true} timeout={1000}>
            <div className={"flex flex-col items-center justify-center max-w-lg mx-auto gap-4 sm:pt-32"}>
              <div className={"flex flex-col flex-wrap items-stretch justify-center gap-4 w-5/6 sm:w-full"}>
              {compiler(`
### *Who are we?*

#### **Current Team**
              `, markdownOptions)}
              <Grid container spacing={5}>
                <Person name="Nick DeMarchis '22" title="Lead Developer" image="https://avatars.githubusercontent.com/u/65045396?v=4" links={["http://nickdemarchis.com", "http://github.com/ndemarchis", "http://linkedin.com/in/nickdemarchis"]}/>
                <Person name="Anh Tran '24" title="Developer" image="https://avatars.githubusercontent.com/u/44528372?v=4" links={["https://github.com/Slayzur02", "https://www.linkedin.com/in/anh-tran-8a8b32202/"]}/>
                <Person name="Minh Bui '23" title="Developer" image="https://avatars.githubusercontent.com/u/29977238?v=4" links={["https://github.com/buiminh1995", "https://www.linkedin.com/in/minhbui19/"]} />
                <Person name="Christina Yu '22" title="Designer" image="https://avatars.githubusercontent.com/u/54337204?v=4" links={["https://www.linkedin.com/in/christinajyu/"]} />
              </Grid>
              {compiler(`
#### **Past Team**
              `, markdownOptions)}
              <Grid container spacing={5}>
                <Person name="Jimmy Wei '21" title="" image="https://avatars.githubusercontent.com/u/2521639?v=4" links={["https://www.linkedin.com/in/chiehmin-wei/"]} />
              </Grid>
              {compiler(`
### *Our Vision*

*[coming soon].*

---

### *Terms of Service and Privacy Policy*

The legal *stuff*. We've gotta have it, sorry.

#### **Terms of Service**

In using this website you are deemed to have read and agreed to the following terms and conditions:

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We" and "Us", refers to our website, rayschedule.com. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.

##### Exclusions and Limitations
The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:

- Excludes all representations and warranties relating to this website and its contents or which is or may be provided by any affiliates or any other third party, including in relation to any inaccuracies or omissions in this website and/or the Company's literature; and
- Excludes all liability for damages arising out of or in connection with your use of this website. This includes, without limitation, direct loss, loss of business or profits (whether or not the loss of such profits was foreseeable, arose in the normal course of things or you have advised this Company of the possibility of such potential loss), damage caused to your computer, computer software, systems and programs and the data thereon or any other direct or indirect, consequential and incidental damages.
- The above exclusions and limitations apply only to the extent permitted by law. None of your statutory rights as a consumer are affected.
- Access and Interference
- You agree that you will not use any robot, spider, scraper or other automated means to access this website for any purpose without our prior, express written permission.

Additionally, you agree that you will not:

- Take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our infrastructure;
- Copy, reproduce, modify, create derivative works from, distribute, or publicly display any content (except for your information) from this website without the prior express written permission of this Company and the appropriate third party, as applicable;
- Interfere or attempt to interfere with the proper working of this website or any activities conducted on this website; or
- Bypass our robot exclusion headers or other measures we may use to prevent or restrict access to this website.

##### Availability
Redistribution or republication of any part of this site or its content is prohibited, including such by framing or other similar or any other means, without the express written consent of the Company. The Company does not warrant that the service from this site will be uninterrupted, timely or error free, although it is provided to the best ability. By using this service you thereby indemnify this Company, its employees, agents and affiliates against any loss or damage, in whatever manner, howsoever caused.

##### Log Files
We use IP addresses to analyse trends and administer the site. IP addresses are not linked to personally identifiable information. Additionally, for systems administration, detecting usage patterns and troubleshooting purposes, our web servers automatically log standard access information.

##### Copyright Notice
Copyright and other relevant intellectual property rights exists on all text relating to the Company's services and the full content of this website.

##### Waiver
Failure of either Party to insist upon strict performance of any provision of this or any Agreement or the failure of either Party to exercise any right or remedy to which it, she/he or they are entitled hereunder shall not constitute a waiver thereof and shall not cause a diminution of the obligations under this or any Agreement. No waiver of any of the provisions of this or any Agreement shall be effective unless it is expressly stated to be such and signed by both Parties.

##### General
The laws of Pennsylvania govern these terms and conditions. By using this website you consent to these terms and conditions and to the exclusive jurisdiction of the Pennsylvania courts in all disputes arising out of such access. If any of these terms are deemed invalid or unenforceable for any reason (including, but not limited to the exclusions and limitations set out above), then the invalid or unenforceable provision will be severed from these terms and the remaining terms will continue to apply.

##### Notification of Changes
The Company reserves the right to modify these Terms of Service at any time. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Service. You are therefore advised to re-read this statement on a regular basis.



#### **Privacy Policy**

This privacy policy sets out how The Company uses and protects any information that you provide when you use this website. The Company reserves the right to modify this Privacy Policy by updating this page. You are therefore advised to re-read this statement on a regular basis. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.

##### Information Collection And Use
While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").

##### How we use cookies
A cookie is a small file to be placed on your computer's hard drive. Cookies allow the Company to respond to you as an individual. We use cookies to provide you updates on new features via tooltips.

##### How we use Local Storage
Local Storage is storage provided by your browser to websites you visit. We use local storage to allow you to save classes.

              `, markdownOptions)}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}