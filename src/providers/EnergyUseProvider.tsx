import api from '../api';

class EnergyUseProvider {
  usage: number = 0;
  totalUsage: number = 0;

  constructor() {
    this.setEnergyUsageInformation();
  }

  setTotalUsage(totalUsage: number) {
    this.totalUsage = totalUsage;
  }

  setUsage(usage: number) {
    this.usage = usage;
  }

  private async setEnergyUsageInformation() {
    await api.get('/home-display')
      .then((response) => {
        this.setUsage(response.data.usage);
        this.setTotalUsage(response.data.totalUsage);
      });
  }
}

export default new EnergyUseProvider();
