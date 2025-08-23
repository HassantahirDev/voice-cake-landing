'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    header: {
      nav: {
        product: "Product",
        features: "Features", 
        pricing: "Pricing",
        resources: "Resources"
      },
      buttons: {
        get_started: "See Plans",
        request_demo: "Open Dashboard"
      }
    },
    hero: {
      title: "All-in-one platform for AI voice agents and automation. It's powerful, affordable, and built to scale.",
      subtitle: "Ultra-realistic AI voice agents that don't just talk, they understand. Automate customer interactions, scale engagement, and streamline operations, all in one powerful, affordable platform.",
      benefits: {
        no_credit_card: "No credit card required",
        five_min_setup: "5-minute setup",
        free_trial: "Free trial"
      }
    },
    benefits: {
      title: "Key Benefits of AI Voice Automation",
      cards: {
        ai_conversations: {
          title: "AI-Powered Conversations Plus Automations",
          description: "Create ultra-real, engaging voice interactions and do Automations with it."
        },
        integrations: {
          title: "Seamless Integrations",
          description: "Connect with CRM, Email, WhatsApp and SMS services. Plug into your stack for a streamlined voice automation flow."
        },
        availability: {
          title: "24/7 Availability",
          description: "Offer round-the-clock support without scaling headcount."
        }
      }
    },
    features: {
      title: "Core Features of Our AI Voice Agents",
      tabs: {
        empth: "Empth",
        conversa: "Conversa"
      },
      empth: {
        main_title: "Empth: Intelligent Voice Automation with AI Voice Agents",
        main_description: "Automate routine tasks and provide instant support with intelligent voice automation.",
        use_cases_title: "Empth Use Cases for AI Voice",
        use_cases_description: "From FAQs to order handling — design once, scale everywhere."
      },
      conversa: {
        main_title: "Conversa: Human-in-the-Loop",
        main_description: "Escalate to a human seamlessly when issues get complex.",
        use_cases_title: "Conversa Use Cases",
        use_cases_description: "Great for sensitive, regulated or edge-case conversations."
      }
    },
    specs: {
      title: "Technical Specifications",
      description: "Built on a robust, scalable architecture for high-performance voice experiences.",
      cards: {
        technical: {
          title: "Technical Specifications",
          description: "Robust, scalable, low-latency infrastructure."
        },
        security: {
          title: "Security & Compliance",
          description: "Best-practice data protection and access controls."
        },
        user_management: {
          title: "User Management",
          description: "Granular roles and permissions for teams."
        }
      }
    },
    conversa_specs: {
      title: "Conversa Specifications",
      cards: {
        conversa_specs: {
          title: "Conversa Specs",
          description: "CRM/Helpdesk integrations and live-handoff."
        },
        security: {
          title: "Security",
          description: "Compliance-friendly human-in-the-loop routing."
        },
        user_management: {
          title: "User Management",
          description: "Team access with auditability."
        }
      }
    },
    additional_features: {
      title: "Additional Features",
      cards: {
        automation_workflows: {
          title: "Automation Workflows",
          description: "Combine ultra-realistic voice agents with n8n or Make.com style automations in one unified platform. Alternative to VAPI.ai automation with better voice AI integration."
        },
        telephony: {
          title: "Telephony Integration",
          description: "Connect SIP/Carriers for inbound and outbound calls."
        },
        agent_creation: {
          title: "Agent Creation",
          description: "Spin up agents with templates and guardrails."
        },
        support: {
          title: "24/7 Support",
          description: "Round-the-clock customer support and technical assistance."
        }
      }
    },
    audio_samples: {
      title: "AI Voice Samples"
    },
    comparison: {
      title: "Comparison of Voice Automation Solutions",
      headers: {
        features: "FEATURES",
        voice_cake: "VOICE CAKE",
        vapi_elevenlabs: "VAPI / ELEVENLABS",
        amazon_google_azure: "AMAZON / GOOGLE / AZURE"
      },
      features: {
        unified_speech: "Unified Speech-to-Speech",
        sub_250ms: "Sub-250ms Latency",
        all_in_one_pricing: "All-in-One Pricing",
        expressive_voices: "50+ Expressive Voices",
        real_time_analytics: "Real-time Analytics",
        emotion_reasoning: "Emotion & Reasoning",
        webrtc_streaming: "WebRTC Streaming",
        no_hidden_fees: "No Hidden Fees",
        free_minutes: "5 Free Minutes Monthly",
        volume_discounts: "Volume Discounts",
        automation: "Automation",
        no_code_friendly: "No-Code / Developer Friendly"
      }
    },
    competitor_comparison: {
      title: "Why Choose VoiceCake Over VAPI.ai, Make.com, and n8n?",
      vapi: {
        title: "vs VAPI.ai",
        points: [
          "Unified voice automation platform",
          "Built-in CRM, WhatsApp, SMS integrations",
          "More affordable pricing structure",
          "No-code automation workflows",
          "Better customer support"
        ]
      },
      make: {
        title: "vs Make.com",
        points: [
          "Specialized in voice AI automation",
          "Ultra-realistic voice agents",
          "Voice-specific workflow tools",
          "Better voice quality and latency",
          "Voice-first design approach"
        ]
      },
      n8n: {
        title: "vs n8n",
        points: [
          "Simpler voice automation setup",
          "Pre-built voice AI templates",
          "Voice-optimized interface",
          "Faster time to deployment",
          "Voice-specific support team"
        ]
      }
    },
    pricing: {
      title: "Select a VoiceCake plan",
      subtitle: "Choose Your Plan",
      tabs: {
        conversa: "VoiceCake Conversa",
        empth: "VoiceCake Empth"
      }
    },
    resources: {
      title: "Resources",
      documentation: {
        title: "Documentation",
        description: "Complete API guides and tutorials"
      },
      faq: {
        title: "FAQ",
        description: "Common questions and answers"
      }
    },
    contact: {
      title: "Contact Us",
      form: {
        full_name: "Full Name *",
        email: "Email *",
        phone: "Phone Number",
        message: "Message *",
        send_message: "Send Message"
      }
    }
  },
  es: {
    header: {
      nav: {
        product: "Producto",
        features: "Características", 
        pricing: "Precios",
        resources: "Recursos"
      },
      buttons: {
        get_started: "Ver Planes",
        request_demo: "Abrir Dashboard"
      }
    },
    hero: {
      title: "Plataforma todo en uno para agentes de voz IA y automatización. Es potente, asequible y construida para escalar.",
      subtitle: "Agentes de voz IA ultra-realistas que no solo hablan, sino que entienden. Automatiza las interacciones con clientes, escala el compromiso y optimiza las operaciones, todo en una plataforma potente y asequible.",
      benefits: {
        no_credit_card: "No se requiere tarjeta de crédito",
        five_min_setup: "Configuración en 5 minutos",
        free_trial: "Prueba gratuita"
      }
    },
    benefits: {
      title: "Beneficios Clave de la Automatización de Voz IA",
      cards: {
        ai_conversations: {
          title: "Conversaciones IA más Automatizaciones",
          description: "Crea interacciones de voz ultra-reales y atractivas y haz Automatizaciones con ellas."
        },
        integrations: {
          title: "Integraciones Perfectas",
          description: "Conecta con servicios CRM, Email, WhatsApp y SMS. Conecta a tu stack para un flujo de automatización de voz optimizado."
        },
        availability: {
          title: "Disponibilidad 24/7",
          description: "Ofrece soporte las 24 horas sin escalar personal."
        }
      }
    },
    features: {
      title: "Características Principales de Nuestros Agentes de Voz IA",
      tabs: {
        empth: "Empth",
        conversa: "Conversa"
      },
      empth: {
        main_title: "Empth: Automatización de Voz Inteligente con Agentes de Voz IA",
        main_description: "Automatiza tareas rutinarias y proporciona soporte instantáneo con automatización de voz inteligente.",
        use_cases_title: "Casos de Uso de Empth para Voz IA",
        use_cases_description: "Desde FAQs hasta manejo de pedidos — diseña una vez, escala en todas partes."
      },
      conversa: {
        main_title: "Conversa: Humano en el Bucle",
        main_description: "Escala a un humano sin problemas cuando los problemas se vuelven complejos.",
        use_cases_title: "Casos de Uso de Conversa",
        use_cases_description: "Excelente para conversaciones sensibles, reguladas o casos extremos."
      }
    },
    specs: {
      title: "Especificaciones Técnicas",
      description: "Construido sobre una arquitectura robusta y escalable para experiencias de voz de alto rendimiento.",
      cards: {
        technical: {
          title: "Especificaciones Técnicas",
          description: "Infraestructura robusta, escalable y de baja latencia."
        },
        security: {
          title: "Seguridad y Cumplimiento",
          description: "Protección de datos y controles de acceso de mejores prácticas."
        },
        user_management: {
          title: "Gestión de Usuarios",
          description: "Roles granulares y permisos para equipos."
        }
      }
    },
    additional_features: {
      title: "Características Adicionales",
      cards: {
        automation_workflows: {
          title: "Flujos de Trabajo de Automatización",
          description: "Combina agentes de voz ultra-realistas con automatizaciones estilo n8n o Make.com en una plataforma unificada. Alternativa a la automatización VAPI.ai con mejor integración de voz IA."
        },
        telephony: {
          title: "Integración de Telefonía",
          description: "Conecta SIP/Carriers para llamadas entrantes y salientes."
        },
        agent_creation: {
          title: "Creación de Agentes",
          description: "Crea agentes con plantillas y protecciones."
        },
        support: {
          title: "Soporte 24/7",
          description: "Soporte al cliente y asistencia técnica las 24 horas."
        }
      }
    },
    audio_samples: {
      title: "Muestras de Voz IA"
    },
    comparison: {
      title: "Comparación de Soluciones de Automatización de Voz",
      headers: {
        features: "CARACTERÍSTICAS",
        voice_cake: "VOICE CAKE",
        vapi_elevenlabs: "VAPI / ELEVENLABS",
        amazon_google_azure: "AMAZON / GOOGLE / AZURE"
      },
      features: {
        unified_speech: "Voz a Voz Unificada",
        sub_250ms: "Latencia Sub-250ms",
        all_in_one_pricing: "Precios Todo en Uno",
        expressive_voices: "50+ Voces Expresivas",
        real_time_analytics: "Análisis en Tiempo Real",
        emotion_reasoning: "Emoción y Razonamiento",
        webrtc_streaming: "Transmisión WebRTC",
        no_hidden_fees: "Sin Cargos Ocultos",
        free_minutes: "5 Minutos Gratis Mensuales",
        volume_discounts: "Descuentos por Volumen",
        automation: "Automatización",
        no_code_friendly: "Sin Código / Amigable para Desarrolladores"
      }
    },
    competitor_comparison: {
      title: "¿Por Qué Elegir VoiceCake Sobre VAPI.ai, Make.com y n8n?",
      vapi: {
        title: "vs VAPI.ai",
        points: [
          "Plataforma unificada de automatización de voz",
          "Integraciones integradas CRM, WhatsApp, SMS",
          "Estructura de precios más asequible",
          "Flujos de trabajo de automatización sin código",
          "Mejor soporte al cliente"
        ]
      },
      make: {
        title: "vs Make.com",
        points: [
          "Especializado en automatización de voz IA",
          "Agentes de voz ultra-realistas",
          "Herramientas de flujo de trabajo específicas para voz",
          "Mejor calidad de voz y latencia",
          "Enfoque de diseño centrado en voz"
        ]
      },
      n8n: {
        title: "vs n8n",
        points: [
          "Configuración más simple de automatización de voz",
          "Plantillas de voz IA pre-construidas",
          "Interfaz optimizada para voz",
          "Tiempo de implementación más rápido",
          "Equipo de soporte específico para voz"
        ]
      }
    },
    pricing: {
      title: "Selecciona un plan de VoiceCake",
      subtitle: "Elige Tu Plan",
      tabs: {
        conversa: "VoiceCake Conversa",
        empth: "VoiceCake Empth"
      }
    },
    resources: {
      title: "Recursos",
      documentation: {
        title: "Documentación",
        description: "Guías de API completas y tutoriales"
      },
      faq: {
        title: "FAQ",
        description: "Preguntas y respuestas comunes"
      }
    },
    contact: {
      title: "Contáctanos",
      form: {
        full_name: "Nombre Completo *",
        email: "Correo Electrónico *",
        phone: "Número de Teléfono",
        message: "Mensaje *",
        send_message: "Enviar Mensaje"
      }
    }
  },
  fr: {
    header: {
      nav: {
        product: "Produit",
        features: "Fonctionnalités", 
        pricing: "Tarifs",
        resources: "Ressources"
      },
      buttons: {
        get_started: "Voir les Plans",
        request_demo: "Ouvrir le Dashboard"
      }
    },
    hero: {
      title: "Plateforme tout-en-un pour les agents vocaux IA et l'automatisation. Elle est puissante, abordable et conçue pour évoluer.",
      subtitle: "Agents vocaux IA ultra-réalistes qui ne font pas que parler, ils comprennent. Automatisez les interactions clients, développez l'engagement et rationalisez les opérations, le tout dans une plateforme puissante et abordable.",
      benefits: {
        no_credit_card: "Aucune carte de crédit requise",
        five_min_setup: "Configuration en 5 minutes",
        free_trial: "Essai gratuit"
      }
    },
    benefits: {
      title: "Avantages Clés de l'Automatisation Vocale IA",
      cards: {
        ai_conversations: {
          title: "Conversations IA plus Automatisations",
          description: "Créez des interactions vocales ultra-réelles et engageantes et faites des Automatisations avec elles."
        },
        integrations: {
          title: "Intégrations Transparentes",
          description: "Connectez-vous avec les services CRM, Email, WhatsApp et SMS. Branchez-vous à votre stack pour un flux d'automatisation vocale optimisé."
        },
        availability: {
          title: "Disponibilité 24/7",
          description: "Offrez un support 24h/24 sans augmenter le personnel."
        }
      }
    },
    features: {
      title: "Fonctionnalités Principales de Nos Agents Vocaux IA",
      tabs: {
        empth: "Empth",
        conversa: "Conversa"
      },
      empth: {
        main_title: "Empth: Automatisation Vocale Intelligente avec Agents Vocaux IA",
        main_description: "Automatisez les tâches routinières et fournissez un support instantané avec l'automatisation vocale intelligente.",
        use_cases_title: "Cas d'Usage d'Empth pour la Voix IA",
        use_cases_description: "Des FAQ à la gestion des commandes — concevez une fois, évoluez partout."
      },
      conversa: {
        main_title: "Conversa: Humain dans la Boucle",
        main_description: "Escaladez vers un humain de manière transparente lorsque les problèmes deviennent complexes.",
        use_cases_title: "Cas d'Usage de Conversa",
        use_cases_description: "Excellent pour les conversations sensibles, réglementées ou les cas limites."
      }
    },
    specs: {
      title: "Spécifications Techniques",
      description: "Construit sur une architecture robuste et évolutive pour des expériences vocales haute performance.",
      cards: {
        technical: {
          title: "Spécifications Techniques",
          description: "Infrastructure robuste, évolutive et à faible latence."
        },
        security: {
          title: "Sécurité et Conformité",
          description: "Protection des données et contrôles d'accès selon les meilleures pratiques."
        },
        user_management: {
          title: "Gestion des Utilisateurs",
          description: "Rôles granulaires et permissions pour les équipes."
        }
      }
    },
    additional_features: {
      title: "Fonctionnalités Supplémentaires",
      cards: {
        automation_workflows: {
          title: "Flux de Travail d'Automatisation",
          description: "Combinez des agents vocaux ultra-réalistes avec des automatisations style n8n ou Make.com dans une plateforme unifiée. Alternative à l'automatisation VAPI.ai avec une meilleure intégration vocale IA."
        },
        telephony: {
          title: "Intégration Téléphonique",
          description: "Connectez SIP/Carriers pour les appels entrants et sortants."
        },
        agent_creation: {
          title: "Création d'Agents",
          description: "Créez des agents avec des modèles et des garde-fous."
        },
        support: {
          title: "Support 24/7",
          description: "Support client et assistance technique 24h/24."
        }
      }
    },
    audio_samples: {
      title: "Échantillons de Voix IA"
    },
    comparison: {
      title: "Comparaison des Solutions d'Automatisation Vocale",
      headers: {
        features: "FONCTIONNALITÉS",
        voice_cake: "VOICE CAKE",
        vapi_elevenlabs: "VAPI / ELEVENLABS",
        amazon_google_azure: "AMAZON / GOOGLE / AZURE"
      },
      features: {
        unified_speech: "Parole à Parole Unifiée",
        sub_250ms: "Latence Sub-250ms",
        all_in_one_pricing: "Prix Tout-en-Un",
        expressive_voices: "50+ Voix Expressives",
        real_time_analytics: "Analyses en Temps Réel",
        emotion_reasoning: "Émotion et Raisonnement",
        webrtc_streaming: "Diffusion WebRTC",
        no_hidden_fees: "Pas de Frais Cachés",
        free_minutes: "5 Minutes Gratuites Mensuelles",
        volume_discounts: "Remises sur Volume",
        automation: "Automatisation",
        no_code_friendly: "Sans Code / Convivial pour Développeurs"
      }
    },
    competitor_comparison: {
      title: "Pourquoi Choisir VoiceCake Sur VAPI.ai, Make.com et n8n?",
      vapi: {
        title: "vs VAPI.ai",
        points: [
          "Plateforme d'automatisation vocale unifiée",
          "Intégrations CRM, WhatsApp, SMS intégrées",
          "Structure de prix plus abordable",
          "Flux de travail d'automatisation sans code",
          "Meilleur support client"
        ]
      },
      make: {
        title: "vs Make.com",
        points: [
          "Spécialisé dans l'automatisation vocale IA",
          "Agents vocaux ultra-réalistes",
          "Outils de flux de travail spécifiques à la voix",
          "Meilleure qualité vocale et latence",
          "Approche de conception centrée sur la voix"
        ]
      },
      n8n: {
        title: "vs n8n",
        points: [
          "Configuration d'automatisation vocale plus simple",
          "Modèles vocaux IA pré-construits",
          "Interface optimisée pour la voix",
          "Déploiement plus rapide",
          "Équipe de support spécifique à la voix"
        ]
      }
    },
    pricing: {
      title: "Sélectionnez un plan VoiceCake",
      subtitle: "Choisissez Votre Plan",
      tabs: {
        conversa: "VoiceCake Conversa",
        empth: "VoiceCake Empth"
      }
    },
    resources: {
      title: "Ressources",
      documentation: {
        title: "Documentation",
        description: "Guides API complets et tutoriels"
      },
      faq: {
        title: "FAQ",
        description: "Questions et réponses communes"
      }
    },
    contact: {
      title: "Contactez-nous",
      form: {
        full_name: "Nom Complet *",
        email: "Email *",
        phone: "Numéro de Téléphone",
        message: "Message *",
        send_message: "Envoyer le Message"
      }
    }
  },
  ar: {
    header: {
      nav: {
        product: "المنتج",
        features: "الميزات", 
        pricing: "الأسعار",
        resources: "الموارد"
      },
      buttons: {
        get_started: "عرض الخطط",
        request_demo: "فتح لوحة التحكم"
      }
    },
    hero: {
      title: "منصة شاملة لوكيلات الصوت الذكية والأتمتة. إنها قوية وميسورة التكلفة ومبنية للتوسع.",
      subtitle: "وكيلات صوت ذكية فائقة الواقعية لا تتحدث فحسب، بل تفهم. أتمتة التفاعلات مع العملاء، وتوسيع نطاق المشاركة، وتبسيط العمليات، كل ذلك في منصة قوية وميسورة التكلفة.",
      benefits: {
        no_credit_card: "لا تحتاج بطاقة ائتمان",
        five_min_setup: "إعداد في 5 دقائق",
        free_trial: "تجربة مجانية"
      }
    },
    benefits: {
      title: "الفوائد الرئيسية لأتمتة الصوت الذكي",
      cards: {
        ai_conversations: {
          title: "محادثات ذكية بالإضافة إلى الأتمتة",
          description: "إنشاء تفاعلات صوتية فائقة الواقعية وجذابة والقيام بالأتمتة معها."
        },
        integrations: {
          title: "تكامل سلس",
          description: "الاتصال بخدمات CRM والبريد الإلكتروني وواتساب والرسائل النصية. الاتصال بمجموعة أدواتك لتدفق أتمتة صوتي محسن."
        },
        availability: {
          title: "التوفر على مدار الساعة",
          description: "تقديم الدعم على مدار الساعة دون زيادة عدد الموظفين."
        }
      }
    },
    features: {
      title: "الميزات الأساسية لوكلاء الصوت الذكي لدينا",
      tabs: {
        empth: "إمبث",
        conversa: "كونفرسا"
      },
      empth: {
        main_title: "إمبث: أتمتة صوت ذكية مع وكلاء صوت ذكي",
        main_description: "أتمتة المهام الروتينية وتقديم الدعم الفوري مع أتمتة الصوت الذكية.",
        use_cases_title: "حالات استخدام إمبث للصوت الذكي",
        use_cases_description: "من الأسئلة الشائعة إلى معالجة الطلبات — صمم مرة واحدة، ووسع في كل مكان."
      },
      conversa: {
        main_title: "كونفرسا: الإنسان في الحلقة",
        main_description: "تصعيد إلى إنسان بسلاسة عندما تصبح المشاكل معقدة.",
        use_cases_title: "حالات استخدام كونفرسا",
        use_cases_description: "ممتاز للمحادثات الحساسة أو المنظمة أو الحالات المتطرفة."
      }
    },
    specs: {
      title: "المواصفات التقنية",
      description: "مبني على بنية تحتية قوية وقابلة للتوسع لتجارب صوت عالية الأداء.",
      cards: {
        technical: {
          title: "المواصفات التقنية",
          description: "بنية تحتية قوية وقابلة للتوسع ومنخفضة الكمون."
        },
        security: {
          title: "الأمان والامتثال",
          description: "حماية البيانات وضوابط الوصول بأفضل الممارسات."
        },
        user_management: {
          title: "إدارة المستخدمين",
          description: "أدوار دقيقة وأذونات للفرق."
        }
      }
    },
    additional_features: {
      title: "ميزات إضافية",
      cards: {
        automation_workflows: {
          title: "سير عمل الأتمتة",
          description: "دمج وكلاء الصوت فائقة الواقعية مع أتمتة نمط n8n أو Make.com في منصة موحدة. بديل لأتمتة VAPI.ai مع تكامل صوت ذكي أفضل."
        },
        telephony: {
          title: "تكامل الهاتف",
          description: "الاتصال بـ SIP/Carriers للمكالمات الواردة والصادرة."
        },
        agent_creation: {
          title: "إنشاء الوكلاء",
          description: "إنشاء وكلاء مع قوالب وحواجز حماية."
        },
        support: {
          title: "دعم 24/7",
          description: "دعم العملاء والمساعدة التقنية على مدار الساعة."
        }
      }
    },
    audio_samples: {
      title: "عينات الصوت الذكي"
    },
    comparison: {
      title: "مقارنة حلول أتمتة الصوت",
      headers: {
        features: "الميزات",
        voice_cake: "فويز كيك",
        vapi_elevenlabs: "فابي / إلفن لابس",
        amazon_google_azure: "أمازون / جوجل / أزور"
      },
      features: {
        unified_speech: "كلام موحد للكلام",
        sub_250ms: "كمون أقل من 250 مللي ثانية",
        all_in_one_pricing: "تسعير شامل",
        expressive_voices: "50+ صوت معبر",
        real_time_analytics: "تحليلات في الوقت الفعلي",
        emotion_reasoning: "العاطفة والمنطق",
        webrtc_streaming: "بث ويب آر تي سي",
        no_hidden_fees: "لا توجد رسوم خفية",
        free_minutes: "5 دقائق مجانية شهرياً",
        volume_discounts: "خصومات على الحجم",
        automation: "الأتمتة",
        no_code_friendly: "بدون كود / صديق للمطورين"
      }
    },
    competitor_comparison: {
      title: "لماذا تختار فويز كيك على فابي.أي، ماك.كوم و n8n؟",
      vapi: {
        title: "مقابل فابي.أي",
        points: [
          "منصة أتمتة صوت موحدة",
          "تكامل CRM وواتساب وSMS مدمج",
          "هيكل تسعير أكثر بأسعار معقولة",
          "سير عمل أتمتة بدون كود",
          "دعم عملاء أفضل"
        ]
      },
      make: {
        title: "مقابل ماك.كوم",
        points: [
          "متخصص في أتمتة الصوت الذكي",
          "وكلاء صوت فائقة الواقعية",
          "أدوات سير عمل خاصة بالصوت",
          "جودة صوت وكمون أفضل",
          "نهج تصميم يركز على الصوت"
        ]
      },
      n8n: {
        title: "مقابل n8n",
        points: [
          "إعداد أتمتة صوت أبسط",
          "قوالب صوت ذكي مسبقة البناء",
          "واجهة محسنة للصوت",
          "نشر أسرع",
          "فريق دعم خاص بالصوت"
        ]
      }
    },
    pricing: {
      title: "اختر خطة فويز كيك",
      subtitle: "اختر خطتك",
      tabs: {
        conversa: "فويز كيك كونفرسا",
        empth: "فويز كيك إمبث"
      }
    },
    resources: {
      title: "الموارد",
      documentation: {
        title: "الوثائق",
        description: "أدلة API كاملة ودروس تعليمية"
      },
      faq: {
        title: "الأسئلة الشائعة",
        description: "أسئلة وأجوبة شائعة"
      }
    },
    contact: {
      title: "اتصل بنا",
      form: {
        full_name: "الاسم الكامل *",
        email: "البريد الإلكتروني *",
        phone: "رقم الهاتف",
        message: "الرسالة *",
        send_message: "إرسال الرسالة"
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if translation not found
          }
        }
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
