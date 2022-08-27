import { Injectable } from '@angular/core';
import { SkillModel } from '../Interfaces/skill-model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  skills = [
    {
      name: 'angular',
      ref: 'https://angular.io/',
      icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
      text: 'Angular',
    },
    {
      name: 'vuejs',
      ref: 'https://vuejs.org/',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      text: 'Vue.js',
    },
    {
      name: 'react',
      ref: 'https://reactjs.org/',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      text: 'React.js',
    },
    {
      name: 'nodejs',
      ref: 'https://nodejs.org/en/',
      icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
      text: 'Node.js',
    },
    {
      name: 'javascript',
      ref: 'https://www.javascript.com/',
      icon: 'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
      text: 'JavaScript',
    },
    {
      name: 'python',
      ref: 'https://www.python.org/',
      icon: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
      text: 'Pyhton',
    },
    {
      name: 'typescript',
      ref: 'https://www.typescriptlang.org/',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      text: 'TypeScript',
    },
    {
      name: 'c-sharp',
      ref: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      icon: 'https://logowiki.net/uploads/logo/c/c--4.svg',
      text: 'C#',
    },
    {
      name: 'java',
      ref: 'https://www.java.com/en/',
      icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
      text: 'Java',
    },
    {
      name: 'mongo',
      ref: 'https://www.mongodb.com/',
      icon: 'https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress',
      text: 'MongoDB',
    },
    {
      name: 'express',
      ref: 'https://expressjs.com/',
      icon: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
      text: 'Express',
    },
    {
      name: 'mysql',
      ref: 'https://www.mysql.com/',
      icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg',
      text: 'MySQL',
    },
  ];

  tools = [
    {
      name: 'android-studio',
      ref: 'https://developer.android.com/studio',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Android_Studio_Trademark.svg',
      text: 'Android Studio',
    },
    {
      name: 'unity',
      ref: 'https://unity.com/',
      icon: 'https://seeklogo.com/images/U/unity-logo-B17157120F-seeklogo.com.png',
      text: 'Unity',
    },
    {
      name: 'github',
      ref: 'https://github.com//',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      text: 'GitHub',
    },
    {
      name: 'visual-studio-code',
      ref: 'https://code.visualstudio.com/',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
      text: 'Visual Studio Code',
    },
    {
      name: 'photoshop',
      ref: 'https://www.adobe.com/products/photoshop.html',
      icon: 'https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg',
      text: 'Adobe Photoshop',
    },
    {
      name: 'illustrator',
      ref: 'https://www.adobe.com/products/illustrator.html',
      icon: 'https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg',
      text: 'Adobe Illustrator',
    },
    {
      name: 'after-effects',
      ref: 'https://www.adobe.com/products/aftereffects.html',
      icon: 'https://www.adobe.com/content/dam/cc/us/en/products/ccoverview/ae_cc_app_RGB.svg',
      text: 'Adobe After Effects',
    },
    {
      name: 'premier-pro',
      ref: 'https://www.adobe.com/products/premiere.html',
      icon: 'https://www.adobe.com/content/dam/cct/creativecloud/business/teams/free-trial-new/desktop_premiere.svg',
      text: 'Adobe Premier Pro',
    },
    {
      name: 'office 365',
      ref: 'https://www.office.com/',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg',
      text: 'Office 365',
    },
    {
      name: 'slack',
      ref: 'https://slack.com/intl/es-co/',
      icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
      text: 'Slack',
    },
  ];

  getSkills(): SkillModel[] {
    const skillList = this.skills;
    return skillList;
  }

  getTools(): SkillModel[] {
    const toolsList = this.tools;
    return toolsList;
  }
}
