const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_LAUNCH, datasourceLaunch);
        }
        let speakOutput = 'Bienvenido al Asistente Azul, que categoria quiere elegir: Hogar o Educacion.';
        let repromtText = 'Si no sabe que hacer, diga Ayuda.';
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromtText)
            .getResponse();
    }
};
//aqui recibe la categoria Hogar
const CategoriaHogarIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaHogarIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_HOGAR, datasourceHogar);
        }
        const speakOutput = `¿Qué tareas quieres realizar, higiene personal, del hogar o comida?, para escoger otra categoria diga <say-as interpret-as="cardinal">alexa educación</say-as>.`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};
//aqui va subcategoria 1
const CategoriaHogarUnoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaHogarUnoIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_HOGAR_1, datasourceHogar1);
        }
        const speakOutput = `¿Qué quieres hacer?, desayunar, preparar tu lonchera o hacer un sandwich, para regresar diga <say-as interpret-as="cardinal">alexa quiero hogar</say-as>`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};

//aqui va subcategoria 2
const CategoriaHogarDosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaHogarDosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_HOGAR_2, datasourceHogar2);
        }
        const speakOutput = `¿Qué quieres hacer?, lavarte los dientes, lavarte las manos, vestirte o cepillar tu cabello, para regresar diga <say-as interpret-as="cardinal">alexa quiero hogar</say-as>`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};
//aqui va subcategoria 3
const CategoriaHogarTresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaHogarTresIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_HOGAR_3, datasourceHogar3);
        }
        const speakOutput = `¿Qué quieres hacer?, tender tu cama, limpiar tu habitación, poner la mesa, recoger la mesa, alimentar mascotas, sacar la basura, limpiar tu habitación, guardar la ropa, alistar tu ropa o hacer la mochila, para regresar diga <say-as interpret-as="cardinal">alexa quiero hogar</say-as>`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};

//aqui va cada tarea del hogar, aqui se usan los intents particulares de cada tarea
//tender cama
const TenderCamaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TenderCamaIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_TENDER_CAMA, datasourceTenderCama);
        }
        let speakOutput = ``;
        for (var i = 0; i < tenderCama.length; i++) {
            speakOutput += `${tenderCama[i].paso} <break time="1s"/> `;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal"> alexa tender cama</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
//lavar dientes
const LavarDientesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LavarDientesIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_LAVAR_DIENTES, datasourceLavarDientes);
        }
        let speakOutput=``;
        for (var i = 0; i < lavarDientes.length; i++) {
            speakOutput += `${lavarDientes[i].paso} <break time="1s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa higiene personal</say-as> para repetir diga <say-as interpret-as="cardinal">alexa lavar dientes</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//lavar manos
const LavarManosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LavarManosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_LAVAR_MANOS, datasourceLavarManos);
        }
        let speakOutput=``;
        for (var i = 0; i < lavarManos.length; i++) {
            speakOutput += `${lavarManos[i].paso} <break time="1.5s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa higiene personal</say-as> para repetir diga <say-as interpret-as="cardinal">alexa lavar manos</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//vestirse
const VestirseIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'vestirseIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_VESTIRSE, datasourceVestirse);
        }
        let speakOutput=``;
        for (var i = 0; i < vestirse.length; i++) {
            speakOutput += `${vestirse[i].paso} <break time="0.5s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa higiene personal</say-as> para repetir diga <say-as interpret-as="cardinal">alexa vestirse</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//hacer tu mochila
const HacerMochilaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'mochilaIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_HACER_MOCHILA, datasourceHacerMochila);
        }
        let speakOutput=``;
        for (var i = 0; i < hacerMochila.length; i++) {
            speakOutput += `${hacerMochila[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa hacer mochila</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//cepillar tu cabello
const CepillarCabelloIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'peinarseIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_PEINARSE, datasourcePeinarse);
        }
        let speakOutput=``;
        for (var i = 0; i < peinarse.length; i++) {
            speakOutput += `${peinarse[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa higiene personal</say-as> para repetir diga <say-as interpret-as="cardinal">alexa peinarse</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//desayunar o cambiar por otra actividad ... 
const DesayunarIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'desayunarIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_DESAYUNAR, datasourceDesayunar);
        }
        let speakOutput=``;
        for (var i = 0; i < desayunar.length; i++) {
            speakOutput += `${desayunar[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa comida</say-as> para repetir diga <say-as interpret-as="cardinal">alexa desayunar</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//limpiar tu cuarto
const LimpiarCuartoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'limpiarCuarto';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_LIMPIAR_CUARTO, datasourceLimpiarCuarto);
        }
        let speakOutput=``;
        for (var i = 0; i < limpiarCuarto.length; i++) {
            speakOutput += `${limpiarCuarto[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa limpiar cuarto</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};

//poner la mesa
const PonerLaMesaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ponerMesa';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_PONER_MESA, datasourcePonerMesa);
        }
        let speakOutput=``;
        for (var i = 0; i < ponerMesa.length; i++) {
            speakOutput += `${ponerMesa[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa poner mesa</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};

//recoger la mesa
const RecogerMesaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'recogerMesa';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_RECOGER_MESA, datasourceRecogerMesa);
        }
        let speakOutput=``;
        for (var i = 0; i < recogerMesa.length; i++) {
            speakOutput += `${recogerMesa[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa recoger mesa</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//guardar ropa
const GuardarRopaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'guardarRopaIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_GUARDAR_ROPA, datasourceGuardarRopa);
        }
        let speakOutput=``;
        for (var i = 0; i < guardarRopa.length; i++) {
            speakOutput += `${guardarRopa[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa guardar ropa</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//preparar lonchera
const PrepararLoncheraIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'loncheraIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_LONCHERA, datasourceLonchera);
        }
        let speakOutput=``;
        for (var i = 0; i < lonchera.length; i++) {
            speakOutput += `${lonchera[i].paso} <break time="0.3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa alimentacion</say-as> para repetir diga <say-as interpret-as="cardinal">alexa desayunar</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//hacer sandwich desde aqui verificar tiempos
const HacerSandwichIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'hacerSandwich';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_SANDWICH, datasourceSandwich);
        }
        let speakOutput=``;
        for (var i = 0; i < hacerSandwich.length; i++) {
            speakOutput += `${hacerSandwich[i].paso} <break time="0.3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa alimentacion</say-as> para repetir diga <say-as interpret-as="cardinal">alexa hacer sandwich</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
// alimentar mascotas
const AlimentarMascotasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'alimentarMascota';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_MASCOTA, datasourceMascota);
        }
        let speakOutput=``;
        for (var i = 0; i < alimentarMascotas.length; i++) {
            speakOutput += `${alimentarMascotas[i].paso} <break time="0.3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa alimentar mascota</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//alistar ropa
const AlistarRopaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'alistarRopaIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_ALISTAR_ROPA, datasourceAlistarRopa);
        }
        let speakOutput=``;
        for (var i = 0; i < alistarRopa.length; i++) {
            speakOutput += `${alistarRopa[i].paso} <break time="0.3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa alistar ropa</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//sacar basura
const SacarBasuraIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'sacarBasuraIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_SACAR_BASURA, datasourceSacarBasura);
        }
        let speakOutput=``;
        for (var i = 0; i < sacarBasura.length; i++) {
            speakOutput += `${sacarBasura[i].paso} <break time="0.8s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa tareas del hogar</say-as> para repetir diga <say-as interpret-as="cardinal">alexa sacar basura</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};

//aqui recibe la categoria educacion
const CategoriaEducacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaEducacionIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_EDUCACION, datasourceEducacion);
        }
        const speakOutput = `¿Qué sección quieres elegir, aprendizaje, motricidad o fonetización?.`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};
//aqui va subcategoria 1
const CategoriaEducacionUnoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaEducacionUnoIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_EDUCACION_UNO, datasourceEducacionUno);
        }
        const speakOutput = `¿Qué quieres hacer?, armar un rompecabezas, un juego matemático, un juego de animales, un juego de colores, un juego de numeros, un juego de valores, un juego de emociones, un juego de profesiones, un juego de oficios, hacer la tarea o un cuenta cuentos.`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};
//aqui va subcategoria 2
const CategoriaEducacionDosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaEducacionDosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_EDUCACION_DOS, datasourceEducacionDos);
        }
        const speakOutput = `¿Qué quieres hacer?, aprender el alfabeto o verbos .`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};
//aqui va subcategoria 3
const CategoriaEducacionTresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CategoriaEducacionTresIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_EDUCACION_TRES, datasourceEducacionTres);
        }
        const speakOutput = `¿Qué quieres hacer?, coordinación superior o coordinación inferior.`;
        let repromptText = '¿Qué quieres hacer?'
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};

//aqui va cada tarea del educacion, aqui se usan los intents particulares de cada tarea
//rompecabezas
const RompecabezasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'rompecabezasIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_ROMPECABEZAS, datasourceRompecabezas);
        }
        let speakOutput=``;
        for (var i = 0; i < rompecabezas.length; i++) {
            speakOutput += `${rompecabezas[i].paso} <break time="0.3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa rompecabezas</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//Vas good mennnn
//matematicas checar lo de la salida multimodal response porque diablos dice ganaste.
let temp = 0;
const DOCUMENT_ID_MATEMATICAS = "templateAprendizaje";
let datasourceMatematicas = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/JzlSZeI.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const problemas = [
    {
        problema:"10 + 1",
        valor:"once"
    },
    {
        problema:"5 + 7",
        valor:"doce"
    },
    {
        problema:"10 + 11",
        valor:"veintiuno"
    },
    {
        problema:"6 + 6",
        valor:"doce"
    },
    {
        problema:"3 + 11",
        valor:"catorce"
    },
    {
        problema:"4 + 15",
        valor:"diecinueve"
    },
    {
        problema:"11 + 2",
        valor:"trece"
    },
    {
        problema:"8 + 10",
        valor:"dieciocho"
    },
    {
        problema:"9 + 5",
        valor:"catorce"
    },
    {
        problema:"10 + 5",
        valor:"quince"
    },
    {
        problema:"16 - 3",
        valor:"trece"
    },
    {
        problema:"20 - 9",
        valor:"once"
    },
    {
        problema:"16 - 1",
        valor:"quince"
    },
    {
        problema:"21 - 9",
        valor:"doce"
    },
    {
        problema:"50 - 31",
        valor:"diecinueve"
    },
    {
        problema:"30 - 15",
        valor:"quince"
    },
    {
        problema:"35 - 10",
        valor:"veinticinco"
    },
    {
        problema:"23 - 1",
        valor:"veintidos"
    },
    {
        problema:"18 - 2",
        valor:"dieciseis"
    },
    {
        problema:"100 - 81",
        valor:"diecinueve"
    },
    {
        problema:"1 * 12",
        valor:"doce"
    },
    {
        problema:"4 * 3",
        valor:"doce"
    },
    {
        problema:"3 * 5",
        valor:"quince"
    },
    {
        problema:"4 * 4",
        valor:"dieciseis"
    },
    {
        problema:"5 * 5",
        valor:"veinticinco"
    },
    {
        problema:"6 * 2",
        valor:"doce"
    },
    {
        problema:"7 * 5",
        valor:"treinta y cinco"
    },
    {
        problema:"8 * 2",
        valor:"dieciseis"
    },
    {
        problema:"9 * 4",
        valor:"trenita y seis"
    },
    {
        problema:"9 * 5",
        valor:"cuarenta y cinco"
    }
]
// Generate a number between 0 and x
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
const MatematicasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'matematicasIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_MATEMATICAS, datasourceMatematicas);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Problema. ${problemas[0].problema} ?`;
        const attributes = { currentScore: 0 };
        temp = 0;
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
function getSlotValue(slot) {
  if (!slot.value) {
    return "";
  }
  let value = slot.value;
  let resolution =
    slot.resolutions &&
    slot.resolutions.resolutionsPerAuthority &&
    slot.resolutions.resolutionsPerAuthority.length > 0
      ? slot.resolutions.resolutionsPerAuthority[0]
      : null;
  if (resolution && resolution.status.code === "ER_SUCCESS_MATCH") {
    value = resolution.values[0].value.name;
  }
  return value;
}
const MatematicasRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'matematicasRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.valor));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (problemas[temp].valor === valorNew) {
            console.log('aqui llego G');
            if (sessionAttributes.currentScore >= 10) {
                  let newDataSource = {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://i.imgur.com/KQJYiCA.jpg",
                                    "foregroundImageLocation": "bottom",
                                    "foregroundImageSource": "",
                                    "headerAttributionImage": "",
                                    "textAlignment": "center",
                                    "titleText": `Felicidades <br/> tuviste ${sessionAttributes.currentScore} problemas correctos.`
                                }
                            }
                        };
                let aplDirective = createDirectivePayload(DOCUMENT_ID_MATEMATICAS, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Felicidades Ganaste tuviste ${sessionAttributes.currentScore} problemas correctos, para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa matematicas</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 0; i < 30; i++){
                        if(temp === i)
                        {
                            let flag = i === 0 ? "11" 
                                     : i === 1 ? "12"
                                     : i === 2 ? "21"
                                     : i === 3 ? "12"
                                     : i === 4 ? "14"
                                     : i === 5 ? "19"
                                     : i === 6 ? "13"
                                     : i === 7 ? "18"
                                     : i === 8 ? "14"
                                     : i === 9 ? "15"
                                     : i === 10 ? "13"
                                     : i === 11 ? "11"
                                     : i === 12 ? "15"
                                     : i === 13 ? "12"
                                     : i === 14 ? "19"
                                     : i === 15 ? "15"
                                     : i === 16 ? "25"
                                     : i === 17 ? "22"
                                     : i === 18 ? "16"
                                     : i === 19 ? "19"
                                     : i === 20 ? "12"
                                     : i === 21 ? "12"
                                     : i === 22 ? "15"
                                     : i === 23 ? "16"
                                     : i === 24 ? "25"
                                     : i === 25 ? "12"
                                     : i === 26 ? "35"
                                     : i === 27 ? "16"
                                     : i === 28 ? "36"
                                     : "45";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": "https://i.imgur.com/KQJYiCA.jpg",
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": `Correcto <br/> ${problemas[i].problema} = ${flag}`
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_MATEMATICAS, newDataSource);
                            break;
                        }
                    }
                }
                sessionAttributes.currentScore++;
                temp = 0;
                let random = generateRandomInteger(30);
                temp = random;
                speechText = `Correcto.Aquí esta el siguiente problema. ${problemas[temp].problema} ?`;
                repromptText = `Aquí esta el problema. ${problemas[temp].problema}`;
            }
            
        }else {
            //aqui seria para cuando pierda
            if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
            {
                let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": "https://i.imgur.com/KQJYiCA.jpg",
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": `Vuelve a intentarlo, ${sessionAttributes.currentScore} preguntas correctas.`
                                    }
                                }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_MATEMATICAS, newDataSource);
            }
            speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_negative_response_02'/> Lo siento, no es correcto. Tuviste ${sessionAttributes.currentScore} preguntas correctamente; para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa matematicas</say-as>.`;
            repromptText = `para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa matematicas</say-as>.`;
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//
//
//
//
//
//
//aprende animales es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_ANIMALES = "templateAnimales";

const datasourceAnimales = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/1zGaVrA.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const animales = [
   {
       animal:"jirafa",
       repeticion:"jirafa"
   },
   {
       animal:"perro",
       repeticion:"perro"
   },
   {
       animal:"gato",
       repeticion:"gato"
   },
   {
       animal:"rana",
       repeticion:"rana"
   },
   {
       animal:"gallina",
       repeticion:"gallina"
   },
   {
       animal:"vaca",
       repeticion:"vaca"
   },
   {
       animal:"puerco",
       repeticion:"puerco"
   },
   {
       animal:"pez",
       repeticion:"pez"
   },
   {
       repeticion:"leon",
       animal:"leon"
   },
   {
       animal:"elefante",
       repeticion:"elefante"
   }
]
const AnimalesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'animalesIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_ANIMALES, datasourceAnimales);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de los siguientes animales. ${animales[0].animal}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const AnimalesRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'animalesRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.animal));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (animales[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === 9 && (animales[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/smKy88k.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_ANIMALES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa animales</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < 10; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                            let src = i === 1 ? "https://i.imgur.com/jHO9wF8.jpg" 
                                     : i === 2 ? "https://i.imgur.com/aCgxbN5.jpg"
                                     : i === 3 ? "https://i.imgur.com/HBLSnDe.jpg"
                                     : i === 4 ? "https://i.imgur.com/88z6L4T.jpg"
                                     : i === 5 ? "https://i.imgur.com/S6LcQhY.jpg"
                                     : i === 6 ? "https://i.imgur.com/xBKCFWO.jpg"
                                     : i === 7 ? "https://i.imgur.com/cyQMlHD.jpg"
                                     : i === 8 ? "https://i.imgur.com/2CRsPQf.jpg"
                                     : "https://i.imgur.com/DyaSPZb.jpg";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_ANIMALES, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${animales[sessionAttributes.currentScore].animal}`;
                repromptText = `Asi se hace, siguiente. ${animales[sessionAttributes.currentScore].animal}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === 9) && (animales[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                  let newDataSource = {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://i.imgur.com/smKy88k.jpg",
                                    "foregroundImageLocation": "bottom",
                                    "foregroundImageSource": "",
                                    "headerAttributionImage": "",
                                    "textAlignment": "center",
                                    "titleText": ""
                                }
                            }
                        };
                aplDirective = createDirectivePayload(DOCUMENT_ID_ANIMALES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa animales</say-as>.`;                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < 10; i++){
                            if(sessionAttributes.currentScore === i)
                            {
                                let src = i === 1 ? "https://i.imgur.com/jHO9wF8.jpg" 
                                         : i === 2 ? "https://i.imgur.com/aCgxbN5.jpg"
                                         : i === 3 ? "https://i.imgur.com/HBLSnDe.jpg"
                                         : i === 4 ? "https://i.imgur.com/88z6L4T.jpg"
                                         : i === 5 ? "https://i.imgur.com/S6LcQhY.jpg"
                                         : i === 6 ? "https://i.imgur.com/xBKCFWO.jpg"
                                         : i === 7 ? "https://i.imgur.com/cyQMlHD.jpg"
                                         : i === 8 ? "https://i.imgur.com/2CRsPQf.jpg"
                                         : "https://i.imgur.com/DyaSPZb.jpg";
                                let newDataSource = {
                                    "simpleTextTemplateData": {
                                        "type": "object",
                                        "properties": {
                                            "backgroundImage": `${src}`,
                                            "foregroundImageLocation": "bottom",
                                            "foregroundImageSource": "",
                                            "headerAttributionImage": "",
                                            "textAlignment": "center",
                                            "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_ANIMALES, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_ANIMALES, datasourceAnimales);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${animales[sessionAttributes.currentScore].animal}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${animales[sessionAttributes.currentScore].animal}`;
            }
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//aprende colores es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_COLORES = "templateColores";

const datasourceColores = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/pyf6ukN.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const colores = [
   {
       color:"rojo",
       repeticion:"rojo"
   },
   {
       color:"azul",
       repeticion:"azul"
   },
   {
       color:"amarillo",
       repeticion:"amarillo"
   },
   {
       color:"verde",
       repeticion:"verde"
   },
   {
       color:"naranja",
       repeticion:"naranja"
   },
   {
       color:"morado",
       repeticion:"morado"
   },
   {
       color:"rosa",
       repeticion:"rosa"
   },
   {
       color:"cafe",
       repeticion:"cafe"
   },
   {
       color:"gris",
       repeticion:"gris"
   },
   {
       color:"blanco",
       repeticion:"blanco"   
   },
   {
       color:"negro",
       repeticion:"negro"
   },
]
const ColoresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'coloresIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, datasourceColores);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de los siguientes colores. ${colores[0].color}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const ColoresRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'coloresRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.farbe));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (colores[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === colores.length-1 && (colores[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/jy5hgKk.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa colores</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < colores.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                            let src = i === 1 ? "https://i.imgur.com/zIbNwNW.jpg" 
                                     : i === 2 ? "https://i.imgur.com/SaOBqeI.jpg"
                                     : i === 3 ? "https://i.imgur.com/UO6MSP5.jpg"
                                     : i === 4 ? "https://i.imgur.com/rnFc5ed.jpg"
                                     : i === 5 ? "https://i.imgur.com/z2ZVnKN.jpg"
                                     : i === 6 ? "https://i.imgur.com/ExOYnpk.jpg"
                                     : i === 7 ? "https://i.imgur.com/r9dO4Dm.jpg"
                                     : i === 8 ? "https://i.imgur.com/tSVhb6H.jpg"
                                     : i === 9 ? "https://i.imgur.com/4bUF0E5.jpg"
                                     : "https://i.imgur.com/GKAGmah.jpg";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${colores[sessionAttributes.currentScore].color}`;
                repromptText = `Asi se hace, siguiente. ${colores[sessionAttributes.currentScore].color}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === colores.length-1) && (colores[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                  let newDataSource = {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://i.imgur.com/jy5hgKk.jpg",
                                    "foregroundImageLocation": "bottom",
                                    "foregroundImageSource": "",
                                    "headerAttributionImage": "",
                                    "textAlignment": "center",
                                    "titleText": ""
                                }
                            }
                        };
                aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa colores</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < colores.length+1; i++){
                            if(sessionAttributes.currentScore === i)
                            {
                                let src = i === 1 ? "https://i.imgur.com/zIbNwNW.jpg" 
                                         : i === 2 ? "https://i.imgur.com/SaOBqeI.jpg"
                                         : i === 3 ? "https://i.imgur.com/UO6MSP5.jpg"
                                         : i === 4 ? "https://i.imgur.com/rnFc5ed.jpg"
                                         : i === 5 ? "https://i.imgur.com/z2ZVnKN.jpg"
                                         : i === 6 ? "https://i.imgur.com/ExOYnpk.jpg"
                                         : i === 7 ? "https://i.imgur.com/r9dO4Dm.jpg"
                                         : i === 8 ? "https://i.imgur.com/tSVhb6H.jpg"
                                         : i === 9 ? "https://i.imgur.com/4bUF0E5.jpg"
                                         : "https://i.imgur.com/GKAGmah.jpg";
                                let newDataSource = {
                                    "simpleTextTemplateData": {
                                        "type": "object",
                                        "properties": {
                                            "backgroundImage": `${src}`,
                                            "foregroundImageLocation": "bottom",
                                            "foregroundImageSource": "",
                                            "headerAttributionImage": "",
                                            "textAlignment": "center",
                                            "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, datasourceColores);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${colores[sessionAttributes.currentScore].color}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${colores[sessionAttributes.currentScore].color}`;
            }
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//aprende numeros es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_NUMEROS = "templateNumeros";

const datasourceNumeros = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/gsiu79Z.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const numeros = [
   {
       numero:"uno",
       repeticion:"uno"
   },
   {
       numero:"dos",
       repeticion:"dos"
   },
   {
       numero:"tres",
       repeticion:"tres"
   },
   {
       numero:"cuatro",
       repeticion:"cuatro"
   },
   {
       numero:"cinco",
       repeticion:"cinco"
   },
   {
       numero:"seis",
       repeticion:"seis"
   },
   {
       numero:"siete",
       repeticion:"siete"
   },
   {
       numero:"ocho",
       repeticion:"ocho"
   },
   {
       numero:"nueve",
       repeticion:"nueve"
   },
   {
       numero:"cero",
       repeticion:"cero"   
   },
   {
       numero:"diez",
       repeticion:"diez"
   },
   {
       numero:"veinte",
       repeticion:"veinte"
   },
   {
       numero:"treinta",
       repeticion:"treinta"
   },
   {
       numero:"cuarenta",
       repeticion:"cuarenta"
   },
   {
       numero:"cincuenta",
       repeticion:"cincuenta"
   },
   {
       numero:"sesenta",
       repeticion:"sesenta"
   },
   {
       numero:"setenta",
       repeticion:"setenta"
   },
   {
       numero:"ochenta",
       repeticion:"ochenta"
   },
   {
       numero:"noventa",
       repeticion:"noventa"
   },
   {
       numero:"cien",
       repeticion:"cien"
   }
]
const NumerosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'numerosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_NUMEROS, datasourceNumeros);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de los siguientes numeros. ${numeros[0].numero}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const NumerosRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'numerosRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.num));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (numeros[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === numeros.length-1 && (numeros[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/enNM2Xz.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_COLORES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa numeros</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < numeros.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/KzeBydO.jpg" 
                                         : i === 2 ? "https://i.imgur.com/06twp6q.jpg"
                                         : i === 3 ? "https://i.imgur.com/76OMX9J.jpg"
                                         : i === 4 ? "https://i.imgur.com/F7RzS99.jpg"
                                         : i === 5 ? "https://i.imgur.com/3IO3bCE.jpg"
                                         : i === 6 ? "https://i.imgur.com/nHqezcB.jpg"
                                         : i === 7 ? "https://i.imgur.com/FXktYP0.jpg"
                                         : i === 8 ? "https://i.imgur.com/Cd0MjMT.jpg"
                                         : i === 9 ? "https://i.imgur.com/DbU0x11.jpg"
                                         : i === 10 ? "https://i.imgur.com/rn1XM4e.jpg" 
                                         : i === 11 ? "https://i.imgur.com/jOuUIlE.jpg"
                                         : i === 12 ? "https://i.imgur.com/5x1nG9l.jpg"
                                         : i === 13 ? "https://i.imgur.com/nOJIZi1.jpg"
                                         : i === 14 ? "https://i.imgur.com/98LqB9q.jpg"
                                         : i === 15 ? "https://i.imgur.com/tJucQ6S.jpg"
                                         : i === 16 ? "https://i.imgur.com/eNskPR1.jpg"
                                         : i === 17 ? "https://i.imgur.com/3mDfLEg.jpg"
                                         : i === 18 ? "https://i.imgur.com/OpFBdNk.jpg"
                                         : "https://i.imgur.com/ceoXPU7.jpg";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_NUMEROS, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${numeros[sessionAttributes.currentScore].numero}`;
                repromptText = `Asi se hace, siguiente. ${numeros[sessionAttributes.currentScore].numero}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === numeros.length-1) && (numeros[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                  let newDataSource = {
                      //modificar esto
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://i.imgur.com/enNM2Xz.jpg",
                                    "foregroundImageLocation": "bottom",
                                    "foregroundImageSource": "",
                                    "headerAttributionImage": "",
                                    "textAlignment": "center",
                                    "titleText": ""
                                }
                            }
                        };
                aplDirective = createDirectivePayload(DOCUMENT_ID_NUMEROS, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa numeros</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < numeros.length+1; i++){
                            if(sessionAttributes.currentScore === i)
                            {
                                let src = i === 1 ? "https://i.imgur.com/KzeBydO.jpg" 
                                         : i === 2 ? "https://i.imgur.com/06twp6q.jpg"
                                         : i === 3 ? "https://i.imgur.com/76OMX9J.jpg"
                                         : i === 4 ? "https://i.imgur.com/F7RzS99.jpg"
                                         : i === 5 ? "https://i.imgur.com/3IO3bCE.jpg"
                                         : i === 6 ? "https://i.imgur.com/nHqezcB.jpg"
                                         : i === 7 ? "https://i.imgur.com/FXktYP0.jpg"
                                         : i === 8 ? "https://i.imgur.com/Cd0MjMT.jpg"
                                         : i === 9 ? "https://i.imgur.com/DbU0x11.jpg"
                                         : i === 10 ? "https://i.imgur.com/rn1XM4e.jpg" 
                                         : i === 11 ? "https://i.imgur.com/jOuUIlE.jpg"
                                         : i === 12 ? "https://i.imgur.com/5x1nG9l.jpg"
                                         : i === 13 ? "https://i.imgur.com/nOJIZi1.jpg"
                                         : i === 14 ? "https://i.imgur.com/98LqB9q.jpg"
                                         : i === 15 ? "https://i.imgur.com/tJucQ6S.jpg"
                                         : i === 16 ? "https://i.imgur.com/eNskPR1.jpg"
                                         : i === 17 ? "https://i.imgur.com/3mDfLEg.jpg"
                                         : i === 18 ? "https://i.imgur.com/OpFBdNk.jpg"
                                         : "https://i.imgur.com/ceoXPU7.jpg";
                                let newDataSource = {
                                    "simpleTextTemplateData": {
                                        "type": "object",
                                        "properties": {
                                            "backgroundImage": `${src}`,
                                            "foregroundImageLocation": "bottom",
                                            "foregroundImageSource": "",
                                            "headerAttributionImage": "",
                                            "textAlignment": "center",
                                            "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_NUMEROS, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_NUMEROS, datasourceNumeros);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${numeros[sessionAttributes.currentScore].numero}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${numeros[sessionAttributes.currentScore].numero}`;
            }
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//aprende valores es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_VALORES = "templateValores";
const datasourceValores = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/nmY6mGB.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const valores = [
   {
       valor:"bondad",
       repeticion:"bondad"
   },
   {
       valor:"sinceridad",
       repeticion:"sinceridad"
   },
   {
       valor:"empatía",
       repeticion:"empatia"
   },
   {
       valor:"amor",
       repeticion:"amor"
   },
   {
       valor:"paciencia",
       repeticion:"paciencia"
   },
   {
       valor:"gratitud",
       repeticion:"gratitud"
   },
   {
       valor:"perdón",
       repeticion:"perdon"
   },
   {
       valor:"humildad",
       repeticion:"humildad"
   },
   {
       valor:"responsabilidad",
       repeticion:"responsabilidad"
   },
   {
       valor:"solidaridad",
       repeticion:"solidaridad"
   }
]
const ValoresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'valoresIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_VALORES, datasourceValores);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de los siguientes valores. ${valores[0].valor}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const ValoresRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'valoresRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.val));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (valores[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === valores.length-1 && (valores[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/bEWBO6X.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_VALORES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa valores</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < valores.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/CFcZZML.jpg" 
                                         : i === 2 ? "https://i.imgur.com/jpBmhF0.jpg"
                                         : i === 3 ? "https://i.imgur.com/dhZWE64.jpg"
                                         : i === 4 ? "https://i.imgur.com/101aPf3.jpg"
                                         : i === 5 ? "https://i.imgur.com/dOJH33i.jpg"
                                         : i === 6 ? "https://i.imgur.com/XKTfA8I.jpg"
                                         : i === 7 ? "https://i.imgur.com/NdsMg2d.jpg"
                                         : i === 8 ? "https://i.imgur.com/dr4l2aN.jpg"
                                         : "https://i.imgur.com/Gn2C4C8.jpg" 
                                         
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_VALORES, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${valores[sessionAttributes.currentScore].valor}`;
                repromptText = `Asi se hace, siguiente. ${valores[sessionAttributes.currentScore].valor}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === valores.length-1) && (valores[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/bEWBO6X.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_VALORES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa valores</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < valores.length+1; i++){
                            if(sessionAttributes.currentScore === i)
                            {
                                    let src = i === 1 ? "https://i.imgur.com/CFcZZML.jpg" 
                                             : i === 2 ? "https://i.imgur.com/jpBmhF0.jpg"
                                             : i === 3 ? "https://i.imgur.com/dhZWE64.jpg"
                                             : i === 4 ? "https://i.imgur.com/101aPf3.jpg"
                                             : i === 5 ? "https://i.imgur.com/dOJH33i.jpg"
                                             : i === 6 ? "https://i.imgur.com/XKTfA8I.jpg"
                                             : i === 7 ? "https://i.imgur.com/NdsMg2d.jpg"
                                             : i === 8 ? "https://i.imgur.com/dr4l2aN.jpg"
                                             : "https://i.imgur.com/Gn2C4C8.jpg" 
                                             
                                let newDataSource = {
                                    "simpleTextTemplateData": {
                                        "type": "object",
                                        "properties": {
                                            "backgroundImage": `${src}`,
                                            "foregroundImageLocation": "bottom",
                                            "foregroundImageSource": "",
                                            "headerAttributionImage": "",
                                            "textAlignment": "center",
                                            "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_VALORES, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_VALORES, datasourceValores);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${valores[sessionAttributes.currentScore].valor}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${valores[sessionAttributes.currentScore].valor}`;
            }
        }
        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//emociones es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_EMOCIONES = "templateEmocionesMR";
const datasourceEmociones = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/dCFRlze.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const emociones = [
   {
       emocion:"alegría",
       repeticion:"alegria"
   },
   {
       emocion:"enamorado",
       repeticion:"enamorado"
   },
   {
       emocion:"enojo",
       repeticion:"enojo"
   },
   {
       emocion:"sorpresa",
       repeticion:"sorpresa"
   },
   {
       emocion:"tristeza",
       repeticion:"tristeza"
   },
   {
       emocion:"aversión",
       repeticion:"aversion"
   },
   {
       emocion:"miedo",
       repeticion:"miedo"
   },
   {
       emocion:"vergüenza",
       repeticion:"vergüenza"
   }
]
const EmocionesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'emocionesIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_EMOCIONES, datasourceEmociones);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de las siguientes emociones. ${emociones[0].emocion}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const EmocionesRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'emocionesRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.emoc));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (emociones[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === emociones.length-1 && (emociones[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/bEWBO6X.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_EMOCIONES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa emociones</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < emociones.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/52ovSHJ.jpg" 
                                         : i === 2 ? "https://i.imgur.com/r26s7k1.jpg"
                                         : i === 3 ? "https://i.imgur.com/2E3Spnn.jpg"
                                         : i === 4 ? "https://i.imgur.com/eamVBMG.jpg"
                                         : i === 5 ? "https://i.imgur.com/5FgD43K.jpg"
                                         : i === 6 ? "https://i.imgur.com/0J1158L.jpg"
                                         : "https://i.imgur.com/OWnCPcS.jpg"
                                         
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_EMOCIONES, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${emociones[sessionAttributes.currentScore].emocion}`;
                repromptText = `Asi se hace, siguiente. ${emociones[sessionAttributes.currentScore].emocion}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === emociones.length-1) && (emociones[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/bEWBO6X.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_EMOCIONES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa emociones</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < emociones.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/52ovSHJ.jpg" 
                                         : i === 2 ? "https://i.imgur.com/r26s7k1.jpg"
                                         : i === 3 ? "https://i.imgur.com/2E3Spnn.jpg"
                                         : i === 4 ? "https://i.imgur.com/eamVBMG.jpg"
                                         : i === 5 ? "https://i.imgur.com/5FgD43K.jpg"
                                         : i === 6 ? "https://i.imgur.com/0J1158L.jpg"
                                         : "https://i.imgur.com/OWnCPcS.jpg"
                                         
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_EMOCIONES, newDataSource);
                            break;
                        }
                    }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_EMOCIONES, datasourceEmociones);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${emociones[sessionAttributes.currentScore].emocion}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${emociones[sessionAttributes.currentScore].emocion}`;
            }
        }
        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//juego de profesiones es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_PROFESIONES = "templateProfesiones";

const datasourceProfesiones = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/iGJVu20.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const profesiones = [
   {
       profesion:"Médico cirujano",
       repeticion:"medico cirujano"
   },
   {
       profesion:"Abogado",
       repeticion:"abogado"
   },
   {
       profesion:"Biólogo",
       repeticion:"biologo"
   },
   {
       profesion:"Psicólogo",
       repeticion:"psicologo"
   },
   {
       profesion:"Enfermero",
       repeticion:"enfermero"
   },
   {
       profesion:"Contador",
       repeticion:"contador"
   },
   {
       profesion:"Ingeniero",
       repeticion:"ingeniero"
   },
   {
       profesion:"Farmacólogo",
       repeticion:"farmacologo"
   },
   {
       profesion:"Paramédico",
       repeticion:"paramedico"
   },
   {
       profesion:"Administrador",
       repeticion:"administrador"
   }
]
const ProfesionesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'profesionesIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_PROFESIONES, datasourceProfesiones);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de las siguientes profesiones. ${profesiones[0].profesion}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const ProfesionesRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'profesionesRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.prof));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (profesiones[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === profesiones.length-1 && (profesiones[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/pFZIu8r.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_PROFESIONES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa profesiones</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < profesiones.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/knMuplE.jpg" 
                                         : i === 2 ? "https://i.imgur.com/4p6nv1w.jpg"
                                         : i === 3 ? "https://i.imgur.com/6VISOE6.jpg"
                                         : i === 4 ? "https://i.imgur.com/CPyJLon.jpg"
                                         : i === 5 ? "https://i.imgur.com/r0tx6HR.jpg"
                                         : i === 6 ? "https://i.imgur.com/L1gmgBi.jpg"
                                         : i === 7 ? "https://i.imgur.com/kLVHkFU.jpg"
                                         : i === 8 ? "https://i.imgur.com/XzOxEXi.jpg"
                                         : "https://i.imgur.com/d7nejGT.jpg"
                                         
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_PROFESIONES, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${profesiones[sessionAttributes.currentScore].profesion}`;
                repromptText = `Asi se hace, siguiente. ${profesiones[sessionAttributes.currentScore].profesion}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === profesiones.length-1) && (profesiones[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/pFZIu8r.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_PROFESIONES, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa profesiones</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < profesiones.length+1; i++){
                             if(sessionAttributes.currentScore === i)
                            {
                                    let src = i === 1 ? "https://i.imgur.com/knMuplE.jpg" 
                                             : i === 2 ? "https://i.imgur.com/4p6nv1w.jpg"
                                             : i === 3 ? "https://i.imgur.com/6VISOE6.jpg"
                                             : i === 4 ? "https://i.imgur.com/CPyJLon.jpg"
                                             : i === 5 ? "https://i.imgur.com/r0tx6HR.jpg"
                                             : i === 6 ? "https://i.imgur.com/L1gmgBi.jpg"
                                             : i === 7 ? "https://i.imgur.com/kLVHkFU.jpg"
                                             : i === 8 ? "https://i.imgur.com/XzOxEXi.jpg"
                                             : "https://i.imgur.com/d7nejGT.jpg"
                                             
                                let newDataSource = {
                                    "simpleTextTemplateData": {
                                        "type": "object",
                                        "properties": {
                                            "backgroundImage": `${src}`,
                                            "foregroundImageLocation": "bottom",
                                            "foregroundImageSource": "",
                                            "headerAttributionImage": "",
                                            "textAlignment": "center",
                                            "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_PROFESIONES, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_PROFESIONES, datasourceProfesiones);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${profesiones[sessionAttributes.currentScore].profesion}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${profesiones[sessionAttributes.currentScore].profesion}`;
            }
        }
        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//juego de oficios es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_OFICIOS = "templateOficios";

const datasourceOficios = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/eYNCK9S.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const oficios = [
   {
       oficio:"carpintero",
       repeticion:"carpintero"
   },
   {
       oficio:"electricista",
       repeticion:"electricista"
   },
   {
       oficio:"albañil",
       repeticion:"albañil"
   },
   {
       oficio:"policia",
       repeticion:"policia"
   },
   {
       oficio:"pintor",
       repeticion:"pintor"
   },
   {
       oficio:"pescador",
       repeticion:"pescador"
   },
   {
       oficio:"carnicero",
       repeticion:"carnicero"
   },
   {
       oficio:"agricultor",
       repeticion:"agricultor"
   },
   {
       oficio:"herrero",
       repeticion:"herrero"
   },
   {
       oficio:"bombero",
       repeticion:"bombero"
   }
]
const OficiosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'oficiosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_OFICIOS, datasourceOficios);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de los siguientes oficios. ${oficios[0].oficio}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const OficiosRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'oficiosRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.ofic));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (oficios[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === oficios.length-1 && (oficios[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/pFZIu8r.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_OFICIOS, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa oficios</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < oficios.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/RpjkiVP.jpg" 
                                         : i === 2 ? "https://i.imgur.com/oj8pkkL.jpg"
                                         : i === 3 ? "https://i.imgur.com/wL1MqNa.jpg"
                                         : i === 4 ? "https://i.imgur.com/eeoFL5X.jpg"
                                         : i === 5 ? "https://i.imgur.com/mzOwd8O.jpg"
                                         : i === 6 ? "https://i.imgur.com/3e5BCHS.jpg"
                                         : i === 7 ? "https://i.imgur.com/ylHeBsS.jpg"
                                         : i === 8 ? "https://i.imgur.com/uUxxqKX.jpg"
                                         : "https://i.imgur.com/14Qr3xu.jpg"
                                         
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_OFICIOS, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${oficios[sessionAttributes.currentScore].oficio}`;
                repromptText = `Asi se hace, siguiente. ${oficios[sessionAttributes.currentScore].oficio}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === oficios.length-1) && (oficios[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/pFZIu8r.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_OFICIOS, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa oficios</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < oficios.length+1; i++){
                            if(sessionAttributes.currentScore === i)
                            {
                                    let src = i === 1 ? "https://i.imgur.com/RpjkiVP.jpg" 
                                             : i === 2 ? "https://i.imgur.com/oj8pkkL.jpg"
                                             : i === 3 ? "https://i.imgur.com/wL1MqNa.jpg"
                                             : i === 4 ? "https://i.imgur.com/eeoFL5X.jpg"
                                             : i === 5 ? "https://i.imgur.com/mzOwd8O.jpg"
                                             : i === 6 ? "https://i.imgur.com/3e5BCHS.jpg"
                                             : i === 7 ? "https://i.imgur.com/ylHeBsS.jpg"
                                             : i === 8 ? "https://i.imgur.com/uUxxqKX.jpg"
                                             : "https://i.imgur.com/14Qr3xu.jpg"
                                             
                                let newDataSource = {
                                    "simpleTextTemplateData": {
                                        "type": "object",
                                        "properties": {
                                            "backgroundImage": `${src}`,
                                            "foregroundImageLocation": "bottom",
                                            "foregroundImageSource": "",
                                            "headerAttributionImage": "",
                                            "textAlignment": "center",
                                            "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_OFICIOS, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_OFICIOS, datasourceProfesiones);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${oficios[sessionAttributes.currentScore].oficio}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${oficios[sessionAttributes.currentScore].oficio}`;
            }
        }
        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//motriz superior es por pasos izi
const MotrizSuperiorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'motrizSuperiorIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_MOTRIZ_SUPERIOR, datasourceMotrizSuperior);
        }
        let speakOutput=``;
        for (var i = 0; i < motrizSuperior.length; i++) {
            speakOutput += `${motrizSuperior[i].paso} <break time="3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa motricidad</say-as> para repetir diga <say-as interpret-as="cardinal">alexa motriz superior</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
//motriz inferior es por pasos izi
const MotrizInferiorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'motrizInferiorIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_MOTRIZ_INFERIOR, datasourceMotrizInferior);
        }
        let speakOutput=``;
        for (var i = 0; i < motrizInferior.length; i++) {
            speakOutput += `${motrizInferior[i].paso} <break time="3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa motricidad</say-as> para repetir diga <say-as interpret-as="cardinal">alexa motriz inferior</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};
const DOCUMENT_ID_MOTRIZ_INFERIOR = "motrizInferiorMR";

const datasourceMotrizInferior = {
    "motrizInferiorDataSource": {}
};
//hacer tarea     es por pasos izi
const HacerTareaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'hacerTareaIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_HACER_TAREA, datasourceHacerTarea);
        }
        let speakOutput=``;
        for (var i = 0; i < hacerTarea.length; i++) {
            speakOutput += `${hacerTarea[i].paso} <break time="3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa hacer tarea</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};

const DOCUMENT_ID_HACER_TAREA = "hacerTareaMR";

const datasourceHacerTarea = {
    "hacerTareaDataSource": {}
};
//
//
//
//
//
//
//modales en la mesa es por pasos izi
const ModalesMesaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'modalesMesaIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_MODALES_MESA, datasourceModalesMesa);
        }
        let speakOutput=``;
        for (var i = 0; i < modalesMesa.length; i++) {
            speakOutput += `${modalesMesa[i].paso} <break time="3s"/>`;
        }
        speakOutput += `Para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa modales en la mesa</say-as>.`;
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
  }
};

const DOCUMENT_ID_MODALES_MESA= "modalesMesaMR";

const datasourceModalesMesa = {
     "modalesMesaDataSource": {}
};
//
//
//
//
//
//
//
//
//
//
//
//letras es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_ALFABETO = "templateAlfabeto";

const datasourceAlfabeto = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/sHt94kA.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const alfabeto = [
   {
       letra:"a",
       repeticion:"a"
   },
   {
       letra:"be",
       repeticion:"be"
   },
   {
       letra:"ce",
       repeticion:"ce"
   },
   {
       letra:"de",
       repeticion:"de"
   },
   {
       letra:"e",
       repeticion:"e"
   },
   {
       letra:"efe",
       repeticion:"efe"
   },
   {
       letra:"ge",
       repeticion:"ge"
   },
   {
       letra:"ache",
       repeticion:"ache"
   },
   {
       letra:"i",
       repeticion:"i"
   },
   {
       letra:"jota",
       repeticion:"jota"   
   },
   {
       letra:"ka",
       repeticion:"ka"
   },
   {
       letra:"ele",
       repeticion:"ele"
   },
   {
       letra:"eme",
       repeticion:"eme"
   },
   {
       letra:"ene",
       repeticion:"ene"
   },
   {
       letra:"eñe",
       repeticion:"eñe"
   },
   {
       letra:"o",
       repeticion:"o"
   },
   {
       letra:"pe",
       repeticion:"pe"
   },
   {
       letra:"cu",
       repeticion:"cu"
   },
   {
       letra:"erre",
       repeticion:"erre"
   },
   {
       letra:"ese",
       repeticion:"ese"
   },
   {
       letra:"te",
       repeticion:"te"
   },
   {
       letra:"u",
       repeticion:"u"
   },
   {
       letra:"uve",
       repeticion:"uve"
   },
   {
       letra:"doble u",
       repeticion:"doble u"
   },
   {
       letra:"equis",
       repeticion:"equis"
   },
   {
       letra:"y griega",
       repeticion:"y griega"
   },
   {
       letra:"zeta",
       repeticion:"zeta"
   }
]
const AlfabetoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'alfabetoIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_ALFABETO, datasourceAlfabeto);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Repite conmigo el nombre de los siguientes numeros. ${alfabeto[0].letra}`;
        const attributes = { currentScore: 0 };
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const AlfabetoRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'alfabetoRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.letter));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (numeros[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase()) {
            if (sessionAttributes.currentScore === alfabeto.length-1 && (alfabeto[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/4tqfBmJ.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_ALFABETO, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa fonetización</say-as> para repetir diga <say-as interpret-as="cardinal">alexa alfabeto</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                sessionAttributes.currentScore++;
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 1; i < alfabeto.length+1; i++){
                        if(sessionAttributes.currentScore === i)
                        {
                                let src = i === 1 ? "https://i.imgur.com/dprZjR0.jpg" 
                                         : i === 2 ? "https://i.imgur.com/9WuhkHH.jpg"
                                         : i === 3 ? "https://i.imgur.com/w7FDxWf.jpg"
                                         : i === 4 ? "https://i.imgur.com/5DFGSkw.jpg"
                                         : i === 5 ? "https://i.imgur.com/sfOrgg0.jpg"
                                         : i === 6 ? "https://i.imgur.com/oMF6MVN.jpg"
                                         : i === 7 ? "https://i.imgur.com/glqpCUD.jpg"
                                         : i === 8 ? "https://i.imgur.com/yuxeBSg.jpg"
                                         : i === 9 ? "https://i.imgur.com/TVVybmM.jpg"
                                         : i === 10 ? "https://i.imgur.com/KzvN8HS.jpg" 
                                         : i === 11 ? "https://i.imgur.com/5lsYgSu.jpg"
                                         : i === 12 ? "https://i.imgur.com/r6u5dq6.jpg"
                                         : i === 13 ? "https://i.imgur.com/sEar2uz.jpg"
                                         : i === 14 ? "https://i.imgur.com/YBSGN7V.jpg"
                                         : i === 15 ? "https://i.imgur.com/p479Jic.jpg"
                                         : i === 16 ? "https://i.imgur.com/pr3GczZ.jpg"
                                         : i === 17 ? "https://i.imgur.com/ZnkUdTs.jpg"
                                         : i === 18 ? "https://i.imgur.com/en0RRqa.jpg"
                                         : i === 19 ? "https://i.imgur.com/c7qkvWH.jpg"
                                         : i === 20 ? "https://i.imgur.com/BPpo5qp.jpg"
                                         : i === 21 ? "https://i.imgur.com/ChkvXuM.jpg"
                                         : i === 22 ? "https://i.imgur.com/GXuxUab.jpg"
                                         : i === 23 ? "https://i.imgur.com/JVfeZek.jpg"
                                         : i === 24 ? "https://i.imgur.com/Gu6h9gb.jpg"
                                         : i === 25 ? "https://i.imgur.com/bE8ORca.jpg"
                                         : "https://i.imgur.com/NLz70RG.jpg";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_ALFABETO, newDataSource);
                            break;
                        }
                    }
                }
                speechText = `Asi se hace, siguiente. ${alfabeto[sessionAttributes.currentScore].letra}`;
                repromptText = `Asi se hace, siguiente. ${alfabeto[sessionAttributes.currentScore].letra}`;
            }
            
        }else {
            if ((sessionAttributes.currentScore === alfabeto.length-1) && (alfabeto[sessionAttributes.currentScore].repeticion.toLowerCase() === valorNew.toLowerCase())) {
                  let newDataSource = {
                    "simpleTextTemplateData": {
                        "type": "object",
                        "properties": {
                            "backgroundImage": "https://i.imgur.com/4tqfBmJ.jpg",
                            "foregroundImageLocation": "bottom",
                            "foregroundImageSource": "",
                            "headerAttributionImage": "",
                            "textAlignment": "center",
                            "titleText": ""
                        }
                    }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_ALFABETO, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Enhorabuena, recuerda si quieres reforzar tu conocimiento es importante seguir practicando, 
                siquieres regresar diga <say-as interpret-as="cardinal">alexa fonetización</say-as> para repetir diga <say-as interpret-as="cardinal">alexa alfabeto</say-as>.`;                
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    if(sessionAttributes.currentScore > 0)
                    {
                        for (let i = 1; i < alfabeto.length+1; i++){
                            if(sessionAttributes.currentScore === i)
                            {
                                let src = i === 1 ? "https://i.imgur.com/dprZjR0.jpg" 
                                         : i === 2 ? "https://i.imgur.com/9WuhkHH.jpg"
                                         : i === 3 ? "https://i.imgur.com/w7FDxWf.jpg"
                                         : i === 4 ? "https://i.imgur.com/5DFGSkw.jpg"
                                         : i === 5 ? "https://i.imgur.com/sfOrgg0.jpg"
                                         : i === 6 ? "https://i.imgur.com/oMF6MVN.jpg"
                                         : i === 7 ? "https://i.imgur.com/glqpCUD.jpg"
                                         : i === 8 ? "https://i.imgur.com/yuxeBSg.jpg"
                                         : i === 9 ? "https://i.imgur.com/TVVybmM.jpg"
                                         : i === 10 ? "https://i.imgur.com/KzvN8HS.jpg" 
                                         : i === 11 ? "https://i.imgur.com/5lsYgSu.jpg"
                                         : i === 12 ? "https://i.imgur.com/r6u5dq6.jpg"
                                         : i === 13 ? "https://i.imgur.com/sEar2uz.jpg"
                                         : i === 14 ? "https://i.imgur.com/YBSGN7V.jpg"
                                         : i === 15 ? "https://i.imgur.com/p479Jic.jpg"
                                         : i === 16 ? "https://i.imgur.com/pr3GczZ.jpg"
                                         : i === 17 ? "https://i.imgur.com/ZnkUdTs.jpg"
                                         : i === 18 ? "https://i.imgur.com/en0RRqa.jpg"
                                         : i === 19 ? "https://i.imgur.com/c7qkvWH.jpg"
                                         : i === 20 ? "https://i.imgur.com/BPpo5qp.jpg"
                                         : i === 21 ? "https://i.imgur.com/ChkvXuM.jpg"
                                         : i === 22 ? "https://i.imgur.com/GXuxUab.jpg"
                                         : i === 23 ? "https://i.imgur.com/JVfeZek.jpg"
                                         : i === 24 ? "https://i.imgur.com/Gu6h9gb.jpg"
                                         : i === 25 ? "https://i.imgur.com/bE8ORca.jpg"
                                         : "https://i.imgur.com/NLz70RG.jpg";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                        }
                                    }
                                };
                                aplDirective = createDirectivePayload(DOCUMENT_ID_ALFABETO, newDataSource);
                                break;
                            }
                        }
                    }
                    else
                    {
                        aplDirective = createDirectivePayload(DOCUMENT_ID_ALFABETO, datasourceAlfabeto);
                    }
                }
                speechText = `No exactamente, repite conmigo nuevamente. ${alfabeto[sessionAttributes.currentScore].letra}`;
                repromptText = `No exactamente, repite conmigo nuevamente. ${alfabeto[sessionAttributes.currentScore].letra}`;
            }
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Igual que el de estados.verbos en diferentes tiempo es de repetir lo que salga en pantalla, lo mismo que arriba, no va a haber perder o ganar, por lo que inicia con un animal y si contesta en el de siguiente inciso se muestra en newDataSource, cambia en que flag tambien tendra un url source de imagen
const DOCUMENT_ID_VERBOS = "templateVerbos";
let datasourceVerbos = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/Y6eY36k.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const verbo = [
    {
        verbos:"abro, en pasado indefinido.",
        valor:"abri"
    },
    {
        verbos:"aprendo, en futuro",
        valor:"aprendere"
    },
    {
        verbos:"bebo, en pasado indefinido.",
        valor:"bebi"
    },
    {
        verbos:"busco, en futuro",
        valor:"buscare"
    },
    {
        verbos:"camino, en pasado indefinido.",
        valor:"camine"
    },
    {
        verbos:"cierro, en futuro",
        valor:"cerrare"
    },
    {
        verbos:"cocino, en pasado indefinido.",
        valor:"cocine"
    },
    {
        verbos:"como, en futuro",
        valor:"comere"
    },
    {
        verbos:"digo, en pasado indefinido.",
        valor:"dije"
    },
    {
        verbos:"escribo, en futuro",
        valor:"escribire"
    },
    {
        verbos:"hablo, en pasado indefinido.",
        valor:"hable"
    },
    {
        verbos:"hago, en futuro",
        valor:"hare"
    },
    {
        verbos:"voy, en pasado indefinido.",
        valor:"fui"
    },
    {
        verbos:"juego, en futuro",
        valor:"jugare"
    },
    {
        verbos:"leo, en pasado indefinido.",
        valor:"lei"
    },
    {
        verbos:"pago, en futuro",
        valor:"pagare"
    },
    {
        verbos:"pienso, en pasado indefinido.",
        valor:"pense"
    },
    {
        verbos:"quiero, en futuro",
        valor:"querre"
    },
    {
        verbos:"salgo, en pasado indefinido.",
        valor:"sali"
    },
    {
        verbos:"soy, en futuro",
        valor:"sere"
    }
]
const VerbosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'verbosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_VERBOS, datasourceVerbos);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `Se le dira un verbo con sujeto yo, el cual debera de convertir al tiempo que se le indique. ${verbo[0].verbos} ?`;
        const attributes = { currentScore: 0 };
        temp = 0;
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const VerbosRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'verbosRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.verb));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (verbo[temp].valor === valorNew) {
            if (sessionAttributes.currentScore >= 10) {
                  let newDataSource = {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://i.imgur.com/HIGLska.jpg",
                                    "foregroundImageLocation": "bottom",
                                    "foregroundImageSource": "",
                                    "headerAttributionImage": "",
                                    "textAlignment": "center",
                                    "titleText": `Felicidades <br/> tuviste ${sessionAttributes.currentScore} preguntas correctas.`
                                }
                            }
                        };
                let aplDirective = createDirectivePayload(DOCUMENT_ID_VERBOS, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Felicidades Ganaste tuviste ${sessionAttributes.currentScore} preguntas correctas, 
                para regresar diga <say-as interpret-as="cardinal">alexa fonetización</say-as> para repetir diga <say-as interpret-as="cardinal">alexa verbos</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 0; i < 20; i++){
                        if(temp === i)
                        {
                            let flag = i === 0 ? "abrí" 
                                     : i === 1 ? "aprenderé"
                                     : i === 2 ? "bebí"
                                     : i === 3 ? "buscaré"
                                     : i === 4 ? "caminé"
                                     : i === 5 ? "cerraré"
                                     : i === 6 ? "cociné"
                                     : i === 7 ? "comeré"
                                     : i === 8 ? "dije"
                                     : i === 9 ? "escribiré"
                                     : i === 10 ? "hablé"
                                     : i === 11 ? "haré"
                                     : i === 12 ? "fuí"
                                     : i === 13 ? "jugaré"
                                     : i === 14 ? "leí"
                                     : i === 15 ? "pagaré"
                                     : i === 16 ? "pensé"
                                     : i === 17 ? "querré"
                                     : i === 18 ? "salí"
                                     : "seré";
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": "https://i.imgur.com/HIGLska.jpg",
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": `Correcto<br><br>${verbo[i].verbos} = ${flag}`
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_VERBOS, newDataSource);
                            break;
                        }
                    }
                }
                sessionAttributes.currentScore++;
                temp = 0;
                let random = generateRandomInteger(30);
                temp = random;
                speechText = `Correcto.Aquí esta el siguiente verbo. ${verbo[temp].verbos} ?`;
                repromptText = `Aquí esta el verbo. ${verbo[temp].verbos}`;
            }
            
        }else {
            //aqui seria para cuando pierda
            if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
            {
                let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": "https://i.imgur.com/g6cFyz6.jpg",
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                };
                aplDirective = createDirectivePayload( DOCUMENT_ID_VERBOS, newDataSource);
            }
            speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_negative_response_02'/> Lo siento, no es correcto. Tuviste ${sessionAttributes.currentScore} preguntas correctamente; 
            para regresar diga <say-as interpret-as="cardinal">alexa fonetización</say-as> para repetir diga <say-as interpret-as="cardinal">alexa verbos</say-as>.`;
            repromptText = `para regresar diga <say-as interpret-as="cardinal">alexa fonetización</say-as> para repetir diga <say-as interpret-as="cardinal">alexa verbos</say-as>.`;
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//
//
//
//
//
//
//
//
//
//
//Estados
const DOCUMENT_ID_ESTADOS = "estadosMR";

const datasourceEstados = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://i.imgur.com/vKqHCEB.jpg",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "",
            "headerAttributionImage": "",
            "textAlignment": "center",
            "titleText": ""
        }
    }
};
const estados = [
    {
        estado:"aguascalientes",
        repeticion:"aguascalientes"
    },
    {
        estado:"baja california",
        repeticion:"baja california"
    },
    {
        estado:"baja california sur",
        repeticion:"baja california sur"
    },
    {
        estado:"campeche",
        repeticion:"campeche"
    },
    {
        estado:"chiapas",
        repeticion:"chiapas"
    },
    {
        estado:"chihuahua",
        repeticion:"chihuahua"
    },
    {
        estado:"ciudad de méxico",
        repeticion:"ciudad de mexico"
    },
    {
        estado:"coahuila",
        repeticion:"coahuila"
    },
    {
        estado:"colima",
        repeticion:"colima"
    },
    {
        estado:"durango",
        repeticion:"durango"
    },
    {
        estado:"guanajuato",
        repeticion:"guanajuato"
    },
    {
        estado:"guerrero",
        repeticion:"guerrero"
    },
    {
        estado:"hidalgo",
        repeticion:"hidalgo"
    },
    {
        estado:"jalisco",
        repeticion:"jalisco"
    },
    {
        estado:"méxico",
        repeticion:"mexico"
    },
    {
        estado:"michoacán",
        repeticion:"michoacan"
    },
    {
        estado:"morelos",
        repeticion:"morelos"
    },
    {
        estado:"nayarit",
        repeticion:"nayarit"
    },
    {
        estado:"nuevo león",
        repeticion:"nuevo leon"
    },
    {
        estado:"oaxaca",
        repeticion:"oaxaca"
    },
    {
        estado:"puebla",
        repeticion:"puebla"
    },
    {
        estado:"querétaro",
        repeticion:"queretaro"
    },
    {
        estado:"quintana roo",
        repeticion:"quintana roo"
    },
    {
        estado:"san luis potosí",
        repeticion:"san luis potosi"
    },
    {
        estado:"sinaloa",
        repeticion:"sinaloa"
    },
    {
        estado:"sonora",
        repeticion:"sonora"
    },
    {
        estado:"tabasco",
        repeticion:"tabasco"
    },
    {
        estado:"tamaulipas",
        repeticion:"tamaulipas"
    },
    {
        estado:"tlaxcala",
        repeticion:"tlaxcala"
    },
    {
        estado:"veracruz",
        repeticion:"veracruz"
    },
    {
        estado:"yucatán",
        repeticion:"yucatan"
    },
    {
        estado:"zacatecas",
        repeticion:"zacatecas"
    }
]
const EstadosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'estadosIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_ESTADOS, datasourceEstados);
        }
        const attributesManager = handlerInput.attributesManager;
        const speakOutput = `${estados[0].estado} ?`;
        const attributes = { currentScore: 0 };
        temp = 0;
        attributesManager.setSessionAttributes(attributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .addDirective(aplDirective)
            .getResponse();
    }
};
const EstadosRespuestaIntentHandler = {
  canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'estadosRespuestas';
  },
  handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
        const sessionAttributes = attributesManager.getSessionAttributes();
        let valorNew = String(getSlotValue(handlerInput.requestEnvelope.request.intent.slots.state));
        let aplDirective = '';
        let speechText = '';
        let repromptText = '';
        if (estados[temp].repeticion === valorNew) {
            if (sessionAttributes.currentScore >= 10) {
                  let newDataSource = {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://i.imgur.com/enNM2Xz.jpg",
                                    "foregroundImageLocation": "bottom",
                                    "foregroundImageSource": "",
                                    "headerAttributionImage": "",
                                    "textAlignment": "center",
                                    "titleText": ""
                                }
                            }
                        };
                let aplDirective = createDirectivePayload(DOCUMENT_ID_ESTADOS, newDataSource);
                speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01'/> Felicidades sigue practicando para mejorar tu pronunciacion, para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa estados</say-as>.`;
                return responseBuilder.speak(speechText).addDirective(aplDirective).getResponse();
            }else{
                //aqui seria para la imagen que va
                if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
                {
                    for (let i = 0; i < 32; i++){
                        if(temp === i)
                        {
                            let src = i === 0 ? "https://i.imgur.com/9EFtWir.jpg" 
                                     : i === 1 ? "https://i.imgur.com/NnBOpdO.jpg"
                                     : i === 2 ? "https://i.imgur.com/tZw9zsV.jpg"
                                     : i === 3 ? "https://i.imgur.com/2HnarFy.jpg"
                                     : i === 4 ? "https://i.imgur.com/at7Yxgn.jpg"
                                     : i === 5 ? "https://i.imgur.com/KYX3Vs0.jpg"
                                     : i === 6 ? "https://i.imgur.com/Zn8QF6I.jpg"
                                     : i === 7 ? "https://i.imgur.com/Fx5jvnt.jpg"
                                     : i === 8 ? "https://i.imgur.com/pozp3TV.jpg"
                                     : i === 9 ? "https://i.imgur.com/f13v7vA.jpg"
                                     : i === 10 ? "https://i.imgur.com/rPrpbIv.jpg"
                                     : i === 11 ? "https://i.imgur.com/Ft6HNSy.jpg"
                                     : i === 12 ? "https://i.imgur.com/i3Nx4W4.jpg"
                                     : i === 13 ? "https://i.imgur.com/sEOEYjX.jpg"
                                     : i === 14 ? "https://i.imgur.com/uryHaDy.jpg"
                                     : i === 15 ? "https://i.imgur.com/7UiBPno.jpg"
                                     : i === 16 ? "https://i.imgur.com/yN5s6Jm.jpg"
                                     : i === 17 ? "https://i.imgur.com/KMoqgbZ.jpg"
                                     : i === 18 ? "https://i.imgur.com/hsIVC6p.jpg"
                                     : i === 19 ? "https://i.imgur.com/7OYIL2J.jpg"
                                     : i === 20 ? "https://i.imgur.com/Cwb30zV.jpg"
                                     : i === 21 ? "https://i.imgur.com/Plta28I.jpg"
                                     : i === 22 ? "https://i.imgur.com/llRz8at.jpg"
                                     : i === 23 ? "https://i.imgur.com/8ad0yMg.jpg"
                                     : i === 24 ? "https://i.imgur.com/yQyu8l9.jpg"
                                     : i === 25 ? "https://i.imgur.com/Oxao6GW.jpg"
                                     : i === 26 ? "https://i.imgur.com/sbymtYP.jpg"
                                     : i === 27 ? "https://i.imgur.com/LM15x0U.jpg"
                                     : i === 28 ? "https://i.imgur.com/qqXbp9k.jpg"
                                     : i === 29 ? "https://i.imgur.com/4UZ8YBx.jpg"
                                     : i === 30 ? "https://i.imgur.com/m61ARq9.jpg"
                                     : "https://i.imgur.com/8DzLSFl.jpg"
                            let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": `${src}`,
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText": ""
                                    }
                                }
                            };
                            aplDirective = createDirectivePayload(DOCUMENT_ID_ESTADOS, newDataSource);
                            break;
                        }
                    }
                }
                sessionAttributes.currentScore++;
                temp = 0;
                let random = generateRandomInteger(32);
                temp = random;
                speechText = `Correcto.Repite conmigo ${estados[temp].estado} ?`;
                repromptText = `Repite conmigo. ${estados[temp].estado}`;
            }
            
        }else {
            //aqui seria para cuando pierda
            if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL'])
            {
                let newDataSource = {
                                "simpleTextTemplateData": {
                                    "type": "object",
                                    "properties": {
                                        "backgroundImage": "https://i.imgur.com/EASc9E4.jpg",
                                        "foregroundImageLocation": "bottom",
                                        "foregroundImageSource": "",
                                        "headerAttributionImage": "",
                                        "textAlignment": "center",
                                        "titleText":  ""
                                    }
                                }
                };
                aplDirective = createDirectivePayload(DOCUMENT_ID_ESTADOS, newDataSource);
            }
            speechText = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_negative_response_02'/> Lo siento, no es la pronunciacion correcta, para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa estados</say-as>.`;
            repromptText = `para regresar diga <say-as interpret-as="cardinal">alexa aprendizaje</say-as> para repetir diga <say-as interpret-as="cardinal">alexa estados</say-as>.`;
        }

        return responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .addDirective(aplDirective)
            .getResponse();
    }
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_AYUDA, datasourceAyuda);
        }
        const speakOutput = 'El asistente azul, es  una aplicación para auxiliar a niños con autismo a llevar a cabo rutinas del hogar y/o educativas y generen hábitos sanos. Para elegir una categoria diga <say-as interpret-as="cardinal">hogar</say-as> o <say-as interpret-as="cardinal">educación</say-as>, para salir de la aplicación diga <say-as interpret-as="cardinal">alexa salir</say-as>.';
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        let aplDirective='';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
                aplDirective = createDirectivePayload(DOCUMENT_ID_SALIR, datasourceSalir);
        }
        const speakOutput = 'Hasta Luego!';
        return handlerInput.responseBuilder
            .addDirective(aplDirective)
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no se sobre eso, intente otra vez.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents
 * by defining them above, then also adding them to the request handler chain below
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve un problema haciendo lo que me pediste, intente otra vez.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CategoriaHogarIntentHandler,
        CategoriaHogarUnoIntentHandler,
        CategoriaHogarDosIntentHandler,
        CategoriaHogarTresIntentHandler,
        //aqui van lo del hogar
        TenderCamaIntentHandler,
        LavarDientesIntentHandler,
        LavarManosIntentHandler,
        HacerMochilaIntentHandler,
        VestirseIntentHandler,
        CepillarCabelloIntentHandler,
        DesayunarIntentHandler,
        LimpiarCuartoIntentHandler,
        PonerLaMesaIntentHandler,
        RecogerMesaIntentHandler,
        GuardarRopaIntentHandler,
        PrepararLoncheraIntentHandler,
        HacerSandwichIntentHandler,
        AlimentarMascotasIntentHandler,
        AlistarRopaIntentHandler,
        SacarBasuraIntentHandler,
        CategoriaEducacionIntentHandler,
        CategoriaEducacionUnoIntentHandler,
        CategoriaEducacionDosIntentHandler,
        CategoriaEducacionTresIntentHandler,
        //aqui van los de educacion
        RompecabezasIntentHandler,
        MatematicasIntentHandler,
        MatematicasRespuestaIntentHandler,
        AnimalesIntentHandler,
        AnimalesRespuestaIntentHandler,
        ColoresIntentHandler,
        ColoresRespuestaIntentHandler,
        NumerosIntentHandler,
        NumerosRespuestaIntentHandler,
        ValoresIntentHandler,
        ValoresRespuestaIntentHandler,
        EmocionesIntentHandler,
        EmocionesRespuestaIntentHandler,
        ProfesionesIntentHandler,
        ProfesionesRespuestaIntentHandler,
        OficiosIntentHandler,
        OficiosRespuestaIntentHandler,
        MotrizSuperiorIntentHandler,
        MotrizInferiorIntentHandler,
        HacerTareaIntentHandler,
        ModalesMesaIntentHandler,
        AlfabetoIntentHandler.
        AlfabetoRespuestaIntentHandler,
        VerbosIntentHandler,
        VerbosRespuestaIntentHandler,
        EstadosIntentHandler,
        EstadosRespuestaIntentHandler,
        //aqui van los reglamentarios por amazon
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();

//Template inicial

const DOCUMENT_ID_LAUNCH = "LaunchIntent";

const datasourceLaunch = {
    "launchIntentSource": {}
};

const DOCUMENT_ID_HOGAR = "HogarSource";

const datasourceHogar = {
    "hogarSource": {}
};

const DOCUMENT_ID_HOGAR_1 = "Hogar1Source";

const datasourceHogar1 = {
    "hogarSource1": {}
};

const DOCUMENT_ID_HOGAR_2 = "Hogar2Source";

const datasourceHogar2 = {
    "hogarSource2": {}
};

const DOCUMENT_ID_HOGAR_3 = "Hogar3Source";

const datasourceHogar3 = {
    "hogarSource3": {}
};

const DOCUMENT_ID_TENDER_CAMA = "TenderCama";

const datasourceTenderCama = {
    "tenderCamaDataSource": {}
};

const DOCUMENT_ID_LAVAR_DIENTES = "LavarDientes";

const datasourceLavarDientes = {
    "lavarDientesDataSource": {}
};

const DOCUMENT_ID_LAVAR_MANOS = "LavarManos";

const datasourceLavarManos = {
    "lavarManosDataSource": {}
};

const DOCUMENT_ID_VESTIRSE = "vestirseIntent";

const datasourceVestirse = {
    "vestirseDataSource": {}
};

const DOCUMENT_ID_HACER_MOCHILA = "hacerMochilaIntent";

const datasourceHacerMochila = {
    "hacerMochilaDataSource": {}
};

const DOCUMENT_ID_PEINARSE = "peinarseIntent";

const datasourcePeinarse = {
    "peinarseDataSource": {}
};

const DOCUMENT_ID_DESAYUNAR = "desayunarMrIntent";

const datasourceDesayunar = {
    "deayunarDataSource": {}
};

const DOCUMENT_ID_LIMPIAR_CUARTO = "limpiarCuarto";

const datasourceLimpiarCuarto = {
    "limpiarCuartoDataSource": {}
};

const DOCUMENT_ID_PONER_MESA = "ponerMesa";

const datasourcePonerMesa = {
    "ponerMesaDataSource": {}
};

const DOCUMENT_ID_RECOGER_MESA = "mesaRecogerIntent";

const datasourceRecogerMesa = {
    "recogerMesaDataSource": {}
};

const DOCUMENT_ID_GUARDAR_ROPA= "guardarRopa";

const datasourceGuardarRopa = {
    "guardarRopaDataSource": {}
};

const DOCUMENT_ID_LONCHERA = "loncheraIntent";

const datasourceLonchera = {
    "loncheraDataSource": {}
};

const DOCUMENT_ID_SANDWICH = "hacerSandwichMr";

const datasourceSandwich = {
    "hacerSandwichDataSource": {}
};

const DOCUMENT_ID_MASCOTA = "alimentarMascotasMr";

const datasourceMascota = {
    "alimentarMascotaDataSource": {}
};

const DOCUMENT_ID_ALISTAR_ROPA = "alistarRopaMr";

const datasourceAlistarRopa = {
    "alistarRopaDataSource": {}
};

const DOCUMENT_ID_SACAR_BASURA = "sacarBasura";

const datasourceSacarBasura = {
    "sacarBasuraDataSource": {}
};

const DOCUMENT_ID_EDUCACION = "EducacionIntent";

const datasourceEducacion = {
    "EducacionIntentSource": {}
};

const DOCUMENT_ID_EDUCACION_UNO = "EducacionIntentUno";

const datasourceEducacionUno = {
    "EducacionIntentSourceUno": {}
};
const DOCUMENT_ID_EDUCACION_DOS = "EducacionIntentDos";

const datasourceEducacionDos = {
    "EducacionIntentSourceDos": {}
};
const DOCUMENT_ID_EDUCACION_TRES= "EducacionIntentTres";

const datasourceEducacionTres = {
    "EducacionIntentSourceTres": {}
};

const DOCUMENT_ID_ROMPECABEZAS = "rompecabezasResponse";

const datasourceRompecabezas = {
    "rompecabezasDataSource": {}
};

const DOCUMENT_ID_AYUDA = "AyudaIntent";

const datasourceAyuda = {
    "AyudaIntentSource": {}
};

const DOCUMENT_ID_SALIR = "SalirIntent";

const datasourceSalir = {
    "SalirIntentSource": {}
};

//motriz superior
const DOCUMENT_ID_MOTRIZ_SUPERIOR = "templateMotrizSuperior";

const datasourceMotrizSuperior = {
    "motrizSuperiorDataSource": {}
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


let tenderCama = [
    {
        paso:"Paso 1: Retirar las sábanas y almohadas."
    },
    {
        paso:"Paso 2: Sacudir las sábanas y cambiar la funda de las almohadas."
    },
    {
        paso:"Paso 3: Colocar las sábanas, almohadas y demás complementos."
    },
    {
        paso:"Paso 4: Ubicar la almohada sobre el cubrecama."
    }
];

let lavarDientes = [
    {
        paso:"Paso 1: Abrir la llave del lavamanos."
    },
    {
        paso:"Paso 2: Mojar la punta del cepillo de dientes."
    },
    {
        paso:"Paso 3: Cerrar la llave del lavamanos."
    },
    {
        paso:"Paso 4: Destapar la pasta de dientes."
    },
    {
        paso:"Paso 5: Se pone una pequeña cantidad de pasta de dientes en las cerdas del cepillo."
    },
    {
        paso:"Paso 6: Tapar o cerrar la pasta de dientes."
    },
    {
        paso:"Paso 7: Cepillarse los dientes de arriba hacia abajo y los de abajo hacia arriba."
    },
    {
        paso:"Paso 8: Cepillarse los dientes por dentro hacia arriba y hacia abajo."
    },
    {
        paso:"Paso 9: Cepillarse las muelas,de delante hacia tras y de atras hacia adelante."
    },
    {
        paso:"Paso 10: Cepillarse la lengua de atras hacia adelante."
    },
    {
        paso:"Paso 11: Enjuagar el cepillo de dientes y dejar secar."
    },
    {
        paso:"Paso 12: Desechar el resto de saliva y pasta dental en el lavamanos."
    }
];

let lavarManos = [
    {
        paso:"Paso 1: Abrir la llave y mojarse las manos."
    },
    {
        paso:"Paso 2: Enjabonarse ambas manos."
    },
    {
        paso:"Paso 3: Frotar ambas palmas de las manos."
    },
    {
        paso:"Paso 4: Tallar la parte trasera de las palmas."
    },
    {
        paso:"Paso 5: Lavarse entre los dedos."
    },
    {
        paso:"Paso 6: Frotarse el interior de los dedos."
    },
    {
        paso:"Paso 7: Limpiar los pulgares."
    },
    {
        paso:"Paso 8: Rascar las palmas con tus dedos."
    },
    {
        paso:"Paso 9: Enjuagar las manos con agua."
    },
    {
        paso:"Paso 10: Secarse con una toalla."
    },
    {
        paso:"Paso 11: Cerrar la llave con la misma toalla."
    }
];

let vestirse = [
    {
        paso:"Paso 1: Quitarse la prenda inferior, la ropa interior, calzado y calcetines."
    },
    {
        paso:"Paso 2: Ponerse ropa interior."
    },
    {
        paso:"Paso 3: Ponerse calcetines."
    },
    {
        paso:"Paso 4: Ponerse prenda inferior, ya sea un pantalon, un short, falda, etc."
    },
    {
        paso:"Paso 5: Quitarse toda prenda superior."
    },
    {
        paso:"Paso 6: Ponerse prenda superior."
    },
    {
        paso:"Paso 7: En caso de hacer frío, abrigarse lo necesario."
    },
    {
        paso:"Paso 8: Ponerse calzado."
    },
    {
        paso:"Paso 9: Doblar la ropa que te haz quitado."
    }
];

let hacerMochila = [
    {
        paso:"Paso 1: Sacar todo de la mochila."
    },
    {
        paso:"Paso 2: Escoger que cosas quieres meter en tu mochila."
    },
    {
        paso:"Paso 3: Meter los objetos pequeños primero."
    },
    {
        paso:"Paso 4: Guardar objetos grandes en su espacio correspondiente."
    },
    {
        paso:"Paso 5: Los accesorios o articulos poco necesarios guardarse en los compartimientos no ocupados."
    }
];
let peinarse = [
    {
        paso:"Paso 1: Seleccionar el tipo de peine o cepillo."
    },
    {
        paso:"Paso 2: Cepillarse o peinarse desde la raiz hasta las puntas."
    },
    {
        paso:"Paso 3: No cepillarse muchas veces en el mismo lugar."
    },
    {
        paso:"Paso 4: En lugares donde existan nudos peinar de arriba para abajo."
    },
    {
        paso:"Paso 5: Al terminar, quitar el cabello que haya sobrado en el cepillo o peine."
    }
];
let desayunar = [
    {
        paso:"Paso 1: Dirigite a desayunar y sientate en tu lugar."
    },
    {
        paso:"Paso 2: Esperar en tu lugar hasta que te sirvan la comida."
    },
    {
        paso:"Paso 3: Comer masticando lo necesario a ritmo normal, no apresurado."
    },
    {
        paso:"Paso 4: Cuando termines, levanta tu plato, cubiertos y vazo y posteriormente llevalos al fregadero."
    }
];
let limpiarCuarto = [
    {
        paso:"Paso 1: Recoge todo lo que se encuentre fuera de lugar y ponlo en donde debe de estar."
    },
    {
        paso:"Paso 2: Con un plumero o un trapo desenpolva todas las superficies de la recamara."
    },
    {
        paso:"Paso 3: Con ayuda de una escoba barre el cuarto y deposita la basura en un recogedor, posterior a ello deposita la basura en un bote de basura."
    }
];
let ponerMesa = [
    {
        paso:"Paso 1: Poner los platos necesarios para cada persona en la mesa frente a donde se sentaran."
    },
    {
        paso:"Paso 2: Poner un vaso por cada persona en la mesa a un lado del plato."
    },
    {
        paso:"Paso 3: Poner cucharas del lado derecho de cada plato en la mesa."
    },
    {
        paso:"Paso 4: Poner tenedores del lado izquierdo de cada plato en la mesa."
    },
    {
        paso:"Paso 5: Poner cuchillos a un lado de cada cuchara en la mesa."
    },
    {
        paso:"Paso 6: Poner servilletas a un lado de cada cuchara en la mesa."
    },
    {
        paso:"Paso 7: Si se va a tomar té o café, poner una taza a lado de cada vaso en la mesa."
    },
    {
        paso:"Paso 8: Colocar la jarra con la bebida al centro de la mesa."
    }
];
let recogerMesa = [
    {
        paso:"Paso 1: La mesa se recoge ya que todos hayan acabado de comer."
    },
    {
        paso:"Paso 2: Apilar platos y llevarse al fregadero."
    },
    {
        paso:"Paso 3: Apilar vasos o tazas y llevarse al fregadero."
    },
    {
        paso:"Paso 4: Si se utilizo una jarra llevarla al fregadero."
    },
    {
        paso:"Paso 5: Agrupar todos los cubiertos y llevarse al fregadero."
    },
    {
        paso:"Paso 6: Con un trapo humedecido limpiar la mesa y con un trapo distinto que este seco, secar la mesa."
    }
];
let guardarRopa = [
    {
        paso:"Paso 1: Ya que la ropa se haya lavado y este seca se puede empezar a guardar."
    },
    {
        paso:"Paso 2: Agregarle un gancho a la ropa que lo necesite."
    },
    {
        paso:"Paso 3: La ropa que se ocupe doblar, doblela o dejela aparte.."
    },
    {
        paso:"Paso 4: Juntar cada calcetin con su otro par."
    },
    {
        paso:"Paso 5: La ropa interior se divide en integrantes del hogar y no se junta."
    },
    {
        paso:"Paso 6: Una vez terminado los pasos anteriores, llevar cada prenda a su dueño."
    }
]
let lonchera = [
    {
        paso:"Paso 1: Agarrar la lonchera y abrirla."
    },
    {
        paso:"Paso 2: Meter lo que vayas a comer dentro de la lonchera."
    },
    {
        paso:"Paso 3: Meter cuchara y o tenedor a la lonchera."
    },
    {
        paso:"Paso 4: Agarrar una botella de agua o alguna bebida y ponerla con la lonchera."
    },
    {
        paso:"Paso 5: Guardar servilletas o papel higienico en la lonchera."
    },
    {
        paso:"Paso 6: Una vez terminado los pasos anteriores, cerrar la lonchera."
    }  
]
let hacerSandwich = [
    {
        paso: "Necesitaras los siguientes ingredientes: dos rebanadas de pan, lechuga de cualquier tipo."
    },
    {
        paso: "Tambien necesitaras dos o tres rebanadas de jamón y cualquier tipo de queso en rebanadas."
    },
    {
        paso: "El último ingrediente que se ocupara es mayonesa, esta se usara para untar las caras del pan."
    },
    {
        paso: "Paso 1: Untar una pequeña cantidad de mayonesa en solo una cara de cada rebanada de pan."
    },
    {
        paso: "Paso 2: Sobre una cara del pan con mayonesa, colocar los trozos de lechuga que se quiera."
    },
    {
        paso: "Paso 3: Después, colocar sobre la lechuga los pedazos de queso que se quiera en el centro."
    },
    {
        paso: "Paso 4: Colocar las rebanadas de jamón sobre las del queso, no importa si el jamón se sale un poco."
    },
    {
        paso: "Paso 5: Cortar en rodajas el tomate y colocar las que se quiera encima del jamón con cuidado."
    },
    {
        paso: "Paso 6: Una vez terminado de agregar los ingredientes, colocar la rebanada de pan restante sobre el tomate."
    }
]
let alimentarMascotas = [
    {
        paso: "Estas recomendaciones son generales, no sustituyen a las dichas por el veterinario."
    },
    {
        paso: "Coloca su comida y agua en un lugar tranquilo, de preferencia lejos de tentaciones."
    },
    {
        paso: "Servirle comida las veces que el veterinario haya recomendado, suelen ser de dos a tres comidas."
    },
    {
        paso: "Es importante que siempre tengan agua potable limpia para que no se deshidraten."
    },
    {
        paso: "Recuerda establecer horarios para comer, esto ayuda para saber a que hora haran del baño."
    },
    {
        paso: "No darles demasiada comida, ya que esto les puede llegar a ocasionar problemas de salud."
    },
    {
        paso: "Evitar dar más de un premio al día, no hacerlo podría afectar a tu mascota a largo plazo."
    }
]
let alistarRopa = [
    {
        paso: "Si quieres alistar tu uniforme, usa las prendas reglamentarias y omite del paso tres al seis."
    },
    {
        paso: "Paso 1: Elegir la ropa interior que se vaya a usar ese día, considere comodidad, ajuste, etc."
    },
    {
        paso: "Paso 2: Escoger un par de calcetines que te gusten o sean comodos, incluso puedes no usarlos."
    },
    {
        paso: "Paso 3: Seleccionar que prenda superior usaras, playera, camisa, polo, vestido, tu eliges."
    },
    {
        paso: "Paso 4: Escoger que prenda usaras sobre tus piernas, pantalón, shorts, pants, falda, tu eliges."
    },
    {
        paso: "Paso 5: Selecciona que accesorios usaras, bufandas, gorros, lentes, pulseras, collares, anillos, etc."
    },
    {
        paso: "Paso 6: Elige que quieres usar sobre tus pies, botas, zapatos, chanclas, tenis, botines, tu escoges."
    },
    {
        paso: "Paso 7: Por ultimo y de manera opcional, selecciona alguna chaqueta, chamarra o algo para cubrirte del frio en caso de que se necesite."
    }
]
let sacarBasura = [
    {
        paso: "Paso 1: Agarrar bolsas de basura, solo agarrar las necesarias.."
    },
    {
        paso: "Paso 2: Poner la basura de cada habitacion de la casa en bolsas de basura."
    },
    {
        paso: "Paso 3: Al finalizar, hacerle un nudo a cada bolsa lo mas apretado posible."
    },
    {
        paso: "Paso 4: Posterior a ello agrupar todas las bolsas cerca de la salida de la casa."
    },
    {
        paso: "Paso 5: Sacar las bolsas de basura y dejarlas en un bote o en el suelo."
    },
    {
        paso: "Paso 6: El dia que pase el camion de la basura, sacarlas a la calle antes de que pase."
    }
]
//Aqui empieza la seccion educacion FIGHTING!!! 16 mas
let rompecabezas = [
    {
        paso: "Estas son unas recomendaciones para armarlo de manera rapida."
    },
    {
        paso: "Dale vuelta arriba a todas las piezas para poder visualizarlas."
    },
    {
        paso: "Primero haz montones de colores y separa los bordes."
    },
    {
        paso: "Otra forma de organizar es por la forma de cada pieza."
    },
    {
        paso: "No te obsesiones con una ficha, continua con otra."
    },
    {
        paso: "Puedes empezar por armar el borde o el centro."
    }
]
//motriz superior
let motrizSuperior = [
    {
        paso: "Con su antebrazo sobre una mesa, deje que su mano cuelgue del lado de la mesa con la palma hacia abajo. Luego, mueva su mano hacia arriba y hacia abajo, doblando la muñeca. Cuando haya terminado, repita con la palma hacia arriba."
    },
    {
        paso: "Comience con la palma de la mano abierta, como si estuviera indicando el número 5. Luego, practique moviendo el pulgar hacia su dedo meñique, como si estuviera indicando el número 4. Continúe moviendo el pulgar a un lado y al otro entre estas 2 posiciones."
    },
    {
        paso: "Con los dedos aún entrelazados, doble suavemente la muñeca afectada hacia atrás y haga un buen estiramiento allí. Mantenga el estiramiento durante 20 segundos y suelte. Repita el mismo movimiento ahora con su otra muñeca."
    },
    {
        paso: "Estira ambos brazos a los lados, a nivel de los hombros y paralelos al piso. Haz un círculo enorme desde el frente hacia atrás. Levanta ambos hombros hacia tus orejas. Luego relájalos hacia abajo y atrás."
    },
    {
        paso: "Comience con una mano, puede ser la izquierda o la derecha, el dedo pulgar tendra que tocar la punta de cada dedo, empezando por el dedo meñique y terminando con el dedo indice; use la imagen para auziliarse."
    }
]
//motriz inferior
let motrizInferior = [
    {
        paso: "De pie, caminar hacia adelante y hacia atras con pasos cortos y largos el tiempo que sea requerido. Despues caminaras hacia adelante y hacia atras pero esta vez sera con pasos largos. Realizarse las veces necesarias."
    },
    {
        paso: "En posicion de sentadilla, extender los brazos hacia enfrente sin tocar el suelo. Simularas el salto de una rana, primero lanzando los brazos seguido por el brinco, la condicion para caer, es que aterrices en posicion de rana."
    },
    {
        paso: "De pie parase sobre las puntas de los pies, una vez hayas logrado mantenerte de puntas, deberas de caminar hacia adelante y hacia atras con pasos cortos o largos, la condicion es mantenerse de puntas en todo momento."
    },
    {
        paso: "De pie sin flexionar las piernas, tocar con las puntas de los dedos de las manos el suelo, y de ser posible con las palmas de las manos, esto mejorara tu flexibilidad y coordinacion. Realizarse las veces necesarias."
    },
    {
        paso: "Ponerse de pie y juntar ambos pies, se daran saltos hacia arriba, recuerda caer con las puntas de os pies, evitar a toda costa caer con los talones. Realizarse las veces necesarias. Estas activiudades pueden beneficiar al usuario, sin embargo, se recomienda la supervision del mismo en caso de que este requiera asistencia."
    }
]
//hacer tarea
let hacerTarea = [
    {
        paso: "Encuentre un lugar en la casa donde se harán las tareas."
    },
    {
        paso: "Contar con lo necesario para que realices tus tareas."
    },
    {
        paso: "Establecer un horario en el dia para hacer la tarea. "
    },
    {
        paso: "Recuerda descansar cada que lo necesites, puede ser cada cierto tiempo o cada que finalices una actividad."
    }
]
let modalesMesa = [
    {
        paso: "Comer cuando todos esten en la mesa."
    },
    {
        paso: "Usar los curbiertos apropiadamente."
    },
    {
        paso: "No hablar con la boca llena de comida."
    },
    {
        paso: "No raspar la superficie del plato."
    },
    {
        paso: "No tirar comida fuera del plato."
    },
    {
        paso: "Comer sentado con buena postura."
    }
]