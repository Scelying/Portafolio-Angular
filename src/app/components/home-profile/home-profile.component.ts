import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { SkillModel } from 'src/app/Interfaces/skill-model';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.css'],
})
export class HomeProfileComponent implements OnInit {
  constructor(private skillsService: SkillsService) {}
  skillsList: SkillModel[] = [];
  toolsList: SkillModel[] = [];
  lastScroolTop = 0;

  ngOnInit(): void {
    this.skillsList = this.skillsService.getSkills();
    this.toolsList = this.skillsService.getTools();
  }

  skillClick(url: string) {
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.click();
  }
}
