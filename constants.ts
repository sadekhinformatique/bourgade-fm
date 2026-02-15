
import { RadioInfo } from './types';

export interface ExtendedRadioInfo extends RadioInfo {
  frequency: string;
  slogan: string;
  location: string;
  promoter: string;
}

export const RADIO_DATA: ExtendedRadioInfo = {
  name: "Bourgade FM",
  logo: "https://cdn.onlineradiobox.com/img/l/4/152174.v1.png",
  streamUrl: "https://radioburkinafm.ice.infomaniak.ch/radioburkinafm-128.mp3",
  description: "La radio des bourgs, faubourgs et bourgades. Une station patriote et professionnelle au cœur du Burkina Faso.",
  frequency: "94.3 MHz",
  slogan: "C'est l'auditoire qui décide !",
  location: "Ouahigouya, Cité de Naaba Kango",
  promoter: "El Hadj Hamadé Nabalma (Ladji Hamed)"
};

export const COLORS = {
  GREEN: "#009E49",
  RED: "#EF2B2D",
  YELLOW: "#FCD116",
  DARK: "#111111"
};
