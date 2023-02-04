<template>
<div class="container">
<!-- Ship Selection Card -->
  <div class="leftcard">
    <div class="col-md-3">
    <h4>
    Manufacturer
    </h4>
    <br>
    <center>
    <select v-model="selectedCompany">
      <option disabled value="">Choose a manufacturer</option>
      <option v-for="company in companies" :key="company">{{ company }}</option>
    </select>
    <br><br><br>
  <div class="aegis" v-if="selectedCompany === 'Aegis Dynamics'">
    <table>
    <tr>
    <td>
      <button value="stalker"></button>
      <br>
      <label for="stalker">
      <p>Avenger Stalker</p>
      </label>
    </td>
    <td>
      <button value="titan"></button>
      <br>
      <label for="titan">
      <p>Avenger Titan</p>
      </label>
    </td>
    <td>
      <button value="warlock"></button>
      <br>
      <label for="warlock">
      <p>Avenger Warlock</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="eclipse"></button>
      <br>
      <label for="eclipse">
      <p>Eclipse</p>
      </label>
    </td>
    <td>
      <button value="gladius"></button>
      <br>
      <label for="gladius">
      <p>Gladius</p>
      </label>
    </td>
    <td>
      <button value="hammerhead"></button>
      <br>
      <label for="hammerhead">
      <p>Hammerhead</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="idris-k"></button>
      <br>
      <label for="idris-k">
      <p>Idris-K</p>
      </label>
    </td>
    <td>
      <button value="idris-m"></button>
      <br>
      <label for="idris-m">
      <p>Idris-M</p>
      </label>
    </td>
    <td>
      <button value="idris-p"></button>
      <br>
      <label for="idris-p">
      <p>Idris-P</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="javelin"></button>
      <br>
      <label for="javelin">
      <p>Javelin</p>
      </label>
    </td>
    <td>
      <button value="nautilus"></button>
      <br>
      <label for="nautilus">
      <p>Nautilus</p>
      </label>
    </td>
    <td>
      <button value="reclaimer"></button>
      <br>
      <label for="reclaimer">
      <p>Reclaimer</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="redeemer"></button>
      <br>
      <label for="redeemer">
      <p>Redeemer</p>
      </label>
    </td>
    <td>
      <button value="retaliatorbase"></button>
      <br>
      <label for="retaliatorbase">
      <p>Retaliator Base</p>
      </label>
    </td>
    <td>
      <button value="retaliatorbomber"></button>
      <br>
      <label for="retaliatorbomber">
      <p>Retaliator Bomber</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="sabre"></button>
      <br>
      <label for="sabre">
      <p>Sabre</p>
      </label>
    </td>
    <td>
      <button value="comet"></button>
      <br>
      <label for="comet">
      <p>Sabre Comet</p>
      </label>
    </td>
    <td>
      <button value="raven"></button>
      <br>
      <label for="raven">
      <p>Sabre Raven</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="harbinger"></button>
      <br>
      <label for="harbinger">
      <p>Vanguard Harbinger</p>
      </label>
    </td>
    <td>
      <button value="hoplite"></button>
      <br>
      <label for="hoplite">
      <p>Vanguard Hoplite</p>
      </label>
    </td>
    <td>
      <button value="sentinel"></button>
      <br>
      <label for="sentinel">
      <p>Vanguard Sentinel</p>
      </label>
    </td>
    </tr>
    <td>
      <button value="warden"></button>
      <br>
      <label for="warden">
      <p>Vanguard Warden</p>
      </label>
    </td>
    <td>
      <button value="vulcan"></button>
      <br>
      <label for="vulcan">
      <p>Vulcan</p>
      </label>
    </td>
    </table>
  </div>
  <div class="anvil" v-if="selectedCompany === 'Anvil Aerospace'">
    <table>
    <tr>
    <td>
      <button value="arrow"></button>
      <br>
      <label for="arrow">
      <p>Arrow</p>
      </label>
    </td>
    <td>
      <button value="C8"></button>
      <br>
      <label for="C8">
      <p>C8 Pisces</p>
      </label>
    </td>
    <td>
      <button value="C8R"></button>
      <br>
      <label for="C8R">
      <p>C8R Pisces Rescue</p>
      </label>
    </td>
    </tr>    
    <tr>
    <td>
      <button value="C8X"></button>
      <br>
      <label for="C8X">
      <p>C8X Pisces Expedition</p>
      </label>
    </td>
    <td>
      <button value="carrack"></button>
      <br>
      <label for="carrack">
      <p>Carrack</p>
      </label>
    </td>
    <td>
      <button value="crucible"></button>
      <br>
      <label for="crucible">
      <p>Crucible</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="F7A"></button>
      <br>
      <label for="F7A">
      <p>F7A Hornet</p>
      </label>
    </td>
    <td>
      <button value="F7A2"></button>
      <br>
      <label for="F7A2">
      <p>F7A Hornet Mk II</p>
      </label>
    </td>
    <td>
      <button value="F7AR"></button>
      <br>
      <label for="F7AR">
      <p>F7A-R Hornet Tracker</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="F7C"></button>
      <br>
      <label for="F7C">
      <p>F7C Hornet</p>
      </label>
    </td>
    <td>
      <button value="F7CM"></button>
      <br>
      <label for="F7CM">
      <p>F7C-M Super Hornet</p>
      </label>
    </td>
    <td>
      <button value="F7CR"></button>
      <br>
      <label for="F7CR">
      <p>F7C-R Hornet Tracker</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="F7CS"></button>
      <br>
      <label for="F7CS">
      <p>F7C-S Hornet Ghost</p>
      </label>
    </td>
    <td>
      <button value="F8A"></button>
      <br>
      <label for="F8A">
      <p>F8A Lightning</p>
      </label>
    </td>
    <td>
      <button value="F8C"></button>
      <br>
      <label for="F8C">
      <p>F8C Lightning</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="gladiator"></button>
      <br>
      <label for="gladiator">
      <p>Gladiator</p>
      </label>
    </td>
    <td>
      <button value="hawk"></button>
      <br>
      <label for="hawk">
      <p>Hawk</p>
      </label>
    </td>
    <td>
      <button value="hurricane"></button>
      <br>
      <label for="hurricane">
      <p>Hurricane</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="legionnaire"></button>
      <br>
      <label for="legionnaire">
      <p>Legionnaire</p>
      </label>
    </td>
    <td>
      <button value="liberator"></button>
      <br>
      <label for="liberator">
      <p>Liberator</p>
      </label>
    </td>
    <td>
      <button value="terrapin"></button>
      <br>
      <label for="terrapin">
      <p>Terrapin</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="valkyrie"></button>
      <br>
      <label for="valkyrie">
      <p>Valkyrie</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="aopoa" v-if="selectedCompany === 'AopoA'">
    <table>
    <tr>
    <td>
    <button value="khartual"></button>
    <br>
    <label for="khartual">
    <p>Khartu-al</p>
    </label>
    </td>
    <td>
    <button value="nox"></button>
    <br>
    <label for="nox">
    <p>Nox</p>
    </label>
    </td>
    <td>
    <button value="santokyai"></button>
    <br>
    <label for="santokyai">
    <p>San'tok-yai</p>
    </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="argo" v-if="selectedCompany === 'ARGO Astronautics'">
    <table>
    <tr>
    <td>
      <button value="mole"></button>
      <br>
      <label for="mole">
      <p>MOLE</p>
      </label>
    </td>
    <td>
      <button value="mpuvc"></button>
      <br>
      <label for="mpuvc">
      <p>MPUV Cargo</p>
      </label>
    </td>
    <td>
      <button value="mpuvp"></button>
      <br>
      <label for="mpuvp">
      <p>MPUV Personnel</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="raft"></button>
      <br>
      <label for="raft">
      <p>RAFT</p>
      </label>
    </td>
    <td>
      <button value="srv"></button>
      <br>
      <label for="srv">
      <p>SRV</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="banu" v-if="selectedCompany === 'Banu Souli'">
    <table>
    <tr>
    <td>
      <button value="defender"></button>
      <br>
      <label for="defender">
      <p>Defender</p>
      </label>
    </td>
    <td>
      <button value="merchantman"></button>
      <br>
      <label for="merchantman">
      <p>Merchantman</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="consol" v-if="selectedCompany === 'Consolidated Outland'">
    <table>
    <tr>
    <td>
      <button value="hoverquad"></button>
      <br>
      <label for="hoverquad">
      <p>HoverQuad</p>
      </label>
    </td>
    <td>
      <button value="mustangalpha"></button>
      <br>
      <label for="mustangalpha">
      <p>Mustang Alpha</p>
      </label>
    </td>
    <td>
      <button value="mustangbeta"></button>
      <br>
      <label for="mustangbeta">
      <p>Mustang Beta</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="mustangdelta"></button>
      <br>
      <label for="mustangdelta">
      <p>Mustang Delta</p>
      </label>
    </td>
    <td>
      <button value="mustanggamma"></button>
      <br>
      <label for="mustanggamma">
      <p>Mustang Gamma</p>
      </label>
    </td>
    <td>
      <button value="mustangomega"></button>
      <br>
      <label for="mustangomega">
      <p>Mustang Omega</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="nomad"></button>
      <br>
      <label for="nomad">
      <p>Nomad</p>
      </label>
    </td>
    <td>
      <button value="pioneer"></button>
      <br>
      <label for="pioneer">
      <p>Pioneer</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="crusader" v-if="selectedCompany === 'Crusader Industries'">
    <table>
    <tr>
    <td>
      <button value="a1spirit"></button>
      <br>
      <label for="a1spirit">
      <p>A1 Spirit</p>
      </label>
    </td>
    <td>
      <button value="a2hercules"></button>
      <br>
      <label for="a2hercules">
      <p>A2 Hercules</p>
      </label>
    </td>
    <td>
      <button value="aresinferno"></button>
      <br>
      <label for="aresinferno">
      <p>Ares Inferno</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="aresion"></button>
      <br>
      <label for="aresion">
      <p>Ares Ion</p>
      </label>
    </td>
    <td>
      <button value="c1spirit"></button>
      <br>
      <label for="c1spirit">
      <p>C1 Spirit</p>
      </label>
    </td>
    <td>
      <button value="c2hercules"></button>
      <br>
      <label for="c2hercules">
      <p>C2 Hercules</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="e1spirit"></button>
      <br>
      <label for="e1spirit">
      <p>E1 Spirit</p>
      </label>
    </td>
    <td>
      <button value="genesis"></button>
      <br>
      <label for="genesis">
      <p>Genesis Starliner</p>
      </label>
    </td>
    <td>
      <button value="m2hercules"></button>
      <br>
      <label for="m2hercules">
      <p>M2 Hercules</p>
      </label>
    </td>
    </tr>
      <br>
      <button value="msr"></button>
      <br>
      <label for="msr">
      <p>Mercury Star Runner</p>
    </label>
    </table>
  </div>
  <div class="drake" v-if="selectedCompany === 'Drake Interplanetary'">
    <table>
    <tr>
    <td>
      <button value="buccaneer"></button>
      <br>
      <label for="buccaneer">
      <p>Buccaneer</p>
      </label>
    </td>
    <td>
      <button value="caterpillar"></button>
      <br>
      <label for="Caterpillar">
      <p>Caterpillar</p>
      </label>
    </td>
    <td>
      <button value="corsair"></button>
      <br>
      <label for="corsair">
      <p>Corsair</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
    <button value="cutlassblack"></button>
    <br>
    <label for="cutlassblack">
    <p>Cutlass Black</p>
    </label>
    </td>
    <td>
      <button value="cutlassblue"></button>
      <br>
      <label for="cutlassblue">
      <p>Cutlass Blue</p>
      </label>
    </td>
    <td>
      <button value="cutlassred"></button>
      <br>
      <label for="cutlassred">
      <p>Cutlass Red</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="cutlasssteel"></button>
      <br>
      <label for="cutlasssteel">
      <p>Cutlass Steel</p>
      </label>
    </td>
    <td>
      <button value="cutter"></button>
      <br>
      <label for="cutter">
      <p>Cutter</p>
      </label>
    </td>
    <td>
      <button value="dragonfly"></button>
      <br>
      <label for="dragonfly">
      <p>Dragonfly</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="herald"></button>
      <br>
      <label for="herald">
      <p>Herald</p>
      </label>
    </td>
    <td>
      <button value="kraken"></button>
      <br>
      <label for="kraken">
      <p>Kraken</p>
      </label>
    </td>
    <td>
      <button value="krakenp"></button>
      <br>
      <label for="krakenp">
      <p>Kraken Privateer</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="mule"></button>
      <br>
      <label for="mule">
      <p>Mule</p>
      </label>
    </td>
    <td>
      <button value="vulture"></button>
      <br>
      <label for="vulture">
      <p>Vulture</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="esperia" v-if="selectedCompany === 'Esperia Inc.'">
    <table>
    <tr>
    <td>
      <button value="blade"></button>
      <br>
      <label for="blade">
      <p>Blade</p>
      </label>
    </td>
    <td>
      <button value="glaive"></button>
      <br>
      <label for="glaive">
      <p>Glaive</p>
      </label>
    </td>
    <td>
      <button value="prowler"></button>
      <br>
      <label for="prowler">
      <p>Prowler</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="scythe"></button>
      <br>
      <label for="scythe">
      <p>Scythe</p>
      </label>
    </td>
    <td>
      <button value="talon"></button>
      <br>
      <label for="talon">
      <p>Talon</p>
      </label>
    </td>
    <td>
      <button value="talonshrike"></button>
      <br>
      <label for="talonshrike">
      <p>Talon Shrike</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="gatac" v-if="selectedCompany === 'Gatac Manufacture'">
    <table>
    <td>
      <button value="railen"></button>
      <br>
      <label for="railen">
      <p>Railen</p>
      </label>
    </td>
    </table>
  </div>
  <div class="greycat" v-if="selectedCompany === 'Greycat Industrial'">
    <table>
    <tr>
    <td>
      <button value="ptv"></button>
      <br>
      <label for="ptv">
      <p>PTV</p>
      </label>
    </td>
    <td>
      <button value="roc"></button>
      <br>
      <label for="roc">
      <p>ROC</p>
      </label>
    </td>
    <td>
      <button value="rocds"></button>
      <br>
      <label for="rocds">
      <p>ROC-DS</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="stv"></button>
      <br>
      <label for="stv">
      <p>STV</p>
      </label>
    </td>
    <td>
      <button value="utv"></button>
      <br>
      <label for="utv">
      <p>UTV</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="kruger" v-if="selectedCompany === 'Kruger Intergalactic'">
    <button value="p52"></button>
    <button value="p72"></button>
    <br>
    <label for="p52">
    <p>P-52 Merlin</p>
    </label>
    <label for="p72">
    <p>P-72 Archimedes</p>
    </label>
  </div>
  <div class="misc" v-if="selectedCompany === 'Musashi Industrial (MISC)'">
    <button value="expanse"></button>
    <button value="freelancer"></button>
    <button value="freelancerdur"></button>
    <br>
    <label for="expanse">
    <p>Expanse</p>
    </label>
    <label for="freelancer">
    <p>Freelancer</p>
    </label>
    <label for="freelancerdur">
    <p>Freelancer DUR</p>
    </label>
    <br>
    <button value="freelancermax"></button>
    <button value="freelancermis"></button>
    <button value="hulla"></button>
    <br>
    <label for="freelancermax">
    <p>Freelancer MAX</p>
    </label>
    <label for="freelancermis">
    <p>Freelancer MIS</p>
    </label>
    <label for="hulla">
    <p>HULL A</p>
    </label>
    <br>
    <button value="prospector"></button>
    <button value="razor"></button>
    <button value="razorex"></button>
    <br>
    <label for="prospector">
    <p>Prospector</p>
    </label>
    <label for="razor">
    <p>Razor</p>
    </label>
    <label for="razorex">
    <p>Razor EX</p>
    </label>
    <br>
    <button value="razorlx"></button>
    <button value="reliantkore"></button>
    <button value="reliantmako"></button>
    <br>
    <label for="razorlx">
    <p>Razor LX</p>
    </label>
    <label for="reliantkore">
    <p>Reliant Kore</p>
    </label>
    <label for="reliantmako">
    <p>Reliant Mako</p>
    </label>
    <br>
    <button value="reliantsen"></button>
    <button value="relianttana"></button>
    <button value="starfarer"></button>
    <br>
    <label for="reliantsen">
    <p>Reliant Sen</p>
    </label>
    <label for="relianttana">
    <p>Reliant Tana</p>
    </label>
    <label for="starfarer">
    <p>Starfarer</p>
    </label>
    <br>
    <button value="starfarergemini"></button>
    <br>
    <label for="starfarergemini">
    <p>Starfarer Gemini</p>
    </label>
  </div>
  <div class="origin" v-if="selectedCompany === 'Origin Jumpworks'">
    <button value="100i"></button>
    <button value="125a"></button>
    <button value="135c"></button>
    <br>
    <label for="100i">
    <p>100i</p>
    </label>
    <label for="125a">
    <p>125a</p>
    </label>
    <label for="135c">
    <p>135c</p>
    </label>
    <br>
    <button value="300i"></button>
    <button value="315p"></button>
    <button value="325a"></button>
    <br>
    <label for="300i">
    <p>300i</p>
    </label>
    <label for="315p">
    <p>315p</p>
    </label>
    <label for="325a">
    <p>325a</p>
    </label>
    <br>
    <button value="350r"></button>
    <button value="400i"></button>
    <button value="600iexplorer"></button>
    <br>
    <label for="350r">
    <p>350r</p>
    </label>
    <label for="400i">
    <p>400i</p>
    </label>
    <label for="600iexplorer">
    <p>600i Explorer</p>
    </label>
    <br>
    <button value="600itouring"></button>
    <button value="85x"></button>
    <button value="890j"></button>
    <br>
    <label for="600itouring">
    <p>600i Touring</p>
    </label>
    <label for="85x">
    <p>85X</p>
    </label>
    <label for="890j">
    <p>890 Jump</p>
    </label>
    <br>
    <button value="g12"></button>
    <button value="g12a"></button>
    <button value="g12r"></button>
    <br>
    <label for="g12">
    <p>G12</p>
    </label>
    <label for="g12a">
    <p>G12a</p>
    </label>
    <label for="g12r">
    <p>G12r</p>
    </label>
    <br>
    <button value="m50"></button>
    <button value="x1"></button>
    <button value="x1f"></button>
    <br>
    <label for="m50">
    <p>M50</p>
    </label>
    <label for="x1">
    <p>X1</p>
    </label>
    <label for="x1f">
    <p>X1 Force</p>
    </label>
    <br>
    <button value="x1v"></button>
    <br>
    <label for="x1v">
    <p>X1 Velocity</p>
    </label>
  </div>
  <div class="rsi" v-if="selectedCompany === 'Roberts Space Industries'">
    <button value="auroracl"></button>
    <button value="auroraes"></button>
    <button value="auroraln"></button>
    <br>
    <label for="auroracl">
    <p>Aurora CL</p>
    </label>
    <label for="auroraes">
    <p>Aurora ES</p>
    </label>
    <label for="auroraln">
    <p>Aurora LN</p>
    </label>
    <br>
    <button value="auroralx"></button>
    <button value="auroramr"></button>
    <button value="constellationandromeda"></button>
    <br>
    <label for="auroralx">
    <p>Aurora LX</p>
    </label>
    <label for="auroramr">
    <p>Aurora MR</p>
    </label>
    <label for="constellationandromeda">
    <p>Constellation Andromeda</p>
    </label>
    <br>
    <button value="constellationaquila"></button>
    <button value="constellationphoenix"></button>
    <button value="constellationtaurus"></button>
    <br>
    <label for="constellationaquila">
    <p>Constellation Aquila</p>
    </label>
    <label for="constellationphoenix">
    <p>Constellation Phoenix</p>
    </label>
    <label for="constellationtaurus">
    <p>Constellation Taurus</p>
    </label>
    <br>
    <button value="mantis"></button>
    <button value="scorpius"></button>
    <button value="ursa"></button>
    <br>
    <label for="mantis">
    <p>Mantis</p>
    </label>
    <label for="scorpius">
    <p>Scorpius</p>
    </label>
    <label for="ursa">
    <p>Ursa</p>
    </label>
  </div>
  <div class="tumbril" v-if="selectedCompany === 'Tumbril Land Systems'">
    <button value="cyclone"></button>
    <button value="cycloneaa"></button>
    <button value="cyclonemt"></button>
    <br>
    <label for="cyclone">
    <p>Cyclone</p>
    </label>
    <label for="cycloneaa">
    <p>Cyclone AA</p>
    </label>
    <label for="cyclonemt">
    <p>Cyclone MT</p>
    </label>
    <br>
    <button value="cyclonerc"></button>
    <button value="cyclonern"></button>
    <button value="cyclonetr"></button>
    <br>
    <label for="cyclonerc">
    <p>Cyclone RC</p>
    </label>
    <label for="cyclonern">
    <p>Cyclone RN</p>
    </label>
    <label for="cyclonetr">
    <p>Cyclone TR</p>
    </label>
    <br>
    <button value="nova"></button>
    <button value="rangercv"></button>
    <button value="rangerrv"></button>
    <br>
    <label for="nova">
    <p>Nova</p>
    </label>
    <label for="rangercv">
    <p>Ranger CV</p>
    </label>
    <label for="rangerrv">
    <p>Ranger RV</p>
    </label>
    <br>
    <button value="rangertr"></button>
    <br>
    <label for="rangertr">
    <p>Ranger TR</p>
    </label>
  </div>
    </center>
    </div>
  </div>
<!-- Component Selection Card -->
  <div class="centercard">
      <p>
      Weapons
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Shields
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Power Plants
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Coolers
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <br>
      Quantum Drives
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button>
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      </p>
  </div>
<!-- Ship Information Card -->
  <div class="rightcard">
    <div class="col-md-3">
    <h4>
    Vehicle Name
    </h4>
    <p>
    Vehicle information can go here, there's quite a lot of it to be fair, but it still belongs here.
    </p>
      <va-divider />
      <table class="infoCard">
      <tr>
        <td class="shipRole">
        <h4>Role</h4><br><p>Value</p>
        </td>
        <td class="shipSize">
        <h4>Size</h4><br><p>Value</p>
        </td>
      </tr>
      <tr>
        <td class="shipDimensions">
        <h4>Dimensions</h4><br><p>Length x<br>Width x<br>Height x</p>
        </td>
        <td class="shipFuel">
        <h4>Fuel Capacity</h4>
        <br>
        <p>Quantum Value<br>Hydrogen Value</p>
        </td>
      </tr>
      <tr>
      <td class="shipShields">
      <h4>Shield Capacity</h4>
      <br>
      <p>Shield Value</p>
      </td>
      <td class="shipHealth">
      <h4>Hull Health</h4>
      <br>
      <p>Hitpoint Value</p>
      </td>
      </tr>
      <tr>
      <td class="shipPower">
      <h4>Power</h4>
      <br>
      <p>Power Value</p>
      </td>
      <td class="shipCooling">
      <h4>Cooling Capacity</h4>
      <br>
      <p>Cooling Value</p>
      </td>
      </tr>
      <tr>
      <td class="shipEM">
      <h4>EM Emissions</h4>
      <br>
      <p>EM Value</p>
      </td>
      <td class="shipIR">
      <h4>IR Emissions</h4>
      <br>
      <p>IR Value</p>
      </td>
      </tr>
    </table>
    </div>
  </div>
</div>
</template>

<script setup>
  useHead({
    title: 'GUIDE | Vehicle Loadouts'
  })

</script>

<script>
export default {
  data() {
    return {
      selectedCompany: '',
      companies: ['Aegis Dynamics', 'Anvil Aerospace', 'AopoA', 'ARGO Astronautics', 'Banu Souli', 'Consolidated Outland', 'Crusader Industries', 'Drake Interplanetary', 'Esperia Inc.', 'Gatac Manufacture', 'Greycat Industrial','Kruger Intergalactic', 'Musashi Industrial (MISC)', 'Origin Jumpworks', 'Roberts Space Industries', 'Tumbril Land Systems']
    };
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  min-height: 85vh;
  display: flex;
  min-width:90vw;
  background-color:var(--backgray);
  animation: 1s appear;
  padding-block-start:15px;
  user-select:none;
}
.col-md-3 {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  min-height:85vh;
}

.leftcard {
  position: relative;
  width: 30%;
  height: auto;
  padding-inline-end:25px;
  margin-inline-start:-15px;
}

.centercard {
  position: relative;
  width: 40%;
  height: auto;
  padding-block-start:30px;
}

.centercard p {
  font-size:18px;
}

.rightcard {
  position: relative;
  width: 30%;
  height: auto;
}

.infoCard {
  text-align:center;
  margin-inline-start:0px;
}
.infoCard td {
  width:300px;
}

.title {
  animation: 1s appear;
  font: bold 64px/70px 'Segoe UI', sans-serif;
  display: block;
  color: var(--lightorange);
  letter-spacing: 1px;
}

p {
  font-weight: 300;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
}

h4 {
  font-weight: bold;
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight:bold;
  letter-spacing:1px;
  color: var(--lightgray);
  padding-block-end:5px;
  text-align:center;
  padding-block-start:10px;
}

.infoCard p {
  margin-block-start:-15px;
  color:var(--lightorange);
}
.infoCard h4 {
  font-size:20px;
  margin-block-start:-10px;
}

.dropdown .icon {
  scale:200%;
  padding-block-start:5px;
  color:var(--lightgray);
}

.aegis {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.anvil {
  margin-block-start:-15px;
}
.aopoa {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.argo {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.banu {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.consol {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.crusader {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.drake {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.esperia {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.gatac {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.greycat {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.kruger {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.misc {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.origin {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.rsi {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.tumbril {
  margin-inline-start:15px;
  margin-block-start:-15px;
}
.vanduul {
  margin-inline-start:15px;
  margin-block-start:-15px;
}

.leftcard button {
  border-style:solid;
  border-radius:50%;
  border-width:15px;
  border-color:var(--lightgray);
  cursor:pointer;
  display:inline-flex;
  padding:5px 5px;
  background-color:var(--lightgray);
  margin-block-start:5px;
}
.leftcard button:hover {
  background-color:var(--lightorange);
  border-color:var(--lightorange);
}
.leftcard label {
  display:inline-flex;
  margin-block-start:2px;
  margin-block-end:2px;
}
.leftcard table {
  justify-items:center;
  text-align:center;
  width:250px;
  margin-block-end:0px;
}


.leftcard .va-select {
  --va-select-cursor: pointer;
  --va-select-dropdown-border-radius: 10px;
  --va-select-dropdown-background: var(--va-dropdown-secondary);
  --va-select-box-shadow: 0 4px 8px rgba(59, 63, 73, 0.15);
  --va-select-min-width: var(--va-form-element-min-width);
  --va-select-anchor-state-icon-margin-left: 0.25rem;
  letter-spacing:1px;
  word-spacing:0px;
  font-family:'Segoe UI', sans-serif;
  font-size:16px;
  color:var(--darkgray);
  width:300px;
}

.rightcard .va-divider {
  color:var(--lightgray);
}

.leftcard select {
  background-color:var(--lightorange);
  border-style:solid;
  border-radius:20px;
  border-color:var(--lightorange);
  color:var(--darkgray);
  width:300px;
  font-weight:bold;
  font-size:18px;
  text-align:center;
  height:40px;
  margin-block-start:-20px;
}
.leftcard select option:hover {
  color:var(--orangehover);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>