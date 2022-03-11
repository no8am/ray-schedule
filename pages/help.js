import Head from 'next/head'
import { Fade } from '@mui/material';
import { compiler } from 'markdown-to-jsx';

import markdownOptions from '../components/markdownOptions';

export default function wiki() {
  return (
    <div className="container">
      <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
        <div>
          <Fade in={true} timeout={1000}>
            <div className={"flex flex-col items-center justify-center max-w-lg mx-auto gap-4 sm:pt-32"}>
              <div className={"flex flex-col flex-wrap items-stretch justify-center gap-4 w-5/6 sm:w-full list-disc"}>
              {compiler(`
### ***How the heck do you register for courses at Bucknell?***
This guide should give you some of your answers. Let's get started.



## **Pre-advising**
There are a lot of great resources out there about how to prepare for advising week.

- Check the requirements for your major on the official [course catalog](https://coursecatalog.bucknell.edu/).
- If you plan on going abroad, make sure you take requirements that only happen once per season earlier rather than later.
- If you're in the College of Arts and Sciences, make sure you are able to meet [CCC requirements](https://coursecatalog.bucknell.edu/collegeofartsandsciencescurricula/curriculaoverview/collegecorecurriculum/).
- Bucknell beat us to the punch with a guide to advising, so [check out their steps](https://www.bucknell.edu/academics/current-students/class-registration-grades) for being properly advised.

What courses should you take? That question is beyond the poorly-coded help page on the scheduling website (maybe coming fall 2022?), but be sure to check out the [official course information](https://pubapps.bucknell.edu/CourseInformation/#/lookup) for some ideas.

## **Advising**

- Have a list of courses you'd like to take, with alternates should they not be available (especially if you're a firstyear or sophomore).
- Get your PIN. You will be unable to officially register for courses without your PIN. Depending on your major, this may come during or after your meeting. Contact your advisor ASAP if a PIN has not come your way the day before or the day of [your assigned timeslot](https://www.bucknell.edu/academics/current-students/class-registration-grades).

## **What the heck is "Plan Ahead"**

Ellucian is a company that manages Bucknell's course registration. [Plan Ahead](https://banner.ban.bucknell.edu/StudentRegistrationSsb/ssb/registration/registration) is a feature they added in the latest release of Bucknell's course registration software, designed to help alleviate some of the previous concerns with scheduling.

It mirrors some of the features of this website and [Coursicle](https://www.coursicle.com/bucknell/), but allows one-click registration when your timeslot arrives.

In our personal opinion, it is very user-unfriendly. [Here's a guide to know how to use it](https://www.bucknell.edu/sites/default/files/registrar/banner_9_registration_instructions_1.pdf), if for some reason you do choose to use it.

## **When your timeslot comes up**
For spring 2022 registration, you have two options for how to register. There's the "old system" and the "new system".

When your timeslot comes up, you'll be prompted to enter your PIN regardless of whether you choose the "Old" or "New" system. If you try and register before your timeslot, it will not accept your PIN. If you're on the old system, you will need to copy / paste the CRNs for the courses you want to register for. If you're on the new system, you will click to use a schedule you have (hopefully) saved previously, and register for those.

[Click here to use the "Old system"](https://banner.ban.bucknell.edu/prodssb/bwskfreg.P_AltPin) and [click here to use the "New system"](https://banner.ban.bucknell.edu/StudentRegistrationSsb/ssb/registration/registration).

Here are the pros and cons for each:


### Old System


#### Pros


- Doesn't require you to use the new system
- Loads relatively quickly


#### Cons


* Requires you to quickly copy/paste your CRNs when the time comes up
* Can't use a different schedule if one of the courses you becomes full


### New System


#### Pros


* Visually schedules courses
* Allows registration with a single click when your time slot comes up
* Allows backups


#### Cons


* I cannot stress this enough; this system is less-than user friendly. Just try it for yourself and try and understand what's going on.
* Bad course searching functionality

## **And that's it!**

Go to your academic progress report to make sure they're added to your schedule. Please reach out to <hi@rayschedule.com> if you have any questions, about this site or scheduling otherwise!

Revised 03/10/2021
              `, markdownOptions)}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}