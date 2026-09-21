/**
 * Project catalog for the portfolio.
 *
 * HOW TO ADD A NEW POST:
 * 1. Copy the TEMPLATE object below.
 * 2. Paste it at the TOP of the PROJECT_DATA array (newest first).
 * 3. Fill in title, url, image, details, client, workType, etc.
 * 4. Save this file and refresh the page.
 *
 * TEMPLATE:
 * {
 *   "title": "Project name",
 *   "url": "https://github.com/...",
 *   "image": "https://.../Album.jpg",
 *   "details": ["Point one", "Point two"],
 *   "extraLinks": [],
 *   "client": "Personal",
 *   "clientUrl": "",
 *   "workType": "Self-Initiated",
 *   "tasks": ["My Tasks: 100%"]
 * }
 *
 * workType: "Self-Initiated" | "Remote" | "On-Site" | "On-site"
 */
window.PROJECT_DATA = [
  {
    "title": "Portable embedded C libraries with a layered design",
    "url": "https://github.com/AliRezaJoodi/CrossPlatformLibraries",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/CrossPlatformLibraries.png",
    "details": [
      "**drivers/**                        generic, written once\n**modules/**                        PID, on/off, average, converters\n**utils/**                          bit, ctz, crc8, timebase",
      "**platforms/avr8/peripherals/**     MCU peripheral drivers\n**platforms/avr8/ports/**           MCU mapping for each driver",
      "**platforms/stm32f1/peripherals/**  MCU peripheral drivers\n**platforms/stm32f1/ports/**        MCU mapping for each driver",
      "**platforms/stm32f4/peripherals/**  MCU peripheral drivers\n**platforms/stm32f4/ports/**        MCU mapping for each driver"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Simulation DC-DC converter in LTspice to Exercise",
    "url": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Flyback_Iso_NonSync_LT3751",
    "image": "https://github.com/AliRezaJoodi/Electronics_Exercises/raw/main/PSU_DCDC_Flyback_Iso_NonSync_NotSchmitt/Pictures/Album.jpg",
    "details": [],
    "extraLinks": [
      {
        "text": "Flyback DC-DC Converter, Isolated, Non-Synchronous, Based on LT3751 (DCM)",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Flyback_Iso_NonSync_LT3751"
      },
      {
        "text": "Flyback DC-DC Converter, Non-Isolated, Non-Synchronous, Based on LT3751 (DCM)",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Flyback_NonIso_NonSync_LT3751"
      },
      {
        "text": "Flyback DC-DC Converter, Isolated, Non-Synchronous, Based on LT3844",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Flyback_Iso_NonSync_LT3844"
      },
      {
        "text": "Flyback DC-DC Converter, Non-Isolated, Non-Synchronous, Based on LT3844",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Flyback_NonIso_NonSync_LT3844"
      },
      {
        "text": "Flyback DC-DC Converter, Isolated, Non-Synchronous, Based on Not-Schmitt",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Flyback_Iso_NonSync_NotSchmitt"
      },
      {
        "text": "Buck-Boost DC-DC Converter, Non-Isolated, NON-Inverting, 4-Switch, Based on LTC3789",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_BuckBoost_NonIso_NINV_Sync_4Switch_LTC3789"
      },
      {
        "text": "Buck-Boost DC-DC Converter, Non-Isolated, NON-Inverting, 2-Switch, Based on LT8711",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_BuckBoost_NonIso_NINV_NonSync_2Switch_LT8711"
      },
      {
        "text": "Buck-Boost DC-DC Converter, Non-Isolated, Inverting, Synchronous, Based on LTC3896",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_BuckBoost_NonIso_INV_Sync_LTC3896"
      },
      {
        "text": "Buck-Boost DC-DC Converter, Non-Isolated, Inverting, Non-Synchronous, Based on LTC3863",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_BuckBoost_NonIso_INV_NonSync_LTC3863"
      },
      {
        "text": "SEPIC DC-DC Converter, Non-Isolated, Bipolar, Non-Synchronous, Based on LT3757",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_SEPIC_NonIso_Bipolar_NonSync_LT3757"
      },
      {
        "text": "SEPIC DC-DC Converter, Non-Isolated, Non-Synchronous, Based on LT3757",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_SEPIC_NonIso_NonSync_LT3757"
      },
      {
        "text": "SEPIC DC-DC Converter, Non-Isolated, Non-Synchronous, Based on LT3844",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_SEPIC_NonIso_NonSync_LT3844"
      },
      {
        "text": "Boost DC-DC Converter, Non-Isolated, Synchronous, Based on LT8710",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Boost_NonIso_Sync_LT8710"
      },
      {
        "text": "Boost DC-DC Converter, Non-Isolated, Non-Synchronous, Based on LT3844",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Boost_NonIso_NonSync_LT3844"
      },
      {
        "text": "Buck DC-DC Converter, Non-Isolated, Synchronous, Based on LTC3891",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Buck_NonIso_Sync_LTC3891"
      },
      {
        "text": "Buck DC-DC Converter, Isolated, Non-Synchronous, Based on LT3844",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Buck_Iso_NonSync_LT3844"
      },
      {
        "text": "Buck DC-DC Converter, Non-Isolated, Non-Synchronous, Based on LT3844",
        "href": "https://github.com/AliRezaJoodi/Electronics_Exercises/tree/main/PSU_DCDC_Buck_NonIso_NonSync_LT3844"
      }
    ],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "220V AC Voltage Protection",
    "url": "https://github.com/AliRezaJoodi/Electronics_Projects/tree/main/VoltageProtector_1Phase",
    "image": "https://github.com/AliRezaJoodi/Electronics_Projects/raw/main/VoltageProtector_1Phase/Pictures/Album.jpg",
    "details": [
      "Reverse Engineering",
      "Simulation in LTspice"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Thermocouple Amplifier with Auto-Zero Offset Cancellation",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/Freelance_DirgodazAmol_ThermocoupleAmplifierWithAutoZero/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/Freelance_DirgodazAmol_ThermocoupleAmplifierWithAutoZero/Album.jpg",
    "details": [
      "Auto-Zero offset cancellation",
      "2-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "Remote",
    "tasks": [
      "My Tasks: Hardware Design 50% | PCB Design 100%"
    ],
  },
  {
    "title": "Isolated Voltage and Current Measurement for 6 Loads",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/Freelance_Russia_IsolatedVoltageAndCurrentMeasurementFor6Loads/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/Freelance_Russia_IsolatedVoltageAndCurrentMeasurementFor6Loads/Album.png",
    "details": [
      "3 voltage channels for 220V",
      "Isolated voltage measurement using HCPL-7840",
      "6 current channels for 40A",
      "Isolated current measurement using CT",
      "ADC using MAX11198 (16-bit resolution, 2Msps, SPI Interface)",
      "2-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Russia",
    "clientUrl": "",
    "workType": "Remote",
    "tasks": [
      "My Tasks: Hardware Design 50% | PCB Design 100%"
    ],
  },
  {
    "title": "3-Phase Energy Meter Based on ADE7858",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/Freelance_Russia_3PhaseEnergyMeterBasedOnADE7858/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/Freelance_Russia_3PhaseEnergyMeterBasedOnADE7858/Album.png",
    "details": [
      "Voltage measurement, 3-phase AC",
      "3 current channels for 80A",
      "Isolated current measurement using CT",
      "Isolated interfacing using ADuM140x ICs",
      "2-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Russia",
    "clientUrl": "",
    "workType": "Remote",
    "tasks": [
      "My Tasks: Hardware Design 50% | PCB Design 100%"
    ],
  },
  {
    "title": "Induction Heating, Controlled with PDM, 30KW",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/Alcora_InductionHeating_ControlledWithPDM_30KW/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/Alcora_InductionHeating_ControlledWithPDM_30KW/Album.jpg",
    "details": [
      "3-Phase AC",
      "Full-bridge",
      "Power controller with PDM"
    ],
    "extraLinks": [],
    "client": "Alborz Amol, Iran",
    "clientUrl": "",
    "workType": "On-site",
    "tasks": [
      "My Tasks: Parts Preparation | Build | Wiring"
    ],
  },
  {
    "title": "Single-Phase Dimmer with Zero-Crossing Synchronized PWM, Based On AVR MCU",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/PhaseDimmer_1Phase_LCD",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/PhaseDimmer_1Phase_LCD/Pictures/Album.jpg",
    "details": [
      "Display with 16x2 LCD"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Battery Charger with Transformer, 40V/30A",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/Freelance_India_BatteryChargerWithTransformer/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/Freelance_India_BatteryChargerWithTransformer/Album.jpg",
    "details": [
      "Reverse engineering"
    ],
    "extraLinks": [],
    "client": "India",
    "clientUrl": "",
    "workType": "Remote",
    "tasks": [
      "My Tasks: Hardware Design 20% | AVR Programming 100%"
    ],
  },
  {
    "title": "Soft-Start with Protection for ARC Welder",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_PowerSupplyForArcWelder/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_PowerSupplyForArcWelder/Album.jpg",
    "details": [],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 90% | PCB Design 100%"
    ],
  },
  {
    "title": "Induction Heating, 30KW, Mode2",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_InductionHeating_30KW_Model2/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_InductionHeating_30KW_Model2/Album.jpg",
    "details": [
      "3-Phase",
      "Half-Bridge",
      "Power Controller with Phase Dimmer"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [],
  },
  {
    "title": "Induction Heating, 30KW, Mode1",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_InductionHeating_30KW_Model1/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_InductionHeating_30KW_Model1/Album.jpg",
    "details": [
      "3-Phase",
      "Half-Bridge",
      "Power Controller with Phase Dimmer"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [],
  },
  {
    "title": "Induction Heating, 50KW",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_InductionHeating_50KW/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_InductionHeating_50KW/Album.jpg",
    "details": [
      "3-Phase",
      "Full-Bridge",
      "Power Controller with Phase Dimmer"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [],
  },
  {
    "title": "Induction Heating, 10KW",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_InductionHeating_10KW/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_InductionHeating_10KW/Album.jpg",
    "details": [
      "1-Phase",
      "Half-Bridge",
      "Power Controller with Phase Dimmer"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [],
  },
  {
    "title": "Wireless Temperature Monitoring for 3 Gas Furnaces with Graphs in LabVIEW",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_TemperatureMonitoring_3GasFurnaces_Wireless/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_TemperatureMonitoring_3GasFurnaces_Wireless/Album.jpg",
    "details": [
      "Wireless communication using NRF24L01 module.",
      "Compatible with various thermocouple types (S, B, and K)"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 100% | PCB Design 100% | AVR Programming 100%"
    ],
  },
  {
    "title": "Full Bridge IGBT Driver for Induction Heating, Model 2",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IgbtDriver_FullBridge_Model2/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IgbtDriver_FullBridge_Model2/Album.jpg",
    "details": [
      "Included PDM Generator",
      "Included IGBTs"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 25% | PCB Design 100%"
    ],
  },
  {
    "title": "Full Bridge IGBT Driver for Induction Heating, Model 1",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IgbtDriver_FullBridge_Model1/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IgbtDriver_FullBridge_Model1/Album.jpg",
    "details": [
      "Included PDM Generator",
      "IGBT Gate Drive Based on HCPL-3120"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 25% | PCB Design 100%"
    ],
  },
  {
    "title": "Half Bridge IGBT Driver for Induction Heating",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IgbtDriver_HalfBridge/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IgbtDriver_HalfBridge/Album.jpg",
    "details": [
      "IGBT Gate Drive Based on HCPL-3120"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 25% | PCB Design 100%"
    ],
  },
  {
    "title": "Full Bridge IGBT Driver for Induction Heating Based on SKYPER32R Module",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IgbtDriver_FullBridge_BasedOnSKYPER32R/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IgbtDriver_FullBridge_BasedOnSKYPER32R/Album.jpg",
    "details": [
      "Based on SKYPER32R Module",
      "Used for IGBT Modules"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Half Bridge IGBT Driver for Induction Heating Based on SKYPER32R Module",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IgbtDriver_HalfBridge_BasedOnSKYPER32R/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IgbtDriver_HalfBridge_BasedOnSKYPER32R/Album.jpg",
    "details": [
      "Based on SKYPER32R Module",
      "Used for IGBT Module"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Isolated Current and Voltage Measurement for Induction Heating (SMD)",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IsolatedCurrentAndVoltageMeasurement_SMD/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IsolatedCurrentAndVoltageMeasurement_SMD/Album.jpg",
    "details": [
      "3 isolated voltage channels using HCPL-7840",
      "Inverter bus voltage measurement",
      "Coil voltage measurement",
      "Inverter current measurement using shunt",
      "Using SMD package components",
      "2-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 30% | PCB Design 100%"
    ],
  },
  {
    "title": "Isolated Current and Voltage Measurement for Induction Heating (THD)",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_IsolatedCurrentAndVoltageMeasurement_THD/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_IsolatedCurrentAndVoltageMeasurement_THD/Album.jpg",
    "details": [
      "3 isolated voltage channels using HCPL-7840",
      "Inverter bus voltage measurement",
      "Coil voltage measurement",
      "Inverter current measurement using shunt",
      "Using THD package components",
      "1-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 30% | PCB Design 100%"
    ],
  },
  {
    "title": "Controller Board for Induction Heating",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_ControllerBoardForInductionHeating/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_ControllerBoardForInductionHeating/Album.jpg",
    "details": [
      "Based On AVR MCU"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 50% | PCB Design 100% | AVR Programming 100%"
    ],
  },
  {
    "title": "Multiple Power Supply for Induction Heating",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_PowerSupplyForInductionHeating/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_PowerSupplyForInductionHeating/Album.jpg",
    "details": [
      "1.2V to 37V Adjustable Output with LM2596 (x4)",
      "-5V Fixed Output with LM2596",
      "+12V Isolated Output with Flyback DC-DC Converter"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "12V/5A Full-Bridge DC Motor Driver, Based on MOSFETs with Isolated Input",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_DcMotorDriver_FullBridge_Isolated_12V5A/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_DcMotorDriver_FullBridge_Isolated_12V5A/Album.jpg",
    "details": [
      "Full-Bridge Based on MOSFETs",
      "Isolated input using HCPL-3120",
      "3 isolated power supplies using flyback converter"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 50% | PCB Design 100%"
    ],
  },
  {
    "title": "Single-Phase Dimmer, Based on AVR MCU",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_PhaseDimmer_1Phase_BasedOnAVR/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_PhaseDimmer_1Phase_BasedOnAVR/Album.png",
    "details": [
      "ATmega32 Microcontroller",
      "External Watchdog",
      "Voltage Reference with LM336",
      "4-20mA or 1~5V Analog Input",
      "Zero Crossing Detector",
      "Dual Isolated Power Supply for SCR Drivers",
      "SCR Gate Driver (2x)",
      "Requires external Thyristor or Triac",
      "2-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "3-Phase Dimmer, Half-Controlled Full-Wave Rectifier, Based on AVR MCU",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_PhaseDimmer_3Phase_BasedOnAVR/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_PhaseDimmer_3Phase_BasedOnAVR/Album.jpg",
    "details": [
      "ATmega32 Microcontroller",
      "External Watchdog",
      "Voltage Reference with LM336",
      "4-20mA or 1~5V Analog Input",
      "Zero Crossing Detector x3",
      "Triple Isolated Power Supply for SCR Drivers",
      "SCR Gate Driver (3x)",
      "Requires external Thyristor or Triac",
      "1-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "AVR Training Board Exclusive for Dimmer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/tree/main/TrainingBoardExclusiveForDimmer",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TrainingBoardExclusiveForDimmer/Pictures/Album.jpg",
    "details": [
      "ATmega32 Microcontroller",
      "SCR Gate Driver (2x)",
      "Requires external Thyristor or Triac",
      "Zero Crossing Detector",
      "4~20mA Analog Input",
      "4~20mA Analog Output",
      "0~5V Analog Output",
      "RS232",
      "RS485",
      "16x2 Character LCD",
      "LED (8x)",
      "Buzzer",
      "LM35 Temp Sensor",
      "Potentiometer for ADC",
      "Button (5x)"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "3-Phase Dimmer, Half-Controlled Full-Wave Rectifier, Based on Analog",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_PhaseDimmer_3Phase_BasedOnAnalog/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_PhaseDimmer_3Phase_BasedOnAnalog/Album.jpg",
    "details": [
      "4-20mA or 1~5V Analog Input",
      "Zero Crossing Detector x3",
      "Triple Isolated Power Supply for SCR Drivers",
      "SCR Gate Driver (3x)",
      "Requires external Thyristor or Triac",
      "1-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: PCB Design 100%"
    ],
  },
  {
    "title": "Single-Phase Dimmer, Based on Analog",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_PhaseDimmer_1Phase_BasedOnAnalog/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_PhaseDimmer_1Phase_BasedOnAnalog/Album.jpg",
    "details": [
      "4-20mA or 1-5V Analog Input",
      "Zero Crossing Detector",
      "Dual Isolated Power Supply for SCR Drivers",
      "SCR Gate Driver (2x)",
      "Requires external Thyristor or Triac",
      "1-Layer PCB"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: PCB Design 100%"
    ],
  },
  {
    "title": "Capacitor Package for 50KW Induction Heating",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_CapacitorPackageForInductionHeating50KW/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_CapacitorPackageForInductionHeating50KW/Album.jpg",
    "details": [
      "For Impedance Matching"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Modified Manual Gas Valve to 4-20 mA Control with DC Motor",
    "url": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/blob/main/Projects/DirgodazAmol_ControlledGasValveWith4to20mA/ReadMe.md",
    "image": "https://github.com/AliRezaJoodi/AliRezaJoodi.github.io/raw/main/Projects/DirgodazAmol_ControlledGasValveWith4to20mA/Album.jpg",
    "details": [
      "Used for temperature controller in a gas furnace"
    ],
    "extraLinks": [],
    "client": "Dirgodaz Amol, Iran",
    "clientUrl": "https://dirgodazamol.com/en/",
    "workType": "On-Site",
    "tasks": [
      "My Tasks: Hardware Design 80% | PCB Design 100% | AVR Programming 100%"
    ],
  },
  {
    "title": "Humidity to 4-20mA Conversion",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/Converter_HumidityTo4-20mA_SHT10",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/Converter_HumidityTo4-20mA_SHT10/Pictures/Album.png",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Gas Detector and Temperature with Dial",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/GasDetectorAndTemperature_Dial",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/GasDetectorAndTemperature_Dial/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Gas Detector, 2-Zone with Relay",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/GasDetector_2Zone",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/GasDetector_2Zone/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature and Humidity Controller, 4 Relay Outputs, Bluetooth Computer Monitoring",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureAndHumidityController_4Outputs_ComputerMonitoring_Bluetooth",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureAndHumidityController_4Outputs_ComputerMonitoring_Bluetooth/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature and Humidity Controller, 4 Relay Outputs, Wireless Sensor With RF",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureAndHumidityController_4Outputs_WirelessSensorWithRF",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureAndHumidityController_4Outputs_WirelessSensorWithRF/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature and Humidity Controller, 4 Relay Outputs",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureAndHumidityController_4Outputs",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureAndHumidityController_4Outputs/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller and Gas Detector, 2 Relay Outputs, Computer Monitoring",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureControllerAndGasDetector_2Outputs_ComputerMonitoring",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureControllerAndGasDetector_2Outputs_ComputerMonitoring/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller, 2 Relay Outputs, Computer Monitoring, USB",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureController_2Outputs_ComputerMonitoring",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureController_2Outputs_ComputerMonitoring/Pictures/Album_USB_FT232BL.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller, 2 Relay Outputs, Computer Monitoring, RS232",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureController_2Outputs_ComputerMonitoring",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureController_2Outputs_ComputerMonitoring/Pictures/Album_RS232.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller, 2 Relay Outputs",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureController_2Outputs",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureController_2Outputs/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller, 1 Relay Output, Computer Monitoring, USB",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureController_1Output_ComputerMonitoring",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureController_1Output_ComputerMonitoring/Pictures/Album_USB_FT232BL.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller, 1 Relay Output, Computer Monitoring, RS232",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureController_1Output_ComputerMonitoring",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureController_1Output_ComputerMonitoring/Pictures/Album_RS232.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Temperature Controller, 1 Relay Output",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TemperatureController_1Output",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TemperatureController_1Output/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, DTMF, 8CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_DTMF",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_DTMF/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, RF, Bluetooth, 8CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_Bluetooth",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_Bluetooth/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, RF, FSK, 4CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_RF_FSK_4CH",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_RF_FSK_4CH/Pictures_Receiver_Model2/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, IR, 14CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_IR_14CH",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_IR_14CH/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, IR, 8CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_IR_8CH_ATMEGA32",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_IR_8CH_ATMEGA32/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, IR, 4CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_IR_4CH_ATMEGA8",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_IR_4CH_ATMEGA8/Pictures_Model2_2Layer/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Relay Remote Controller, IR, 4CH",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_IR_4CH_ATMEGA8",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_IR_4CH_ATMEGA8/Pictures_Model3/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "1CH Relay Controller with Laser Pointer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/RelayRemoteController_LaserPointer_1CH_ATmega8",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/RelayRemoteController_LaserPointer_1CH_ATmega8/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "16CH Flashing Light with Triacs",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/FlasherWithTriacs_16CH",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/FlasherWithTriacs_16CH/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "USBASP Programmer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/Programmer_USBASP",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/Programmer_USBASP/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "STK200/STK300 Programmer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/Programmer_STK200",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/Programmer_STK200/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Digital Water Level Meter",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DigitalWaterLevelMeterWithUltrasonicMoudle_SRF05_LCD",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DigitalWaterLevelMeterWithUltrasonicMoudle_SRF05_LCD/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Digital Meter with SRF02 Ultrasonic Module",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DigitalMeterWithUltrasonicMoudle_SRF02_LCD",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DigitalMeterWithUltrasonicMoudle_SRF02_LCD/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Code Lock with RFID",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/CodeLockWithRFID_LCD",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/CodeLockWithRFID_LCD/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Code Lock with TelCard",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/CodeLockWithTelCard_LCD",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/CodeLockWithTelCard_LCD/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Code Lock with 4x4 Keypad",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/CodeLockWithKeypad4x4",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/CodeLockWithKeypad4x4/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Alarm with PIR Sensor and Dialer, 3 Zones",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/AlarmWithPIR_3Zones_Dialer",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/AlarmWithPIR_3Zones_Dialer/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Clock with DS1307 RTC, Thermometer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/ClockWithDS1307&Thermometer_LCD",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/ClockWithDS1307&Thermometer_LCD/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Calculator with TouchScreen, Thermometer with LM35 Sensor",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/CalculatorWithTouchScreen&ThermometerWithLM35",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/CalculatorWithTouchScreen&ThermometerWithLM35/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Tic Tac Toe Game with 64x128 GLCD",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/Game_TicTacToe_GLCD_TouchScreen",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/Game_TicTacToe_GLCD_TouchScreen/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Conference Timer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/ConferenceTimer_7Segment_ATmega32",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/ConferenceTimer_7Segment_ATmega32/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Phone Book with Dialer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/PhoneBookWithDialer",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/PhoneBookWithDialer/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Wireless Communication with RF from Computer to MCU",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/WirelessCommunicationWithRF_FromComputerToMCU",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/WirelessCommunicationWithRF_FromComputerToMCU/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Wireless Communication with RF from MCU to Computer",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/WirelessCommunicationWithRF_FromMCUtoComputer",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/WirelessCommunicationWithRF_FromMCUtoComputer/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Wireless Communication with RF from MCU to MCU",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/WirelessCommunicationWithRF_FromMCUtoMCU",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/WirelessCommunicationWithRF_FromMCUtoMCU/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "AVR Training Board Exclusive for IR Remote",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/TrainingBoardExclusiveForIR",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/TrainingBoardExclusiveForIR/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "2-Channel Servo Motor Controller, Time Scheduled",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_ServoX2_TimeScheduled",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_ServoX2_TimeScheduled/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "4-Channel Servo Motor Controller, Computer Controlled, USB Interface",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_ServoX4_ComputerControlled_USB",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_ServoX4_ComputerControlled_USB/Pictures/Album2.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Single Stepper Motor Driver, Computer Controlled, USB",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_StepperX1_ComputerControlled",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_StepperX1_ComputerControlled/Pictures_Model5_USB_FT232RL/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Single Stepper Motor Driver, Computer Controlled, RS232",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_StepperX1_ComputerControlled",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_StepperX1_ComputerControlled/Pictures_Model3_RS232_IRF540/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Single Stepper Motor Driver, Manually Controlled",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_StepperX1_ManuallyControlled_Keypad",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_StepperX1_ManuallyControlled_Keypad/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Line Follower Robot",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/LineFollowerRobot",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/LineFollowerRobot/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "DC Motor Driver, No Feedback, Remote Controlled, Bluetooth Interface",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_DC_NoFeedback_RemoteControlled_Bluetooth",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_DC_NoFeedback_RemoteControlled_Bluetooth/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "DC Motor Driver, Speed and Direction Controller with Computer, USB Interface",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_DC_NoFeedback_ComputerControlled_USB",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_DC_NoFeedback_ComputerControlled_USB/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "DC Motor Driver, No Feedback, Remote Controlled, ASK RF Module",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_DC_NoFeedback_RemoteControlled_RF_ASK",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_DC_NoFeedback_RemoteControlled_RF_ASK/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "DC Motor Driver, Speed Controller with Feedback, RS232, MATLAB",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_DC_WithFeedback_ComputerControlled",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_DC_WithFeedback_ComputerControlled/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "DC Motor Driver, Manually Controlled, Driver Based on MOSFET",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_DC_NoFeedback_ManuallyControlled_MOSFET",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_DC_NoFeedback_ManuallyControlled_MOSFET/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "DC Motor Driver, Manually Controlled, Driver Based on L298",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/MotorDriver_DC_NoFeedback_ManuallyControlled_L298",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/MotorDriver_DC_NoFeedback_ManuallyControlled_L298/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Display with 8x24 LED",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DisplayWithLED_8x24_KeyboardControlled",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DisplayWithLED_8x24_KeyboardControlled/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Display with 8x16 LED",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DisplayWithLED_8x16",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DisplayWithLED_8x16/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Display with 8x16 Dot Matrix",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DisplayWithLED_8x16",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DisplayWithLED_8x16/Pictures/Album2.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Display with 8x8 LED, Expandable",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DisplayWithLED_8x8_Expandable",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DisplayWithLED_8x8_Expandable/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  },
  {
    "title": "Display with 8x8 LED",
    "url": "https://github.com/AliRezaJoodi/AVR_Projects/blob/main/DisplayWithLED_8x8",
    "image": "https://github.com/AliRezaJoodi/AVR_Projects/raw/main/DisplayWithLED_8x8/Pictures/Album.jpg",
    "details": [
      "Prototype",
      "Based on AVR MCU"
    ],
    "extraLinks": [],
    "client": "Personal",
    "clientUrl": "",
    "workType": "Self-Initiated",
    "tasks": [
      "My Tasks: 100%"
    ],
  }
];
