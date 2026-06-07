export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  heading: string;
  items: FAQItem[];
}

export function getGeneralFAQ(locale: string): FAQData {
  const faqs: Record<string, FAQData> = {
    en: {
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'What size solar battery do I need for my home?',
          answer:
            'Most homes need a battery between 4 kWh and 15 kWh. A 4-8 kWh battery covers essentials (lights, fridge, WiFi, security) for 4-6 hours of backup. An 8-15 kWh system can power your whole home including air conditioning. Use our calculator above to get a personalized recommendation based on your actual monthly usage and backup needs.',
        },
        {
          question: 'How long do solar batteries last?',
          answer:
            'Solar battery lifespan is measured two ways. <strong>Calendar life</strong> is the expected service life regardless of use — most lithium-ion batteries last 8-12 years before their internal chemistry degrades. <strong>Cycle life</strong> is how many charge-discharge cycles the battery can handle before capacity drops below 80% — typically 3,000-6,000 cycles depending on depth of discharge (DoD). The lower you regularly discharge the battery (e.g., 20% DoD vs 80% DoD), the more cycles it will last. In practice, the calendar life usually comes first: a daily cycled battery rated for 5,000 cycles could theoretically last ~13 years, but its calendar life might limit it to 10.',
        },
        {
          question: 'Do solar batteries work during a power outage?',
          answer:
            'Yes, solar batteries can power your home during a blackout, but with one important caveat: most grid-tied solar systems shut off during an outage for safety unless paired with a battery. A properly configured solar + battery system automatically disconnects from the grid and runs your essential loads from battery power.',
        },
        {
          question: 'What\'s the difference between kW and kWh? Why does it matter?',
          answer:
            'Think of it like a water tank. <strong>kW (kilowatt)</strong> is the size of the pipe — how much power can flow at once to run your appliances. <strong>kWh (kilowatt-hour)</strong> is the size of the tank — how much energy can be stored. Your battery capacity is measured in kWh (how long it lasts), while your inverter size is measured in kW (how many appliances you can run simultaneously). For example, a 10 kWh battery paired with a 5 kW inverter can run up to 5 kW of appliances at the same time for about 2 hours. If you undersize the inverter (kW), you won\'t be able to run your oven and AC together; if you undersize the battery (kWh), it will drain too quickly.',
        },
        {
          question: 'How much money can I save with a solar battery?',
          answer:
            'Savings depend on your local electricity rates, solar irradiance, and system size. Typical savings range from 30-70% on monthly electricity bills. Homes in areas with high electricity costs ($0.25+/kWh) and good net metering policies see the fastest payback, often 4-8 years. Our calculator estimates annual and monthly savings for your specific country and usage.',
        },
        {
          question: 'Can I go off-grid with solar batteries?',
          answer:
            'While technically possible, going fully off-grid requires a much larger battery bank and solar array — typically 2-3× the size of a grid-tied backup system. Most homeowners choose grid-tied systems with battery backup, which gives you the reliability of the grid plus backup power during outages, at a fraction of the cost of going fully off-grid.',
        },
        {
          question: 'Solar battery vs generator — which is better?',
          answer:
            'Solar batteries are quieter, cleaner, and cheaper to operate long-term than generators. Generators have lower upfront costs ($500-2,000) but require ongoing fuel and maintenance. Solar batteries cost more upfront ($1,100-3,900) but have zero fuel costs and last 8-12 years. For frequent or long-duration power needs, solar + battery is more cost-effective over time.',
        },
      ],
    },
    fr: {
      heading: 'Questions Fréquentes',
      items: [
        {
          question: 'Quelle taille de batterie solaire ai-je besoin pour ma maison ?',
          answer:
            'La plupart des maisons ont besoin d\'une batterie entre 4 kWh et 15 kWh. Une batterie de 4 à 8 kWh couvre l\'essentiel (lumières, frigo, WiFi, sécurité) pendant 4 à 6 heures de secours. Un système de 8 à 15 kWh peut alimenter toute votre maison. Utilisez notre calculateur pour une recommandation personnalisée.',
        },
        {
          question: 'Combien de temps durent les batteries solaires ?',
          answer:
            'La durée de vie d\'une batterie solaire se mesure de deux façons. La <strong>durée de vie calendaire</strong> est la durée de service prévue — la plupart des batteries lithium-ion durent 8 à 12 ans. La <strong>durée de vie cyclique</strong> est le nombre de cycles de charge-décharge avant que la capacité ne tombe sous 80 % — généralement 3 000 à 6 000 cycles. En pratique, la durée calendaire est généralement atteinte en premier.',
        },
        {
          question: 'Les batteries solaires fonctionnent-elles pendant une panne de courant ?',
          answer:
            'Oui, les batteries solaires peuvent alimenter votre maison pendant une panne. Un système solaire + batterie correctement configuré se déconnecte automatiquement du réseau et alimente vos appareils essentiels avec la batterie.',
        },
        {
          question: 'Quelle est la différence entre kW et kWh ? Pourquoi est-ce important ?',
          answer:
            'Imaginez un réservoir d\'eau. Le <strong>kW (kilowatt)</strong> est la taille du tuyau — la puissance qui peut circuler à la fois. Le <strong>kWh (kilowatt-heure)</strong> est la taille du réservoir — l\'énergie qui peut être stockée. La capacité de votre batterie se mesure en kWh (autonomie), tandis que la puissance de votre onduleur se mesure en kW (appareils simulatanés).',
        },
        {
          question: 'Combien puis-je économiser avec une batterie solaire ?',
          answer:
            'Les économies dépendent de vos tarifs électriques locaux, de l\'ensoleillement et de la taille du système. Les économies typiques sont de 30 à 70 % sur les factures mensuelles. Notre calculateur estime les économies pour votre pays et votre consommation.',
        },
        {
          question: 'Puis-je vivre hors réseau avec des batteries solaires ?',
          answer:
            'C\'est techniquement possible, mais cela nécessite un parc de batteries et des panneaux solaires beaucoup plus grands. La plupart des propriétaires choisissent des systèmes connectés au réseau avec batterie de secours, ce qui offre fiabilité et économies à moindre coût.',
        },
        {
          question: 'Batterie solaire ou générateur — quel est le meilleur ?',
          answer:
            'Les batteries solaires sont plus silencieuses, plus propres et moins chères à long terme. Les générateurs ont un coût initial plus faible mais nécessitent du carburant et de l\'entretien. Pour des besoins fréquents, le solaire + batterie est plus rentable.',
        },
      ],
    },
    es: {
      heading: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Qué tamaño de batería solar necesito para mi hogar?',
          answer:
            'La mayoría de los hogares necesitan una batería de entre 4 kWh y 15 kWh. Una batería de 4 a 8 kWh cubre lo esencial (luces, nevera, WiFi, seguridad) durante 4 a 6 horas de respaldo. Un sistema de 8 a 15 kWh puede alimentar toda su casa. Use nuestra calculadora para obtener una recomendación personalizada.',
        },
        {
          question: '¿Cuánto duran las baterías solares?',
          answer:
            'La vida útil de una batería solar se mide de dos formas. La <strong>vida útil calendario</strong> es la vida útil esperada — la mayoría de las baterías de litio duran de 8 a 12 años. La <strong>vida útil cíclica</strong> es la cantidad de ciclos de carga-descarga antes de que la capacidad caiga por debajo del 80 %, típicamente de 3,000 a 6,000 ciclos.',
        },
        {
          question: '¿Las baterías solares funcionan durante un corte de luz?',
          answer:
            'Sí, las baterías solares pueden alimentar su hogar durante un apagón. Un sistema solar + batería correctamente configurado se desconecta automáticamente de la red y alimenta sus cargas esenciales con la batería.',
        },
        {
          question: '¿Cuál es la diferencia entre kW y kWh? ¿Por qué es importante?',
          answer:
            'Piense en un tanque de agua. El <strong>kW (kilovatio)</strong> es el tamaño de la tubería — cuánta energía puede fluir a la vez. El <strong>kWh (kilovatio-hora)</strong> es el tamaño del tanque — cuánta energía se puede almacenar. La capacidad de su batería se mide en kWh (autonomía), mientras que su inversor se mide en kW (electrodomésticos simultáneos).',
        },
        {
          question: '¿Cuánto puedo ahorrar con una batería solar?',
          answer:
            'Los ahorros dependen de sus tarifas eléctricas locales, la radiación solar y el tamaño del sistema. Los ahorros típicos son del 30 al 70 % en las facturas mensuales. Nuestra calculadora estima los ahorros para su país y consumo.',
        },
        {
          question: '¿Puedo vivir fuera de la red con baterías solares?',
          answer:
            'Técnicamente es posible, pero requiere un banco de baterías y paneles solares mucho más grandes. La mayoría de los propietarios eligen sistemas conectados a la red con respaldo de batería, lo que brinda confiabilidad y ahorros a menor costo.',
        },
        {
          question: 'Batería solar vs generador — ¿cuál es mejor?',
          answer:
            'Las baterías solares son más silenciosas, limpias y económicas a largo plazo. Los generadores tienen un costo inicial más bajo pero requieren combustible y mantenimiento. Para necesidades frecuentes, el sistema solar + batería es más rentable.',
        },
      ],
    },
  };

  return faqs[locale] || faqs.en;
}

// ─── Country-Specific FAQ ───

const countryFAQs: Record<string, Record<string, FAQData>> = {
  ZA: {
    en: {
      heading: 'South Africa Solar Battery FAQ',
      items: [
        {
          question: 'How many kWh do I need to beat Stage 6 load shedding?',
          answer:
            'For a typical Joburg or Cape Town home during Stage 6 (8-10 hours of daily outage, often split into 2 slots), a 5-10 kWh lithium battery paired with 2-4 kW solar is the sweet spot. A 5 kWh battery runs essentials — lights, fridge, TV, WiFi router, and security system — through a single 4-hour slot. If you want to cover two daily slots without touching the grid, go for 10 kWh or more. Our calculator factors in your actual load sheet so you don\'t overbuy.',
        },
        {
          question: 'Is solar + battery actually cheaper than Eskom?',
          answer:
            'At Eskom\'s current tariff of about $0.20/kWh (R3.70+) and rising 12-15% annually, yes — the math flips in 3-5 years. A R60,000-R120,000 solar + battery system offsets R12,000-R24,000/year in electricity and eliminates generator fuel. After the Section 12B 125% accelerated depreciation for businesses, and the 2024 residential solar tax rebate (capped at R15,000), net cost comes down further. Most homeowners hit breakeven in year 4-5.',
        },
        {
          question: 'Will a solar battery run my geyser and pool pump during load shedding?',
          answer:
            'It can — but you\'ll need a larger inverter. A standard 5 kW inverter can handle one geyser (3-4 kW) or one pool pump (1-2 kW) at a time, plus lights and fridge. But running a geyser for 2 hours from battery alone eats 6-8 kWh. Most efficient setup: use a solar-ready geyser timer so it heats during the day from panels, not battery. Then your battery only powers the essentials during evening load shedding.',
        },
        {
          question: 'Does City of Cape Town allow feeding battery power back to the grid?',
          answer:
            'Yes — Cape Town is ahead of the curve. Their SSEG (Small-Scale Embedded Generation) programme allows grid-tied solar + battery systems, and they recently announced plans to credit battery discharge back to the grid at a feed-in tariff. Johannesburg (City Power) and Durban (eThekwini) are slower — currently they allow solar grid-tie but battery export policies are still being developed. Always register your system: unregistered grid-tied inverters may get disconnected.',
        },
        {
          question: 'Lithium vs lead-acid for South African homes — which makes sense?',
          answer:
            'Lithium (LiFePO4) dominates now. A 5 kWh lithium battery costs R18,000-R35,000 and lasts 10+ years at 80% depth of discharge. Lead-acid might cost half upfront but dies in 2-3 years under regular load shedding, and you can only use 50% of its capacity without killing it. The total cost per usable kWh over 10 years is roughly 3-4× higher for lead-acid. Unless you\'re on a tight upfront budget, skip lead-acid.',
        },
      ],
    },
  },
  NG: {
    en: {
      heading: 'Nigeria Solar Battery FAQ',
      items: [
        {
          question: 'Can a 5 kWh battery keep my Lagos home running through a full day of NEPA outage?',
          answer:
            'A 5 kWh lithium battery covers essentials — fridge, freezer, lights, two fans, TV, and WiFi — for about 6-10 hours. Most Nigerian homes face 6-18 hours of daily grid outage, so a single 5 kWh battery handles one stretch. For 24-hour coverage without generator backup, go for 10-15 kWh paired with 3-5 kW solar. Our calculator lets you plug in your actual appliance list and outage hours for a precise size.',
        },
        {
          question: 'Solar + battery vs generator — what actually costs less in Nigeria?',
          answer:
            'Since the 2023 fuel subsidy removal, a household burning 10 litres of petrol daily now spends ₦70,000-₦100,000/month on generator fuel. That\'s ₦840,000-₦1,200,000 per year. A 5 kWh solar + battery system with 2 kW panels costs ₦1.5M-₦3M upfront and eliminates 80-100% of generator fuel — payback in 2-3 years. After that, you\'re generating free power for another 8-10 years of battery life. The generator becomes the backup, not the primary.',
        },
        {
          question: 'Why can\'t I just feed excess solar back to the grid in Nigeria?',
          answer:
            'Nigeria has no functional net metering programme yet. The DISCOs (distribution companies) don\'t offer feed-in tariffs and most meters aren\'t bidirectional. This means any solar you generate but don\'t use immediately is lost — unless you store it in a battery. That\'s why battery sizing matters more in Nigeria than in the US or Europe: without storage, your solar panels are idle during outages. Your battery is your personal mini-grid.',
        },
        {
          question: 'Are there reliable solar battery brands available in Nigeria?',
          answer:
            'Yes, the market has matured significantly. Long-time players like Felicity and Luminous have wide distributor networks in Lagos, Abuja, and Port Harcourt. Pylontech and GivEnergy lithium batteries are available through importers — higher quality, longer warranty, but pricier. M-KOPA and Sun King serve the PAYG (pay-as-you-go) market for smaller household systems. Avoid no-name batteries from Alaba market with suspiciously low prices — counterfeit cells are common. Buy from an authorised distributor who offers local warranty.',
        },
        {
          question: 'How does solar irradiance in Nigeria compare to other African countries?',
          answer:
            'Nigeria gets 4.8 kWh/m²/day average — strong but not chart-topping. Northern states like Kano and Sokoto get 5.5-6.0 kWh/m²/day (exceptional), while coastal Lagos and Port Harcourt get 4.0-4.5 kWh/m²/day due to cloud cover. For perspective: South Africa\'s Northern Cape gets 6.0+ kWh/m²/day, but Nigeria\'s northern region is competitive. You\'ll generate about 20% less solar in Lagos than in Kano for the same panel setup — something our calculator accounts for when you select your location.',
        },
      ],
    },
  },
  KE: {
    en: {
      heading: 'Kenya Solar Battery FAQ',
      items: [
        {
          question: 'How much can solar + battery cut my Kenya Power bill?',
          answer:
            'Kenya Power\'s residential tariff is about $0.22/kWh (KES 28+), among the highest in East Africa. A typical Nairobi household consuming 200 kWh/month pays roughly KES 5,600/month. A 3-5 kW solar system with 5-10 kWh battery can offset 60-80% of that — bringing the bill down to KES 1,000-2,000/month. Combined with Kenya\'s excellent solar resource (5.0 kWh/m²/day), payback is 4-6 years. The fuel cost adjustment charge alone makes solar + battery worth it: it adds 20-40% to your bill during dry seasons when hydro generation drops.',
        },
        {
          question: 'What size solar battery do I need for a Nairobi apartment?',
          answer:
            'For a 1-2 bedroom apartment with LED lights, fridge, TV, laptop and phone charging, a 3-5 kWh battery with 1-2 kW solar panels is usually sufficient for evening self-consumption. Nairobi apartments rarely face long outages (unlike upcountry), so the goal is bill reduction, not backup. A smaller 3 kWh battery stores enough daytime solar to cover a typical Nairobi evening — lights, TV, and a few hours of laptop use. Our calculator adjusts for apartment vs house loads.',
        },
        {
          question: 'Is net metering available in Kenya?',
          answer:
            'Kenya has a net metering regulation (Energy Net-Metering Regulations 2024) but implementation is still rolling out. Kenya Power is piloting net metering with select customers — excess solar exported to the grid is credited at a rate that\'s currently lower than the import tariff (about 60-70% of retail). This makes battery storage relevant: you\'re better off storing your excess daytime solar and using it in the evening than exporting it cheaply. Kenya Power\'s new smart meters support bidirectional flow, but the credit mechanism is still being refined.',
        },
        {
          question: 'Should I go fully off-grid in rural Kenya?',
          answer:
            'In many rural areas where Kenya Power hasn\'t yet reached (or where the line extension cost is KES 50,000+), off-grid solar + battery is already the cheapest option. A 5 kW solar array with 10-15 kWh battery storage can power a rural homestead including a water pump, lights, fridge, and small workshop. Compared to the cost of grid extension plus ongoing bills, off-grid pays back in 5-8 years. Companies like M-KOPA and d.light have proven the model with PAYG solar home systems across rural Kenya. For larger home systems, the economics are even better.',
        },
        {
          question: 'What battery brands work best for Kenyan conditions?',
          answer:
            'Lithium iron phosphate (LiFePO4) batteries handle Nairobi\'s moderate climate well — no extreme cold, and elevation is the main variable (Nairobi at 1,795 m). Brands with local presence include Pylontech (available through SolarNow and Chloride Exide distributors), Felicity (popular for budget-conscious buyers), and Victron-compatible batteries for professional installs. Lead-acid remains common in rural setups due to lower upfront cost, but lithium\'s longer lifespan (10+ years vs 3-5) makes it the smarter investment for permanent homes.',
        },
      ],
    },
  },
  GH: {
    en: {
      heading: 'Ghana Solar Battery FAQ',
      items: [
        {
          question: 'Can a solar battery eliminate my ECG bill entirely?',
          answer:
            'A properly sized solar + battery system can reduce your ECG bill by 70-90%, but eliminating it entirely typically requires oversizing — which costs more upfront than remaining connected. At Ghana\'s electricity tariff of about $0.14/kWh (GHS 2.10+), a 5 kW solar + 10 kWh battery system in a typical Accra home saves about GHS 1,500-2,500/year. Complete elimination means adding 30-40% more battery capacity for rainy season backup, which extends payback from 6-7 years to 10+. Most homeowners are better off with a partial-offset system and keeping ECG as backup.',
        },
        {
          question: 'Does Ghana\'s dumsor problem justify buying a battery?',
          answer:
            'The "dumsor" (persistent load shedding) that plagued Ghana in 2014-2016 has improved, but periodic outages still occur — especially during maintenance cycles and low-water periods for Akosombo Dam. A 5 kWh battery provides 4-8 hours of backup for essentials during unplanned outages. Compared to a generator (GHS 200-400 per fill-up), the battery pays for itself in avoided fuel costs over 3-4 years of periodic outages. Crucially, the battery kicks in automatically within milliseconds — no need to run outside in the dark to start a generator.',
        },
        {
          question: 'What battery system works for compound houses in Ghana?',
          answer:
            'Compound houses — multiple families sharing one plot with separate meters — present a unique challenge. The most practical approach is one battery system per meter, sized to each unit\'s load (typically 2-4 kWh per unit). Shared systems require sub-metering and load management that adds complexity and cost. For landlords, installing a shared 10-15 kWh system with solar panels on the roof and sub-metering each unit can work as a value-add, but it requires clear billing arrangements. Per-unit systems are simpler and avoid disputes.',
        },
        {
          question: 'How does net metering work in Ghana?',
          answer:
            'Ghana\'s net metering programme, administered by the Energy Commission, allows residential solar systems up to 25 kW to connect to the grid and receive credit for excess generation. However, the credit rate is lower than the retail tariff (about 50-70% of what you pay), and the approval process through ECG or NEDCo can take 3-6 months. For this reason, battery storage makes strong financial sense: storing your excess daytime solar and using it at night avoids selling it back at a discount. Our calculator factors in this spread between import and export rates.',
        },
        {
          question: 'Are lithium batteries safe in Ghana\'s climate?',
          answer:
            'Yes — LiFePO4 batteries are thermally stable and rated for ambient temperatures up to 45-50°C. Accra\'s average highs of 31°C and occasional peaks of 35°C are well within spec. The key installation advice: place the battery indoors or in a shaded, ventilated area, not in direct sun or a locked metal container that traps heat. Good brands like Pylontech and GivEnergy include built-in thermal management. Budget lead-acid alternatives actually perform worse in heat — their lifespan degrades faster above 25°C.',
        },
      ],
    },
  },
  TZ: {
    en: {
      heading: 'Tanzania Solar Battery FAQ',
      items: [
        {
          question: 'Is off-grid solar + battery viable for a rural home in Tanzania?',
          answer:
            'Absolutely — for rural homes beyond the TANESCO grid, off-grid solar + battery is often the only practical option. Tanzania\'s solar resource is excellent at 5.1 kWh/m²/day. A 3-5 kW solar array with 10-15 kWh battery storage can power a rural homestead including lights, fridge, TV, phone charging, and a small water pump. The upfront cost ($3,000-6,000) is comparable to a TANESCO grid extension quote for remote areas. Ongoing costs are near zero. With no fuel to buy, no monthly bills, and lithium batteries lasting 10+ years, off-grid solar beats diesel generators and kerosene within 2-4 years.',
        },
        {
          question: 'What size battery do I need for a Dar es Salaam home?',
          answer:
            'Dar homes with grid connection typically want backup for occasional TANESCO outages, not full off-grid. A 5 kWh battery with 2-3 kW solar covers essentials through a typical 3-6 hour outage. For a larger family home with air conditioning (common in Dar\'s humidity), scale to 10 kWh and 5 kW solar to run one AC unit plus basics through an evening outage. At a tariff of about $0.09/kWh, bill savings alone won\'t justify the battery — the value is reliability. AC is the main power hog; sizing around it (or excluding it from backup) is the biggest decision.',
        },
        {
          question: 'Are there local solar battery installers I can trust in Tanzania?',
          answer:
            'The market has grown substantially. Established players include Ensol Tanzania, SunTransfer, and Chloride Exide (which distributes battery brands nationally). For lithium-specific systems, Pylontech and Victron-based setups are available through specialist installers in Dar, Arusha, and Mwanza. For rural off-grid, companies like Mobisol (now Engie) and d.light offer smaller PAYG systems. Always check for TBS (Tanzania Bureau of Standards) certification on imported batteries — uncertified imports sometimes have degraded cells. Expect installation costs to add 15-25% to equipment.',
        },
        {
          question: 'Can solar + battery power irrigation pumps on a farm?',
          answer:
            'Yes — this is one of Tanzania\'s fastest-growing solar applications. A 2-5 kW solar pump system with a small battery buffer (3-5 kWh) can run drip irrigation during daylight hours without the battery discharging deeply. The battery\'s role is to smooth out cloud passage and provide a small evening reserve, not run the pump all night. Dedicated solar irrigation systems (without batteries) are cheaper but stop working the moment a cloud passes. A small battery buffer gives you consistent water pressure all day. For borehole pumps and larger operations, scale proportionally — the economics are excellent compared to diesel pumps.',
        },
        {
          question: 'How does Zanzibar\'s electricity situation differ from mainland Tanzania?',
          answer:
            'Zanzibar relies on a submarine cable from the mainland grid, which means it faces both mainland outages and cable faults. Power reliability is worse on Unguja and Pemba than in Dar es Salaam. Additionally, Zanzibar\'s electricity tariff is slightly higher than the mainland rate. For Zanzibar homes and guesthouses, a 5-10 kWh battery system is a smart investment — it provides backup during both cable faults and mainland outages, and solar production is strong (4.8-5.0 kWh/m²/day on the islands). Many Zanzibar hotels already run on solar + battery; residential adoption is following.',
        },
      ],
    },
  },
  UG: {
    en: {
      heading: 'Uganda Solar Battery FAQ',
      items: [
        {
          question: 'How much battery do I need for a Kampala home?',
          answer:
            'Kampala has relatively stable grid power compared to most East African capitals — outages are typically short (1-3 hours) and infrequent. A 3-5 kWh battery covers essentials (lights, fridge, WiFi, TV, laptop) through a typical Umeme outage comfortably. At $0.17/kWh (UGX 630+), Uganda\'s tariff is above the regional average — solar self-consumption saves real money, not just backup. A 3 kW solar + 5 kWh battery system in a Kampala bungalow pays back in about 5-7 years from bill savings alone, with backup as a bonus.',
        },
        {
          question: 'Does Uganda have net metering?',
          answer:
            'Not yet — Uganda\'s Electricity Regulatory Authority (ERA) is exploring distributed generation frameworks, but as of 2026 there is no residential net metering programme. Umeme does not offer feed-in tariffs for household solar. This means any excess generation during the day is either stored in your battery or lost. Battery sizing is therefore critical: you want to capture exactly what you\'d otherwise export and use it in the evening, without over-investing in capacity you\'ll rarely cycle fully.',
        },
        {
          question: 'Can I use solar + battery for a rural school or clinic?',
          answer:
            'Yes — and Uganda has strong NGO and government programmes supporting this. A typical rural health centre needs 5-10 kWh of battery storage with 3-5 kW solar to run lights, vaccine fridge, basic lab equipment, and a small administrative office. Schools need less (2-5 kWh for lights and basic electronics) unless they run a computer lab. The key design principle for institutional systems is oversizing the battery slightly (20-30% buffer) because reliability is non-negotiable for health facilities. Our calculator can estimate institutional loads — just input the appliances and hours.',
        },
        {
          question: 'Why is my Umeme bill still high despite having solar panels?',
          answer:
            'Without a battery, solar panels only generate power during the day. If your household\'s main consumption is in the morning and evening (lights, cooking, entertainment), you\'re buying most of your electricity from Umeme at peak pricing. A battery bridges that gap: it stores daytime solar and discharges it during evening peak hours. A typical Kampala household without a battery self-consumes only 25-35% of their solar generation. With a 5 kWh battery, that jumps to 60-75%. The battery is what turns solar panels into actual bill reduction.',
        },
        {
          question: 'What\'s the best battery setup for a Ugandan farm?',
          answer:
            'For farms with grid connection but unreliable power: 10-15 kWh battery with 5-8 kW solar. This covers a farmhouse, basic processing equipment (e.g., small maize mill), lighting for outbuildings, and a water pump. Uganda\'s solar resource (4.9 kWh/m²/day) is strong year-round, with two rainy seasons (March-May, September-November) that reduce generation by 20-30%. Size your solar array for the rainy season average, not the dry season maximum — you\'ll have surplus during dry months, but you won\'t run short when you need it most.',
        },
      ],
    },
  },
  ZM: {
    en: {
      heading: 'Zambia Solar Battery FAQ',
      items: [
        {
          question: 'How do I size a solar battery for Zambia\'s load shedding schedule?',
          answer:
            'ZESCO\'s load shedding has intensified since 2024 due to low water levels at Kariba Dam (Zambia\'s primary hydro source). Typical schedules now involve 8-12 hours of daily outage in Lusaka and the Copperbelt. A 5-10 kWh battery with 3-5 kW solar is the practical range for most homes. A 5 kWh system covers essentials through one shedding block (4-6 hours). For full-day coverage across two blocks, 10-15 kWh is needed. Our calculator uses your actual appliance list and ZESCO outage duration to size precisely.',
        },
        {
          question: 'Is it worth investing in solar + battery when Zambia\'s grid tariff is so low?',
          answer:
            'Zambia\'s grid tariff is only $0.023/kWh (ZMW 0.55+) — one of the lowest in Africa — so bill savings are negligible. The value is entirely in reliability. A business or household that loses ZMW 500-2,000/day in productivity, spoiled goods, or generator fuel during load shedding will recover a ZMW 25,000-50,000 solar + battery investment in months, not years. Think of it as an insurance policy with a fixed upfront premium and zero ongoing cost, vs a generator which is a lower upfront cost but ongoing fuel drain.',
        },
        {
          question: 'What battery types survive Zambia\'s hot, dry climate?',
          answer:
            'Zambia\'s Copperbelt and Lusaka see temperatures of 30-35°C with dry-season lows of 5-10°C — a wider swing than most African markets. LiFePO4 lithium batteries handle this range well: 0-45°C operating range with minimal degradation. They\'re also sealed and maintenance-free (no topping up acid), which matters in dusty dry-season conditions. Lead-acid batteries suffer in the heat: every 8°C above 25°C roughly halves their lifespan. If you\'re in the Luangwa or Zambezi valley where 40°C+ happens, install your battery indoors with ventilation.',
        },
        {
          question: 'Can I export solar to the grid in Zambia?',
          answer:
            'Zambia\'s net metering programme is nascent — ZESCO has a net metering framework on paper but implementation covers a tiny fraction of customers, mostly commercial and industrial. Residential net metering is not widely available. The Energy Regulation Board is working on expanding this, but for now, plan your system as if net metering doesn\'t exist. Size your battery to capture all your excess generation, because exporting to ZESCO is unlikely to be an option in the near term.',
        },
        {
          question: 'Solar + battery for mining town homes — any special considerations?',
          answer:
            'Homes in Kitwe, Ndola, and Chingola face additional challenges: grid voltage fluctuations from mine operations, dust from mining activity, and sometimes volatile voltage spikes. Use an inverter with good surge protection and a wide input voltage range (90-280V). Consider IP65-rated enclosures for dust protection — fine copper-mining dust is abrasive and conductive. Many mining employees receive electricity allowances that offset grid costs, so the primary motivation for solar + battery is load shedding backup, not financial savings. Size accordingly: reliability over ROI.',
        },
      ],
    },
  },
  PH: {
    en: {
      heading: 'Philippines Solar Battery FAQ',
      items: [
        {
          question: 'Is a 10 kWh battery enough for a Manila home during a typhoon blackout?',
          answer:
            'Typhoon-related blackouts in Metro Manila and Luzon can last 12-72 hours. A 10 kWh battery running essentials — fridge, a few LED lights, two electric fans, phone charging, and a modem — lasts about 12-18 hours on a single charge. If paired with even minimal solar (2-3 kW panels), daytime recharging extends this indefinitely. For a 48-hour typhoon scenario with cloudy skies (reduced solar), a 15-20 kWh battery gives real peace of mind. The good news: Philippines solar irradiance at 4.5 kWh/m²/day means even overcast days still generate something.',
        },
        {
          question: 'How much can I save on my Meralco bill with solar + battery?',
          answer:
            'Meralco\'s rate is about $0.20/kWh (PHP 11+), one of the highest in Southeast Asia. A typical Metro Manila household consuming 300 kWh/month pays around PHP 3,300/month. A 3-5 kW solar system without battery can cut that by 40-50% through daytime self-consumption. Adding a 5-10 kWh battery pushes savings to 60-80%, because you shift your evening consumption (aircon, TV, lights) from paid Meralco power to stored solar. Net savings of PHP 2,000-2,600/month mean a PHP 150,000-300,000 system pays back in 5-8 years — and those years shrink as Meralco rates continue to rise.',
        },
        {
          question: 'Does the Philippines\' net metering programme actually work for homeowners?',
          answer:
            'The Net Metering programme (Republic Act 9511, implemented by ERC) allows residential systems up to 100 kW to export excess solar to the grid. Meralco credits you at their blended generation rate — currently about PHP 5-6/kWh, which is roughly half of what you pay for import (PHP 11+/kWh). So storing excess in a battery and using it yourself at night is roughly 2× more valuable than exporting to Meralco. Net metering is a nice fallback for occasional surplus, but it\'s not a replacement for battery storage in the Philippines pricing environment.',
        },
        {
          question: 'Can I install solar + battery in a condo in BGC or Makati?',
          answer:
            'It\'s possible but constrained. Most condos limit you to balcony-mounted panels (200-500W max) and a small battery (1-2 kWh) due to space and body corporate rules. A compact 1-2 kWh portable power station (like an EcoFlow or Bluetti) that plugs into a wall outlet works without permanent installation and can run a laptop, modem, fan, and phone for 4-8 hours. It won\'t run your aircon but covers internet and work essentials during brownouts. For condo dwellers, the portable power station route is more practical than a permanent rooftop system.',
        },
        {
          question: 'Solar + battery vs generator — which is cheaper for a Philippine home?',
          answer:
            'A decent 3-5 kW generator costs PHP 30,000-80,000 plus PHP 200-400/hour in fuel. A 5 kWh solar + battery system costs PHP 150,000-300,000 upfront with zero fuel cost. For a home that experiences 50-100 hours of outage per year (typhoon season), the generator costs PHP 10,000-40,000/year in fuel. The solar + battery pays back the price difference vs a generator in 3-5 years — then it\'s free power for the remaining 7-10 years of battery life. Plus: no noise, no exhaust fumes, no storing flammable fuel, and the battery works automatically when the grid drops.',
        },
      ],
    },
  },
  VN: {
    en: {
      heading: 'Vietnam Solar Battery FAQ',
      items: [
        {
          question: 'Do I need a battery if Vietnam has net metering?',
          answer:
            'Vietnam\'s FIT2 (Feed-in Tariff 2) for rooftop solar expired in 2020, and the replacement DPPA (Direct Power Purchase Agreement) framework is still being rolled out. Current net metering is effectively on hold for new residential installations in many provinces — EVN is not actively approving new grid-tie connections in some areas. A battery makes your solar system independent of policy uncertainty: you generate and store your own power whether or not EVN approves your export. At Vietnam\'s relatively low grid tariff of $0.08/kWh, the ROI from bill savings alone is slower (7-10 years), but energy independence has its own value.',
        },
        {
          question: 'What size battery works for a Vietnamese townhouse (nhà ống)?',
          answer:
            'Vietnamese tube houses typically have limited roof space — 20-40 m², enough for 2-4 kW of solar panels. A matching 5 kWh battery fits well: it captures daytime generation from a 3 kW array and covers evening loads (lights, fans, TV, fridge, 1-2 hours of air conditioning) for a typical family of 4-5 in Hanoi or HCMC. The slim form factor of modern lithium batteries (wall-mounted, about the size of a water heater) works well for the vertical architecture of nhà ống.',
        },
        {
          question: 'How does Vietnam\'s monsoon season affect solar battery sizing?',
          answer:
            'Northern Vietnam (Hanoi) has a distinct winter monsoon with heavy overcast from December-March, reducing solar output by 30-40% vs the summer average of 4.1 kWh/m²/day. Southern Vietnam (HCMC) has a shorter rainy season (May-November) with afternoon thunderstorms rather than all-day cloud — generation drops 15-20%. For Hanoi, oversize your solar array by 20-30% to compensate for winter. For HCMC, standard sizing works; the battery handles the evening gap when afternoon rain curtails late-day generation. Our calculator includes seasonal adjustment.',
        },
        {
          question: 'Are there government incentives for solar batteries in Vietnam?',
          answer:
            'Vietnam does not currently offer direct subsidies or tax credits for residential battery storage. The focus has been on utility-scale solar and wind. However, Vietnam\'s Power Development Plan 8 (PDP8) explicitly encourages rooftop solar for self-consumption, and the MOIT is developing new net metering regulations expected by 2026-2027 that may include battery storage incentives. For now, the incentive is implicit: avoid future EVN tariff increases (which average 3-8% annually) by locking in your own generation.',
        },
        {
          question: 'Can I run my air conditioner from a solar battery overnight?',
          answer:
            'Yes, but you need realistic sizing. A typical 1.5 HP (12,000 BTU) inverter AC draws 0.8-1.2 kW when running. For 8 hours of overnight cooling, that\'s 6.5-10 kWh just for the AC — which means a 10-15 kWh battery if you want to run the AC plus basics (fridge, lights). The good news: inverter ACs cycle down to 200-400W once the room is cool, so actual consumption is often 30-40% less than the nameplate rating. Our calculator lets you select your specific AC model wattage for an accurate estimate.',
        },
      ],
    },
  },
  ID: {
    en: {
      heading: 'Indonesia Solar Battery FAQ',
      items: [
        {
          question: 'Does solar + battery make sense with Indonesia\'s subsidized electricity?',
          answer:
            'For households on the 900 VA and 1,300 VA subsidized tariff (about $0.07-0.10/kWh), solar + battery has a long payback — 10+ years — based purely on bill savings. For the 2,200 VA and above non-subsidized tariff ($0.10-0.12/kWh), payback drops to 7-9 years. However, for homes in outer islands or areas with frequent PLN outages (parts of Sumatra, Kalimantan, Sulawesi, and eastern Indonesia), battery backup value transforms the calculation — reliability becomes the primary driver, bill savings secondary. Our calculator lets you toggle between pure-ROI and reliability-priority sizing.',
        },
        {
          question: 'How do I size a battery for an Indonesian home with frequent padam (blackouts)?',
          answer:
            'In areas with 2-6 hours of daily PLN outage, a 5-10 kWh battery with 2-4 kW solar provides solid coverage. During a 4-hour padam, a 5 kWh battery runs lights, two fans, a fridge, TV, and WiFi comfortably. If you add a 1 HP air conditioner to the backup load, you\'ll want 10 kWh minimum. Indonesia\'s solar resource (4.3 kWh/m²/day) is moderate — cloud cover reduces output — so the battery picks up the slack during overcast days.',
        },
        {
          question: 'What battery type handles Indonesia\'s humidity and heat?',
          answer:
            'Indonesia\'s year-round 28-33°C and 70-85% humidity demands LiFePO4 batteries — they\'re sealed (no moisture ingress), thermally stable (no thermal runaway at ambient temps), and rated for 0-45°C operating range. Install the battery in a ventilated carport or utility room, not an enclosed attic where temperatures can hit 50°C. Avoid lead-acid in coastal areas (Jakarta, Surabaya, Semarang) — salt air corrosion kills terminals and shortens life dramatically. If you\'re near the coast, your installer should use marine-grade terminals and inspect connections annually.',
        },
        {
          question: 'Can I go off-grid in a remote Indonesian island with solar + battery?',
          answer:
            'Yes — and many already do. A 5 kW solar array with 15-20 kWh battery storage provides full off-grid capability for a family home in places like Lombok, Sumba, or the Mentawai Islands where PLN grid extension costs are prohibitive. Compared to running a diesel generator 24/7, solar + battery pays back in 2-3 years on avoided fuel alone. The key design decision: oversize the solar array by 30-40% for rainy season (November-March) when generation drops. A backup generator for the wettest weeks is still prudent and cheaper than tripling the battery bank.',
        },
        {
          question: 'What\'s the prognosis for Indonesia\'s net metering and solar policy?',
          answer:
            'PLN has been cautious about residential solar. The previous 1:1 net metering policy was revised downward, and current export credit is limited. The government\'s 2025-2030 energy plan targets 6.5 GW of rooftop solar, but implementation lags. For homeowners, the most realistic strategy is self-consumption with battery: generate, store, use. Don\'t count on PLN export revenue in your ROI calculations. If policy improves (a new net metering regulation is under discussion), your battery system still works — you\'ll just export less and self-consume more.',
        },
      ],
    },
  },
  PK: {
    en: {
      heading: 'Pakistan Solar Battery FAQ',
      items: [
        {
          question: 'How much battery do I need for 8-12 hours of load shedding in Pakistan?',
          answer:
            'For the severe load shedding common in Karachi, Lahore, and Peshawar (8-12 hours daily), a 10-15 kWh battery with 5-8 kW solar is the practical minimum for a family home. A 10 kWh lithium battery runs lights, 3-4 fans, a fridge, TV, and WiFi through an 8-hour outage block. If you add 1-2 inverter ACs to the backup load, you\'ll want 15-20 kWh. Tubular lead-acid batteries (the traditional Pakistani choice) need to be roughly 2× the rated capacity because you can only discharge them to 50% without damage — so a "200 Ah 48V" lead-acid bank delivers about 4.8 kWh usable, not 9.6 kWh.',
        },
        {
          question: 'Solar + battery vs UPS + generator — what\'s the right setup for a Pakistani home?',
          answer:
            'The classic Pakistani setup is a UPS (2-4 lead-acid batteries) for short outages plus a petrol generator for long ones. This costs PKR 100,000-200,000 upfront plus PKR 10,000-30,000/month in generator fuel. A lithium solar + battery system (5 kW solar + 10 kWh battery) costs PKR 800,000-1,500,000 upfront but eliminates generator fuel and the grid electricity you\'d otherwise buy. Total monthly savings are PKR 15,000-40,000. Payback: 2-4 years. After that, you\'re running on free solar for another 8-10 years of battery life. The hybrid approach — solar + battery as primary, generator only for the longest outages — is the sweet spot.',
        },
        {
          question: 'Is net metering in Pakistan worth the paperwork?',
          answer:
            'Pakistan\'s net metering programme (run by NEPRA via DISCOs like K-Electric, LESCO, IESCO) offers a genuine financial benefit: exported units are credited at the peak-hour rate. However, there\'s a catch — most residential connections are capped at 15 kW system size, and the approval process takes 3-6 months with multiple site visits. Imported solar equipment attracts up to 30% duties unless sourced through specific SRO exemptions. The programme is worthwhile but requires patience. A battery helps in the interim: install it now, add net metering later.',
        },
        {
          question: 'Why are Pakistan\'s solar imports booming despite duties?',
          answer:
            'Pakistan imported over $2 billion in solar panels in 2024-2025, making it one of the world\'s fastest-growing solar markets. The combination of high solar irradiance (5.0 kWh/m²/day — excellent), crippling load shedding, and rising grid tariffs has created an economic tipping point. Even with 20-30% import duties, the price of solar panels (mostly Chinese, Tier-1 brands like Longi and Jinko) has fallen enough that home systems are cheaper than running a generator. Lithium batteries (mostly from CATL, BYD, and Pylontech) are following the same price curve.',
        },
        {
          question: 'What\'s the best battery chemistry for Karachi vs Islamabad?',
          answer:
            'Karachi (coastal, hot, humid): LiFePO4 lithium is the clear winner — sealed against humidity, no maintenance, thermally stable at 35-40°C. Avoid vented lead-acid near the sea: salt air corrodes terminals. Islamabad/Lahore (inland, drier, wider temperature swings): Both lithium and quality tubular lead-acid work, but lithium\'s 10+ year lifespan vs lead-acid\'s 3-5 years still makes it the better long-term choice. Northern areas (Murree, Abbottabad — sub-zero winters): Lithium batteries need a BMS with low-temperature charging protection. Lead-acid is more forgiving in cold but requires derating. For most of Pakistan\'s climate, LiFePO4 lithium with a good BMS is the safest bet.',
        },
      ],
    },
  },
  BD: {
    en: {
      heading: 'Bangladesh Solar Battery FAQ',
      items: [
        {
          question: 'Can solar + battery replace my IPS (Instant Power Supply) in Bangladesh?',
          answer:
            'The IPS — a lead-acid battery bank charged from the grid — is the standard backup in Bangladeshi homes. It works but has major drawbacks: it charges from expensive grid power, the lead-acid batteries need replacement every 2-3 years, and it provides no savings, only backup. A solar + lithium battery system replaces the IPS and adds generation: a 3-5 kW solar array charges the battery during the day (free), and the battery runs your evening loads plus provides backup during outages. A 5 kWh lithium system costs about 3-4× a new IPS upfront but eliminates the cycle of battery replacement and reduces grid consumption by 60-80%.',
        },
        {
          question: 'What size system do I need for a Dhaka apartment?',
          answer:
            'Dhaka apartments face 2-6 hours of daily load shedding plus voltage fluctuations. A 3-5 kWh battery with 1-2 kW of balcony or rooftop solar covers 3-4 fans, LED lights, a fridge, TV, and WiFi through a typical outage. For apartments without roof access, a grid-charged 5 kWh lithium battery (charged during grid-on hours) provides backup-only functionality — no savings, but far better than lead-acid IPS. If you have roof access (top-floor or cooperative building), adding even 1-2 kW of solar transforms the economics.',
        },
        {
          question: 'Does Bangladesh have net metering for residential solar?',
          answer:
            'Yes — Bangladesh introduced net metering guidelines in 2018, and all six distribution companies (DESCO, DPDC, BPDB, etc.) are required to offer it for systems up to 10 MW. Residential systems can net-meter with a bi-directional meter installed by the DISCO. The credit rate is roughly equivalent to the retail tariff for the billing period, which is better than many countries. However, the process requires NOC from the DISCO and can take 2-4 months. The net metering option combined with a battery gives you the best of both worlds: export daytime surplus, store what you need for evening.',
        },
        {
          question: 'Can solar + battery help with low voltage (not just outages) in Bangladesh?',
          answer:
            'Yes — and this is an underappreciated benefit. Many Bangladeshi neighborhoods suffer from chronic low voltage (160-180V instead of 220V), which damages appliances and reduces efficiency. A good hybrid inverter with battery can operate in "grid support" mode: it supplements the weak grid with battery power to maintain a stable 220V output to your home, without fully disconnecting. This protects your fridge compressor, AC, and electronics from voltage stress while still drawing whatever power the grid can provide. Standard IPS systems can\'t do this — they\'re either on-grid or off-grid.',
        },
        {
          question: 'How do I protect my battery system during Bangladesh\'s monsoon flooding?',
          answer:
            'For ground-floor installations in flood-prone areas (common in Dhaka, Sylhet, and coastal districts), mount the battery and inverter at least 1.5 meters above floor level — treat it like an electrical panel in a flood zone. Use IP65-rated enclosures if the installation area can get splash or humidity. Lithium batteries are sealed (no acid to leak), which is a safety advantage during flooding vs vented lead-acid. Consider a wall-mounted battery rather than a floor-standing unit. After any flood event, have an electrician inspect connections before re-energizing.',
        },
      ],
    },
  },
  LK: {
    en: {
      heading: 'Sri Lanka Solar Battery FAQ',
      items: [
        {
          question: 'What size battery do I need for Sri Lanka\'s power cuts?',
          answer:
            'Sri Lanka\'s grid has stabilized since the 2022 crisis, but scheduled and unscheduled outages still occur (typically 1-4 hours). A 5 kWh battery with 2-3 kW solar comfortably covers a Colombo or Kandy home\'s essentials — fridge, 2-3 fans, LED lights, TV, and WiFi — through a typical outage. For homes running air conditioning during outages, 10 kWh minimum is recommended. At a tariff of about $0.12/kWh (LKR 36+ after the 2023 tariff reform), solar + battery saves an additional LKR 5,000-10,000/month in avoided grid consumption.',
        },
        {
          question: 'How does Sri Lanka\'s solar net metering/accounting work with a battery?',
          answer:
            'Sri Lanka has three schemes: Net Metering (export credited at retail rate — best for older installations), Net Accounting (export credited at a lower rate, roughly 60-70% of retail — for newer installations), and Net Plus (a feed-in tariff for systems above 42 kW). Most new residential installations fall under Net Accounting. With a battery, the optimal strategy is: self-consume everything you can (100% retail value), export only what you can\'t store or use. Our calculator factors in the spread between LKR import tariff and export credit so you can size the battery to minimize discounted exports.',
        },
        {
          question: 'Is it worth going fully off-grid in Sri Lanka?',
          answer:
            'For homes in areas with frequent outages or very high grid extension costs (hill country tea estates, remote coastal areas), yes. A 5 kW solar array with 15-20 kWh battery is sufficient for full off-grid living. For grid-connected homes in Colombo or Kandy, staying grid-tied with a battery backup system is more cost-effective — the grid serves as your backup generator during extended rain. Sri Lanka\'s two monsoon seasons (May-September southwest, November-February northeast) mean you\'ll have weeks of reduced solar output. A grid connection for those periods costs far less than doubling your battery bank.',
        },
        {
          question: 'Can rooftop solar + battery run a tea factory small office or bungalow?',
          answer:
            'Up-country estate bungalows and small offices often face high grid extension costs and unreliable power. A 5-10 kW solar array with 10-20 kWh battery storage is ideal — high irradiance in the hill country (Nuwara Eliya, Badulla) at 4.5-5.0 kWh/m²/day, cool temperatures that improve panel efficiency, and no air conditioning load (the cool climate cancels the biggest power consumer). The main loads are water heating, lighting, and basic electronics — all easily served. Payback vs diesel generator: 3-5 years.',
        },
        {
          question: 'What battery brands are available and supported in Sri Lanka?',
          answer:
            'The Sri Lankan market has good availability of Tier-1 lithium batteries: Pylontech, GivEnergy, and Huawei LUNA are distributed through Colombo-based solar companies (JLanka, Abans, and specialty installers). Local support matters — choose a brand with a Sri Lankan distributor who holds spare parts and honours warranty locally. Lead-acid (Exide, Lucas) is still common for budget installations but the lifecycle cost is 2-3× higher than lithium over 10 years. Import duties on lithium batteries have decreased since 2023, narrowing the upfront price gap.',
        },
      ],
    },
  },
  US: {
    en: {
      heading: 'US Solar Battery FAQ',
      items: [
        {
          question: 'Do I need one Powerwall or two for whole-home backup?',
          answer:
            'A single Tesla Powerwall 3 provides 13.5 kWh — enough to run essentials (fridge, lights, WiFi, a few outlets, and a gas furnace blower) for about 12-18 hours. For whole-home backup including central AC, you\'ll typically want two Powerwalls (27 kWh) or equivalent. A 4-ton central AC alone draws 4-5 kW and would drain a single Powerwall in under 3 hours. Our calculator asks for your specific appliances and runtime so you don\'t guess wrong — overbuying costs thousands; underbuying leaves you dark when it matters.',
        },
        {
          question: 'How does the 30% federal tax credit work for battery storage?',
          answer:
            'Standalone battery storage (3 kWh capacity minimum) qualifies for the 30% federal Investment Tax Credit under the Inflation Reduction Act, with or without solar panels. The credit applies through 2032, steps down to 26% in 2033, 22% in 2034, and expires for residential in 2035. There\'s no cap on the credit amount. Example: a $15,000 battery system gets you a $4,500 credit against your federal tax liability. If you can\'t use the full credit in one year, you can carry it forward. It\'s a dollar-for-dollar reduction, not a deduction.',
        },
        {
          question: 'California NEM 3.0 — is a battery basically mandatory now?',
          answer:
            'Under NEM 3.0 (effective April 2023), California\'s three major utilities credit solar exports at roughly $0.04-0.08/kWh (the avoided cost rate), while import rates are $0.30-0.50+/kWh. Without a battery, you export at cheap rates and buy back at expensive rates — solar-only payback stretches to 9-12 years. With a battery, you store your excess and use it when rates are high, recovering payback to 5-7 years. A battery is no longer optional in California — it\'s the difference between a good solar investment and a mediocre one.',
        },
        {
          question: 'Which states have the best battery rebates beyond the federal ITC?',
          answer:
            'California\'s SGIP (Self-Generation Incentive Program) offers $150-1,000/kWh depending on equity criteria and fire-risk zone. Massachusetts ConnectedSolutions pays $200-400/kWh for allowing your utility to draw from your battery during peak events (4-8 times/year). New York\'s NY-Sun programme and battery storage incentive add up to $5,000. Vermont, Oregon, Hawaii, and Connecticut also have meaningful state-level incentives. Our calculator includes state-level estimates — but check your specific utility\'s current programme, as funding caps and waitlists change frequently.',
        },
        {
          question: 'Grid-tied vs off-grid — can I legally disconnect from my utility in the US?',
          answer:
            'In most US jurisdictions, disconnecting from the grid is either illegal for occupied dwellings or financially impractical. Building codes typically require a grid connection for a certificate of occupancy. Instead, most homeowners install a grid-tied system with battery backup — you stay connected but can island your home during outages. An off-grid exception: remote cabins and rural properties where grid extension costs exceed $30,000-50,000. In those cases, solar + large battery bank (20-40 kWh) + backup generator is the standard setup.',
        },
      ],
    },
  },
  CA: {
    en: {
      heading: 'Canada Solar Battery FAQ',
      items: [
        {
          question: 'Can solar batteries work in Canadian winters?',
          answer:
            'Yes, but winter performance drops significantly — not because of cold (LiFePO4 batteries actually prefer cool temperatures for longevity) but because of reduced solar generation. In Toronto, December generates about 25-30% of what July generates. In Edmonton or Calgary (higher latitude, but more winter sun hours), it\'s about 35-40%. The battery itself works fine as long as it\'s installed in a heated or insulated space (garage, basement) — below 0°C, lithium batteries cannot charge without a self-heating BMS. Choose batteries with low-temperature charging protection if installing in an unheated space.',
        },
        {
          question: 'What size solar + battery system do I need for a Toronto home?',
          answer:
            'A typical Toronto detached home using 800-1,000 kWh/month needs 8-12 kW of solar panels for a meaningful offset. For battery: 10-13.5 kWh covers essentials (fridge, gas furnace blower, lights, WiFi, sump pump) for 12-24 hours during a winter outage. Canada\'s average solar irradiance (3.5 kWh/m²/day) is lower than US Sunbelt but workable — Toronto, Ottawa, and Montreal are comparable to Germany, the world leader in residential solar per capita. Southern Alberta and Saskatchewan get 4.5-5.0 kWh/m²/day — competitive with California.',
        },
        {
          question: 'Are there Canadian grants or rebates for home battery storage?',
          answer:
            'The Canada Greener Homes Loan offers up to $40,000 interest-free for 10 years, though the Greener Homes Grant\'s residential solar and battery components vary by eligibility. Provincial programmes are the bigger deal: BC Hydro\'s net metering is simple and fair (1:1 credit, no system size cap for residential). Ontario\'s net metering programme is also 1:1 but caps at 10 kW AC. Quebec\'s Rate D with net metering offers bill credits that carry forward 24 months. The Greener Homes programme also covers energy audits ($600 value) that can identify insulation and heat pump savings alongside solar.',
        },
        {
          question: 'Does Canada\'s net metering work differently in each province?',
          answer:
            'Yes — there\'s no single federal standard. Ontario: 1:1 net metering, 10 kW AC cap, credits carry forward 12 months. British Columbia: 1:1 net metering, no residential cap, excellent programme. Alberta: utility-by-utility basis, some offer net billing (lower export rate), check your retailer. Québec: net metering with rolling 24-month credits. Saskatchewan and Manitoba: net metering with varying caps. Nova Scotia: Net Metering programme with 1:1 credit up to 27 kW AC. In all provinces with 1:1 net metering, a battery delivers less bill-saving ROI — the value is backup, not arbitrage. Our calculator includes province selection.',
        },
        {
          question: 'What battery setup handles a multi-day winter blackout?',
          answer:
            'Canadian winter storms (ice storms in Ontario/Québec, blizzards on the Prairies) can knock out power for 24-72 hours. A single 13.5 kWh battery runs a gas furnace blower (0.6 kW running), fridge, lights, and WiFi for about 15-20 hours. For 72-hour coverage, you have two strategies: (A) three batteries (40+ kWh) — expensive; (B) one battery + a backup generator. Strategy B is far more cost-effective for the 1-2 multi-day outages most Canadian homes face per year. The battery handles short outages silently; the generator is the insurance policy for the once-a-year ice storm. A hybrid inverter that accepts a generator input is the right choice.',
        },
      ],
    },
  },
  MX: {
    en: {
      heading: 'Mexico Solar Battery FAQ',
      items: [
        {
          question: 'How much can I save on my CFE bill with solar + battery?',
          answer:
            'CFE\'s DAC (Domestic High Consumption) tariff kicks in above 500 kWh/month — and DAC rates are roughly 3× the subsidized rate. A typical Mexican household that crosses into DAC territory pays MXN 2,000-4,000/month extra. A 3-5 kW solar system with a 5-10 kWh battery can keep you below the 500 kWh threshold by offsetting daytime consumption and shifting evening loads to stored solar. Savings of MXN 1,500-3,000/month mean a MXN 80,000-150,000 system pays back in 3-5 years. The battery specifically helps by reducing your measured grid consumption in the evening — the hours that push you into DAC.',
        },
        {
          question: 'Does Mexico have net metering (medición neta)?',
          answer:
            'Yes — CFE\'s net metering programme (Contrato de Interconexión) is well-established and relatively straightforward. Residential systems up to 10 kW are eligible. The scheme is net billing (not true net metering): your export to the grid offsets your consumption 1:1 within each billing period, but excess credits don\'t carry forward or get paid out. This makes a battery valuable — any surplus you\'d lose at the end of the billing period is better stored in your battery for next month\'s evening use. The interconnection application through CFE typically takes 4-8 weeks.',
        },
        {
          question: 'Can a solar battery run my mini-split AC during a Mexican summer?',
          answer:
            'A 1.5-ton mini-split (18,000 BTU) inverter AC typically draws 1.2-1.5 kW when running steady-state. A 10 kWh battery can run one mini-split for 6-8 hours, or two for 3-4 hours. For a home in Mérida, Monterrey, or Hermosillo where summer temperatures hit 40°C+ and AC runs constantly, size the battery to cover at least your evening AC — that\'s when CFE rates are the same but solar production has stopped. A 15-20 kWh battery paired with 6-8 kW solar is the comfortable zone for a 3-bedroom home with 2-3 mini-splits.',
        },
        {
          question: 'What\'s the solar resource like across Mexico\'s climate zones?',
          answer:
            'Mexico has world-class solar. Northern states (Sonora, Chihuahua, Baja California) get 5.5-6.5 kWh/m²/day — comparable to the Sahara. Central Mexico (CDMX, Guadalajara, Bajío) gets 4.8-5.5 kWh/m²/day, slightly reduced by altitude clouds but still excellent. The Yucatán Peninsula (Mérida, Cancún) gets 4.5-5.0 kWh/m²/day with some afternoon cloud. Only the Gulf coast (Veracruz, Tabasco) drops to 3.8-4.2 kWh/m²/day due to humidity and cloud cover. Panel sizing should be adjusted for your region — the same 5 kW array generates 30-40% more in Hermosillo than in Veracruz. Our calculator uses regional irradiance data.',
        },
        {
          question: 'Are lithium batteries easily available and supported in Mexico?',
          answer:
            'The market has matured rapidly. Pylontech, Huawei, and BYD lithium batteries are available through distributors in CDMX, Guadalajara, and Monterrey. Victron and Sol-Ark-based systems are popular among professional installers for their reliability and local support. Prices are competitive with US pricing, though import costs add 10-15% for some brands. The install base is growing fastest in Yucatán (high AC loads + high irradiance + CFE outages during hurricane season) and Baja California (high summer tariffs, unreliable grid in remote areas). Warranty support: choose brands with a Mexican distributor — cross-border warranty claims are impractical.',
        },
      ],
    },
  },
  BR: {
    en: {
      heading: 'Brazil Solar Battery FAQ',
      items: [
        {
          question: 'Is solar + battery worth it in Brazil with the new net metering rules?',
          answer:
            'Brazil\'s Marco Legal da GD (Law 14,300/2022) changed the economics: new solar installations now pay a grid usage fee (Fio B) on exported energy, phased in gradually. The fee reduces the net metering credit by about 28% — meaning you get ~72% of the retail tariff for exports, not 100%. A battery recaptures that 28% difference: instead of exporting at a discount and buying back at full price, you store your excess and use it yourself at 100% value. For systems installed after January 2023, a battery significantly improves ROI. The tariff in Brazil is about $0.16/kWh (BRL 0.80+), with annual increases of 5-15% depending on the distributor — so the battery\'s value grows over time.',
        },
        {
          question: 'What size battery do I need for a São Paulo apartment vs a rural fazenda?',
          answer:
            'Apartamento (São Paulo, Rio, BH): A 3-5 kWh battery with 1-2 kW of balcony or rooftop solar. The goal is bill reduction, not backup — urban grid is reliable. Evening self-consumption from a small battery can cut your bill 30-50%. Fazenda (rural property): 10-20 kWh battery with 5-10 kW solar. Rural outages are longer (4-24 hours), and many fazendas have three-phase equipment (pumps, processing machinery) needing stable power. Off-grid viability is real for remote rural properties where the concessionária\'s grid extension quote exceeds BRL 30,000-50,000.',
        },
        {
          question: 'How does net metering work with a battery in Brazil?',
          answer:
            'Brazil\'s sistema de compensação (compensation system) credits your excess generation at the retail tariff minus Fio B (the wire charge). Credits roll forward for 60 months. With a battery: you generate during the day → charge battery first → export remaining surplus → at night, discharge battery → any shortfall comes from the grid. The battery minimizes both the "export at discount" and the "import at full price" transactions. Our calculator includes your state\'s specific Fio B rate for accurate payback estimates.',
        },
        {
          question: 'Can solar + battery protect against Brazil\'s bandeira tarifária surcharges?',
          answer:
            'Yes — and this is a unique Brazilian advantage. When hydro reservoirs are low (common during droughts affecting the Southeast/Center-West region), ANEEL activates bandeira amarela (yellow, +BRL 0.018/kWh) or bandeira vermelha (red, +BRL 0.04-0.09/kWh) surcharges. During the 2021 water crisis, some consumers saw bills jump 20-30% from bandeira vermelha alone. A solar + battery system shields you from these surcharges: you\'re buying less from the grid, so the surcharge hits a smaller portion of your consumption. Over the battery\'s 10-year life, avoiding 3-4 bandeira vermelha events adds BRL 1,500-3,000 in additional savings.',
        },
        {
          question: 'What battery brands have support in Brazil?',
          answer:
            'BYD (which manufactures batteries in São Paulo state) has a strong local presence with warranty support and competitive pricing. Moura (Brazil\'s largest battery manufacturer) has entered the lithium solar storage market with locally made LiFePO4 batteries — a significant advantage for warranty and service. Pylontech and GoodWe batteries are also available through solar distributors. Lead-acid (Moura, Heliar) dominates the budget segment but the lifecycle cost doesn\'t hold up against lithium for daily cycling. The Brazilian market is unusual in having a strong domestic lithium battery manufacturer (BYD + Moura), which keeps prices lower than in most Latin American countries.',
        },
      ],
    },
  },
  CO: {
    en: {
      heading: 'Colombia Solar Battery FAQ',
      items: [
        {
          question: 'Why would I need a battery in Colombia if the grid is reliable?',
          answer:
            'Colombia\'s grid is indeed more reliable than most Latin American countries (thanks to hydro dominance), but two factors make batteries relevant. First, tariffs are high — $0.22/kWh (COP 930+) is among the most expensive in Latin America, making self-consumption savings substantial. Second, El Niño droughts periodically threaten hydro generation (as in 2024), causing tariff spikes and occasional rationing warnings. A 5 kWh battery with 3 kW solar on a Bogotá or Medellín home saves COP 80,000-150,000/month and provides insurance against the next El Niño event.',
        },
        {
          question: 'What size system fits a typical Colombian home (estrato 4-5)?',
          answer:
            'Estrato 4-5 households in Bogotá, Medellín, and Cali typically consume 250-500 kWh/month and are most affected by high tariffs (estratos 4-6 pay full cost; estratos 1-3 are subsidized). A 3-5 kW solar system with 5-10 kWh battery offsets 60-80% of consumption for a 350 kWh/month household. The battery is critical: without it, you\'d export daytime surplus to the grid (and not all Colombian distributors offer competitive export credit). Our calculator selects the right size based on your estrato and monthly bill.',
        },
        {
          question: 'How does Colombia\'s net metering/autogeneración work?',
          answer:
            'Colombia\'s Resolución CREG 174 of 2021 and Ley 1715 of 2014 regulate small-scale distributed generation (Autogeneración a Pequeña Escala, AGPE). Systems up to 5 MW are eligible. The compensation is net billing: exported energy is credited at the distributor\'s commercial price, which is lower than the retail tariff (includes generation cost only, not transmission/distribution). This makes battery storage economically attractive — self-consuming is worth the full retail tariff (COP 930+/kWh), while exporting recovers only about COP 350-450/kWh. Your battery effectively pays for itself by capturing this spread.',
        },
        {
          question: 'Is solar viable in cloudy Bogotá?',
          answer:
            'Bogotá has a reputation for cloud, but reality is nuanced. The city\'s average solar irradiance is 4.0-4.2 kWh/m²/day — lower than the Caribbean coast (5.0+), but workable. Germany, the world solar leader, has 2.8-3.2 kWh/m²/day. A 3 kW system on a Bogotá rooftop still generates 250-330 kWh/month — meaningful for a household consuming 300-400 kWh. Medellín, Cali, and Bucaramanga have 4.3-4.8 kWh/m²/day (excellent). The Caribbean coast (Barranquilla, Cartagena, Santa Marta) gets 5.0-5.5 kWh/m²/day. Colombia has more solar diversity than people assume.',
        },
        {
          question: 'Can I use a solar battery for my finca (country house) without grid access?',
          answer:
            'Yes — many Colombian fincas in Antioquia, Santander, and the Coffee Axis are off-grid or face unreliable grid connections. A 5 kW solar array with 15-20 kWh battery storage powers a finca including lights, fridge, water pump, basic kitchen appliances, and entertainment. Colombia\'s year-round consistent daylight (near the equator, minimal seasonal variation) is ideal for off-grid solar — no winter derating to worry about. The one consideration: heavy rain regions (Chocó, Amazonas) need a larger solar array (30-40% oversize) to compensate for persistent cloud cover.',
        },
      ],
    },
  },
  CL: {
    en: {
      heading: 'Chile Solar Battery FAQ',
      items: [
        {
          question: 'How fast does a solar battery pay back at Chile\'s electricity rates?',
          answer:
            'Chile\'s residential tariffs are among the highest in Latin America — $0.26/kWh (CLP 260+) and rising with the ongoing desacople (decoupling) of regulated prices. A household consuming 300 kWh/month in Santiago pays CLP 78,000+/month. A 3-5 kW solar system with 5-10 kWh battery saves CLP 45,000-65,000/month — payback in 4-6 years. In northern Chile (Antofagasta, Calama — some of the highest irradiance on earth at 6.0+ kWh/m²/day), the same system generates 40-50% more, bringing payback to 3-4 years.',
        },
        {
          question: 'Does Chile have net metering (Net Billing)?',
          answer:
            'Chile\'s Ley 20,571 (Ley de Generación Distribuida, also known as Net Billing) allows residential systems up to 300 kW to export excess energy. The export tariff is set at the nodal price (about CLP 40-60/kWh), which is significantly lower than the retail tariff (CLP 260+/kWh). This creates a strong economic incentive for battery storage: consuming your own energy saves CLP 260/kWh; exporting it earns CLP 50/kWh. A battery captures the CLP 210/kWh spread between self-consumption and export value — which adds up quickly.',
        },
        {
          question: 'What battery size do I need for a mining-region home in northern Chile?',
          answer:
            'Northern Chile (Antofagasta, Calama, Iquique) has extreme conditions: world-class solar (6.0-6.5 kWh/m²/day), near-zero rain, but heavy dust and daytime temperatures of 35-40°C. A 10 kWh battery paired with 5 kW solar can run a home nearly entirely off-grid, with the grid as backup only. Dust is the main enemy — use IP65-rated enclosures and schedule quarterly cleaning of panels and battery vents. The mine camps and contractor housing in this region are increasingly adopting solar + battery; the economics are unbeatable.',
        },
        {
          question: 'Can solar + battery keep my house running during a terremoto (earthquake) blackout?',
          answer:
            'Chile\'s seismic activity means post-earthquake blackouts can last hours to days, especially in coastal areas affected by tsunami alerts. A 10-15 kWh battery with 3-5 kW solar provides essential backup: lights, communications (phone/internet), refrigeration, and medical equipment. The battery should be securely mounted (seismic brackets) — Chilean building codes require this for heavy electrical equipment. The battery automatically disconnects from the grid when it senses the outage and runs your essential panel. No fuel, no starting a generator in the dark, no fumes in an enclosed space.',
        },
        {
          question: 'Is off-grid viable for remote Patagonia or Chilean islands?',
          answer:
            'Very viable — and already common. Remote areas in Aysén, Magallanes, and Chiloé where grid connection is impractical or prohibitively expensive (CLP 5,000,000+ for line extension) are perfect for off-grid solar + battery. A 3-5 kW solar array with 15-20 kWh battery covers a family home year-round. The one Patagonian catch: winter (June-August) daylight drops to 6-8 hours with snowy/overcast conditions, reducing solar output by 40-60% compared to summer. A backup generator for the deepest winter weeks is prudent and cheaper than tripling the battery bank. In Chilean Patagonia, wind + solar hybrid systems are worth considering — the region has some of the best wind resources in the world.',
        },
      ],
    },
  },
  PE: {
    en: {
      heading: 'Peru Solar Battery FAQ',
      items: [
        {
          question: 'How much battery do I need for a Lima home?',
          answer:
            'Lima\'s grid is relatively stable, but tariffs are $0.20/kWh (PEN 0.75+) and rising. The city\'s unique climate — garúa (coastal fog) from May-October — means winter solar output drops to 2.5-3.0 kWh/m²/day from a summer peak of 5.5-6.0. For a Lima home, size the solar array for winter (so you\'re not short half the year) and pair with a 5-10 kWh battery for evening self-consumption. Even a winter-diminished solar array plus battery cuts a PEN 200-400/month bill by 50-60%.',
        },
        {
          question: 'Can solar + battery power a home in the Peruvian Amazon (Iquitos, Pucallpa)?',
          answer:
            'Yes — and in many Amazonian communities it\'s already the primary power source. A 3-5 kW solar array with 10-15 kWh battery can power a family home, clinic, or school. The Amazon\'s solar resource (4.5-5.0 kWh/m²/day) is surprisingly good despite high humidity — rain comes in short bursts, not all-day overcast. Off-grid solar + battery is cheaper than running diesel generators, which is how most non-grid-connected Amazon communities get power. The diesel savings alone pay back the system in 2-3 years.',
        },
        {
          question: 'Why doesn\'t Peru have net metering?',
          answer:
            'Peru does not have a comprehensive residential net metering framework. The regulatory body (OSINERGMIN) and the Ministry of Energy have discussed distributed generation regulations since the mid-2010s, but implementation has been slow. Some distribution companies (Luz del Sur, Enel) allow grid-tied solar on a case-by-case basis, but there\'s no standardized export tariff. This makes battery storage essential — without it, any excess generation is wasted. Plan your system as if net metering doesn\'t exist: size your battery to capture all your excess.',
        },
        {
          question: 'What\'s the best solar + battery setup for the Peruvian highlands (Sierra)?',
          answer:
            'The Andes (Cusco, Arequipa, Huancayo, Puno) have world-class solar: 5.5-6.5 kWh/m²/day with cool temperatures that boost panel efficiency (15-20°C is ideal for solar panels). However, at 3,000-4,000m elevation, UV radiation accelerates cable and seal degradation — use UV-rated cabling and IP65 or better enclosures. The battery must operate at near-freezing overnight temperatures: use LiFePO4 with low-temperature charging protection (or install the battery indoors). A 3 kW solar array at 3,800m can generate as much as a 5 kW array in Lima. Size accordingly — you\'ll need fewer panels than you think.',
        },
        {
          question: 'Are lithium batteries available and affordable in Peru?',
          answer:
            'The market is growing but still concentrated in Lima. Pylontech, BYD, and Huawei lithium batteries are available through Lima-based distributors, with shipping to provinces adding 5-15% to equipment cost. Local support outside Lima varies — in Cusco and Arequipa, established solar installers stock and service lithium systems. In remote areas, lead-acid remains common due to availability and lower upfront cost, but the lifecycle math favors lithium for any system that cycles daily. Import duties on lithium batteries (typically 0-6% under Peru\'s FTA with China) are reasonable.',
        },
      ],
    },
  },
  AR: {
    en: {
      heading: 'Argentina Solar Battery FAQ',
      items: [
        {
          question: 'Is solar + battery viable with Argentina\'s subsidized electricity prices?',
          answer:
            'Argentina\'s residential tariffs are among the lowest in Latin America — approximately $0.08/kWh. The government\'s segmentación tarifaria (tariff segmentation) gradually reduces subsidies for higher-income households (Nivel 1) while maintaining them for Nivel 2 (low income) and Nivel 3 (middle income). For Nivel 1 households, tariffs have risen significantly and solar + battery payback is 6-9 years. For Nivel 2-3, purely financial payback is 10+ years. However, many Argentine homeowners invest for energy independence rather than pure ROI — the grid has frequent outages in summer (peak AC demand) and the subsidy regime is unstable. A solar + battery system provides certainty.',
        },
        {
          question: 'What size system do I need for a home in Buenos Aires Province vs the North?',
          answer:
            'Buenos Aires: A 3-5 kW solar system with 5-10 kWh battery offsets 50-70% of a typical suburban home\'s consumption. Irradiance is 4.5-5.0 kWh/m²/day in summer, dropping to 2.5-3.0 in winter. Northern Argentina (Salta, Jujuy, Tucumán): 5.5-6.0 kWh/m²/day year-round — some of the best solar in South America. The same 3 kW system generates 40-50% more. A 2-3 kW system with 5 kWh battery might suffice. Patagonia: High winds, lower irradiance (3.5-4.0 kWh/m²/day), but wind-solar hybrid systems work well.',
        },
        {
          question: 'Does Argentina have net metering/medición neta?',
          answer:
            'Argentina\'s Ley 27,424 (Régimen de Fomento a la Generación Distribuida, 2017) established a national net metering framework, but implementation varies by province. Buenos Aires Province, Córdoba, Mendoza, and Santa Fe have active programmes. The system uses net billing: excess generation earns credits at the distributor\'s purchase price, carried forward to future bills. However, Argentina\'s economic volatility means the credits\' real value is uncertain. For Argentine homeowners, battery storage that maximizes self-consumption is a more reliable value proposition than relying on net metering credits.',
        },
        {
          question: 'How does the exchange rate affect solar equipment pricing in Argentina?',
          answer:
            'This is the critical practical issue. Solar panels and lithium batteries are imported and priced in USD. A system quoted at USD 5,000 can cost ARS 6,000,000+ at the MEP rate. Equipment is available through importers in Buenos Aires, Córdoba, and Rosario, but prices fluctuate with the exchange rate. Some installers offer financing in pesos with adjustable rates. The key financial consideration: your electricity bill is in pesos (and partially subsidized); your solar equipment is effectively in dollars. This mismatch extends payback periods. The counterargument: electricity subsidies are being phased out for higher-income segments, and the peso cost of grid electricity will continue to rise — locking in solar generation at today\'s equipment cost hedges against future tariff increases.',
        },
        {
          question: 'What battery setup works for an Argentine country house (quinta/casa de fin de semana)?',
          answer:
            'Weekend homes that sit empty during the week are perfect for solar + battery — the system charges during the week (no load, full charge by Friday) and powers the weekend. A 3-5 kWh battery with 1-2 kW solar is sufficient for a quinta with lights, fridge, water pump, and basic appliances. No generator noise, no fuel storage. If the quinta has a pool pump, add 2-3 kW of solar dedicated to the pump running during daylight, plus the battery for evening loads. For remote quintas without grid access, a 5 kW solar + 10-15 kWh battery system provides full off-grid capability.',
        },
      ],
    },
  },
  ES: {
    en: {
      heading: 'Spain Solar Battery FAQ',
      items: [
        {
          question: 'How much can I save with solar + battery in Spain?',
          answer:
            'Spain\'s electricity prices are among the highest in Europe — about $0.28/kWh (€0.26+), with peak evening rates hitting €0.30-0.40/kWh. A 4-6 kW solar system with a 5-10 kWh battery on a single-family home (vivienda unifamiliar) saves €600-1,200/year. With Spain\'s exceptional solar resource (4.6 kWh/m²/day average; Andalucía and Murcia get 5.0-5.5), the system generates abundantly. The battery specifically adds €200-400/year in savings by shifting midday surplus to the evening peak. Payback is 5-8 years without subsidies, 3-5 years with Next Generation EU funds or regional incentives.',
        },
        {
          question: 'Does Spain still have the "sun tax" (impuesto al sol)?',
          answer:
            'No — the controversial "sun tax" (RD 900/2015) was repealed in 2018 by RD 244/2019. Spain now actively promotes self-consumption (autoconsumo) with simplified administrative procedures: installations under 15 kW no longer need a grid access permit, and systems without export (autoconsumo sin excedentes) face minimal paperwork. The repeal of the sun tax, combined with high electricity prices and generous Next Generation EU subsidies, has driven a solar boom — Spain installed more residential solar in 2023 than in the previous decade combined.',
        },
        {
          question: 'What is the difference between autoconsumo con excedentes and sin excedentes?',
          answer:
            'Autoconsumo sin excedentes (without surplus): Your system has an anti-spill device that prevents any export to the grid. Simple permitting, no compensation for surplus. Autoconsumo con excedentes (with surplus): You export excess to the grid and receive compensation — either through simplified compensation (compensación simplificada, where your export offsets your consumption on the same bill) or by selling to the market (requires registration as a producer). Simplified compensation is the standard for residential: up to 100 kW, your export credit offsets your import charge on the same bill, capped at your total import cost (no cash payout). A battery increases your autoconsumo ratio from 30-40% to 60-80%, doubling the value of your solar generation.',
        },
        {
          question: 'Are there still Next Generation EU subsidies for residential batteries in Spain?',
          answer:
            'Yes — the Next Generation EU funds (Plan de Recuperación, Transformación y Resiliencia) include subsidies for residential solar + battery through the RD 477/2021 programme, administered by each autonomous community (CCAA). Subsidies cover 40-70% of the battery cost depending on the municipality\'s population (smaller towns get higher percentages). However, the programme has been extended multiple times and funding allocations vary by CCAA — some regions have exhausted their initial allocation while others still have funds. Check your CCAA\'s current status. Even without subsidy at current Spanish electricity prices, battery ROI is positive.',
        },
        {
          question: 'Can I go completely off-grid with solar + battery in Spain?',
          answer:
            'Technically yes — a 5-8 kW solar array with 15-20 kWh battery can power a home year-round, especially in southern and Mediterranean Spain where winter irradiance is still 3.0-3.5 kWh/m²/day (double what Germany gets in winter). For a country house (casa de campo, cortijo) where grid connection costs exceed €5,000-10,000, off-grid is typically cheaper. For grid-connected homes, autoconsumo con excedentes (grid-tied with battery) is more cost-effective than off-grid — the grid acts as your seasonal battery (export summer surplus, import winter shortfall) for a fraction of the cost of adding 30-40 kWh of extra battery capacity.',
        },
      ],
    },
  },
  FR: {
    en: {
      heading: 'France Solar Battery FAQ',
      items: [
        {
          question: 'What size solar + battery system for a French single-family home?',
          answer:
            'A 100-150 m² house with electric heating consuming 8,000-12,000 kWh/year needs a 6-9 kWp solar array with an 8-15 kWh battery. Without electric heating (gas boiler or heat pump), consumption drops to 3,500-5,000 kWh/year — a 3-5 kWp system with 5-8 kWh battery suffices. The battery increases the self-consumption rate from 30-40% (solar only) to 60-80%, saving an additional 1,500-3,000 kWh per year. Use our calculator with your EDF bill for precise sizing.',
        },
        {
          question: 'Is a solar battery eligible for MaPrimeRénov\' or other French subsidies?',
          answer:
            'Currently, MaPrimeRénov\' does not directly fund standalone solar batteries. Solar PV systems with self-consumption benefit from the prime à l\'autoconsommation (approximately €100-200/kWp depending on capacity, paid as a lump sum upon commissioning). VAT at 10% (instead of 20%) applies to installations ≤ 9 kWp. The energy transition tax credit (CITE) no longer covers solar PV since being replaced by MaPrimeRénov\'. However, some régions and départements offer complementary aid — check with your ADIL or France Rénov\' advisor.',
        },
        {
          question: 'With a Linky meter, how does self-consumption with a battery work?',
          answer:
            'The Linky smart meter precisely measures both your draw from the grid and your injection of surplus. With a battery, Linky sees reduced injection (the battery absorbs surplus before it reaches the meter) and reduced evening draw (the battery powers your loads before Linky detects demand). The key advantage: you can track your energy flows hour by hour in your Enedis customer portal and optimize your battery sizing based on real consumption patterns. The Linky is an asset, not an obstacle.',
        },
        {
          question: 'What\'s the battery ROI in mainland France?',
          answer:
            'At the regulated EDF tariff (TRV) of approximately €0.25/kWh and with the prime à l\'autoconsommation, an 8 kWh battery paired with 5 kWp solar saves about €200-400/year more than solar alone. Standalone battery ROI is 8-12 years — longer than panels alone (6-9 years). However, with the bouclier tarifaire (tariff shield) being phased out and electricity prices rising steadily (the TRV rose ~30% between 2022 and 2025), the battery case improves each year. For households with a heat pump and/or EV that consume mainly in the evening, the battery is particularly relevant.',
        },
        {
          question: 'Battery or electric vehicle — can I use my car as a home battery (V2H)?',
          answer:
            'V2H (Vehicle-to-Home) is arriving in France. Renault (with the R5 electric and the Mobilize PowerBox charger) has offered V2G/V2H since 2025 — the car\'s 40-52 kWh battery powers the house in the evening. Technically, this can replace a stationary battery if the car is home during peak hours. The advantage: the car battery is much larger (40-60 kWh vs 8-15 kWh for a home battery). The drawback: if the car isn\'t plugged in (evening outings), you buy grid electricity. Stationary battery and V2H are complementary — the home battery for daily use, the car for additional capacity. Our calculator doesn\'t yet integrate V2H, but we\'re working on it.',
        },
      ],
    },
  },
  PT: {
    en: {
      heading: 'Portugal Solar Battery FAQ',
      items: [
        {
          question: 'How much can I save with solar + battery in Portugal?',
          answer:
            'Portugal\'s electricity price is about $0.26/kWh (€0.24+), with the regulated tariff (SU Eletricidade) and free-market prices converging upward after the 2022-2024 energy crisis. A 3-5 kW solar system on a typical Portuguese home (moradia) generates 4,500-7,500 kWh/year — with a 5-10 kWh battery raising self-consumption from 30% to 65-80%. Annual savings: €600-1,200. Payback is 5-8 years without subsidies. Portugal\'s 1:1 net metering (autoconsumo com compensação) further improves the equation — the battery captures the spread between mid-day export and evening import.',
        },
        {
          question: 'Is there a Portuguese subsidy for home solar batteries?',
          answer:
            'Portugal\'s Fundo Ambiental (Environmental Fund) periodically opens support programmes for residential solar + battery. The 2023-2025 "Vale Eficiência" and "Programa de Apoio a Edifícios Mais Sustentáveis" offered subsidies covering 65-85% of eligible costs for energy efficiency improvements, including solar PV and batteries, targeted primarily at lower-income households and older buildings. The programmes are not continuous — they open in specific windows and funds are allocated on a first-come, first-served basis. Check the Fundo Ambiental website for current open calls. Even without subsidy, at €0.24+/kWh, the battery payback case in Portugal is solid.',
        },
        {
          question: 'Can solar + battery protect against Portugal\'s grid instability in rural areas?',
          answer:
            'Rural Portugal (Alentejo, interior Beira, Trás-os-Montes) has lower grid reliability than the coast, with winter storm outages lasting hours and summer fire-prevention shutdowns occurring in high-risk zones. A 5-10 kWh battery with 3-5 kW solar provides reliable backup during rural outages. The solar resource in Alentejo is exceptional (5.0-5.5 kWh/m²/day — comparable to southern Spain). For a rural quinta or Monte Alentejano, off-grid solar + battery is increasingly competitive with grid connection costs.',
        },
        {
          question: 'What\'s the difference between autoconsumo individual and autoconsumo coletivo in Portugal?',
          answer:
            'Individual self-consumption (autoconsumo individual, UPAC — Unidade de Produção para Autoconsumo) is the standard: you install panels + battery for your own house, export surplus (capped at the installation\'s capacity), and receive credits. Collective self-consumption (autoconsumo coletivo) allows multiple consumers (e.g., a condomínio — apartment building) to share a single solar + battery installation. This is more complex but emerging as Portuguese law now permits energy-sharing within condomínios. For a moradia (single-family house), individual autoconsumo is the clear choice.',
        },
        {
          question: 'Does the Portuguese solar resource make batteries more or less necessary than elsewhere in Europe?',
          answer:
            'Portugal\'s 3,000+ sunshine hours per year (the highest in mainland Europe) means solar generation is abundant — which paradoxically makes batteries more valuable. A 5 kW system in Faro generates 30-40% more than an identical system in Frankfurt. Without a battery, that extra generation becomes surplus exported at a discount (the compensation rate is close to the wholesale price, roughly 50-70% of retail). A battery captures more of that abundant Portuguese sun and converts it to high-value self-consumed electricity. The better your solar resource, the bigger the gap between what you get for exporting vs self-consuming — and the more a battery pays for itself.',
        },
      ],
    },
  },
  IT: {
    en: {
      heading: 'Italy Solar Battery FAQ',
      items: [
        {
          question: 'How much can I save with solar + battery at Italy\'s electricity prices?',
          answer:
            'Italy has the highest residential electricity prices in Europe after Germany and Denmark — about $0.40/kWh (€0.37+) with the enhanced protection market (mercato tutelato) ending and consumers moving to free-market offers that have been even higher. A 4-6 kW solar system with 5-10 kWh battery on a single-family home (villetta) saves €900-1,800/year. The battery\'s contribution is €300-500/year by shifting midday solar to the evening. Current payback is 4-7 years with the standard 50% detrazione fiscale. Compare that to keeping your money in a conto deposito at 3% — solar + battery is the better return.',
        },
        {
          question: 'What Italian tax incentives apply to residential battery storage?',
          answer:
            'Italy offers several incentives that change frequently. The standard detrazione fiscale (tax deduction) for home energy improvements (Ecobonus) is 50% of eligible costs, spread over 10 years of tax returns, up to €96,000 per housing unit. This applies to solar PV + battery as a combined installation. The Superbonus 110% has been scaled back to 70% for 2024-2025 and is now highly restrictive (only condomini with specific criteria). The bonus ristrutturazione at 50% (standard home renovation deduction) also covers solar + battery. Separately, regions like Lombardia, Piemonte, and Veneto periodically offer bandi (grant calls) for residential storage. Always consult a commercialista: the rules for cessione del credito (credit transfer) and sconto in fattura (invoice discount) have changed several times.',
        },
        {
          question: 'Can I use a solar battery to arbitrage between F1/F2/F3 time-of-use bands in Italy?',
          answer:
            'Yes — this is one of the best use cases in Italy. The standard residential tariff (tariffa bioraria) has three bands: F1 (peak, Mon-Fri 8-19, most expensive), F2 (intermediate, morning/evening weekday and Saturday), and F3 (off-peak, nights, Sundays, cheapest). F1 costs roughly 30-50% more than F3. A battery charged from solar during F1 hours and discharged during F1 evening can shift virtually all consumption to solar, avoiding the most expensive band entirely. For households with a heat pump or EV, the battery + time-of-use arbitrage combination is particularly powerful. Our calculator models F1/F2/F3 distribution for accurate Italian savings estimates.',
        },
        {
          question: 'Is solar viable in northern Italy (Milan, Turin) where it\'s foggier?',
          answer:
            'Northern Italy\'s Po Valley has more fog and cloud than central/southern Italy, but 3.8-4.2 kWh/m²/day is still workable — comparable to central Germany, which has one of the world\'s highest solar penetration rates. A 5 kW system in Milan generates 5,000-5,500 kWh/year vs 6,500-7,000 in Rome or 7,500+ in Sicily. The battery sizing doesn\'t change dramatically — a 5-10 kWh battery serves the same self-consumption function. In the north, slightly oversizing the solar array (20-30% more panels) compensates for lower irradiance and keeps the battery fully charged through summer.',
        },
        {
          question: 'Batteria solare vs scambio sul posto — which gives better returns in Italy?',
          answer:
            'Scambio sul posto (SSP, on-site exchange) is Italy\'s net metering mechanism: excess energy sent to the grid earns a credit calculated by the GSE (Gestore dei Servizi Energetici) that offsets the cost of energy taken from the grid. The SSP credit roughly covers the energy component (not transmission, distribution, and system charges — about 40-50% of your bill). A battery improves on SSP: instead of exchanging at ~50% value, you self-consume at 100% value. For every kWh you store and use yourself rather than sending to SSP, you save roughly double. The battery effectively beats SSP by capturing the full retail price spread. As Italy phases out the mercato tutelato and moves all households to free-market pricing with time-of-use tariffs, the battery\'s advantage over SSP grows further.',
        },
      ],
    },
  },
  GR: {
    en: {
      heading: 'Greece Solar Battery FAQ',
      items: [
        {
          question: 'How much can solar + battery save on a Greek household electricity bill?',
          answer:
            'Greece\'s household electricity price is €0.24-0.28/kWh ($0.26+), and with the phase-out of government subsidies (which capped prices during the 2022-2024 energy crisis), consumers are now exposed to full market rates. A 4-6 kW solar system with 5-10 kWh battery in Athens or Thessaloniki saves €700-1,300/year. Greece\'s solar resource is among the best in Europe — Athens gets 4.8 kWh/m²/day average, Crete and the Aegean islands get 5.0-5.5. The battery specifically captures €250-400/year by shifting abundant midday generation to evening air conditioning and cooking loads. Payback: 5-8 years.',
        },
        {
          question: 'Can I go off-grid on a Greek island with solar + battery?',
          answer:
            'Many Greek islands have unreliable grids (especially during the summer tourist season when demand spikes and causes brownouts) or no mainland interconnection at all (relying on diesel generators with fuel shipped in at enormous cost). A 5-8 kW solar array with 15-25 kWh battery provides reliable off-grid power for a single-family home. The economic comparison is stark: diesel-generated electricity on non-interconnected islands costs €0.30-0.50/kWh to produce, and retail tariffs are higher. Solar + battery pays back in 3-5 years on avoided costs. For summer houses (exochikó) used seasonally, a 3-5 kW system with 10 kWh battery works well — the system charges all week, ready for weekend use.',
        },
        {
          question: 'What Greek subsidy programmes exist for residential solar + battery?',
          answer:
            'Greece\'s "Exoikonomo" (Εξοικονομώ — Energy Saving at Home) programme, funded by the Recovery and Resilience Facility (EU funds), offers grants covering 50-75% of eligible costs for energy upgrades, including solar PV with battery storage. The subsidy percentage depends on household income: lower-income households get higher rates. The "Φωτοβολταϊκά στις Στέγες" (Photovoltaics on Roofs) programme specifically targets residential solar + battery installations with subsidies up to 60% plus a battery incentive. These programmes open in specific calls (prokiryxeis) with application windows — check the ΥΠΕΝ (Ministry of Environment and Energy) website or consult a local energy advisor (energeiakos symvoulos). At current electricity prices, solar + battery is viable even without subsidy, but the grant substantially improves the payback.',
        },
        {
          question: 'What is net metering like in Greece?',
          answer:
            'Greece has a well-functioning net metering programme (Αυτοπαραγωγή με Ενεργειακό Συμψηφισμό) for residential systems up to 10 kW (or up to 100% of the agreed consumption). Excess energy is credited to your bill and nets against consumption over a 3-year rolling period — any remaining credit at the end of 3 years is forfeited (no cash payout). This means you want to size your system to roughly match your annual consumption, not overproduce. A battery improves the net metering equation: instead of building a 3-year credit you\'ll never fully use, store your excess daily and use it the same evening. The battery converts temporary surplus into immediate self-consumption — more valuable than a 3-year accounting credit.',
        },
        {
          question: 'How do I size a system for a Greek summer house (exochikó) that\'s empty 9 months of the year?',
          answer:
            'For a seasonal house occupied only in summer (or weekends year-round), the standard sizing rules don\'t apply. The system generates all winter with no load — all that energy is exported if you have net metering (building credits), or wasted without it. With a battery, the strategy shifts: a smaller solar array (2-3 kW) paired with a right-sized battery (5-10 kWh) charges during the week (while you\'re away) and discharges during your weekend visit. This avoids overinvesting in panels that generate 9 months of unused energy. For a summer-only house on an island without grid connection, a 3-5 kW solar + 10-15 kWh battery system is right-sized — no fuel, no generator, no connection fees.',
        },
      ],
    },
  },
};

export function getCountryFAQ(countryCode: string, locale: string): FAQData | null {
  const country = countryFAQs[countryCode.toUpperCase()];
  if (!country) return null;
  return country[locale] || country.en || null;
}
