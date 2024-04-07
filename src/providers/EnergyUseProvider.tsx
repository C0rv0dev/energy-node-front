import React, { useState } from 'react';
import api from '../api';

class EnergyUseProvider {
  usage: number = 0;
  totalUsage: number = 0;

  setTotalUsage() {
    api.get('/energy/total').then((response) => {
      this.totalUsage = response.data.total;
    });
  }

  setUsage() {
    api.get('/energy/my-usage').then((response) => {
      this.usage = response.data.energyUse;
    });
  }
}

export default new EnergyUseProvider();
