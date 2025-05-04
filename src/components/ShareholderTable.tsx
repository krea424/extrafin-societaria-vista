
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define types for shareholders
interface Shareholder {
  name: string;
  fiscalCode: string;
  shareType: string;
  numerator: number;
  denominator: number;
  percentage: number;
  location?: string;
  capital?: string;
  revenue?: string;
  profit?: string;
  description?: string;
  averagePrice?: string;
  website?: string;
  notes?: string;
}

// Define ordinary shareholders data
const ordinaryShareholders: Shareholder[] = [
  {
    name: "CORNiola S.R.L.",
    fiscalCode: "02251600975",
    shareType: "Ordinarie",
    numerator: 3235,
    denominator: 20000,
    percentage: 16.18,
    location: "Prato",
    capital: "€20,000",
    revenue: "€18,000",
    profit: "-€102,000",
    description: "Corniola offre alle imprese una ampia gamma di servizi di consulenza imprenditoriale, amministrativo-gestionale e di pianificazione aziendale...",
    website: "https://www.corniolapartecipazioni.it/"
  },
  {
    name: "ROMANO LUIGI",
    fiscalCode: "RMNLGU64A25C349Z",
    shareType: "Ordinarie",
    numerator: 3038,
    denominator: 20000,
    percentage: 15.19
  },
  {
    name: "MY GROUP S.R.L.",
    fiscalCode: "06350950488",
    shareType: "Ordinarie",
    numerator: 1300,
    denominator: 20000,
    percentage: 6.50,
    location: "Pontassieve",
    capital: "€100,000",
    revenue: "€253,149",
    profit: "-€88,548",
    description: "Consulenza finanziaria. Acquisto, gestione, recupero e valorizzazione di crediti deteriorati"
  },
  {
    name: "N.G.C.- NEW GENERATION COMPANY SRL",
    fiscalCode: "03665910133",
    shareType: "Ordinarie",
    numerator: 1025,
    denominator: 20000,
    percentage: 5.13,
    location: "Olgiate Comasco",
    capital: "€10,000",
    revenue: "€12,645",
    profit: "-€2,484",
    description: "Altre attività di consulenza imprenditoriale e altra consulenza amministrativo-gestionale e pianificazione aziendale."
  },
  {
    name: "EXTRACREDIT S.R.L.",
    fiscalCode: "04821220235",
    shareType: "Ordinarie",
    numerator: 1000,
    denominator: 20000,
    percentage: 5.00
  },
  {
    name: "INVEST CLUB ITALIA",
    fiscalCode: "91098410938",
    shareType: "Ordinarie",
    numerator: 1000,
    denominator: 20000,
    percentage: 5.00
  },
  {
    name: "COSTAMAGNA ANTONIO LIVIO",
    fiscalCode: "CSTNNL54L18H150F",
    shareType: "Ordinarie",
    numerator: 1000,
    denominator: 20000,
    percentage: 5.00
  },
  {
    name: "TAVELLA SILVIO",
    fiscalCode: "TVLSLV67T07D205A",
    shareType: "Ordinarie",
    numerator: 900,
    denominator: 20000,
    percentage: 4.50
  },
  {
    name: "TOSELLI PIETRO FRANCESCO",
    fiscalCode: "TSLPRF63T13D205V",
    shareType: "Ordinarie",
    numerator: 800,
    denominator: 20000,
    percentage: 4.00
  },
  {
    name: "R2 EFFE S.R.L.S.",
    fiscalCode: "12145880014",
    shareType: "Ordinarie",
    numerator: 600,
    denominator: 20000,
    percentage: 3.00,
    revenue: "€20,100",
    profit: "€1,837",
    description: "Altre attività di consulenza imprenditoriale e altra consulenza amministrativo-gestionale e pianificazione aziendale"
  },
  {
    name: "GRATTACASO ROBERTO",
    fiscalCode: "GRTRRT75C06A717L",
    shareType: "Ordinarie",
    numerator: 500,
    denominator: 20000,
    percentage: 2.50
  },
  {
    name: "ZANCHI ENNIO",
    fiscalCode: "ZNCNNE59A29L219G",
    shareType: "Ordinarie",
    numerator: 500,
    denominator: 20000,
    percentage: 2.50
  },
  {
    name: "NEW IDEAS 4.0 S.R.L.",
    fiscalCode: "14241661009",
    shareType: "Ordinarie",
    numerator: 400,
    denominator: 20000,
    percentage: 2.00
  },
  {
    name: "I.PAR.FIN. ITALIANA PARTECIPAZIONI FINANZIARIE S.P.A. IN LIQUIDAZIONE",
    fiscalCode: "04934410285",
    shareType: "Ordinarie",
    numerator: 300,
    denominator: 20000,
    percentage: 1.50
  },
  {
    name: "O.G.C.- OLD GENERATION COMPANY SRLS",
    fiscalCode: "09606510965",
    shareType: "Ordinarie",
    numerator: 300,
    denominator: 20000,
    percentage: 1.50
  },
  {
    name: "ASSOBUSINESS",
    fiscalCode: "91072340937",
    shareType: "Ordinarie",
    numerator: 300,
    denominator: 20000,
    percentage: 1.50
  },
  {
    name: "CABRAS CORRADO",
    fiscalCode: "CBRCRD74P29B354S",
    shareType: "Ordinarie",
    numerator: 280,
    denominator: 20000,
    percentage: 1.40
  },
  {
    name: "SALA PEUP CATERINA",
    fiscalCode: "SLPCRN55P69E201C",
    shareType: "Ordinarie",
    numerator: 220,
    denominator: 20000,
    percentage: 1.10
  },
  {
    name: "BACHURINA NATALIYA",
    fiscalCode: "BCHNLY72C66Z138W",
    shareType: "Ordinarie",
    numerator: 202,
    denominator: 20000,
    percentage: 1.01
  },
  {
    name: "MANCINO ASSICURAZIONI DI NICOLA MANCINO& C. S.A.S",
    fiscalCode: "01630020764",
    shareType: "Ordinarie",
    numerator: 200,
    denominator: 20000,
    percentage: 1.00
  },
  {
    name: "ROME ASSINVEST S.R.L.",
    fiscalCode: "15636791004",
    shareType: "Ordinarie",
    numerator: 200,
    denominator: 20000,
    percentage: 1.00
  },
  {
    name: "PIANETA IMPRESA",
    fiscalCode: "91041840314",
    shareType: "Ordinarie",
    numerator: 200,
    denominator: 20000,
    percentage: 1.00
  },
  {
    name: "CLEMENTI ROBERTO",
    fiscalCode: "CLMRRT70D28I373W",
    shareType: "Ordinarie",
    numerator: 200,
    denominator: 20000,
    percentage: 1.00
  },
  {
    name: "FAVRETTO FEDERICO",
    fiscalCode: "FVRFRC59E02L219B",
    shareType: "Ordinarie",
    numerator: 200,
    denominator: 20000,
    percentage: 1.00
  },
  {
    name: "PETRANOVIC MAJA",
    fiscalCode: "PTRMJA86H47Z149U",
    shareType: "Ordinarie",
    numerator: 200,
    denominator: 20000,
    percentage: 1.00
  },
  {
    name: "ICH S.R.L.",
    fiscalCode: "02814100307",
    shareType: "Ordinarie",
    numerator: 140,
    denominator: 20000,
    percentage: 0.70
  },
  {
    name: "CRUSCO ANTONIO",
    fiscalCode: "CRSNTN47E28E185P",
    shareType: "Ordinarie",
    numerator: 132,
    denominator: 20000,
    percentage: 0.66
  },
  {
    name: "SPAZIO BUSINESS S.R.L.",
    fiscalCode: "04889150233",
    shareType: "Ordinarie",
    numerator: 120,
    denominator: 20000,
    percentage: 0.60,
    location: "Verona",
    capital: "€10,000",
    revenue: "€189,447",
    profit: "€8,600",
    description: "Attestazioni capacità finanziaria autotrasportatori",
    averagePrice: "100",
    website: "https://spaziobusiness.com",
    notes: "Esperti nel collocamento di polizze fidejussorie, progettate per rispondere agli obblighi contrattuali sia verso enti pubblici che privati"
  },
  {
    name: "CARDILLO ANTONIO",
    fiscalCode: "CRDNTN57R30I341Q",
    shareType: "Ordinarie",
    numerator: 120,
    denominator: 20000,
    percentage: 0.60
  },
  {
    name: "MORRA PAOLO",
    fiscalCode: "MRRPLA91R11L219B",
    shareType: "Ordinarie",
    numerator: 120,
    denominator: 20000,
    percentage: 0.60
  },
  {
    name: "PETRONIO PAOLO",
    fiscalCode: "PTRPLA63E15L424R",
    shareType: "Ordinarie",
    numerator: 120,
    denominator: 20000,
    percentage: 0.60
  },
  {
    name: "ERR&SSE S.R.L.",
    fiscalCode: "03009651203",
    shareType: "Ordinarie",
    numerator: 100,
    denominator: 20000,
    percentage: 0.50,
    capital: "€1,201,000",
    revenue: "€113,496",
    profit: "€53,284",
    description: "70.10.00 Attività delle holding impegnate nelle attività gestionali (holding operative)"
  },
  {
    name: "MILLENNIUM HOLDING LTD. S.R.L.S.",
    fiscalCode: "13634471000",
    shareType: "Ordinarie",
    numerator: 100,
    denominator: 20000,
    percentage: 0.50,
    location: "Roma",
    capital: "€900",
    description: "Produzione di software non connesso all'edizione"
  },
  // Aggiunti altri soci che prima non erano presenti
  {
    name: "CASTELLO FABRIZIO",
    fiscalCode: "CSTFRZ77D01H727T",
    shareType: "Ordinarie",
    numerator: 100,
    denominator: 20000,
    percentage: 0.50
  },
  {
    name: "OGLIENGO ANDREA MARIA",
    fiscalCode: "GLNNRM66E31L219U",
    shareType: "Ordinarie",
    numerator: 100,
    denominator: 20000,
    percentage: 0.50
  },
  {
    name: "GUERRINI ROBERTO",
    fiscalCode: "GRRRRT76C10E512H",
    shareType: "Ordinarie",
    numerator: 100,
    denominator: 20000,
    percentage: 0.50
  },
  {
    name: "GARZO MICHELE",
    fiscalCode: "GRZMHL47C25I600Z",
    shareType: "Ordinarie",
    numerator: 100,
    denominator: 20000,
    percentage: 0.50
  },
  {
    name: "SLOOP ITALIA S.R.L.",
    fiscalCode: "07708051003",
    shareType: "Ordinarie",
    numerator: 65,
    denominator: 20000,
    percentage: 0.33,
    location: "Roma",
    description: "IBV Sloop è realtà promotrice di iniziative di business club quali Joint Venture, Development Consortium o altre forme partecipative",
    website: "https://www.sloop-italia.com/index.htm"
  },
  {
    name: "BUZZAVO MARCO",
    fiscalCode: "BZZMRC73H15L407C",
    shareType: "Ordinarie",
    numerator: 60,
    denominator: 20000,
    percentage: 0.30,
    location: "Treviso",
    website: "https://www.unioncamereveneto.it/wp-content/uploads/2022/05/CV-Buzzavo.pdf"
  },
  {
    name: "LANDOLFA GIULIA",
    fiscalCode: "LNDGLI98B64F205F",
    shareType: "Ordinarie",
    numerator: 60,
    denominator: 20000,
    percentage: 0.30
  },
  {
    name: "COLMAYER SALVATORE",
    fiscalCode: "CLMSVT84M23F839X",
    shareType: "Ordinarie",
    numerator: 30,
    denominator: 20000,
    percentage: 0.15,
    location: "Napoli",
    notes: "Società di riferimento: new team di salvatore colmayer - Altri servizi di sostegno alle imprese n.c.a."
  },
  {
    name: "RINCO MASSIMO",
    fiscalCode: "RNCMSM70M12F918T",
    shareType: "Ordinarie",
    numerator: 25,
    denominator: 20000,
    percentage: 0.13
  },
  {
    name: "IOVINE MATTEO",
    fiscalCode: "VNIMTT87L14F205U",
    shareType: "Ordinarie",
    numerator: 25,
    denominator: 20000,
    percentage: 0.13
  },
  {
    name: "ELAN CONSULTING S.R.L.S.",
    fiscalCode: "02784730646",
    shareType: "Ordinarie",
    numerator: 20,
    denominator: 20000,
    percentage: 0.10,
    location: "Avellino"
  },
  {
    name: "FORTE LETICIA",
    fiscalCode: "FRTLTC81E58Z602N",
    shareType: "Ordinarie",
    numerator: 20,
    denominator: 20000,
    percentage: 0.10,
    capital: "€500",
    revenue: "€14,400"
  },
  {
    name: "GAETA ANNA",
    fiscalCode: "GTANNA84A55D458Q",
    shareType: "Ordinarie",
    numerator: 20,
    denominator: 20000,
    percentage: 0.10,
    description: "Altre attività di consulenza imprenditoriale e altra consulenza amministrativo-gestionale e pianificazione aziendale",
    website: "https://www.elanconsulting.it/contatti",
    notes: "Sito NON funziona"
  },
  // Aggiunti altri soci con percentuali minori
  {
    name: "RAIOLA ELIODORO",
    fiscalCode: "RLALDR76L25I300J",
    shareType: "Ordinarie",
    numerator: 20,
    denominator: 20000,
    percentage: 0.10
  },
  {
    name: "RAIMONDI FRANCESCA",
    fiscalCode: "RMNFNC94M43H792D",
    shareType: "Ordinarie",
    numerator: 20,
    denominator: 20000,
    percentage: 0.10
  },
  {
    name: "GUTTAFIN S.R.L.",
    fiscalCode: "14403821003",
    shareType: "Ordinarie",
    numerator: 10,
    denominator: 20000,
    percentage: 0.05,
    location: "Fiumicino",
    capital: "€10,000",
    revenue: "€120,000",
    profit: "€88,000",
    description: "Attività di advisory e due diligence, servizi professionali di consulenza economico-finanziaria, amministrativa e gestionale",
    website: "https://www.guttafin.com/"
  },
  {
    name: "FRANCHI FEDERICA",
    fiscalCode: "FRNFRC71S43L424H",
    shareType: "Ordinarie",
    numerator: 10,
    denominator: 20000,
    percentage: 0.05
  },
  {
    name: "ALLEGRINI MASSIMILIANO",
    fiscalCode: "LLGMSM75B20H501H",
    shareType: "Ordinarie",
    numerator: 10,
    denominator: 20000,
    percentage: 0.05
  },
  {
    name: "ANDROSCIANI CARLO",
    fiscalCode: "NDRCRL61P17L117O",
    shareType: "Ordinarie",
    numerator: 10,
    denominator: 20000,
    percentage: 0.05
  },
  {
    name: "RUSSO PAOLO",
    fiscalCode: "RSSPLA83L08F335A",
    shareType: "Ordinarie",
    numerator: 10,
    denominator: 20000,
    percentage: 0.05
  },
  {
    name: "CITRINITI EMANUELE",
    fiscalCode: "CTRMNL66C09H579O",
    shareType: "Ordinarie",
    numerator: 4,
    denominator: 20000,
    percentage: 0.02,
    location: "Roma",
    description: "Responsabilità Medica Sanitaria"
  },
  {
    name: "MUSSO PIETRO",
    fiscalCode: "MSSPTR80E16G273H",
    shareType: "Ordinarie",
    numerator: 4,
    denominator: 20000,
    percentage: 0.02
  }
];

// Aggiunti TUTTI i soci atipici (con diritti limitati) dal tuo elenco completo
const limitedRightsShareholders: Shareholder[] = [
  {
    name: "ZUSI RICCARDO",
    fiscalCode: "ZSURCR70M20Z114N",
    shareType: "Diritti Limitati",
    numerator: 1800,
    denominator: 7812,
    percentage: 23.04
  },
  {
    name: "RINCO MASSIMO",
    fiscalCode: "RNCMSM70M12F918T",
    shareType: "Diritti Limitati",
    numerator: 1036,
    denominator: 7812,
    percentage: 13.26
  },
  {
    name: "ZANDOMENEGHI GIANLUIGI",
    fiscalCode: "ZNDGLG58T11H783E",
    shareType: "Diritti Limitati",
    numerator: 800,
    denominator: 7812,
    percentage: 10.24
  },
  {
    name: "N.G.C.- NEW GENERATION COMPANY SRL",
    fiscalCode: "03665910133",
    shareType: "Diritti Limitati",
    numerator: 601,
    denominator: 7812,
    percentage: 7.69
  },
  {
    name: "MONEGATO SIMONE",
    fiscalCode: "MNGSMN71L16L781N",
    shareType: "Diritti Limitati",
    numerator: 500,
    denominator: 7812,
    percentage: 6.40
  },
  {
    name: "PANTE ELOISA",
    fiscalCode: "PNTLSE89T65F206N",
    shareType: "Diritti Limitati",
    numerator: 400,
    denominator: 7812,
    percentage: 5.12
  },
  {
    name: "BERARDO MORIS",
    fiscalCode: "BRRMRS86P15B107T",
    shareType: "Diritti Limitati",
    numerator: 290,
    denominator: 7812,
    percentage: 3.71
  },
  {
    name: "AD HOC SRL",
    fiscalCode: "04032690267",
    shareType: "Diritti Limitati",
    numerator: 202,
    denominator: 7812,
    percentage: 2.59
  },
  {
    name: "GEREMY JOCELYNE",
    fiscalCode: "GRMJLY64E67Z110J",
    shareType: "Diritti Limitati",
    numerator: 200,
    denominator: 7812,
    percentage: 2.56
  },
  {
    name: "TOSELLI PIETRO FRANCESCO",
    fiscalCode: "TSLPRF63T13D205V",
    shareType: "Diritti Limitati",
    numerator: 179,
    denominator: 7812,
    percentage: 2.29
  },
  {
    name: "MAZZETTO FRANCO",
    fiscalCode: "MZZFNC52P04H620P",
    shareType: "Diritti Limitati",
    numerator: 176,
    denominator: 7812,
    percentage: 2.25
  },
  {
    name: "CONSILIUM S.R.L.",
    fiscalCode: "03875130043",
    shareType: "Diritti Limitati",
    numerator: 160,
    denominator: 7812,
    percentage: 2.05
  },
  {
    name: "RIZZI ANDREA",
    fiscalCode: "RZZNDR69B20C890V",
    shareType: "Diritti Limitati",
    numerator: 144,
    denominator: 7812,
    percentage: 1.84
  },
  {
    name: "RINCO LUIGI",
    fiscalCode: "RNCLGU38H15H714W",
    shareType: "Diritti Limitati",
    numerator: 112,
    denominator: 7812,
    percentage: 1.43
  },
  {
    name: "DI BONI FABIO MASSIMO",
    fiscalCode: "DBNFMS63C11L219B",
    shareType: "Diritti Limitati",
    numerator: 100,
    denominator: 7812,
    percentage: 1.28
  },
  {
    name: "GADITTI SIMONE",
    fiscalCode: "GDTSMN70R24C890S",
    shareType: "Diritti Limitati",
    numerator: 96,
    denominator: 7812,
    percentage: 1.23
  },
  {
    name: "PASSARINI ANNA",
    fiscalCode: "PSSNNA56C47H714P",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "RINCO GIADA",
    fiscalCode: "RNCGDI03A54B107G",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "RINCO PIETRO",
    fiscalCode: "RNCPTR01D09B107Q",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "ROSSI LUISELLA",
    fiscalCode: "RSSLLL71E42L781G",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "SOLIERI GIOVANNI",
    fiscalCode: "SLRGNN68D13E349O",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "VESENTINI MAURIZIO",
    fiscalCode: "VSNMRZ77T15F918J",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "ZANOLLI GIORGIO",
    fiscalCode: "ZNLGRG69P05F918Q",
    shareType: "Diritti Limitati",
    numerator: 80,
    denominator: 7812,
    percentage: 1.02
  },
  {
    name: "CARAMORI LORENZO",
    fiscalCode: "CRMLNZ99R25E349D",
    shareType: "Diritti Limitati",
    numerator: 60,
    denominator: 7812,
    percentage: 0.77
  },
  {
    name: "EXTRACREDIT S.R.L.",
    fiscalCode: "04821220235",
    shareType: "Diritti Limitati",
    numerator: 58,
    denominator: 7812,
    percentage: 0.74
  },
  {
    name: "COLOMBINI ANDREA",
    fiscalCode: "CLMNDR61C06H714L",
    shareType: "Diritti Limitati",
    numerator: 48,
    denominator: 7812,
    percentage: 0.61
  },
  {
    name: "BERNASCONI ALBERTO",
    fiscalCode: "BRNLRT78S16C933F",
    shareType: "Diritti Limitati",
    numerator: 40,
    denominator: 7812,
    percentage: 0.51
  },
  {
    name: "CANZIAN DANIELE",
    fiscalCode: "CNZDNL59P19E940W",
    shareType: "Diritti Limitati",
    numerator: 40,
    denominator: 7812,
    percentage: 0.51
  },
  {
    name: "MERLIN MATTIA",
    fiscalCode: "MRLMTT75R12F918K",
    shareType: "Diritti Limitati",
    numerator: 32,
    denominator: 7812,
    percentage: 0.41
  },
  {
    name: "ZANOLLI GABRIELE",
    fiscalCode: "ZNLGRL73R30F918N",
    shareType: "Diritti Limitati",
    numerator: 32,
    denominator: 7812,
    percentage: 0.41
  },
  {
    name: "BOVOLENTA GIANLUCA",
    fiscalCode: "BVLGLC79T17C933Y",
    shareType: "Diritti Limitati",
    numerator: 20,
    denominator: 7812,
    percentage: 0.26
  },
  {
    name: "GABRIELI DAVIDE",
    fiscalCode: "GBRVDV77C22F918S",
    shareType: "Diritti Limitati",
    numerator: 20,
    denominator: 7812,
    percentage: 0.26
  },
  {
    name: "SOFFIATI GIAMMICHELE",
    fiscalCode: "SFFGMC72B20E512X",
    shareType: "Diritti Limitati",
    numerator: 20,
    denominator: 7812,
    percentage: 0.26
  },
  {
    name: "BACCHIEGA MIRKO",
    fiscalCode: "BCCMRK73H07H620M",
    shareType: "Diritti Limitati",
    numerator: 12,
    denominator: 7812,
    percentage: 0.15
  },
  {
    name: "TADIELLO MIRCO",
    fiscalCode: "TDLMRC70M09H783I",
    shareType: "Diritti Limitati",
    numerator: 12,
    denominator: 7812,
    percentage: 0.15
  },
  {
    name: "ARCOLINI ELISABETTA",
    fiscalCode: "RCLLBT74S46B107K",
    shareType: "Diritti Limitati",
    numerator: 9,
    denominator: 7812,
    percentage: 0.12
  },
  {
    name: "CALOI CRISTINA",
    fiscalCode: "CLACST80H51L781X",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "COLOMBINI GIORDANO",
    fiscalCode: "CLMGDN80M21B107N",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "COLOMBINI MARTA",
    fiscalCode: "CLMMRT90A48B107G",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "CONI ADOLFO",
    fiscalCode: "CNODLF72C29B354G",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "CUCHETTO ALESSANDRO",
    fiscalCode: "CCHLSN87S15E349S",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "CUGOLA MATTEO",
    fiscalCode: "CGLMTT85D11G186R",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "DAL DOSSO MARIA",
    fiscalCode: "DLDMRA94S42I775G",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "FAUSTINI ANDREA",
    fiscalCode: "FSTNDR69P10B107Z",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "MG BRIDGE CONSULTING S.R.L.",
    fiscalCode: "04993370230",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "PANIGHELLO LAURA",
    fiscalCode: "PNGLRA69B51F999F",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "PASSARINI MARIA GRAZIA",
    fiscalCode: "PSSMGR64H44B107O",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "ZANOLLI DANNY",
    fiscalCode: "ZNLDNY92B17E349I",
    shareType: "Diritti Limitati",
    numerator: 4,
    denominator: 7812,
    percentage: 0.05
  },
  {
    name: "MENDEL BUSINESS SCHOOL S.R.L.",
    fiscalCode: "01888630934",
    shareType: "Diritti Limitati",
    numerator: 2,
    denominator: 7812,
    percentage: 0.03
  },
  {
    name: "BOARINI LORIS",
    fiscalCode: "BRNLRS73B24A539M",
    shareType: "Diritti Limitati",
    numerator: 1,
    denominator: 7812,
    percentage: 0.01
  },
  {
    name: "DO.MA. S.R.L.S.- IN LIQUIDAZIONE",
    fiscalCode: "01896320932",
    shareType: "Diritti Limitati",
    numerator: 1,
    denominator: 7812,
    percentage: 0.01
  },
  {
    name: "TONIOLO DANIELA",
    fiscalCode: "TNLDNL76D57A539Y",
    shareType: "Diritti Limitati",
    numerator: 1,
    denominator: 7812,
    percentage: 0.01
  }
];

interface ShareholderTableProps {
  title: string;
  description: string;
  shareholders: Shareholder[];
  colorClass?: string;
}

const ShareholderTable: React.FC<ShareholderTableProps> = ({
  title,
  description,
  shareholders,
  colorClass = "border-extrafin-200"
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const filteredShareholders = shareholders.filter(shareholder => 
    shareholder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shareholder.fiscalCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calcola il totale delle pagine
  const totalPages = Math.ceil(filteredShareholders.length / itemsPerPage);
  
  // Ottieni i soci da mostrare nella pagina corrente
  const currentShareholders = filteredShareholders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Gestione della paginazione
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Card className={cn(colorClass)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Cerca soci per nome o codice fiscale..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Nome</TableHead>
                <TableHead className="w-[200px]">Codice Fiscale</TableHead>
                <TableHead className="text-right">Quota %</TableHead>
                <TableHead>Sede</TableHead>
                <TableHead className="hidden md:table-cell">Capitale</TableHead>
                <TableHead className="hidden lg:table-cell">Fatturato</TableHead>
                <TableHead className="hidden lg:table-cell">Sito Web</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentShareholders.map((shareholder, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{shareholder.name}</TableCell>
                  <TableCell className="font-mono text-xs">{shareholder.fiscalCode}</TableCell>
                  <TableCell className="text-right font-medium">{shareholder.percentage}%</TableCell>
                  <TableCell>{shareholder.location || "-"}</TableCell>
                  <TableCell className="hidden md:table-cell">{shareholder.capital || "-"}</TableCell>
                  <TableCell className="hidden lg:table-cell">{shareholder.revenue || "-"}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {shareholder.website ? (
                      <a href={shareholder.website} target="_blank" rel="noopener noreferrer" className="text-extrafin-600 hover:underline">
                        Sito Web
                      </a>
                    ) : "-"}
                  </TableCell>
                </TableRow>
              ))}
              {filteredShareholders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    Nessun risultato trovato.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">
              Mostrando {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredShareholders.length)} di {filteredShareholders.length} soci
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-extrafin-100 text-extrafin-800 hover:bg-extrafin-200'}`}
              >
                Precedente
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-extrafin-100 text-extrafin-800 hover:bg-extrafin-200'}`}
              >
                Successivo
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ShareholderTables: React.FC = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="ordinary">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ordinary">Soci Ordinari</TabsTrigger>
          <TabsTrigger value="preference">Soci con Quote Atipiche</TabsTrigger>
        </TabsList>
        <TabsContent value="ordinary" className="mt-6">
          <ShareholderTable 
            title="Soci Ordinari"
            description="Soci con diritti di voto (20.000 quote totali)" 
            shareholders={ordinaryShareholders}
            colorClass="border-extrafin-200"
          />
        </TabsContent>
        <TabsContent value="preference" className="mt-6">
          <ShareholderTable 
            title="Soci con Quote Atipiche" 
            description="Soci con diritti limitati (7.812 quote totali)"
            shareholders={limitedRightsShareholders}
            colorClass="border-gold-200"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShareholderTables;

