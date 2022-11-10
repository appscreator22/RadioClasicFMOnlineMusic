import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Classic FM",
            artist: "ClassicFM",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://media-ice.musicradio.com/ClassicFMMP3",
            active: true,
        },
        {
            name:"Accent 4",
            artist: "Accent4",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://str0.creacast.com/accent4",
            active: false,
        },
        {
            name:"Radio Mozartt",
            artist: "RadioMozartt",
            cover: "https://img.freepik.com/foto-gratis/fondo-musica-o-podcast-auriculares-taza-cafe-mesa-azul-plana-vista-superior-plana_501050-983.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://streamingv2.shoutcast.com/Radio-Mozart",
            active: false,
        },
        {
            name:"Symphony 924 ",
            artist: "Symphony924",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://22903.live.streamtheworld.com/SYMPHONY924AAC.aac?dist=onlineradiobox",
            active: false,
        },
        {
            name:"Radio Apolo",
            artist: "RadioApolo",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://hermes.bcs-systems.de/apolloradio_simulcast_192k_mp3",
            active: false,
        },
        {
            name:"Klassik Radio - Pure Mozartt",
            artist: "KlassikRadio-PureMozartt",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://klassikr.streamabc.net/klr-puremozart-mp3-128-9628333",
            active: false,
        },
        {
            name:"Radio Symphony",
            artist: "RadioSymphony",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://streaming.radiostreamlive.com/radiosymphony_devices",
            active: false,
        },
        {
            name:"Radio Classique",
            artist: "RadioClassique",
            cover: "https://img.freepik.com/vector-gratis/dia-mundial-radio-diseno-plano_23-2148802732.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://listen.radioking.com/radio/228241/stream/271810",
            active: false,
        },
        {
            name:"For Kids Classical",
            artist: "ForKidsClassical",
            cover: "https://img.freepik.com/vector-gratis/marco-neon-vivo-aire_23-2148758076.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://drive.uber.radio/uber/forkidzclassical/icecast.audio",
            active: false,
        },
        {
            name:"Classical FM",
            artist: "ClassicalFM",
            cover: "https://img.freepik.com/vector-gratis/texto-plano-dia-mundial-radio_23-2148825802.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://prod-50-19-164-38.wostreaming.net/mzmedia-cfmzfmmp3-ibc2?session-id=11edd2e464c7d4a1191c894132b6c656",
            active: false,
        },
        {
            name:"Positively Baroque",
            artist: "PositivelyBaroque",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://play.organlive.com:7020/128",
            active: false,
        },
    ];
}

export default chillHop;


