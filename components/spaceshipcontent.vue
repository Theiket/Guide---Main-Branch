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
      <p>Avenger<br>Stalker</p>
      </label>
    </td>
    <td>
      <button value="titan"></button>
      <br>
      <label for="titan">
      <p>Avenger<br>Titan</p>
      </label>
    </td>
    <td>
      <button value="warlock"></button>
      <br>
      <label for="warlock">
      <p>Avenger<br>Warlock</p>
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
      <p>Retaliator<br>Base</p>
      </label>
    </td>
    <td>
      <button value="retaliatorbomber"></button>
      <br>
      <label for="retaliatorbomber">
      <p>Retaliator<br>Bomber</p>
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
      <p>Sabre<br>Comet</p>
      </label>
    </td>
    <td>
      <button value="raven"></button>
      <br>
      <label for="raven">
      <p>Sabre<br>Raven</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="harbinger"></button>
      <br>
      <label for="harbinger">
      <p>Vanguard<br>Harbinger</p>
      </label>
    </td>
    <td>
      <button value="hoplite"></button>
      <br>
      <label for="hoplite">
      <p>Vanguard<br>Hoplite</p>
      </label>
    </td>
    <td>
      <button value="sentinel"></button>
      <br>
      <label for="sentinel">
      <p>Vanguard<br>Sentinel</p>
      </label>
    </td>
    </tr>
    <td>
      <button value="warden"></button>
      <br>
      <label for="warden">
      <p>Vanguard<br>Warden</p>
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
      <p>C8R Pisces<br>Rescue</p>
      </label>
    </td>
    </tr>    
    <tr>
    <td>
      <button value="C8X"></button>
      <br>
      <label for="C8X">
      <p>C8X Pisces<br>Expedition</p>
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
      <p>F7A<br>Hornet</p>
      </label>
    </td>
    <td>
      <button value="F7A2"></button>
      <br>
      <label for="F7A2">
      <p>F7A<br>Hornet Mk II</p>
      </label>
    </td>
    <td>
      <button value="F7AR"></button>
      <br>
      <label for="F7AR">
      <p>F7A-R<br>Hornet Tracker</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="F7C"></button>
      <br>
      <label for="F7C">
      <p>F7C<br>Hornet</p>
      </label>
    </td>
    <td>
      <button value="F7CM"></button>
      <br>
      <label for="F7CM">
      <p>F7C-M<br>Super Hornet</p>
      </label>
    </td>
    <td>
      <button value="F7CR"></button>
      <br>
      <label for="F7CR">
      <p>F7C-R<br>Hornet Tracker</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="F7CS"></button>
      <br>
      <label for="F7CS">
      <p>F7C-S<br>Hornet Ghost</p>
      </label>
    </td>
    <td>
      <button value="F8A"></button>
      <br>
      <label for="F8A">
      <p>F8A<br>Lightning</p>
      </label>
    </td>
    <td>
      <button value="F8C"></button>
      <br>
      <label for="F8C">
      <p>F8C<br>Lightning</p>
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
      <p>MPUV<br>Cargo</p>
      </label>
    </td>
    <td>
      <button value="mpuvp"></button>
      <br>
      <label for="mpuvp">
      <p>MPUV<br>Personnel</p>
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
      <p>A1<br>Spirit</p>
      </label>
    </td>
    <td>
      <button value="a2hercules"></button>
      <br>
      <label for="a2hercules">
      <p>A2<br>Hercules</p>
      </label>
    </td>
    <td>
      <button value="aresinferno"></button>
      <br>
      <label for="aresinferno">
      <p>Ares<br>Inferno</p>
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
      <p>C1<br>Spirit</p>
      </label>
    </td>
    <td>
      <button value="c2hercules"></button>
      <br>
      <label for="c2hercules">
      <p>C2<br>Hercules</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="e1spirit"></button>
      <br>
      <label for="e1spirit">
      <p>E1<br>Spirit</p>
      </label>
    </td>
    <td>
      <button value="genesis"></button>
      <br>
      <label for="genesis">
      <p>Genesis<br>Starliner</p>
      </label>
    </td>
    <td>
      <button value="m2hercules"></button>
      <br>
      <label for="m2hercules">
      <p>M2<br>Hercules</p>
      </label>
    </td>
    </tr>
      <br>
      <button value="msr"></button>
      <br>
      <label for="msr">
      <p>Mercury<br>Star Runner</p>
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
    <p>Cutlass<br>Black</p>
    </label>
    </td>
    <td>
      <button value="cutlassblue"></button>
      <br>
      <label for="cutlassblue">
      <p>Cutlass<br>Blue</p>
      </label>
    </td>
    <td>
      <button value="cutlassred"></button>
      <br>
      <label for="cutlassred">
      <p>Cutlass<br>Red</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="cutlasssteel"></button>
      <br>
      <label for="cutlasssteel">
      <p>Cutlass<br>Steel</p>
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
      <p>Kraken<br>Privateer</p>
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
      <p>Talon<br>Shrike</p>
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
    <table>
    <tr>
    <td>
      <button value="p52"></button>
      <br>
      <label for="p52">
      <p>P-52<br>Merlin</p>
      </label>
    </td>
    <td>
      <button value="p72"></button>
      <br>
      <label for="p72">
      <p>P-72<br>Archimedes</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="misc" v-if="selectedCompany === 'Musashi Industrial (MISC)'">
    <table>
    <tr>
    <td>
      <button value="expanse"></button>
      <br>
      <label for="expanse">
      <p>Expanse</p>
      </label>
    </td>
    <td>
      <button value="freelancer"></button>
      <br>
      <label for="freelancer">
      <p>Freelancer</p>
      </label>
    </td>
    <td>
      <button value="freelancerdur"></button>
      <br>
      <label for="freelancerdur">
      <p>Freelancer<br>DUR</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="freelancermax"></button>
      <br>
      <label for="freelancermax">
      <p>Freelancer<br>MAX</p>
      </label>
    </td>
    <td>
      <button value="freelancermis"></button>
      <br>
      <label for="freelancermis">
      <p>Freelancer<br>MIS</p>
    </label>
    </td>
    <td>
      <button value="hulla"></button>
      <br>
      <label for="hulla">
      <p>HULL A</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="prospector"></button>
      <br>
      <label for="prospector">
      <p>Prospector</p>
      </label>
    </td>
    <td>
      <button value="razor"></button>
      <br>
      <label for="razor">
      <p>Razor</p>
      </label>
    </td>
    <td>
      <button value="razorex"></button>
      <br>
      <label for="razorex">
      <p>Razor EX</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="razorlx"></button>
      <br>
      <label for="razorlx">
      <p>Razor LX</p>
      </label>
    </td>
    <td>
      <button value="reliantkore"></button>
      <br>
      <label for="reliantkore">
      <p>Reliant<br>Kore</p>
      </label>
    </td>
    <td>
      <button value="reliantmako"></button>
      <br>
      <label for="reliantmako">
      <p>Reliant<br>Mako</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="reliantsen"></button>
      <br>
      <label for="reliantsen">
      <p>Reliant<br>Sen</p>
      </label>
    </td>
    <td>
      <button value="relianttana"></button>
      <br>
      <label for="relianttana">
      <p>Reliant<br>Tana</p>
      </label>
    </td>
    <td>
      <button value="starfarer"></button>
      <br>
      <label for="starfarer">
      <p>Starfarer</p>
      </label>
    </td>
    </tr>
    <tr>
      <button value="starfarergemini"></button>
      <br>
      <label for="starfarergemini">
      <p>Starfarer<br>Gemini</p>
      </label>
    </tr>
    </table>
  </div>
  <div class="origin" v-if="selectedCompany === 'Origin Jumpworks'">
    <table>
    <tr>
    <td>
      <button value="100i"></button>
      <br>
      <label for="100i">
      <p>100i</p>
      </label>
    </td>
    <td>
      <button value="125a"></button>
      <br>
      <label for="125a">
      <p>125a</p>
      </label>
    </td>
    <td>
      <button value="135c"></button>
      <br>
      <label for="135c">
      <p>135c</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="300i"></button>
      <br>
      <label for="300i">
      <p>300i</p>
      </label>
    </td>
    <td>
      <button value="315p"></button>
      <br>
      <label for="315p">
      <p>315p</p>
      </label>
    </td>
    <td>
      <button value="325a"></button>
      <br>
      <label for="325a">
      <p>325a</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="350r"></button>
      <br>
      <label for="350r">
      <p>350r</p>
      </label>
    </td>
    <td>
      <button value="400i"></button>
      <br>
      <label for="400i">
      <p>400i</p>
      </label>
    </td>
    <td>
      <button value="600iexplorer"></button>
      <br>
      <label for="600iexplorer">
      <p>600i<br>Explorer</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="600itouring"></button>
      <br>
      <label for="600itouring">
      <p>600i<br>Touring</p>
      </label>
    </td>
    <td>
      <button value="85x"></button>
      <br>
      <label for="85x">
      <p>85X</p>
      </label>
    </td>
    <td>
      <button value="890j"></button>
      <br>
      <label for="890j">
      <p>890 Jump</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="g12"></button>
      <br>
      <label for="g12">
      <p>G12</p>
      </label>
    </td>
    <td>
      <button value="g12a"></button>
      <br>
      <label for="g12a">
      <p>G12a</p>
      </label>
    </td>
    <td>
      <button value="g12r"></button>
      <br>
      <label for="g12r">
      <p>G12r</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="m50"></button>
      <br>
      <label for="m50">
      <p>M50</p>
      </label>
    </td>
    <td>
      <button value="x1"></button>
      <br>
      <label for="x1">
      <p>X1</p>
      </label>
    </td>
    <td>
      <button value="x1f"></button>
      <br>
      <label for="x1f">
      <p>X1 Force</p>
      </label>
    </td>
    </tr>
    <tr>
      <button value="x1v"></button>
      <br>
      <label for="x1v">
      <p>X1<br>Velocity</p>
      </label>
    </tr>
    </table>
  </div>
  <div class="rsi" v-if="selectedCompany === 'Roberts Space Industries'">
    <table>
    <tr>
    <td>
      <button value="auroracl"></button>
      <br>
      <label for="auroracl">
      <p>Aurora CL</p>
      </label>
    </td>
    <td>
      <button value="auroraes"></button>
      <br>
      <label for="auroraes">
      <p>Aurora ES</p>
      </label>
    </td>
    <td>
      <button value="auroraln"></button>
      <br>
      <label for="auroraln">
      <p>Aurora LN</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="auroralx"></button>
      <br>
      <label for="auroralx">
      <p>Aurora LX</p>
      </label>
    </td>
    <td>
      <button value="auroramr"></button>
      <br>
      <label for="auroramr">
      <p>Aurora MR</p>
      </label>
    </td>
    <td>
      <button value="constellationandromeda"></button>
      <br>
      <label for="constellationandromeda">
      <p>Constellation<br>Andromeda</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="constellationaquila"></button>
      <br>
      <label for="constellationaquila">
      <p>Constellation<br>Aquila</p>
      </label>
    </td>
    <td>
      <button value="constellationphoenix"></button>
      <br>
      <label for="constellationphoenix">
      <p>Constellation<br>Phoenix</p>
      </label>
    </td>
    <td>
      <button value="constellationtaurus"></button>
      <br>
      <label for="constellationtaurus">
      <p>Constellation<br>Taurus</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="mantis"></button>
      <br>
      <label for="mantis">
      <p>Mantis</p>
      </label>
    </td>
    <td>
      <button value="scorpius"></button>
      <br>
      <label for="scorpius">
      <p>Scorpius</p>
      </label>
    </td>
    <td>
      <button value="ursa"></button>
      <br>
      <label for="ursa">
      <p>Ursa</p>
      </label>
    </td>
    </tr>
    </table>
  </div>
  <div class="tumbril" v-if="selectedCompany === 'Tumbril Land Systems'">
    <table>
    <tr>
    <td>
      <button value="cyclone"></button>
      <br>
      <label for="cyclone">
      <p>Cyclone</p>
      </label>
    </td>
    <td>
      <button value="cycloneaa"></button>
      <br>
      <label for="cycloneaa">
      <p>Cyclone AA</p>
      </label>
    </td>
    <td>
      <button value="cyclonemt"></button>
      <br>
      <label for="cyclonemt">
      <p>Cyclone MT</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="cyclonerc"></button>
      <br>
      <label for="cyclonerc">
      <p>Cyclone RC</p>
      </label>
    </td>
    <td>
      <button value="cyclonern"></button>
      <br>
      <label for="cyclonern">
      <p>Cyclone RN</p>
      </label>
    </td>
    <td>
      <button value="cyclonetr"></button>
      <br>
      <label for="cyclonetr">
      <p>Cyclone TR</p>
      </label>
    </td>
    </tr>
    <tr>
    <td>
      <button value="nova"></button>
      <br>
      <label for="nova">
      <p>Nova</p>
      </label>
    </td>
    <td>
      <button value="rangercv"></button>
      <br>
      <label for="rangercv">
      <p>Ranger CV</p>
      </label>
    </td>
    <td>
      <button value="rangerrv"></button>
      <br>
      <label for="rangerrv">
      <p>Ranger RV</p>
      </label>
    </td>
    </tr>
    <tr>
      <button value="rangertr"></button>
      <br>
      <label for="rangertr">
      <p>Ranger TR</p>
      </label>
    </tr>
    </table>
  </div>
    </center>
    </div>
  </div>
<!-- Component Selection Card -->
  <div class="centercard">
    <div class="weapons">
      <p>Weapons</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="weapons = !weapons">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div v-if="weapons">
      <br>
      <p>Become Visible</p>
      </div>
    </div>
    <div class="shields">
      <br>
      <p>Shields</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="shields = !shields">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div v-if="shields">
      <br>
      <p>Become Visible</p>
      </div>
    </div>
    <div class="powerplants">
      <br>
      <p>Power Plants</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="powerplants = !powerplants">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div v-if="powerplants">
      <br>
      <p>Become Visible</p>
      </div>
    </div>
    <div class="coolers">
      <br>
      <p>Coolers</p>
      <br>
      <div class="dropdown">
        <va-button-group preset="plain" class="mb-6">
        <va-button @click="coolers = !coolers">
        <Icon name="bxs:caret-down-circle" />
        </va-button>
        </va-button-group>
      </div>
      <div class="componentSelect" v-if="coolers">
        <br>
        <p>Become Visible</p>
        <br>
        <div class="coolerButton" v-for="coolers in s1coolers">
          <va-button>
           Test
          </va-button>
        </div>
        <br>
      </div>
    </div>
    <div class="quantumdrives">
      <br>
      <p>Quantum Drives</p>
      <br>
      <div class="dropdown">
      <va-button-group preset="plain" class="mb-6">
      <va-button @click="quantumdrives = !quantumdrives">
      <Icon name="bxs:caret-down-circle" />
      </va-button>
      </va-button-group>
      </div>
      <div v-if="quantumdrives">
      <br>
      <p>Become Visible</p>
      </div>
    </div>
  </div>
<!-- Ship Information Card -->
  <div class="rightcard">
    <div class="col-md-3">
    <h4>
    Vehicle Name
    </h4>
    <div class="vehicleText">
    <p>
    Vehicle information can go here, there's quite a lot of it to be fair, but it still belongs here.
    </p>
    </div>
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
      weapons: false,
      shields: false,
      powerplants: false,
      coolers: false,
      quantumdrives: false,
      selectedCompany: '',
      companies: ['Aegis Dynamics', 'Anvil Aerospace', 'AopoA', 'ARGO Astronautics', 'Banu Souli', 'Consolidated Outland', 'Crusader Industries', 'Drake Interplanetary', 'Esperia Inc.', 'Gatac Manufacture', 'Greycat Industrial','Kruger Intergalactic', 'Musashi Industrial (MISC)', 'Origin Jumpworks', 'Roberts Space Industries', 'Tumbril Land Systems'],
      s1coolers: ['IcePlunge','QuickCool','ZeroRush','Bracer','Glacier','Polar','Tundra','CryoStar','FrostStar','WinterStar','Ecoflow','Hydrocel','Thermax','Ultraflow','ArcticStorm','BlastChill','FlashFreeze','Heatsafe','Snowblind','Vaporblock','Berian','Endo','Gelid'],
      s2coolers:'',
      s3coolers:'',
      s4coolers:'',
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

/*Left Card */

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
  margin-block-start:2px;
  margin-block-end:2px;
  display:inline-flex;
}
.leftcard table {
  text-align:center;
  min-width:250px;
  margin-block-start:-20px;
}
.leftcard td {
  width:125px;
}

/*Right Card*/
.vehicleText {
  padding-inline-start:15px;
  padding-inline-end:15px;
}


/*Center Card*/
.componentSelect {
  background-color:var(--darkgray);
  border-style:solid;
  border-width:3px;
  border-color:var(--lightorange);
  border-radius:25px;
  margin-inline-end:15px;
  margin-block-start:15px;
  object-fit:contain;
}
.componentSelect button {
}

.coolerButton {
  scale:100%;
  position:relative;
  border:none;
  padding-inline-start:5px;
  padding-block-end:2px;
  padding-inline-end:5px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>