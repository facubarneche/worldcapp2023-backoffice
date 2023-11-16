import { iconsDashboardBox } from "src/utils/IconsDashboardBox"

export class Dashboard {
  constructor(dataDashboard){
    this.dataDashboard = dataDashboard
  }

  static fromJson(dataDashboardDTO) {
    return new Dashboard(dataDashboardDTO)
  }
  
  addIconsDashboardBox = () => {
    return this.dataDashboard.map( itemBox => ({
      ...itemBox,
      icon: iconsDashboardBox[itemBox.name]
    }))
  } 

}
