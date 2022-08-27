export class SkillModel {
  public name: string;
  public ref: string;
  public icon: string;
  public text: string;
  constructor(name: string, ref: string, icon: string, text: string) {
    this.name = name;
    this.ref = ref;
    this.icon = icon;
    this.text = text;
  }
}
