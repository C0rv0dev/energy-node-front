interface CreateEnergyRecord {
    meter_reading: number;
    date: string;
    price_per_kwh: number;
}

interface EnergyUseRecord {
    _id: string;
    meter_reading: number;
    date: string;
    price_on_the_day: number;
}

export type { CreateEnergyRecord, EnergyUseRecord }
