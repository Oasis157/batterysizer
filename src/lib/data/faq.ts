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
