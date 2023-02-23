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
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="anvil" v-if="selectedCompany === 'Anvil Aerospace'">
    <span v-for="ships in anvil">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="aopoa" v-if="selectedCompany === 'AopoA'">
    <span v-for="ships in aopoa">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="argo" v-if="selectedCompany === 'ARGO Astronautics'">
    <span v-for="ships in argo">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="banu" v-if="selectedCompany === 'Banu Souli'">
    <span v-for="ships in banu">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="consol" v-if="selectedCompany === 'Consolidated Outland'">
    <span v-for="ships in consol">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="crusader" v-if="selectedCompany === 'Crusader Industries'">
    <span v-for="ships in crusader">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="drake" v-if="selectedCompany === 'Drake Interplanetary'">
    <span v-for="ships in drake">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="esperia" v-if="selectedCompany === 'Esperia Inc.'">
    <span v-for="ships in esperia">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="gatac" v-if="selectedCompany === 'Gatac Manufacture'">
    <span v-for="ships in gatac">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="greycat" v-if="selectedCompany === 'Greycat Industrial'">
    <span v-for="ships in greycat">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="kruger" v-if="selectedCompany === 'Kruger Intergalactic'">
    <span v-for="ships in kruger">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="misc" v-if="selectedCompany === 'Musashi Industrial (MISC)'">
    <span v-for="ships in misc">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="origin" v-if="selectedCompany === 'Origin Jumpworks'">
    <span v-for="ships in origin">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="rsi" v-if="selectedCompany === 'Roberts Space Industries'">
    <span v-for="ships in rsi">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
      </td>
    </span>
  </div>
  <div class="tumbril" v-if="selectedCompany === 'Tumbril Land Systems'">
    <span v-for="ships in tumbril">
      <td>
      <button :key="ships.name" @click="updateInfo(ships)"></button>
      <p> {{ ships.name }} </p>
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
          <h4> {{shield.name}} </h4>
          <p>
          Grade | Class <br>
          Capacity: {{shield.capacity}}
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
          <h4> {{powerplant.name}} </h4>
          <p>
          Grade | Class <br>
          Power: {{powerplant.capacity}}
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
            <h4> {{cooler.name}} </h4>
            <p>
            Grade | Class <br>
            Cooling: {{cooler.coolingrate}}
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
            <h4> {{quantumdrive.name}} </h4>
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
      {{vehicleName}}
      </h4>
      <div class="vehicleText">
        <p>
        {{vehicleDescription}}
        </p>
      </div>
      <va-divider />
      <table class="infoCard">
        <tr>
          <td class="shipRole">
            <h4>Role</h4>
            <br>
            <p>{{vehicleRole}}</p>
          </td>
          <td class="shipSize">
            <h4>Size</h4>
            <br>
            <p>{{vehicleSize}}</p>
          </td>
        </tr>
        <tr>
          <td class="shipDimensions">
            <h4>Dimensions</h4>
            <br>
            <p>Length x<br>Width x<br>Height x</p>
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
      vehicleName:'Please select a vehicle',
      vehicleDescription:'Please select a vehicle to see their description.',
      vehicleRole:'-',
      vehicleSize:'-',
      companies: [
        'Aegis Dynamics', 'Anvil Aerospace', 'AopoA', 'ARGO Astronautics', 'Banu Souli', 'Consolidated Outland', 'Crusader Industries', 'Drake Interplanetary', 'Esperia Inc.', 'Gatac Manufacture', 'Greycat Industrial','Kruger Intergalactic', 'Musashi Industrial (MISC)', 'Origin Jumpworks', 'Roberts Space Industries', 'Tumbril Land Systems'
        ],
      aegis: [
        {
          name:'Avenger Stalker',
          description:"Initially designed as a frontline carrier for the military, the Avenger Stalker took a different path, ultimately having a long and storied career as the standard patrol craft of the UEE Advocacy. Utilizing its cargo hold for prisoner transport, the Avenger features a sturdy, reliable hull and the capacity for larger-than-expected engine mounts.",
          role:'Interdiction',
          size:'S2',
        },
        {
          name:'Avenger Titan',
          description:"With extra room in the back, the Titan’s hold is free to carry cargo. Couple that with the Avenger’s tried and true combat abilities and you’ve got a light cargo hauler that’s more than capable of handling itself in a fight.",
          role:'Light freight',
          size:'S2',
        },
        {
          name:'Avenger Warlock',
          description:"Outfitted with a Behring REP-8 EMP Generator, the Warlock makes non-lethal suppression possible via a powerful electromagnetic wave capable of disabling any electronics within the blast radius.",
          role:'Interdiction',
          size:'S2',
        },
        {
          name:'Eclipse',
          description:"The Aegis Eclipse is a bomber designed to get in and strike before its even spotted. After extensive service with the UEE, this high-tech military stalwart is making its debut on the civilian market for 2947.",
          role:'Stealth bomber',
          size:'S2',
        },
        {
          name:'Gladius',
          description:"The Gladius is an older design which has been updated over the years to keep up with modern technology. In military circles, the Gladius is beloved for its performance and its simplicity. A fast, light fighter with a laser-focus on dogfighting, the Gladius is an ideal interceptor or escort ship.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Hammerhead',
          description:"A fast patrol ship with multiple turrets designed to combat fighters, the Hammerhead is equally suited to support larger capital ships in a fleet or act as a flagship for fighter groups.",
          role:'Heavy gunship',
          size:'S5',
        },
        {
          name:'Idris-K',
          description:"The Aegis Idris-K is an aftermarket special edition of the Idris-P that features additional equipments tailored to dealing with the swarm threat of carrier-type ships. Compared to the Idris-P, Idris-K has an additional size 10 laser beam, four point defense turrets that replaced the remote turrets, and a missile turret that replaced a manned turret. Both Idris-P and Idris-M can be converted to this variant using the aftermarket kit.",
          role:'Frigate',
          size:'Unknown',
        },
        {
          name:'Idris-M',
          description:"Larger than a bomber but smaller than a ship of the line, frigates occupy an interesting space in the pantheon of warships. While they lack the heavy armor and the capital weaponry of a cruiser, frigates are more maneuverable and are highly configurable.",
          role:'Frigate',
          size:'Unknown',
        },
        {
          name:'Idris-P',
          description:"A mark two 'peacekeeper' variant developed for the UEE patrol services, the Idris-P strips the standard ships ship-to-ship gun and spinal mount in favor of additional cargo capacity and superior speed.",
          role:'Frigate',
          size:'Unknown',
        },
        {
          name:'Javelin',
          description:'Designed for use by the UEE military, the Javelin is a massive, modular capital ship that can be appropriated for entrepreneurial use. With a detailed interior, plenty of modular room options and a high crew capacity, the Javelin is a ship that has made a name for itself in a variety of roles.',
          role:'Destroyer',
          size:'Unknown',
        },
        {
          name:'Nautilus',
          description:'With four centuries of distinguished service under its belt, The Aegis Dynamics Nautilus tactical minelayer represents the ultimate in strategic combat engineering, with fully-integrated mine-deployment, sweeping and disarming capabilities.',
          role:'Minelayer',
          size:'Unknown',
        },
        {
          name:'Reclaimer',
          description:'The Aegis Reclaimer is an industrial salvage ship. Equipped with a reinforced cargo bay, a long-range jump drive and launch pods for unmanned drones, the Reclaimer is an ideal ship for taking advantage of deep space wrecks. Tractor beams, floodlights, scanner options and docking ports round out the tools on this capable, utilitarian spacecraft.',
          role:'Heavy salvage',
          size:'S6',
        },
        {
          name:'Redeemer',
          description:'Designed by Star Citizens backers, the Aegis Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering armored soldiers for first person combat!',
          role:'Gunship',
          size:'S4',
        },
        {
          name:'Retaliator Base',
          description:'The Aegis Dynamics’ Retaliator has landed! One of the United Empire of Earth’s most powerful warbirds, the Retaliator was designed as a fearsome weapons platform designed to strike and kill capital ships. A key portion of the UEE’s power projection, Retaliator squadrons have served with distinction against outlaws, the Vanduul and elsewhere. The base version of the Retaliator is customizable with additional modules to fit your needs.',
          role:'Heavy gunship',
          size:'S4',
        },
        {
          name:'Retaliator Bomber',
          description:'The Aegis Dynamics’ Retaliator has landed! One of the United Empire of Earth’s most powerful warbirds, the Retaliator was designed as a fearsome weapons platform designed to strike and kill capital ships. A key portion of the UEE’s power projection, Retaliator squadrons have served with distinction against outlaws, the Vanduul and elsewhere. This version of the Retaliator includes the bomb bay and torpedo launcher.',
          role:'Heavy bomber',
          size:'S4',
        },
        {
          name:'Sabre',
          description:'Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. Designed to be a rapid responder, the Sabre is more than capable of establishing battlefield dominance for any number of combat scenarios.',
          role:'Stealth fighter',
          size:'S2',
        },
        {
          name:'Sabre Comet',
          description:'Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Comet pays tribute to famed pilot Captain Kamur Dalion for his work with Aegis to usher in a new era of combat ship design. This Sabre comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.',
          role:'Medium fighter',
          size:'S2',
        },
        {
          name:'Sabre Raven',
          description:'Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. They have raised the bar yet again with their Raven variant, maintaining all the speed and maneuverability of its Sabre forebear, but with a lower ship signature, making it a fast, stealthy infiltrator.',
          role:'Interdiction',
          size:'S2',
        },
        {
          name:'Vanguard Harbinger',
          description:'The Vanguard Harbinger is Earth’s standard fighter-bomber, converting the standard Warden model’s escape pod into a potent bomb bay. The extended range of the Vanguard and the relatively small profile mean that it can go where carrier-based planes or larger strategic bombers don’t… and then strike hard and make it back to frontier bases. The Vanguard Harbinger is a powerful bomber that can operate out of the roughest forward operating bases.',
          role:'Bomber',
          size:'S2',
        },
        {
          name:'Vanguard Hoplite',
          description:'The Vanguard Hoplite is a cross between the winning Vanguard deep space fighter and a dedicated boarding ship. Adapted from proven assault ship designs, the Hoplite is the perfect tool for inserting an armored strike team with enough firepower to get them out again.',
          role:'Dropship',
          size:'S3',
        },
        {
          name:'Vanguard Sentinel',
          description:'The Vanguard Sentinel is a ship that’s designed to fight smart instead of taking enemies head on. The conversion features an AR cockpit, an external e-War pod, decoy missiles and a set of EMP charges. Vanguard Sentinels often provide necessary combat support for combined operations. A lone Sentinel assigned wild weasel tasks is frequently paired with Harbinger bombers and Warden escorts for large attack missions.',
          role:'Interdiction',
          size:'S3',
        },
        {
          name:'Vanguard Warden',
          description:'The A3G Vanguard Warden is one of Aegis Dynamics most versatile and deadly long-range fighters. With an extra heavy frame, and an extra nasty loadout, the Warden is an absolute beast on the frontlines of any assault operation.',
          role:'Heavy fighter',
          size:'S3',
        },
        {
          name:'Vulcan',
          description:'Refuel. Repair. Rearm. Become a one-person support crew with Aegis Dynamics’ versatile Vulcan, supplying aid to pilots on the fly. Whether pinned down under heavy fire and in need of ammunition, low on quantum fuel after an ill-planned jump, or stranded in unknown space with a busted thruster, a pilot in distress can always count on a Vulcan and its cadre of drones to lend speedy, efficient assistance. Outfit your Vulcan with eye-catching livery and become a beacon of hope, even in the darkest, most treacherous corners of the ‘verse.',
          role:'Medium repair/refuel',
          size:'Unknown',
        }
        ],
      anvil: [
        {
          name:'Arrow',
          description:"Meet Anvils ‘light fighter of the future’. Featuring an ultra-aerodynamic frame, slight profile, and the most advanced manoeuvring thruster tech available, it’s the most agile ship in its class. It can also hold its own in a knock-down-drag-out thanks to a generous standard weapons package that includes quad missile racks and a full complement of countermeasures. The Arrow is designed specifically to leave would-be interlopers thoroughly bewildered. After all, how can they kill what they can't catch?",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Ballista',
          description:"",
          role:'Military',
          size:'S4',
        },
        {
          name:'C8 Pisces',
          description:"Additional firepower turns the base Pisces into a highly capable mini-explorer. Ideal for inter-system travel or investigating tight spots inaccessible to larger ships, it’s a small ship ready for big adventures.",
          role:'Exploration',
          size:'S1',
        },
        {
          name:'C8R Pisces Rescue',
          description:"With the addition of an onboard Tier 3 Medical Bed, the C8R Pisces can treat minor injuries and keep a patient stable while transporting them to the safety of a larger ship, station, or nearby medical facility, making it an invaluable asset for short-range search and rescue.",
          role:'Medical',
          size:'S1',
        },
        {
          name:'C8X Pisces Expedition',
          description:"Additional firepower turns the base Pisces into a highly capable mini-explorer. Ideal for inter-system travel or investigating tight spots inaccessible to larger ships, it’s a small ship ready for big adventures.",
          role:'Exploration',
          size:'S1',
        },
        {
          name:'Carrack',
          description:"The Anvil Carrack features reinforced fuel tanks for long-duration flight, an advanced jump drive, and a dedicated computer core for jump charting operations. Originally a military exclusive, the Carrack is now available for civilian use. On-board accommodations include crew medical and repair facilities, and a mapping-oriented sensor suite.",
          role:'Expedition',
          size:'S5',
        },
        {
          name:'Centurion',
          description:"Built on Anvil’s popular Atlas Platform, the Centurion presents a tactical solution for short-range anti-aircraft operations. Dominate any combat zone by assuring immediate threats from above are dealt with quickly and efficiently, thanks to the Centurion’s custom energy-based AA turret.",
          role:'Combat',
          size:'S4',
        },
        {
          name:'Crucible',
          description:"A so-called “flying toolbox,” the Crucible is Anvil Aerospace’s first dedicated repair ship. Featuring a rotating control bridge and a detachable pressurized workspace, the Crucible is a versatile mobile garage equipped with repair arms, a drone operation center and all the equipment needed to overhaul a damaged craft back into fighting shape.",
          role:'Heavy repair',
          size:'Unknown',
        },
        {
          name:'F7A Hornet',
          description:"The UEE Navys premier carrier-based fighter craft, the F7A is the front-line attack ship for military combat missions. While not outfitted for long range runs, the Hornet can take her share of hits... and dish out a consistent, powerful response.",
          role:'Medium fighter',
          size:'S2',
        },
        {
          name:'F7A Hornet MK II',
          description:"The Anvil F7A Hornet Mk II is the cutting-edge carrier-based fighter revamped from the older F7A Hornet model, the UEE military version of the Hornet.",
          role:'Medium fighter',
          size:'S2',
        },
        {
          name:'F7C Hornet',
          description:"To the enemy, it is a weapon never to be underestimated. To allies, it's a savior. The F7C Hornet is the same dependable and resilient multi-purpose fighter that has become the face of the UEE Navy. The F7C is the foundation to build on and meet whatever requirements you have in mind.",
          role:'Medium fighter',
          size:'S2',
        },
        {
          name:'F7C-M Super Hornet',
          description:"The closest to the Military load-out as is legally possible for a Civilian model, the F7C-M Super Hornet reattaches the ball turret and offers near milspec parts under the hood. Proving that two heads are better than one, a second seat has been added to split the logistic and combat duty, making the Super Hornet a truly terrifying mark to engage.",
          role:'Medium fighter',
          size:'S2',
        },
        {
          name:'F7C-R Hornet Tracker',
          description:"If the Ghost is made to hide, the Tracker is made to seek. The F7C-R Tracker boasts an advanced radar suite making it ideal for deep-space explorers who require depth and accuracy in their scan packages. Local militia and larger merc units will also repurpose Trackers to act as mobile C&C ships for their squadrons.",
          role:'Pathfinder',
          size:'S2',
        },
        {
          name:'F7C-S Hornet Ghost',
          description:"Through a combination of low-emission drives, low-draw weapons, and Void Armor technology capable of diffusing scans, the F7C-S Ghost is built for the pilot who wants to keep a low profile. The Ghost is capable of slipping past the most ardent of observers to accomplish whatever goal you need to accomplish. Don't worry, we won't ask.",
          role:'Stealth fighter',
          size:'S2',
        },
        {
          name:'Gladiator',
          description:"The civilian model of the Gladiator appeals to those that want explore the ‘Verse with a bit of added security. Supporting a maximum of two, the Gladiator is perfectly equipped to explore and fight with or without a wingman. The Civilian model allows pilots to choose between an extra cargo hold or a bomb bay.",
          role:'Bomber',
          size:'S2',
        },
        {
          name:'Hawk',
          description:"A small, light fighter with an emphasis on weaponry, the Hawk boasts an impressive arsenal of lethal and non-lethal weapons, making it a perfect ship for independent bounty hunters or local security looking for a little more punch.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Hurricane',
          description:"Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament - six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
          role:'Heavy fighter',
          size:'S2',
        },
        {
          name:'Legionnaire',
          description:"The Anvil Legionnaire presents the civilian market with a military style boarding vessel capable of occupying ships of varying sizes, crews, and capacities. High-performance jump seats safely transport a boarding party of up to ten into the action, while integrated systems let your copilot bypass security protocols on the target vessel, mitigating risk like never before.",
          role:'Boarding',
          size:'Unknown',
        },
        {
          name:'Liberator',
          description:"Anvil continues its tradition of excellence with the Liberator, an open-air vehicle carrier that applies the tradition of long-range transport to a smaller scale. Designed with the same quantum drive and long-distance capabilities of military-spec carriers and pathfinders but tailored to the civilian market, the Liberator puts your fleet on the front lines of any operation.",
          role:'Light carrier',
          size:'Unknown',
        },
        {
          name:'Spartan',
          description:"",
          role:'Transport',
          size:'S4',
        },
        {
          name:'Terrapin',
          description:"Outfitted with long-range scanners and encased in heavy armor and oversized shields, the U4A-3 Terrapin can face potentially hazardous circumstances with confidence, making it the ultimate combat scout and reconnaissance vehicle, at least according to Anvil.",
          role:'Pathfinder',
          size:'S2',
        },
        {
          name:'Valkyrie',
          description:"In the days of antiquity, the Valkyrie were believed to choose who would live and who would die on the field of war. Now, Anvil is putting that choice in your hands. Seize fate and turn the tide of battle. Rugged, high-performance jump seats safely transport up to twenty personnel into and out of the fray. A vehicle bay and speed ramp efficiently launch ground-based transport or reconnaissance vehicles for unmatched support. Four powerful VTOL thrusters facilitate surgically precise take-offs and landings, while a devastating array of weaponry blurs the line between dropship and gunship.",
          role:'Dropship',
          size:'S4',
        },
        ],
      aopoa: [
        {
          name:'Khartu-al',
          description:"The Xi'an Aopoa corporation manufactures an export model of the Qhire Khartu, the Khartu-al, for sale to Human civilians. The export model features the same Xi'an maneuvering rig, but control surfaces modified for Human use and a more limited armament.",
          role:'Light fighter',
          size:'S3'
        },
        {
          name:'Nox',
          description:"Hit the skids with the 2947 Nox. This speedy and maneuverable open-canopy racer from Aopoa is capable of zipping along planet surfaces or deep space. Available for the first time in Human space, the Nox has been specifically redesigned for Human pilots, so grab your ship and head to the racetrack today.",
          role:'Racing',
          size:'S1',
        },
        {
          name:"San'Tok.Yai",
          description:"Harnessing the power of next-generation Xi'an flight systems, upgraded dual-vector thrusters, and a daunting weapons package, Aopoa has crafted a fighter that retains the nimble dexterity and tight handling the brand is known for. All with the added ability to pack a serious wallop when the situation calls for it. Welcome to the future of spaceflight, courtesy of the Xi'an Empire and Aopoa.",
          role:'Medium fighter',
          size:'Unknown',
        },
        ],
      argo: [
        {
          name:'MOLE',
          description:"ARGO’s pragmatic no-nonsense approach to ship design is celebrated in the unmistakable silhouette of the MOLE. Just one look at this machine and you know it means business. Tap into your full potential with the combined force of ARGO’s patented trilateral mining system. The MOLE has a total of 24 mineral pods, each holding 12 SCU. Eight pods are usable at one time – when they’re full, either head home or jettison them for collection by another vessel and carry on mining. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage ’many hands make for light work’.",
          role:'Prospecting & Mining',
          size:'S3'
        },
        {
          name:'MPUV Cargo',
          description:"The ARGO Astronautics MPUV-1C (commonly ‘Argo Cargo’) is a dedicated merchant transfer ship, a ubiquitous intergalactic stevedore. Vast numbers of Argo Cargos are responsible for loading and unloading goods onto massive long-haul transports and miners that cannot otherwise land on planets or drydocks, such as the Hull D and the Orion. Some captains choose to own and operate their own Argo, while others pay privately owned ships operating as port services a rental fee for performing the unloading process. Boaty McBoatface.",
          role:'Light freight',
          size:'S1',
        },
        {
          name:'MPUV Personnel',
          description:"The ARGO Astronautics MPUV-1P (commonly ‘Argo Personnel.’) is geared towards a simple but incredibly important responsibility: moving groups of people from place to place. The UEE Navy uses MPUV-1Ps extensively, and any new recruit can likely recall those terrifying moments in which such a ship carried them to their first space assignment. In civilian hands, Argo Personnel ships are adapted for everything from standard taxi services to use as makeshift combat dropships. The ARGO is capable of carrying up to eight Humans and their equipment.",
          role:'Passenger',
          size:'S1',
        },
        {
          name:'RAFT',
          description:"As it does with all its industrial concerns, Argo takes cargo transport very seriously, on every scale. The RAFT is no exception, able to carry three standardized 32-SCU cargo containers for a total hauling capacity of 96 SCU. Perfect for entry-level haulers and old pros alike, the RAFT is an ideal solution for reliable local freight transport. Once again, Argo gets the job done.",
          role:'Medium freight',
          size:'S3',
        },
        {
          name:'SRV',
          description:"When it comes to getting the job done, ARGO doesn’t mess around. From simple freight and cargo towing to harrowing search-and-rescue operations, the SRV handles whatever you can throw at it. The bespoke tractor system utilizes an innovative plate and arm combination, allowing for effortless solo use as well as precision team towing for bigger jobs. Your crew and passengers stay safe too thanks to durable shields and heavy-duty armor that keep the cockpit and components secure when the situation gets hairy.",
          role:'Recovery',
          size:'Unknown',
        },
        ],
      banu: [
        {
          name:'Defender',
          description:"Meet the Banu Defender, a multi-crew fighter whose patchwork design highlights technology from a variety of species. Featuring modest accommodations for its crew and easy access to components, the Defender gets its name from the role it serves: the first line of defense against enemy attacks. That's why the Defender makes the ideal companion to the Merchantman: one to do the heavy hauling and the other to perform the deadly dogfighting.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Merchantman',
          description:"Banu traders are renowned for their merchant prowess, traveling the spacelanes and trading with everyone from humans to the Vanduul! Their sturdy, dedicated trading ships are prized beyond all other transports, sometimes passing from generation to generation of Banu.",
          role:'Heavy freight',
          size:'Unknown',
        },
        ],
      consol: [
        {
          name:'HoverQuad',
          description:"You know that place where the roads end, and sky runs out? That little place at the very edge of adventure, where there’s nowhere to go but forward? Where over every dune, and around every patch of weird flora, you might tumble headlong into glorious unfamiliarity? That’s HoverQuad country, and it’s begging to be explored.",
          role:'Racing',
          size:'S1',
        },
        {
          name:'Mustang Alpha',
          description:"Inspired by Consolidated Outland CEO Silas Koerner’s cutting edge vision, the Mustang Alpha is a sleek, stylish spacecraft that uses ultralight alloys to push power ratios to the limits, albeit sometimes unsafely. And now, with the optional Cargo Carrier, you can have the Alpha’s advantages without sacrificing carrying capacity.",
          role:'Cargo',
          size:'S2',
        },
        {
          name:'Mustang Beta',
          description:"The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.",
          role:'Pathfinder',
          size:'S2',
        },
        {
          name:'Mustang Delta',
          description:"While it may not be able to go toe to toe with some of the military specific ships, by reinforcing the Mustang’s already strong hull construction with Consolidated Outland’s own line of Cavalry Class Mass Reduction Armor, the Delta has a reduced cross-sectional signature that evens the playing field.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Mustang Gamma',
          description:"Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
          role:'Racing',
          size:'S2',
        },
        {
          name:'Mustang Omega',
          description:"Consolidated Outland teamed up with custom tuning company Accelerated Mass Design to create a limited edition racer that features a ramped up fuel intake for faster recycling of the ship’s already impressive boost system. To cap off the collaboration, AMD enlisted resident underground artist Sektor8 to design the dynamic paint job.",
          role:'Racing',
          size:'S2',
        },
        {
          name:'Nomad',
          description:"Imagine the versatility of a medium-sized, multi-purpose freighter packed into a compact frame. Imagine a ship designed for lone pilots finding their way across a galaxy teeming with possibilities. The Nomad is ready to go anywhere and do anything - the perfect solution for anyone yearning to start a brand-new adventure.",
          role:'Light freight',
          size:'S2',
        },
        {
          name:'Pioneer',
          description:"After their auspicious debut with the Mustang, Consolidated Outland has gone and changed the game again with the reveal of the Pioneer. This self-contained mobile construction yard is capable of creating planetary modular structures, ushering a new wave of aspiring colonists to customize their new homes on the frontier.",
          role:'Heavy construction',
          size:'Unknown',
        },
        ],
      crusader: [
        {
          name:'A1 Spirit',
          description:"Crusader Industries brings its usual commitment to excellence directly to the civilian market with the A1 Spirit, a mid-size multi-purpose starship equipped as a light bomber but packing enough versatility to tackle multiple roles and unpredictable jobs.",
          role:'Bomber',
          size:'Unknown',
        },
        {
          name:'A2 Hercules',
          description:"The A2 gunship has been used to devastating effect in airborne assaults, search and rescue operations, and landing initiatives. With more than double the firepower of the M2, and a custom bomb bay capable of delivering a staggering payload, the A2 caters to anyone hauling massive amounts of cargo through potentially unfriendly skies.",
          role:'Heavy bomber/transport',
          size:'S5',
        },
        {
          name:'Ares Inferno',
          description:"Whether heading up a crew or hunting big ships solo, the Ares Inferno is a force to be reckoned with. This ballistic Gatling-equipped variant tears through gunship armor and turns smaller fighters to dust in seconds.",
          role:'Heavy fighter',
          size:'S3',
        },
        {
          name:'Ares Ion',
          description:"Spark fear in the corridors of the most formidable gunships and frigates with the Ares Ion. This laser-equipped variant delivers extremely powerful shots to quickly disable the shields of even the biggest enemy vessels.",
          role:'Heavy fighter',
          size:'S3',
        },
        {
          name:'C1 Spirit',
          description:"Crusader Industries brings its usual commitment to excellence directly to the civilian market with the C1 Spirit, a mid-size multi-purpose starship built for cargo transport and delivery but packing enough versatility to tackle multiple roles and unpredictable jobs.",
          role:'Medium freight',
          size:'Unknown',
        },
        {
          name:'C2 Hercules',
          description:"Utilizing the patented Hercules military-grade spaceframe and expanding cargo capacity, while sacrificing barely any firepower, the C2 has taken the private sector by storm. It has become the industry standard for racing teams, ship dealers and manufacturers, construction orgs, mining corporations, and even large-scale touring entertainment outfits.",
          role:'Transport',
          size:'S5',
        },
        {
          name:'E1 Spirit',
          description:"Crusader Industries brings its usual commitment to excellence directly to the civilian market with the E1 Spirit, a mid-size multi-purpose starship aiming to redefine executive travel with VIP accommodations while packing enough versatility to tackle multiple roles and unpredictable jobs.",
          role:'Passenger',
          size:'Unknown'
        },
        {
          name:'Genesis Starliner',
          description:"The Genesis is yet another landmark in Crusader Industries’ proud history of transport designs. This ship utilizes award-winning manufacturing techniques and the highest quality parts to create one thing; a next-generation passenger ship at a price that won’t break your budget. Crusader Industries’ proprietary NeoG engine technology offers some of the most efficient flight for a ship of its size.",
          role:'Passenger',
          size:'Unknown',
        },
        {
          name:'M2 Hercules',
          description:"The M2 Hercules is the UEE's premier tactical starlifter. The ship's potent combination of capacity, maneuverability, and durability make it the obvious choice in large-scale transport, and a robust weapons package assures your cargo, and crew, gets to where they’re going in one piece.",
          role:'Military transport',
          size:'S5',
        },
        {
          name:'Mercury Star Runner',
          description:"The Mercury checks all the boxes expected of a dependable courier vessel, and then some. If you need it there fast and unscathed, you can’t do better than the Mercury. Built with the same engineering and design principals that has made Crusader the go-to manufacturer for galactic transport on any scale, the Star Runner chassis sets new standards for data and cargo conveyance.",
          role:'Medium cargo/data',
          size:'S4',
        },
        ],
      drake: [
        {
          name:'Buccaneer',
          description:"The Buccaneer has been designed from the ground up to fly and fight the way you live. No leather interiors or hyperpillows here: the ‘Bucc is a scrapper designed to maneuver and fight above its weight class. This rough-and-tumble frontier fighter can be maintained in the worst of conditions in order to keep real, working space crews alive.",
          role:'Interdiction',
          size:'S2',
        },
        {
          name:'Caterpillar',
          description:"First introduced in 2871, Drake Interplanetary’s Caterpillar has long proven to be a reliable, cost-effective multi-role vessel, capable of being outfitted for everything from mercantile operations to combat support. Long hailed as a hard-fought alternative to the ubiquitous Hull series, the Caterpillar is a freighter that doesn’t skimp on weaponry or customization.",
          role:'Heavy freight',
          size:'S5',
        },
        {
          name:'Corsair',
          description:"Heed the call of uncharted space and harness the spirit of exploration with the Drake Corsair, a worthy companion, supporting you in battle, discovery, and delivery, wherever the winds of adventure may steer you.",
          role:'Exploration',
          size:'S4',
        },
        {
          name:'Cutlass Black',
          description:"Drake Interplanetary claims that the Cutlass Black is a low-cost, easy-to-maintain solution for local in-system militia units. The larger-than-average cargo hold, RIO seat and dedicated tractor mount are, the company literature insists, for facilitating search and rescue operations.",
          role:'Medium fighter/freight',
          size:'S3',
        },
        {
          name:'Cutlass Blue',
          description:"Sleek, mean, and royal. The Cutlass Blue adds missiles, a more aggressive engine, and Durasteel holding cells in the cargo bay to the standard model. The Cutlass Blue is the outworld militia standard ship of choice for patrols.",
          role:'Interdiction',
          size:'S3',
        },
        {
          name:'Cutlass Red',
          description:"Is there a doctor in the house? The Cutlass Red converts the standard cargo hold to a well-equipped medical facility including two Medical Beds. This star bound ambulance features the Nav-E7 Long Range Scanner, and Secure Plus Docking Collar making it ideal for search and rescue. This model contains emergency light-bars and a red emergency themed paint job for easy identification.",
          role:'Medical',
          size:'S3',
        },
        {
          name:'Cutlass Steel',
          description:"Drake knows that it’s a dog-eat-dog ‘verse out there. Away from the so-called protection of the UEE the law of the jungle prevails – whoever has the guns, and the personnel makes the rules. Drake has your back in both of those departments with the Cutlass Steel.",
          role:'Dropship',
          size:'S3',
        },
        {
          name:'Cutter',
          description:"Designed for hard-working folks of all stripes, the Cutter packs 4 SCU of cargo room and plenty of wallop into a rough and tumble, compact frame. It’s a ship that truly embodies the spirit of Drake: that no matter who you are or what you do, you can reach the stars.",
          role:'Light freight',
          size:'S2',
        },
        {
          name:'Dragonfly',
          description:"The Drake Dragonfly is the perfect snub ship for anyone looking to live on the edge. With nothing separating the pilot from the dangers of space, the Dragonfly is as much an adventure as a ship! Dual-mode conversion allows the Dragonfly to operate on the ground or in space, and a rear-facing second seat means you can even take a passenger! This black model is Drake's standard production version.",
          role:'Racing',
          size:'S1'
        },
        {
          name:'Herald',
          description:"The Drake Herald is a small, armored ship designed to safely get information from Point A to Point B. Featuring a powerful central engine (for high speed transit and generating the power needed for effective data encryption/containment), advanced encryption software and an armored computer core, the Herald is unique among personal spacecraft in that it is designed to be easily ‘cleaned’ when in danger of capture.",
          role:'Medium data',
          size:'S2',
        },
        {
          name:'Kraken',
          description:"The Kraken is a protector and a beacon of freedom in a too-often cruel universe. For those tasked with safekeeping Citizens unable to protect themselves, the Kraken is both a sanctuary and a self-contained war machine ready to take on the most daunting adversaries. Drake has thrown out the rule book to redefine private-use capital-class ships, attack carriers, and the very nature of personal freedom. It's nothing if not a testament to the empowerment of the people.",
          role:'Light carrier',
          size:'Unknown',
        },
        {
          name:'Kraken Privateer',
          description:"The Kraken is a protector and a beacon of freedom in a too-often cruel universe. For those tasked with safekeeping Citizens unable to protect themselves, the Kraken is both a sanctuary and a self-contained war machine ready to take on the most daunting adversaries. Drake has thrown out the rule book to redefine private-use capital-class ships, attack carriers, and the very nature of personal freedom. It's nothing if not a testament to the empowerment of the people.",
          role:'Light carrier',
          size:'Unknown',
        },
        {
          name:'Mule',
          description:"The Drake Mule is your go-to workhorse for all sort of loading and hauling jobs, a six-wheeled beast of burden that’s always determined to execute the mission at hand. Whether you need to transport cargo over the roughest terrain possible or load it onto larger vessels and cargo decks, the Mule works. Plain and simple.",
          role:'Transport',
          size:'S1',
        },
        {
          name:'Vulture',
          description:"Answer to no one, cut out the middle man, and throw caution to the wind. Rip wrecks like a pro and carve out your own place in the great big empty behind the stick of this rough, rugged salvage machine from Drake Interplanetary.",
          role:'Light salvage',
          size:'S2',
        },
        ],
      esperia: [
        {
          name:'Blade',
          description:"Vanduul light fighters, designated 'Blade', are often used as scouts and first wave assault crafts. Over the decades of conflict, they have been increasingly used to take out comm arrays and early warning systems. They have also served well as skirmisher units as their speed allows them to chase down ships attempting to flee. If engaged, expect the Blade to utilize its speed and agility to wear down your defenses.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Glaive',
          description:"The Glaive is a symmetrical version of the Scythe. Generally flown by Vanduul with more combat experience, they are better armed and have two huge blades/wings as opposed to one on the standard Scythe. This model is a human reproduction created by the manufacturer Esperia.",
          role:'Medium fighter',
          size:'S3',
        },
        {
          name:'Prowler',
          description:"Named after the UPE military designation, the Prowler is a modernized version of the infamous Tevarin armored personnel carrier. Esperia’s astroengineers were given unmitigated access to study original versions of the ship recently discovered in the Kabal system to help meticulously reconstruct the vehicle. Now, the Prowler is the perfect fusion of two cultures: the elegance and effectiveness of the Tevarin war machine combined with the reliability of modern Human technology.",
          role:'Dropship',
          size:'S3',
        },
        {
          name:'Talon',
          description:"This ship is a recreation of the Tevarin Talon by Esperia. The Talon is the Tevarin equivalent to the Aegis Gladius or Vanduul Blade; a single-seat combat ship. The Talon is the perfect example of the Tevarin way of building a spaceship: maneuverable with powerful, directional 'Phalanx' shields but weak physical armour, as the Tevarin way of war was to strike first and strike hard, before using their Phalanx shields to cover their escape.",
          role:'Light fighter',
          size:'S1',
        },
        {
          name:'Talon Shrike',
          description:"This ship is a recreation of the Tevarin Talon by Esperia. The Talon is the Tevarin equivalent to the Aegis Gladius or Vanduul Blade; a single-seat combat ship. The Talon is the perfect example of the Tevarin way of building a spaceship: maneuverable with powerful, directional 'Phalanx' shields but weak physical armour, as the Tevarin way of war was to strike first and strike hard, before using their Phalanx shields to cover their escape.",
          role:'Light fighter',
          size:'S1',
        },
        ],
      gatac: [
        {
          name:'Railen',
          description:"Gatac’s first foray into the human market, the Railen is an elegant interspecies vessel perfect for any Human or Xi’an pilot looking for a safe, reliable solution for commercial-grade medium cargo hauling. Utilizing patented grav-lev technology, and time-tested designs updated for 2951 and beyond, the Railen is a prime example of why the Xi’an Empire has trusted House Gatac with production of its industrial vessels for centuries.",
          role:'Medium freight',
          size:'Unknown',
        },
        ],
      greycat: [
        {
          name:'PTV',
          description:"",
          role:'Transport',
          size:'S1',
        },
        {
          name:'ROC',
          description:"At Greycat, we understand that mining isn't a one-size-fits-all operation, so we designed the ROC to be as hard-working and versatile as the miners who use it. Small enough to access hard-to-reach ore deposits, but with enough power to get through the tough jobs, the ROC perfectly complements any mining enterprise. It's perfectly at home supporting full-scale operations, and a first-rate starter vehicle for fledgling diggers. Whatever the task, with Greycat, you have the right tool for the job.",
          role:'Mining',
          size:'S1',
        },
        {
          name:'ROC-DS',
          description:"At Greycat, we understand that mining isn't a one-size-fits-all operation, so we designed the ROC-DS to be as hard-working and versatile as the miners who use it. With more than double the ore capacity of the standard ROC, and a dedicated boom seat for manual laser operation, the ROC-DS makes big jobs manageable. Its the perfect compliment to any mining enterprise, from full-scale digs to fledgling operations. Whatever the task, with Greycat, mining duos now have the right tool to comfortably collect more ore.",
          role:'Mining',
          size:'S1',
        },
        {
          name:'STV',
          description:"Get ready to have some serious fun on the job with the STV from Greycat. This Sport Terrain Vehicle was built by pros for pros and features blazing speed and convenient built-in storage.",
          role:'Transport',
          size:'S1',
        },
        {
          name:'UTV',
          description:"",
          role:'Transport',
          size:'S1',
        },
        ],
      kruger: [
        {
          name:'P-52 Merlin',
          description:"Originally designed to pair with the RSI Constellation, the P-52 Merlin is now available to all pilots! A dedicated parasite fighter, the Merlin is designed to be transported from place to place aboard a larger ship. Boasting a centerline Gatling cannon and a Lightning Power engine, the Merlin is a fast, maneuverable ship that packs a surprising punch! Ideal for racing, local reconnaissance and fast combat.",
          role:'Snub fighter',
          size:'S1',
        },
        {
          name:'P-72 Archimedes',
          description:"If you’re looking for something a little more agile, blaze among the stars with Kruger Intergalactic’s P-72 Archimedes. Whether for added security, exploring a system or simply the joy of flying, the Archimedes is the perfect companion snub craft. Featuring an extra intake and a lighter hull than its sister ship, the Archimedes delivers exceptional handling and boost capabilities in a sleek package you’ll want along for the ride.",
          role:'Racing',
          size:'S1',
        },
        ],
      misc: [
        {
          name:'Expanse',
          description:"",
          role:'Refinery',
          size:'Unknown',
        },
        {
          name:'Freelancer',
          description:"Freelancers are used as long haul merchant ships by major corporations, but they are just as frequently repurposed as dedicated exploration vessels by independent captains who want to operate on the fringes of the galaxy.",
          role:'Medium freight',
          size:'S3',
        },
        {
          name:'Freelancer DUR',
          description:"The Freelancer DUR variant specializes in exploration. Sacrificing some of the cargo capacity of the standard Freelancer for an enhanced jump drive, a more advanced scanner, and an expanded fuel tank may seem like a bad call to some, but those who value discovery over profit will find it to be their ship of choice.",
          role:'Expedition',
          size:'S3',
        },
        {
          name:'Freelancer MAX',
          description:"The Freelancer MAX variant is for those who prize increased cargo capacity over everything else. Combine that additional storage with MISC’s unrivaled dependability and reputation, and you can see why the MAX is the preferred transport for many independent haulers in Empire today.",
          role:'Medium freight',
          size:'S3',
        },
        {
          name:'Freelancer MIS',
          description:"The Freelancer MIS is a limited edition militarized variant of the classic mercantile ship developed by the UEE. These were produced in very small quantity due to some early payload incidents. This version sacrifices the majority of the cargo capacity to make way for missiles.",
          role:'Gunship',
          size:'S3',
        },
        {
          name:'Hull A',
          description:"The smallest, most affordable Hull. The Hull A is great for those just striking out in the galaxy on their own. The Hull A is most similar to the Aurora and Mustang, but lacks the ‘jack of all trades’ nature. Where the others trade cargo capacity for firepower or speed, the Hull A is 100% on-mission transport! Additionally, Hull A (and B) are often used as station-to-orbit ferries.",
          role:'Medium freight',
          size:'S1',
        },
        {
          name:'Prospector',
          description:"For years, the Prospector has been the universe’s preferred mining vessel for solo operators. Featuring MISC’s sleek design sensibility and a bevy of upgraded high-tech mining tools, the 2947 Prospector perfectly balances form and functionality.",
          role:'Prospecting & Mining',
          size:'S2',
        },
        {
          name:'Razor',
          description:"MISC makes a bid for the next Murray Cup with the all-new Razor. This advanced racer features an advanced composite spaceframe that puts pure speed ahead of everything else... it's the ship for pilots who want to leave the competition in the dust.",
          role:'Racing',
          size:'S1',
        },
        {
          name:'Razor EX',
          description:"Outfitted with signature-reducing materials, the RAZOR-EX was a specialty build for the UEE Advocacy for use in surveillance and extraction operations. Although the EX was ultimately rejected for widespread use, MISC released a variation of the model for the public who were looking to keep a lower profile.",
          role:'Stealth',
          size:'S1',
        },
        {
          name:'Razor LX',
          description:"The Razor gets supercharged. The LX features an overclocked engine to unleash blazing top speeds perfect. This power comes at a cost with reduced maneuverability and armaments making it ideal for straight-shot racing. But who needs weapons when you’re leaving your competition in the dust.",
          role:'Luxury',
          size:'S1',
        },
        {
          name:'Reliant Kore',
          description:"Small supply runs from a planet's surface to a nearby orbital station have become commonplace. With bigger ships focusing more on the long-haul, the Reliant's standard 'Kore' loadout gives it enough carrying capacity for starting out with smaller runs while complementing MISC's Hull-series as a long-haul support ship.",
          role:'Light freight',
          size:'S3',
        },
        {
          name:'Reliant Mako',
          description:"The Empire depends on up-to-the-second information, which is why reporters need to be able to go where the news is happening: wherever, whenever. Enter the Mako, all the flexibility and dependability of a MISC Reliant combined with a state of the art Image Enhancement suite and turret-mounted optics to capture every moment as it happens with the clarity and accuracy that makes headlines.",
          role:'Reporting',
          size:'S3',
        },
        {
          name:'Reliant Sen',
          description:"Magellan, Pierce, Croshaw, names that echo through history thanks to their adventurous spirit, a curious nature and a reliable ship. The Reliant Sen is a versatile mobile science platform; outfitted with long range capabilities to take you further, longer, and an advanced sensor suite. Perfect for the aspiring explorer who wants to whisper their name into the halls of history.",
          role:'Light science',
          size:'S3',
        },
        {
          name:'Reliant Tana',
          description:"With Humanity ever-expanding through the universe, the need for a versatile lightweight fighter has expanded with it. Easy to maintain with a rugged construction, the Reliant Tana makes for an ideal choice for frontier and outpost defense thanks to its custom high-yield power plant, stronger shields and additional weapon mounts.",
          role:'Light fighter',
          size:'S3',
        },
        {
          name:'Starfarer',
          description:"The Starfarer differs from traditional bulk freighters in one key way: it is a dedicated fuel platform. The Starfarer is designed not only to load, store and protect fuel stasis units, it is designed to take in spaceborne gases and refine them for use without landing. And while it excels at this, the Starfarer can also be used to ferry traditional bulk cargo pods.",
          role:'Heavy refuelling',
          size:'S5',
        },
        {
          name:'Starfarer Gemini',
          description:"The UEE military uses an adapted ‘rough and tumble’ Gemini variant of the Starfarer for their front-line operations, trading some cargo capacity and maneuverability for reinforced armor, increased shielding, more powerful engines and stronger manned turrets. The Gemini also includes an optional missile pod, which can be swapped for the fuel intake unit on either Starfarer variant’s nose.",
          role:'Heavy refuelling',
          size:'S5',
        },
        ],
      origin: [
        {
          name:'100i',
          description:"Tour the universe with the perfect coupling of luxury and performance. The 100i features Origin Jumpworks' patented AIR fuel system, making it the most efficient and eco-friendly ship on the market. Capable of long distance flights that most ships of its size aren't equipped for, the 100i is perfect for solo pilots looking to turn heads without sacrificing functionality or reliability.",
          role:'Touring',
          size:'S1',
        },
        {
          name:'125a',
          description:"Risks were meant to be taken, but why risk running out of fuel in the heat of battle? With the AIR fuel system, a souped-up weapons package, and all the luxury and refinement you've come to expect from Origin Jumpworks, the 125a has been designed for the discerning maverick.",
          role:'Light fighter',
          size:'S1',
        },
        {
          name:'135c',
          description:"With a deceptive amount of storage space in its sleek, stylish frame, and Origin's patented AIR fuel system, the 135c model is the obvious choice for musicians, couriers, and anyone trying to get the party started. Get it there fast, and look good while you're doing it.",
          role:'Light freight',
          size:'S1',
        },
        {
          name:'300i',
          description:"If you're going to travel the stars... why not do it in style? The 300i is Origin Jumpworks' premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its weaponry.",
          role:'Luxury touring',
          size:'S2',
        },
        {
          name:'315p',
          description:"Exploration is man's highest calling. Prepare to chart distant horizons with man's most sophisticated piece of technology, the ORIGIN 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications.",
          role:'Pathfinder',
          size:'S2',
        },
        {
          name:'325a',
          description:"Just because it's a rough galaxy doesn't mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.",
          role:'Interdiction',
          size:'S2',
        },
        {
          name:'350r',
          description:"Origin Jumpwork’s 300 Series is the ultimate fusion of elegance and power. Every component, every part is individually calibrated, so no matter which model and options you choose, your ship will stay in perfect harmony as the ultimate in astroengineering. By far the fastest member of the family, the 350r refocus all of the 300’s power and translates it into pure speed.",
          role:'Racing',
          size:'S2',
        },
        {
          name:'400i',
          description:"To explore the stars is a most noble endeavor, and Origin Jumpworks has risen to the occasion in crafting the 400i, the ultimate high-performance pathfinder. Representing a harmonious concourse of style, quality, and sophistication, the 400i exhibits class-leading range, substantial defensive capabilities, and a factory-equipped scanning array, while maintaining the comfort and elegance Origin is known for. Take on the harshest corners of the galaxy without compromise.",
          role:'Touring',
          size:'S4',
        },
        {
          name:'600i Explorer',
          description:"This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs. Looking to stamp your name in history with the discovery of a new star system? The 600i's Explorer module swaps the lounge for a robust scanning station as well as additional utility hardpoints to increase the ship's effectiveness even more.",
          role:'Expedition',
          size:'S5',
        },
        {
          name:'600i Touring',
          description:"Let the voyage begin with the 2947 600i from Origin Jumpworks. This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs. Taking the family on a long-distance trip across the stars? The Touring module lets your guests relax in ease with stunning furniture from some of the Empire's top designers.",
          role:'Touring',
          size:'S5',
        },
        {
          name:'85X',
          description:"Elegantly styled and meticulously constructed, the 85X is a versatile and comprehensive away-vessel that features precision control in and out of atmosphere. Utilizing much of the same thruster technology as the 300 series, it has the power of a racer with the reliability of a touring ship. Whether descending down to the planet surface or taking in the sights of your system, this runabout continues Origin’s proud tradition of turning heads.",
          role:'Touring',
          size:'S1',
        },
        {
          name:'890 Jump',
          description:"With an elegant, sleek exterior that belies its spacious interior, the 890 Jump is a true engineering marvel; crafted to impress from every angle by combining a unique, innovative design with the finest materials and the most advanced technology. The result is a vessel that is in a class all of its own, a masterpiece worthy of the name ORIGIN.",
          role:'Luxury Touring',
          size:'S6',
        },
        {
          name:'G12',
          description:"Trek to the edge of the galaxy with confidence thanks to Origin’s trademark build quality and design. Built with the most extreme environments in mind, the G12 suits all types of planetary travel, from traversing tundras to sightseeing.",
          role:'Touring',
          size:'Unknown',
        },
        {
          name:'G12a',
          description:"The G12a combines military might with Origin’s unique approach to high-end engineering. Designed for all offensive ground-based operations, it’s the ideal partner for long-range perimeter patrols, intercepting assailants, and exploring dangerous new locales.",
          role:'Military',
          size:'Unknown',
        },
        {
          name:'G12r',
          description:"Stripped back and meticulously engineering for performance, Origin has taken everything learned from preparing the 350r and M50 ships for competition and added it to the ubiquitous ground racer. Lighter, faster, and with a built-in EMP for protection, it’s ready for anything the outlands can throw at it.",
          role:'Racing',
          size:'Unknown',
        },
        {
          name:'M50',
          description:"If you want to get from point A to point B as quickly as possible and with as much style as possible then ORIGIN's M50 is for you. Featuring supercharged engines that counter a tiny weapons loadout, the M50 is a ship for going FAST.",
          role:'Racing',
          size:'S1',
        },
        {
          name:'X1',
          description:"Welcome to the next level with the X1, Origin Jumpwork's new high performance open-canopy vehicle. Built from lightweight polymers, the X1 takes speed and agility to the next level thanks to seamlessly integrated engine technology and joint vector thruster placement. Innovative design and high quality engineering weave together to create a flight experience like no other.",
          role:'Touring',
          size:'Unknown',
        },
        {
          name:'X1 Force',
          description:"Built to endure tougher environments and look good doing it, the X1 Force is a modified version of the base X1 model, featuring additional defensive elements to toughen up this speedy and agile open canopy bike, allowing it to serve in a variety of roles, from exploring worlds to potential security infiltration ops.",
          role:'Pathfinder',
          size:'Unknown',
        },
        {
          name:'X1 Velocity',
          description:"How do you make fast go faster? Origin Jumpworks X1 Velocity dares to push the boundaries of speed by stripping down the base X1 to its core elements; eliminating the weapon mount and incorporating new Syntek composites to create a lighter chassis for overall weight loss.",
          role:'Racing',
          size:'Unknown',
        },
        ],
      rsi: [
        {
          name:'Aurora CL',
          description:"Customized for mercantile and trading excursions, the Aurora Clipper is the perfect vessel for aspiring entrepreneurs and seasoned traders alike. Thanks to its expanded cargo capacity, the Clipper ups the ante for personal merchant craft.",
          role:'Light freight',
          size:'S2',
        },
        {
          name:'Aurora ES',
          description:"The Aurora is the modern-day descendant of the Roberts Space Industries X-7 spacecraft which tested the very first jump engines. Utilitarian to a T, the Aurora Essential is the perfect choice for new ship owners: versatile enough to tackle a myriad of challenges, yet with a straightforward and intuitive design.",
          role:'Pathfinder',
          size:'S2',
        },
        {
          name:'Aurora LN',
          description:"With a more robust shield generator and a pair of additional weapon hard points, the Legionnaire is a dedicated combat fighter, built to handle any obstacle the universe can throw at you.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Aurora LX',
          description:"Be proud of your roots with the brand-new Aurora Deluxe, built for the discerning pilot who never forgets where he or she came from. The LX features patent leather interior to guarantee comfort for those long stretches in the deep black.",
          role:'Pathfinder',
          size:'S2',
        },
        {
          name:'Aurora MR',
          description:"Perhaps you're looking for something that offers carrying capacity but has combat capabilities too? The Aurora Marque comes with a pair of Behring-quality lasers and a high quality gun cooler system.",
          role:'Light fighter',
          size:'S2',
        },
        {
          name:'Constellation Andromeda',
          description:"The Constellation Andromeda, a multi-person freighter, is the most popular ship in RSI's current production array. Constellations are beloved by smugglers and merchants alike because they are modular, high powered... and just downright iconic-looking.",
          role:'Medium freight/gunship',
          size:'S4',
        },
        {
          name:'Constellation Aquila',
          description:"Explore any distant horizons! The Constellation Aquila features a redesigned cockpit for maximum visibility, advanced sensors and an onboard Ursa rover for planetary exploration. Let’s see what’s out there!",
          role:'Expedition',
          size:'S4',
        },
        {
          name:'Constellation Phoenix',
          description:"A dedicated luxury spacecraft for the discerning star captain. The Constellation Phoenix can be operated as an organization command ship and features a luxurious redesigned interior. The Phoenix comes with a Lynx rover and a Kruger P-72 Archimedes Fighter",
          role:'Luxury touring',
          size:'S4',
        },
        {
          name:'Constellation Taurus',
          description:"Enjoy the adventure of a multi-crew Constellation on a budget! The Constellation Taurus is a dedicated freighter. Fully configurable but without all the bells-and-whistles, the Taurus is a great way to get started with crewed ships.",
          role:'Medium freight',
          size:'S4',
        },
        {
          name:'Mantis',
          description:"Stop ships dead in their tracks with RSI’s premier Quantum Enforcement ship. The Mantis features a tailor-made Quantum Enforcement Device from Wei-Tek, capable of ripping ships out of QT with its Quantum Snare and preventing hasty escapes with its Quantum Dampener.",
          role:'Interdiction',
          size:'S2',
        },
        {
          name:'Scorpius',
          description:"From RSI’s expert Research and Development teams in Killian and the same engineers that brought you some of the galaxy’s most vaunted war machines comes the next evolution in heavy combat, interception, and defense – the RSI Scorpius. With an adaptable bi-wing configuration and revolutionary rail-mounted remote turret, the Scorpius offers unprecedented fire coverage, allowing for both defensive and assault-minded applications.",
          role:'Heavy fighter',
          size:'S2',
        },
        {
          name:'Scorpius Antares',
          description:"",
          role:'Heavy fighter/interdiction',
          size:'S2',
        },
        {
          name:'Ursa Rover',
          description:"Built by RSI specifically for the planetside explorer, the Ursa Rover offers civilians military-grade all-terrain capabilities and stands as the rugged standard in ground-based scouting, mapping and discovery applications.",
          role:'Exploration',
          size:'S3',
        },
        ],
      tumbril: [
        {
          name:'Cyclone',
          description:"With a potent combination of speed, maneuverability, and rugged durability, the Cyclone is a perfect choice for local deliveries and transport between planetside homesteads and outposts.",
          role:'Exploration/recon',
          size:'S1',
        },
        {
          name:'Cyclone AA',
          description:"A battlefield equalizer, the Cyclone AA comes equipped with a surface-to-air missile and countermeasure package to provide cover for ground troops against airborne targets.",
          role:'Anti-aircraft',
          size:'S1',
        },
        {
          name:'Cyclone MT',
          description:"",
          role:'Assault',
          size:'S1',
        },
        {
          name:'Cyclone RC',
          description:"For those who like to push the limits of speed, the Cyclone RC features a modified intake system to allow for controlled bursts of speed as well as tools to customize handling.",
          role:'Racing',
          size:'S1',
        },
        {
          name:'Cylcone RN',
          description:"Stay mobile and aware with the Cyclone RN. This light reconnaissance vehicle is the perfect solution for scouting runs, providing fast and detailed scans of terrain as well as beacon placement.",
          role:'Recon',
          size:'S1',
        },
        {
          name:'Cyclone TR',
          description:"Designed for militia and security use, the Cyclone TR module features upgraded armor and a single Human-operated turret capable of mounting a Size 1 weapon and a responsive 360° field of fire.",
          role:'Combat',
          size:'S1',
        },
        {
          name:'Nova',
          description:"Tumbril's new Nova is a classic battlefield warrior, reimagined for the modern age. This heavy tank offers a devastating combination of weaponry to eliminate threats on the ground and in the air.",
          role:'Combat',
          size:'S4',
        },
        {
          name:'Ranger CV',
          description:"With a powerful frame, proprietary X-TEC adaptive tread tires, and Reactive Response precision steering and braking, the Tumbril Ranger lets you embrace the renegade spirit of the open road while staying thoroughly grounded. Born to tame the wild frontier, the Ranger CV takes adventure touring to the next level and delivers the goods with an auxiliary fuel tank and custom 0.375 SCU pannier.",
          role:'Touring',
          size:'Unknown',
        },
        {
          name:'Ranger RC',
          description:"With a streamlined frame, proprietary X-TEC adaptive tread tires, and Reactive Response precision steering and braking, the Tumbril Ranger lets you embrace the renegade spirit of the open road while staying thoroughly grounded. Put the hammer down and pump up the adrenaline with the Ranger RC, tuned for maximum speed and response with advanced propulsion and chassis technology.",
          role:'Racing',
          size:'Unknown',
        },
        {
          name:'Ranger TR',
          description:"With a powerful frame, proprietary X-TEC adaptive tread tires, and Reactive Response precision steering and braking, the Tumbril Ranger lets you embrace the renegade spirit of the open road while staying thoroughly grounded. But adventure doesn't always go to plan, so the Ranger TR comes equipped with dual weapon mounts to make sure you're more than covered.",
          role:'Combat',
          size:'Unknown',
        },
        ],
      s1coolers: [
        {
          name:'ArcticStorm',
          coolingrate:'200000',
        },
        {
          name:'Berian',
          coolingrate:'186000',
        },
        {
          name:'BlastChill',
          coolingrate:'190000',
        },
        {
          name:'Bracer',
          coolingrate:'260000',
        },
        {
          name:'CryoStar',
          coolingrate:'228000',
        },
        {
          name:'Ecoflow',
          coolingrate:'420000',
        },
        {
          name:'Endo',
          coolingrate:'196000',
        },
        {
          name:'FlashFreeze',
          coolingrate:'220000',
        },
        {
          name:'FrostStar',
          coolingrate:'214000',
        },
        {
          name:'Gelid',
          coolingrate:'204000',
        },
        {
          name:'Glacier',
          coolingrate:'290000',
        },
        {
          name:'Heatsafe',
          coolingrate:'130000',
        },
        {
          name:'Hydrocel',
          coolingrate:'380000',
        },
        {
          name:'Polar',
          coolingrate:'280000',
        },
        {
          name:'QuickCool',
          coolingrate:'288000',
        },
        {
          name:'Snowblind',
          coolingrate:'170000',
        },
        {
          name:'Thermax',
          coolingrate:'400000',
        },
        {
          name:'Tundra',
          coolingrate:'240000',
        },
        {
          name:'Ultraflow',
          coolingrate:'440000',
        },
        {
          name:'Vaporblock',
          coolingrate:'150000',
        },
        {
          name:'WinterStar',
          coolingrate:'194000',
        },
        {
          name:'ZeroRush',
          coolingrate:'238000',
        },
        {
          name:'IcePlunge',
          coolingrate:'232000',
        },
        ],
      s2coolers: [
        {
          name:'AbsoluteZero',
          coolingrate:'',
        },
        {
          name:'Arctic',
          coolingrate:'',
        },
        {
          name:'Aufeis',
          coolingrate:'',
        },
        {
          name:'Avalanche',
          coolingrate:'',
        },
        {
          name:'Boreal',
          coolingrate:'',
        },
        {
          name:'Coldsnap',
          coolingrate:'',
        },
        {
          name:'CoolCore',
          coolingrate:'',
        },
        {
          name:'CryoStarEx',
          coolingrate:'',
        },
        {
          name:'FrostStarEx',
          coolingrate:'',
        },
        {
          name:'FullFrost',
          coolingrate:'',
        },
        {
          name:'Graupel',
          coolingrate:'',
        },
        {
          name:'Heatsink',
          coolingrate:'',
        },
        {
          name:'HydroJet',
          coolingrate:'',
        },
        {
          name:'Icebox',
          coolingrate:'',
        },
        {
          name:'IceDive',
          coolingrate:'',
        },
        {
          name:'Nightfall',
          coolingrate:'',
        },
        {
          name:'Permafrost',
          coolingrate:'',
        },
        {
          name:'RapidCool',
          coolingrate:'',
        },
        {
          name:'Snowfall',
          coolingrate:'',
        },
        {
          name:'Snowpack',
          coolingrate:'',
        },
        {
          name:'Taiga',
          coolingrate:'',
        },
        {
          name:'Whiteout',
          coolingrate:'',
        },
        {
          name:'WinterStarEx',
          coolingrate:'',
        },
        ],
      s3coolers: [
        {
          name:'Blizzard',
          coolingrate:'',
        },
        {
          name:'Chillmax',
          coolingrate:'',
        },
        {
          name:'CryoStarXL',
          coolingrate:'',
        },
        {
          name:'Draug',
          coolingrate:'',
        },
        {
          name:'Elsen',
          coolingrate:'',
        },
        {
          name:'FrostStarXL',
          coolingrate:'',
        },
        {
          name:'Galinstan',
          coolingrate:'',
        },
        {
          name:'Hydropulse',
          coolingrate:'',
        },
        {
          name:'Iceflush',
          coolingrate:'',
        },
        {
          name:'Kragen',
          coolingrate:'',
        },
        {
          name:'Mercury',
          coolingrate:'',
        },
        {
          name:'Tempest',
          coolingrate:'',
        },
        {
          name:'ThermalCore',
          coolingrate:'',
        },
        {
          name:'WinterStarXL',
          coolingrate:'',
        },
        ],
      s4coolers: [
        {
          name:'Idris',
          coolingrate:'',
        },
        {
          name:'Javelin',
          coolingrate:'',
        },
        {
          name:'890 Jump',
          coolingrate:'',
        },
        {
          name:'Bengal',
          coolingrate:'',
        },
        ],
      s1powerplants: [
        {
	        name:'Breton',
	        capacity:'',
        },
        {
	        name:'Charger',
	        capacity:'',
        },
        {
	        name:'Deltamax',
	        capacity:'',
        },
        {
	        name:'Dynaflux',
	        capacity:'',
        },
        {
	        name:'Endurance',
	        capacity:'',
        },
        {
	        name:'FierellCascade',
	        capacity:'',
        },
        {
	        name:'Fortitude',
	        capacity:'',
        },
        {
	        name:'Hypergen',
	        capacity:'',
        },
        {
	        name:'Ionburst',
	        capacity:'',
        },
        {
	        name:'JS300',
	        capacity:'',
        },
        {
	        name:'Lightblossom',
	        capacity:'',
        },
        {
	        name:'Lumacore',
	        capacity:'',
        },
        {
	        name:'Magnabloom',
	        capacity:'',
        },
        {
	        name:'Overdrive',
	        capacity:'',
        },
        {
	        name:'Powerbolt',
	        capacity:'',
        },
        {
	        name:'Quadracell',
	        capacity:'',
        },
        {
	        name:'Regulus',
	        capacity:'',
        },
        {
	        name:'Roughneck',
	        capacity:'',
        },
        {
	        name:'SlipStream',
	        capacity:'',
        },
        {
	        name:'SonicLite',
	        capacity:'',
        },
        {
	        name:'Starheart',
	        capacity:'',
        },
        {
	        name:'Sunflare',
	        capacity:'',
        },
        {
	        name:'Whiterose',
	        capacity:'',
        },
        {
	        name:'Zapjet',
	        capacity:'',
        },
        ],
      s2powerplants: [
        {
          name:'Bolide',
          capacity:'',
        },
        {
          name:'Cirrus',
          capacity:'',
        },
        {
          name:'Daybreak',
          capacity:'',
        },
        {
          name:'Diligence',
          capacity:'',
        },
        {
          name:'Eclipse',
          capacity:'',
        },
        {
          name:'Exogen',
          capacity:'',
        },
        {
          name:'FullForce',
          capacity:'',
        },
        {
          name:'GammaMax',
          capacity:'',
        },
        {
          name:'Genoa',
          capacity:'',
        },
        {
          name:'IonSurge',
          capacity:'',
        },
        {
          name:'JS400',
          capacity:'',
        },
        {
          name:'Lotus',
          capacity:'',
        },
        {
          name:'LuxCore',
          capacity:'',
        },
        {
          name:'Maelstrom',
          capacity:'',
        },
        {
          name:'QuadracellMT',
          capacity:'',
        },
        {
          name:'Radiance',
          capacity:'',
        },
        {
          name:'Sedulity',
          capacity:'',
        },
        {
          name:'Solarflare',
          capacity:'',
        },
        {
          name:'SparkJet',
          capacity:'',
        },
        {
          name:'Starburn',
          capacity:'',
        },
        {
          name:'Trommel',
          capacity:'',
        },
        {
          name:'TurboDrive',
          capacity:'',
        },
        {
          name:'UltraFlux',
          capacity:'',
        },
        {
          name:'Vortex',
          capacity:'',
        },
        ],
      s3powerplants: [
        {
          name:'Celestial',
          capacity:'',
        },
        {
          name:'Centurion',
          capacity:'',
        },
        {
          name:'Drassik',
          capacity:'',
        },
        {
          name:'Durango',
          capacity:'',
        },
        {
          name:'Fulgur',
          capacity:'',
        },
        {
          name:'FullForcePro',
          capacity:'',
        },
        {
          name:'Ginzel',
          capacity:'',
        },
        {
          name:'IonSurgePro',
          capacity:'',
        },
        {
          name:'JS500',
          capacity:'',
        },
        {
          name:'Megaflux',
          capacity:'',
        },
        {
          name:'NewDawn',
          capacity:'',
        },
        {
          name:'QuadracellMX',
          capacity:'',
        },
        {
          name:'Reliance',
          capacity:'',
        },
        {
          name:'Smartgen',
          capacity:'',
        },
        {
          name:'SparkJetPro',
          capacity:'',
        },
        {
          name:'Superdrive',
          capacity:'',
        },
        {
          name:'TigerLily',
          capacity:'',
        },
        ],
      s4powerplants: [
        {
          name:'Bengal',
          capacity:'',
        },
        {
          name:'890 Jump',
          capacity:'',
        },
        {
          name:'Idris',
          capacity:'',
        },
        {
          name:'Reclaimer',
          capacity:'',
        },
        ],
      s1shields: [
        {
          name:'5SA',
          capacity:'',
        },
        {
          name:'6SA',
          capacity:'',
        },
        {
          name:'7SA',
          capacity:'',
        },
        {
          name:'AllStop',
          capacity:'',
        },
        {
          name:'Banu Placeholder',
          capacity:'',
        },
        {
          name:'Bulwark',
          capacity:'',
        },
        {
          name:'Cloak',
          capacity:'',
        },
        {
          name:'Falco',
          capacity:'',
        },
        {
          name:'ForceWall',
          capacity:'',
        },
        {
          name:'FR66',
          capacity:'',
        },
        {
          name:'Guardian',
          capacity:'',
        },
        {
          name:'Hex',
          capacity:'',
        },
        {
          name:'Ink',
          capacity:'',
        },
        {
          name:'Jaghte',
          capacity:'',
        },
        {
          name:'Mirage',
          capacity:'',
        },
        {
          name:'Palisade',
          capacity:'',
        },
        {
          name:'SecureHyde',
          capacity:'',
        },
        {
          name:'Shimmer',
          capacity:'',
        },
        {
          name:'Steward',
          capacity:'',
        },
        {
          name:'Targa',
          capacity:'',
        },
        {
          name:'Veil',
          capacity:'',
        },
        {
          name:'Web',
          capacity:'',
        },
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
        {
          name:'Atlas',
        },
        {
          name:'Beacon',
        },
        {
          name:'Burst',
        },
        {
          name:'Colossus',
        },
        {
          name:'Drift',
        },
        {
          name:'Eos',
        },
        {
          name:'Expedition',
        },
        {
          name:'Flood',
        },
        {
          name:'FoxFire',
        },
        {
          name:'Goliath',
        },
        {
          name:'Hyperion',
        },
        {
          name:'LightFire',
        },
        {
          name:'Rush',
        },
        {
          name:'Siren',
        },
        {
          name:'Spectre',
        },
        {
          name:'VK-00',
        },
        {
          name:'Voyage',
        },
        {
          name:'Vulcan',
        },
        {
          name:'Wayfare',
        },
        {
          name:'Zephyr',
        },
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
  },
  methods: {
    updateInfo(ships) {
      this.vehicleName = ships.name
      this.vehicleDescription = ships.description
      this.vehicleRole = ships.role
      this.vehicleSize = ships.size
    }
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