import api from '../api';

class EnergyUseProvider {
  usage: number = 0;
  totalConsumptionRange: number = 0;

  setUsage(usage: number) {
    this.usage = usage;
  }

  setTotalConsumptionRange(totalConsumptionRange: number) {
    this.totalConsumptionRange = totalConsumptionRange;
  }

  async getEnergyUse() {
    await api.get('/home-display')
      .then((response) => {
        this.setUsage(response.data.usage);
        this.setTotalConsumptionRange(response.data.totalUsage);
      });
  }
}

export default new EnergyUseProvider();
