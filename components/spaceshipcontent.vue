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
    <span v-for="ships in aegis">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="anvil" v-if="selectedCompany === 'Anvil Aerospace'">
    <span v-for="ships in anvil">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="aopoa" v-if="selectedCompany === 'AopoA'">
    <span v-for="ships in aopoa">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="argo" v-if="selectedCompany === 'ARGO Astronautics'">
    <span v-for="ships in argo">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="banu" v-if="selectedCompany === 'Banu Souli'">
    <span v-for="ships in banu">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="consol" v-if="selectedCompany === 'Consolidated Outland'">
    <span v-for="ships in consol">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="crusader" v-if="selectedCompany === 'Crusader Industries'">
    <span v-for="ships in crusader">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="drake" v-if="selectedCompany === 'Drake Interplanetary'">
    <span v-for="ships in drake">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="esperia" v-if="selectedCompany === 'Esperia Inc.'">
    <span v-for="ships in esperia">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="gatac" v-if="selectedCompany === 'Gatac Manufacture'">
    <span v-for="ships in gatac">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="greycat" v-if="selectedCompany === 'Greycat Industrial'">
    <span v-for="ships in greycat">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="kruger" v-if="selectedCompany === 'Kruger Intergalactic'">
    <span v-for="ships in kruger">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="misc" v-if="selectedCompany === 'Musashi Industrial (MISC)'">
    <span v-for="ships in misc">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="origin" v-if="selectedCompany === 'Origin Jumpworks'">
    <span v-for="ships in origin">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="rsi" v-if="selectedCompany === 'Roberts Space Industries'">
    <span v-for="ships in rsi">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
  </div>
  <div class="tumbril" v-if="selectedCompany === 'Tumbril Land Systems'">
    <span v-for="ships in tumbril">
      <td>
      <button></button>
      <p> {{ ships }} </p>
      </td>
    </span>
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
      <div class="componentSelect" v-if="shields">
        <span class="coolerButton" v-for="shield in s1shields">
          <button>
          <h4> {{shield}} </h4>
          <p>
          Grade | Class <br>
          Capacity: numVal
          </p>
          </button>
        </span>
        <br>
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
      <div class="componentSelect" v-if="powerplants">
        <span class="coolerButton" v-for="powerplant in s1powerplants">
          <button>
          <h4> {{powerplant}} </h4>
          <p>
          Grade | Class <br>
          Power: numVal
          </p>
          </button>
        </span>
        <br>
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
        <span class="coolerButton" v-for="cooler in s1coolers">
          <button>
          <h4> {{cooler}} </h4>
          <p>
          Grade | Class <br>
          Cooling: numVal
          </p>
          </button>
        </span>
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
      <div class="componentSelect" v-if="quantumdrives">
      <span class="coolerButton" v-for="quantumdrive in s1quantumdrives">
          <button>
          <h4> {{quantumdrive}} </h4>
          <p>
          Grade | Class <br>
          Values Go Here
          </p>
          </button>
        </span>
        <br>
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
      companies: [
        'Aegis Dynamics', 'Anvil Aerospace', 'AopoA', 'ARGO Astronautics', 'Banu Souli', 'Consolidated Outland', 'Crusader Industries', 'Drake Interplanetary', 'Esperia Inc.', 'Gatac Manufacture', 'Greycat Industrial','Kruger Intergalactic', 'Musashi Industrial (MISC)', 'Origin Jumpworks', 'Roberts Space Industries', 'Tumbril Land Systems'
        ],
      aegis: [
        'Avenger Stalker','Avenger Titan','Avenger Warlock','Eclipse','Gladius','Hammerhead','Idris-K','Idris-M','Idris-P','Javelin','Nautilus','Reclaimer','Redeemer','Retaliator Base','Retaliator Bomber','Sabre','Sabre Comet','Sabre Raven','Vanguard Harbinger','Vanguard Hoplite','Vanguard Sentinel','Vanguard Warden','Vulcan'
        ],
      anvil: [
        'Arrow','C8 Pisces','C8R Pisces Rescue','C8X Pisces Expedition','Carrack','Crucible','F7A Hornet','F7A Hornet MK II','F7A-R Hornet Tracker','F7C Hornet','F7C-M Super Hornet','F7C-R Hornet Tracker','F7C-S Hornet Ghost','F8A Lightning','F8C Lightning','Gladiator','Hawk','Hurricane','Legionnaire','Liberator','Terrapin','Valkyrie'
        ],
      aopoa: [
        'Khartu-al','Nox','Santok-yai'
        ],
      argo: [
        'MOLE','MPUV Cargo','MPUV Personnel','RAFT','SRV'
        ],
      banu: [
        'Defender','Merchantman'
        ],
      consol: [
        'HoverQuad','Mustang Alpha','Mustang Beta','Mustang Delta','Mustang Gamma','Mustang Omega','Nomad','Pioneer'
        ],
      crusader: [
        'A1 Spirit','A2 Hercules','Ares Inferno','Ares Ion','C1 Spirit','C2 Hercules','E1 Spirit','Genesis Starliner','M2 Hercules','Mercury Star Runner'
        ],
      drake: [
        'Buccaneer','Caterpillar','Corsair','Cutlass Black','Cutlass Blue','Cutlass Red','Cutlass Steel','Cutter','Dragonfly','Herald','Kraken','Kraken Privateer','Mule','Vulture'
        ],
      esperia: [
        'Blade','Glaive','Prowler','Scythe','Talon','Talon Shrike'
        ],
      gatac: [
        'Railen'
        ],
      greycat: [
        'PTV','ROC','ROC-DS','STV','UTV'
        ],
      kruger: [
        'P-52 Merlin','P-72 Archimedes'
        ],
      misc: [
        'Expanse','Freelancer','Freelancer DUR','Freelancer MAX','Freelancer MIS','Hull A','Prospector','Razor','Razor EX','Razor LX','Reliant Kore','Reliant Mako','Reliant Sen','Reliant Tana','Starfarer','Starfarer Gemini'
        ],
      origin: [
        '100i','125a','135c','300i','315p','325a','350r','400i','600i Explorer','600i Touring','85X','890 Jump','G12','G12a','G12r','M50','X1','X1 Force','X1 Velocity'
        ],
      rsi: [
        'Aurora CL','Aurora ES','Aurora LN','Aurora LX','Aurora MR','Constellation Andromeda','Constellation Aquila','Constellation Phoenix','Constellation Taurus','Mantis','Scorpius','Scorpius Antares','Ursa'
        ],
      tumbril: [
        'Cyclone','Cyclone AA','Cyclone MT','Cyclone RC','Cylcone RN','Cyclone TR','Nova','Ranger CV','Ranger RV','Ranger TR'
        ],
      s1coolers: [
        'ArcticStorm','Berian','BlastChill','Bracer','CryoStar','Ecoflow','Endo','FlashFreeze','FrostStar','Gelid','Glacier','Heatsafe','Hydrocel','Polar','QuickCool','Snowblind','Thermax','Tundra','Ultraflow','Vaporblock','WinterStar','ZeroRush','IcePlunge'
        ],
      s2coolers:[
        'AbsoluteZero','Arctic','Aufeis','Avalanche','Boreal','Coldsnap','CoolCore','CryoStarEx','FrostStarEx','FullFrost','Graupel','Heatsink','HydroJet','Icebox','IceDive','Nightfall','Permafrost','RapidCool','Snowfall','Snowpack','Taiga','Whiteout','WinterStarEx'
        ],
      s3coolers:[
        'Blizzard','Chillmax','CryoStarXL','Draug','Elsen','FrostStarXL','Galinstan','Hydropulse','Iceflush','Kragen','Mercury','Tempest','ThermalCore','WinterStarXL'
        ],
      s4coolers:[
        'Idris','Javelin','890 Jump','Bengal'
        ],
      s1powerplants: [
        'Breton','Charger','Deltamax','Dynaflux','Endurance','FierellCascade','Fortitude','Hypergen','Ionburst','JS300','Lightblossom','Lumacore','Magnabloom','Overdrive','Powerbolt','Quadracell','Regulus','Roughneck','SlipStream','SonicLite','Starheart','Sunflare','Whiterose','Zapjet'
        ],
      s2powerplants: [
        'Bolide','Cirrus','Daybreak','Diligence','Eclipse','Exogen','FullForce','GammaMax','Genoa','IonSurge','JS400','Lotus','LuxCore','Maelstrom','QuadracellMT','Radiance','Sedulity','Solarflare','SparkJet','Starburn','Trommel','TurboDrive','UltraFlux','Vortex'
        ],
      s3powerplants: [
        'Celestial','Centurion','Drassik','Durango','Fulgur','FullForcePro','Ginzel','IonSurgePro','JS500','Megaflux','NewDawn','QuadracellMX','Reliance','Smartgen','SparkJetPro','Superdrive','TigerLily'
        ],
      s4powerplants: [
        'Bengal','890 Jump','Idris','Reclaimer'
        ],
      s1shields: [
        '5SA','6SA','7SA','AllStop','Banu Placeholder','Bulwark','Cloak','Falco','ForceWall','FR66','Guardian','Hex','Ink','Jaghte','Mirage','Palisade','SecureHyde','Shimmer','Steward','Targa','Veil','Web'
        ],
      s2shields: [
        '5MA','6MA','7MA','Armada','Aspis','Bamoty','Banu Placeholder','Bloc','Citadel','Coverall','FR76','FullStop','Haltur','Obscura','Rampart','RPel','SecureShield','Sheut','Shroud','Stop','Trenta','Umbra'
        ],
      s3shields: [
        '5CA','6CA','7CA','Armor','Barbican','FR86','FullBlock','Guard','Haven','Parapet','SecureScreen','Stronghold','SureStop','Ward'
        ],
      s4shields: [
        'Bengal','Idris','Idris-Pirate','Javelin','890 Jump'
        ],
      s1quantumdrives: [
        'Atlas','Beacon','Burst','Colossus','Drift','Eos','Expedition','Flood','FoxFire','Goliath','Hyperion','LightFire','Rush','Siren','Spectre','VK-00','Voyage','Vulcan','Wayfare','Zephyr'
        ],
      s2quantumdrives: [
        'Aither','Bolon','Bolt','Cascade','Crossfield','Flash','Hemera','Huracan','Khaos','Nova','Odyssey','Quest','Sojourn','SparkFire','Spicule','SunFire','Torrent','XL1','Yaluk','Yeager'
        ],
      s3quantumdrives: [
        'Agni','Balandin','Drifter','Echo','Erebos','Fissure','Impulse','Kama','Metis','Pontes','Ranger','TS2','Tyche','Vesta','Wanderer'
        ],
      s4quantumdrives: [
        'Javelin','Idris','890 Jump'
        ],
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
  margin-inline-end:25px;
  margin-block-start:15px;
}
.coolerButton {
  padding-inline-start:5px;
  padding-block-end:2px;
  padding-inline-end:5px;
}
.coolerButton h4 {
  font-size:20px;
  color:var(--lightorange);
  padding-block-start:0px;
}
.coolerButton p {
  padding-block-end:5px;
  font-size:16px;
}
.coolerButton button {
  background-color:transparent;
  border:2px solid transparent;
  border-radius:15px;
  width:30%;
  overflow:scroll;
  margin-block-start:4px;
}
.coolerButton button:hover {
  border-color:var(--lightorange);
}
.coolerButton button:hover h4 {
  color:var(--orangehover);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>