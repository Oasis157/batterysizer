// Appliance database with default daily usage patterns
export interface Appliance {
  id: string;
  name: string;
  nameFr: string;
  nameEs: string;
  powerWatts: number;
  defaultHours: number;
  icon: string;
  alwaysOn?: boolean;
}

export const APPLIANCES: Appliance[] = [
  { id: 'fridge',        name: 'Fridge',           nameFr: 'Réfrigérateur',    nameEs: 'Refrigerador',   powerWatts: 150,  defaultHours: 24, icon: '🧊', alwaysOn: true },
  { id: 'freezer',       name: 'Freezer',          nameFr: 'Congélateur',       nameEs: 'Congelador',     powerWatts: 150,  defaultHours: 24, icon: '❄️', alwaysOn: true },
  { id: 'router',        name: 'WiFi Router',      nameFr: 'Routeur WiFi',      nameEs: 'Router WiFi',    powerWatts: 15,   defaultHours: 24, icon: '📡', alwaysOn: true },
  { id: 'standby',       name: 'Standby Devices',  nameFr: 'Appareils veille',  nameEs: 'Dispositivos en espera', powerWatts: 30, defaultHours: 24, icon: '🔌', alwaysOn: true },
  { id: 'ac_1hp',        name: 'AC 1HP (750W)',    nameFr: 'Clim 1CV (750W)',   nameEs: 'AC 1HP (750W)',  powerWatts: 735,  defaultHours: 8,  icon: '❄️' },
  { id: 'ac_15hp',       name: 'AC 1.5HP (1100W)', nameFr: 'Clim 1.5CV (1100W)',nameEs: 'AC 1.5HP (1100W)',powerWatts: 1100, defaultHours: 8,  icon: '❄️' },
  { id: 'led_light',     name: 'LED Light (each)', nameFr: 'Lampe LED (chaque)',nameEs: 'Luz LED (cada)',  powerWatts: 10,   defaultHours: 6,  icon: '💡' },
  { id: 'ceiling_fan',   name: 'Ceiling Fan',      nameFr: 'Ventilateur plafond',nameEs: 'Ventilador techo',powerWatts: 75,  defaultHours: 8,  icon: '🌀' },
  { id: 'tv',            name: 'TV',               nameFr: 'Télévision',        nameEs: 'TV',             powerWatts: 120,  defaultHours: 5,  icon: '📺' },
  { id: 'water_pump',    name: 'Water Pump',       nameFr: 'Pompe à eau',       nameEs: 'Bomba de agua',  powerWatts: 750,  defaultHours: 2,  icon: '💧' },
  { id: 'laptop',        name: 'Laptop',           nameFr: 'Ordinateur portable',nameEs: 'Portátil',       powerWatts: 65,   defaultHours: 6,  icon: '💻' },
  { id: 'washing',       name: 'Washing Machine',  nameFr: 'Machine à laver',   nameEs: 'Lavadora',       powerWatts: 500,  defaultHours: 1,  icon: '🧺' },
  { id: 'rice_cooker',   name: 'Rice Cooker',      nameFr: 'Cuiseur à riz',     nameEs: 'Arrocera',       powerWatts: 700,  defaultHours: 1,  icon: '🍚' },
  { id: 'water_heater',  name: 'Water Heater',     nameFr: 'Chauffe-eau',       nameEs: 'Calentador',     powerWatts: 2000, defaultHours: 1.5, icon: '🔥' },
  { id: 'induction',     name: 'Induction Cooktop',nameFr: 'Plaque induction',   nameEs: 'Cocina inducción',powerWatts: 2000,defaultHours: 1,  icon: '🎛️' },
  { id: 'range_hood',    name: 'Range Hood',       nameFr: 'Hotte aspirante',   nameEs: 'Campana extractora', powerWatts: 200, defaultHours: 1, icon: '🌬️' },
  { id: 'microwave',     name: 'Microwave',        nameFr: 'Micro-ondes',       nameEs: 'Microondas',     powerWatts: 800,  defaultHours: 0.5, icon: '📦' },
  { id: 'kettle',        name: 'Electric Kettle',  nameFr: 'Bouilloire',        nameEs: 'Hervidor',       powerWatts: 1500, defaultHours: 0.3, icon: '🫖' },
  { id: 'satellite',     name: 'Satellite TV',     nameFr: 'Télé sat',          nameEs: 'TV satelital',   powerWatts: 50,   defaultHours: 8,  icon: '📡' },
  { id: 'desktop_pc',    name: 'Desktop PC',       nameFr: 'PC de bureau',      nameEs: 'PC de escritorio',powerWatts: 300,  defaultHours: 4,  icon: '🖥️' },
  { id: 'iron',          name: 'Iron',             nameFr: 'Fer à repasser',    nameEs: 'Plancha',        powerWatts: 1200, defaultHours: 0.5, icon: '👕' },
  { id: 'vacuum',        name: 'Vacuum Cleaner',   nameFr: 'Aspirateur',        nameEs: 'Aspiradora',     powerWatts: 800,  defaultHours: 0.5, icon: '🧹' },
  { id: 'phone_charge',  name: 'Phone Charger',    nameFr: 'Chargeur téléphone',nameEs: 'Cargador teléfono',powerWatts: 10,  defaultHours: 6,  icon: '📱' },
];
